# ToDoList iframe Amplitude Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Embed ToDoList in a same-origin iframe at `/?embed=1` and initialize the Amplitude Browser SDK only in that iframe.

**Architecture:** Parent `/` renders nav plus an iframe whose `src` is `/?embed=1`. That embed URL renders `ToDoCard` only (no nav, no nested iframe). `index.html` calls Amplitude `add`/`init` only when the query param `embed` equals `1`.

**Tech Stack:** React 19, webpack 5 + HtmlWebpackPlugin, Amplitude analytics-browser CDN 2.34.0 + session replay plugin 1.22.7, Node.js built-in test runner (`node --test`).

## Global Constraints

- Detect embed with `new URLSearchParams(...).get('embed') === '1'` (parent `index.html` init gate and `App.js` render gate must stay equivalent).
- Iframe `src` is `/?embed=1`. Do not add a `sandbox` attribute.
- Do not change ToDoList UI copy or the Amplitude API key `511911c0366c51e10cc03a5264a3808b`.
- Do not init Amplitude on the parent. Do not add `postMessage` forwarding. Do not change login/nav instrumentation.
- Express already serves `client/index.html` for `GET /`; `/?embed=1` uses that same document. Do not add a new server route unless `/?embed=1` fails to load the SPA.

## File map

| File | Responsibility |
|------|----------------|
| Create `client/embedMode.js` | Shared `isEmbedMode(search)` used by `App.js` |
| Create `client/embedMode.test.js` | Node tests for the embed query |
| Modify `client/App.js` | Embed: `ToDoCard` only; otherwise `MainContainer` |
| Modify `client/index.html` | Gate Amplitude `add`/`init` on embed query |
| Modify `client/containers/mainContainer.jsx` | Replace inline `ToDoCard` with iframe |
| Do not modify `client/components/ToDoList.jsx` | `amplitude.track` stays in the iframe window |

---

### Task 1: Embed query helper

**Files:**
- Create: `client/embedMode.js`
- Create: `client/embedMode.test.js`

**Interfaces:**
- Consumes: `search` string (e.g. `window.location.search`)
- Produces: `isEmbedMode(search)` returns `true` only when URLSearchParams `embed` is the string `'1'`

- [ ] **Step 1: Write the failing test**

Create `client/embedMode.test.js`:

```js
const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { isEmbedMode } = require("./embedMode.js");

describe("isEmbedMode", () => {
  it("is true only when embed=1", () => {
    assert.equal(isEmbedMode("?embed=1"), true);
  });

  it("is false for parent and other queries", () => {
    assert.equal(isEmbedMode(""), false);
    assert.equal(isEmbedMode("?"), false);
    assert.equal(isEmbedMode("?embed=true"), false);
    assert.equal(isEmbedMode("?embed=0"), false);
    assert.equal(isEmbedMode("?foo=1"), false);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test client/embedMode.test.js`

Expected: FAIL (MODULE_NOT_FOUND for `./embedMode.js` or `isEmbedMode` is not a function)

- [ ] **Step 3: Write minimal implementation**

Create `client/embedMode.js` as CommonJS so `node --test` can require it and webpack/babel can import it from `App.js`:

```js
function isEmbedMode(search) {
  return new URLSearchParams(search).get("embed") === "1";
}

module.exports = { isEmbedMode };
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test client/embedMode.test.js`

Expected: PASS, 2 tests

- [ ] **Step 5: Commit**

```bash
git add client/embedMode.js client/embedMode.test.js
git commit -m "$(cat <<'EOF'
Add embed=1 query helper for the ToDoList iframe demo.

EOF
)"
```

---

### Task 2: Embed shell in App and iframe in MainContainer

**Files:**
- Modify: `client/App.js`
- Modify: `client/containers/mainContainer.jsx`

**Interfaces:**
- Consumes: `isEmbedMode(search)` from `client/embedMode.js` (`true` iff `embed` is `'1'`)
- Produces: top-level `/?embed=1` renders `ToDoCard` only inside `QueryClientProvider`; `/` renders `MainContainer`, which contains `<iframe src="/?embed=1" title="ToDoList embed">` and no nested `ToDoCard`

- [ ] **Step 1: Confirm helper tests still pass (baseline)**

Run: `node --test client/embedMode.test.js`

Expected: PASS

- [ ] **Step 2: Split App render on embed mode**

Replace `client/App.js` with:

```js
import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainContainer from "./containers/mainContainer.jsx";
import ToDoCard from "./components/ToDoList.jsx";
import { isEmbedMode } from "./embedMode.js";

const queryClient = new QueryClient();

function App() {
  const embed = isEmbedMode(window.location.search);

  return (
    <QueryClientProvider client={queryClient}>
      {embed ? <ToDoCard /> : <MainContainer />}
    </QueryClientProvider>
  );
}

export default App;
```

- [ ] **Step 3: Replace inline ToDoCard with iframe**

In `client/containers/mainContainer.jsx`:
- Remove `import ToDoCard from "../components/ToDoList.jsx";`
- Inside `#main-container`, replace `<ToDoCard />` with:

```jsx
<iframe
  src="/?embed=1"
  title="ToDoList embed"
  width="100%"
  height="400"
/>
```

Do not add a `sandbox` attribute. Leave nav, session, and login behavior unchanged.

Full `return` of `MainContainer` after the change:

```jsx
  return (
    <>
      <ResponsiveAppBar
        setViewHandler={setViewHandler}
        isLoggedIn={isLoggedIn}
        id="responsive-navbar"
        currentView={view}
        handleSessionAction={handleSessionAction}
      />
      <div id="main-container">
        <br />
        <iframe
          src="/?embed=1"
          title="ToDoList embed"
          width="100%"
          height="400"
        />
      </div>
    </>
  );
```

- [ ] **Step 4: Verify in the browser**

Dev server is `npm test` (webpack-dev-server + nodemon on Express `:3000`). Use the webpack URL the app already opens.

1. Open `/`: navbar is visible; an iframe shows the task card (title "Submit Timesheet"); view-source of the iframe URL is `/?embed=1`; there is no second navbar inside the iframe.
2. Open `/?embed=1` as a top-level tab: ToDoCard only, no navbar, no nested iframe.
3. Confirm `/?embed=1` loads HTML (not a proxy 404). If it 404s, Express `app.get('/')` already sends `client/index.html` for `/`; webpack-dev-server `proxy.context: ['/']` should forward the query string. Do not add a new route unless this check fails.

- [ ] **Step 5: Commit**

```bash
git add client/App.js client/containers/mainContainer.jsx
git commit -m "$(cat <<'EOF'
Render ToDoList in a same-origin embed iframe.

EOF
)"
```

---

### Task 3: Initialize Amplitude only in the iframe document

**Files:**
- Modify: `client/index.html` (inline script after the session-replay CDN tag)

**Interfaces:**
- Consumes: `window.location.search`; same predicate as `isEmbedMode` (`new URLSearchParams(location.search).get('embed') === '1'`)
- Produces: Amplitude `sessionReplay` `add` and `init` run only on embed documents; API key and init options unchanged

- [ ] **Step 1: Gate the existing init script**

Replace the inline `<script>` that currently always inits (keep the CDN `<script>` tags as they are) with:

```html
    <script>
      if (new URLSearchParams(location.search).get('embed') === '1') {
        window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));
        window.amplitude.init('511911c0366c51e10cc03a5264a3808b',
          {
            "defaultTracking": false,
            "fetchRemoteConfig":true
          }
        );
      }
    </script>
```

Do not change the API key, `defaultTracking`, `fetchRemoteConfig`, or session-replay `sampleRate`. Leave commented engagement snippets as they are.

- [ ] **Step 2: Verify Amplitude only in the iframe**

1. Open `/` as the parent. In the **parent** DevTools Network tab, Amplitude should not `init` for that document (no session-replay/init from the parent load). `window.amplitude` may exist as the CDN global but should not have been inited for this page.
2. Select the iframe context in DevTools (or open `/?embed=1` top-level). Amplitude should `init` (session replay plugin added, config fetch / ingest requests from that document).
3. In the iframe, click PII and Delete: `amplitude.track` in `ToDoList.jsx` sends from the iframe client.
4. Parent login button may call `window.amplitude.track` without a parent `init`; that no-op is expected and in spec.

- [ ] **Step 3: Re-run helper tests**

Run: `node --test client/embedMode.test.js`

Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add client/index.html
git commit -m "$(cat <<'EOF'
Init Amplitude only on the ToDoList embed iframe.

EOF
)"
```

---

## Spec coverage (self-review)

| Spec requirement | Task |
|------------------|------|
| Parent `/` has nav + iframe, no Amplitude init | Task 2 + Task 3 |
| `/?embed=1` is ToDoCard only, Amplitude inits | Task 2 + Task 3 |
| `src="/?embed=1"`, no sandbox | Task 2 |
| Equivalent `embed === '1'` checks | Task 1 helper + Task 3 inline `URLSearchParams` |
| Do not change ToDoList or API key | Global constraints; Task 3 copies existing init |
| Verification clicks / parent skip | Task 2 and Task 3 browser steps |
| Express `/?embed=1` risk | Task 2 step 4 |
