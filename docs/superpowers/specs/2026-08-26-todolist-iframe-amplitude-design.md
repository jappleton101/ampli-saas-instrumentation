# ToDoList iframe Amplitude demo

Date: 2026-08-26  
Status: approved in conversation; awaiting spec review before implementation

## Goal

Demo how the Amplitude Browser SDK behaves when the ToDoList lives in a same-origin iframe. Amplitude must initialize **only** in that iframe. The parent page must not call `amplitude.init` for now.

## Non-goals

- Cross-origin embedding
- Parent-window Amplitude init or `postMessage` event forwarding
- Changing ToDoList UI copy or Amplitude project/API key
- Re-instrumenting login/nav on the parent (those `track` calls may no-op until parent init returns)

## Approach

Same SPA, embed query: parent loads `/` without Amplitude; iframe loads `/?embed=1` with Amplitude.

## Behavior

| URL | Chrome | Amplitude |
|-----|--------|-----------|
| `/` | Nav + main layout + iframe | Do not `add` session replay or `init` |
| `/?embed=1` | `ToDoCard` only (no nav, no nested iframe) | Existing CDN scripts: session replay plugin + `init` with current API key and options |

Iframe `src` is `/?embed=1`. Do not use a `sandbox` attribute that blocks scripts.

Detect embed with `new URLSearchParams(location.search).get('embed') === '1'` in both `index.html` (init gate) and `App.js` (render gate). Keep the checks equivalent.

## Files

- `client/index.html` — gate Amplitude `add`/`init` on embed query
- `client/App.js` — embed: `ToDoCard` only; otherwise `MainContainer`
- `client/containers/mainContainer.jsx` — replace inline `ToDoCard` with iframe

`ToDoList.jsx` stays as-is (`amplitude.track` in the iframe window).

## Data flow

ToDoList buttons run in the iframe. After embed `init`, `window.amplitude` exists there, so PII/Delete clicks send events from that client.

Parent and iframe share origin. Skipping parent `init` means the parent does not start a client; the iframe client may still write first-party Amplitude cookies for this host.

## Verification

1. Open `/`: navbar visible; iframe shows the task card; parent console/network shows no Amplitude `init` from the parent document.
2. Inspect iframe document URL `/?embed=1`: Amplitude initializes (session replay + init).
3. Click PII and Delete in the iframe: events are sent from the iframe client.
4. Open `/?embed=1` as a top-level tab: ToDoCard only, no nested iframe, Amplitude inits.

## Risks

- Webpack-dev-server proxies `/` to Express; `/?embed=1` must still serve the same HTML (current `/` route is enough).
- Login modal `window.amplitude.track` on the parent will not send until parent init is restored.
