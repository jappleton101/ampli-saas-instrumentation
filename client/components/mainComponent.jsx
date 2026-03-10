import * as React from "react";
import { useState } from "react";

const GREEN = "#3a7d1e";
const GREEN_BRIGHT = "#4caf23";
const DARK = "#111";
const UI_FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const NAV_ITEMS = [
  "Self-Directed Investing",
  "Questwealth Portfolios",
  "Questrade Plus",
  "Account types",
  "Pricing",
  "Learning",
];

// Animated stock chart line using SVG
function StockChart() {
  const points = [
    [0, 80],
    [18, 72],
    [32, 76],
    [45, 60],
    [58, 65],
    [70, 50],
    [82, 55],
    [95, 40],
    [108, 45],
    [118, 32],
    [130, 38],
    [142, 28],
    [155, 35],
    [165, 22],
    [178, 30],
    [190, 18],
    [202, 25],
    [215, 15],
    [228, 20],
    [240, 10],
    [252, 18],
    [265, 8],
    [278, 14],
    [290, 6],
    [302, 12],
    [314, 4],
    [326, 9],
    [338, 5],
    [350, 2],
  ];
  const ptStr = points.map(([x, y]) => `${x},${y}`).join(" ");
  const fillPts = `0,90 ${ptStr} 350,90`;

  return (
    <svg
      viewBox="0 0 350 90"
      width="100%"
      height="90"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={GREEN_BRIGHT} stopOpacity="0.35" />
          <stop offset="100%" stopColor={GREEN_BRIGHT} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <polygon points={fillPts} fill="url(#chartFill)" />
      <polyline
        points={ptStr}
        fill="none"
        stroke={GREEN_BRIGHT}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* High label */}
      <rect x="296" y="0" width="48" height="16" rx="8" fill="#fff" />
      <text
        x="320"
        y="11"
        fontSize="9"
        fill="#111"
        textAnchor="middle"
        fontFamily={UI_FONT}
        fontWeight="600"
      >
        325.65
      </text>
      {/* Low label */}
      <rect x="296" y="74" width="48" height="16" rx="8" fill="#fff" />
      <text
        x="320"
        y="85"
        fontSize="9"
        fill="#111"
        textAnchor="middle"
        fontFamily={UI_FONT}
        fontWeight="600"
      >
        318.43
      </text>
    </svg>
  );
}

function TradingCard() {
  return (
    <div
      style={{
        background: "rgba(22,28,22,0.88)",
        backdropFilter: "blur(16px)",
        borderRadius: 18,
        padding: "20px 20px 16px",
        width: 260,
        boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.08)",
        fontFamily: UI_FONT,
        color: "#fff",
      }}
    >
      {/* Ticker */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: 0.2 }}>
          ABCD
        </div>
        <div style={{ fontSize: 12, color: "#aaa", marginTop: 1 }}>
          ABCD Inc.
        </div>
      </div>

      {/* Price */}
      <div style={{ marginBottom: 14 }}>
        <span style={{ fontSize: 30, fontWeight: 800, letterSpacing: -0.5 }}>
          $325.51
        </span>
        <span style={{ fontSize: 13, color: "#aaa", marginLeft: 6 }}>USD</span>
      </div>

      {/* Chart */}
      <div style={{ marginBottom: 14, borderRadius: 6, overflow: "hidden" }}>
        <StockChart />
      </div>

      {/* Time selector */}
      <div
        style={{
          display: "flex",
          gap: 2,
          marginBottom: 14,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 20,
          padding: "3px",
        }}
      >
        {["1D", "5D", "1M", "6M", "1Y", "MAX"].map((t, i) => (
          <div
            key={t}
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: 10,
              fontWeight: i === 0 ? 700 : 400,
              padding: "5px 0",
              borderRadius: 16,
              background: i === 0 ? "#fff" : "transparent",
              color: i === 0 ? "#111" : "#aaa",
              cursor: "pointer",
            }}
          >
            {t}
          </div>
        ))}
        {/* fullscreen icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 4px",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M1 4V1H4M6 1H9V4M9 6V9H6M4 9H1V6"
              stroke="#aaa"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Buy / Sell */}
      <div style={{ display: "flex", gap: 8 }}>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            padding: "10px 0",
            borderRadius: 20,
            background: "rgba(255,255,255,0.1)",
            fontSize: 13,
            fontWeight: 600,
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Buy
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            padding: "10px 0",
            borderRadius: 20,
            background: GREEN_BRIGHT,
            fontSize: 13,
            fontWeight: 600,
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Sell
        </div>
      </div>
    </div>
  );
}

function QuestradeLogo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {/* Mark */}
      <svg width="56" height="40" viewBox="0 0 56 40" fill="none">
        {/* Left peak */}
        <path d="M4 36 L16 10 L24 26 L20 36Z" fill={GREEN} />
        {/* Right peak (taller) */}
        <path d="M20 36 L30 4 L50 36Z" fill={GREEN_BRIGHT} />
        {/* Overlap shadow */}
        <path d="M20 36 L30 4 L24 20Z" fill={GREEN} opacity="0.5" />
      </svg>
      {/* Wordmark */}
      <div
        style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 2.5,
          color: DARK,
          marginTop: -2,
          fontFamily: UI_FONT,
        }}
      >
        <span style={{ color: "#555" }}>QUES</span>
        <span style={{ color: DARK }}>TRADE</span>
      </div>
    </div>
  );
}

function MainComponent({ variant }) {
  const [hoveredNav, setHoveredNav] = useState(null);

  return (
    <div
      style={{
        fontFamily: UI_FONT,
        margin: 0,
        padding: 0,
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* TOP NAV */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 40px",
          background: "#fff",
          borderBottom: "1px solid #eee",
        }}
      >
        <QuestradeLogo />
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* Search */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ cursor: "pointer" }}
          >
            <circle cx="8.5" cy="8.5" r="5.5" stroke="#333" strokeWidth="1.8" />
            <path
              d="M13 13L17 17"
              stroke="#333"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#111",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            Log in
          </a>
          <a
            href="#"
            style={{
              background: GREEN,
              color: "#fff",
              padding: "12px 26px",
              borderRadius: 50,
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            {variant === "known-users"
              ? "Try Questrade Plus for Free"
              : "Open an Account"}
          </a>
        </div>
      </div>

      {/* SECONDARY NAV */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          background: "#fff",
          borderBottom: "1px solid #eee",
          height: 48,
        }}
      >
        <div style={{ display: "flex", gap: 2 }}>
          {NAV_ITEMS.map((item, i) => {
            const hasChevron = item !== "Questrade Plus";
            return (
              <div
                key={item}
                onMouseEnter={() => setHoveredNav(i)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "0 14px",
                  height: 48,
                  cursor: "pointer",
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: hoveredNav === i ? GREEN : "#111",
                  borderBottom:
                    hoveredNav === i
                      ? `2px solid ${GREEN}`
                      : "2px solid transparent",
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
                {hasChevron && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 3.5L5 6.5L8 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>
            );
          })}
        </div>
        {/* Language */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13.5,
            color: "#333",
            cursor: "pointer",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6.5" stroke="#333" strokeWidth="1.2" />
            <ellipse
              cx="8"
              cy="8"
              rx="2.8"
              ry="6.5"
              stroke="#333"
              strokeWidth="1.2"
            />
            <path d="M1.5 6h13M1.5 10h13" stroke="#333" strokeWidth="1.2" />
          </svg>
          English
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M2 3.5L5 6.5L8 3.5"
              stroke="#333"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* HERO */}
      <div style={{ position: "relative", overflow: "hidden", height: 520 }}>
        {/* Background – dark city street photo simulation */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, #111 0%, #1a1a14 30%, #2a2a1e 55%, #3a3830 75%, #888070 100%)",
          }}
        />

        {/* Street/building texture overlay */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.18,
          }}
          viewBox="0 0 1400 520"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Building outlines */}
          <rect
            x="600"
            y="0"
            width="80"
            height="300"
            fill="#fff"
            opacity="0.05"
          />
          <rect
            x="700"
            y="40"
            width="120"
            height="280"
            fill="#fff"
            opacity="0.04"
          />
          <rect
            x="840"
            y="20"
            width="60"
            height="260"
            fill="#fff"
            opacity="0.06"
          />
          <rect
            x="920"
            y="60"
            width="100"
            height="240"
            fill="#fff"
            opacity="0.03"
          />
          {/* Windows */}
          {[620, 640, 660, 680].map((x) =>
            [60, 90, 120, 150, 180, 210, 240].map((y) => (
              <rect
                key={`${x}${y}`}
                x={x}
                y={y}
                width="8"
                height="10"
                fill="#fff"
                opacity="0.15"
                rx="1"
              />
            )),
          )}
          {[720, 745, 770, 795].map((x) =>
            [80, 110, 140, 170, 200, 230].map((y) => (
              <rect
                key={`${x}${y}`}
                x={x}
                y={y}
                width="8"
                height="10"
                fill="#fff"
                opacity="0.12"
                rx="1"
              />
            )),
          )}
        </svg>

        {/* Left gradient overlay for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, transparent 75%)",
          }}
        />

        {/* HERO TEXT */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 60px",
            maxWidth: 560,
          }}
        >
          <h1
            style={{
              fontSize: 58,
              fontWeight: 900,
              lineHeight: 1.05,
              margin: "0 0 20px",
              textTransform: "uppercase",
              letterSpacing: -0.5,
            }}
          >
            <span style={{ color: "#fff" }}>
              CANADA'S
              <br />
              LEADING
              <br />
            </span>
            <span style={{ color: GREEN_BRIGHT }}>
              ONLINE TRADING
              <br />
              PLATFORM
            </span>
          </h1>

          <p
            style={{
              color: "#fff",
              fontSize: 17,
              lineHeight: 1.55,
              margin: "0 0 32px",
              maxWidth: 420,
            }}
          >
            Invest and trade smarter with $0 commissions and low fees across
            stocks, ETFs and options.
          </p>

          <div>
            <a
              href="#"
              style={{
                display: "inline-block",
                background: GREEN_BRIGHT,
                color: "#fff",
                padding: "15px 30px",
                borderRadius: 6,
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              Open an account
            </a>
          </div>
        </div>

        {/* TRADING CARD – overlaid on right side */}
        <div
          style={{
            position: "absolute",
            right: 60,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <TradingCard />
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
