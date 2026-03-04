import * as React from "react";
import { useState } from "react";

function ExperimentalComponent({ setCurrentView }) {
  const GREEN = "#2d5a27";
  const GREEN_BTN = "#2d5a27";
  const GREEN_LIGHT = "#4a7c43";
  const BODY_FONT = "'Georgia', 'Times New Roman', serif";
  const UI_FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const features = [
    {
      text: (
        <>
          <span style={{ color: GREEN, fontWeight: 700 }}>FREE</span> Level 1
          streaming data
        </>
      ),
    },
    { text: <>Dual currency accounts for USD trading</> },
    {
      text: (
        <>
          <span style={{ color: GREEN, fontWeight: 700 }}>FREE</span> account
          transfers<sup style={{ fontSize: 9 }}>5</sup> ($150 value)
        </>
      ),
    },
    { text: <>Trade when markets move, day or night</> },
    {
      text: (
        <>
          <strong>Options</strong> as low as $0/contract
          <sup style={{ fontSize: 9 }}>3</sup>
        </>
      ),
    },
    { text: <>Platforms built for opportunity seekers</> },
  ];

  return (
    <div
      style={{
        fontFamily: UI_FONT,
        background: "#fff",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        color: "#1a1a1a",
      }}
    >
      {/* NAV */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 48px",
          background: "#fff",
        }}
      >
        {/* Logo – stylized mountain/triangle mark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="52" height="44" viewBox="0 0 52 44" fill="none">
            {/* Two overlapping triangles forming the Questrade mark */}
            <path d="M14 38 L30 8 L46 38 Z" fill={GREEN} opacity="0.85" />
            <path d="M4 38 L18 14 L26 28 L18 38 Z" fill={GREEN} />
          </svg>
        </div>

        {/* Nav right */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#1a1a1a",
              fontSize: 15,
              fontWeight: 500,
              fontFamily: UI_FONT,
            }}
          >
            Log in
          </a>
          <a
            onClick={() => setCurrentView("login")}
            href="#"
            style={{
              background: GREEN_BTN,
              color: "#fff",
              padding: "13px 28px",
              borderRadius: 50,
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: UI_FONT,
              letterSpacing: 0.1,
            }}
          >
            Open an account
          </a>
        </div>
      </nav>

      {/* HERO */}
      <main
        style={{
          display: "flex",
          alignItems: "flex-start",
          padding: "40px 48px 64px",
          gap: 48,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ flex: "0 0 auto", width: "42%", paddingTop: 16 }}>
          <h1
            style={{
              fontFamily: BODY_FONT,
              fontSize: 52,
              fontWeight: 400,
              lineHeight: 1.12,
              margin: "0 0 20px 0",
              color: "#111",
              letterSpacing: -0.5,
            }}
          >
            Trade without commission fees
          </h1>

          <p
            style={{
              fontSize: 17,
              color: "#333",
              margin: "0 0 32px 0",
              lineHeight: 1.5,
              fontFamily: UI_FONT,
            }}
          >
            All the tools you need to get ahead, none of the costs. That's
            Questrade.
          </p>

          <a
            href="#"
            style={{
              display: "inline-block",
              background: GREEN_BTN,
              color: "#fff",
              padding: "14px 28px",
              borderRadius: 50,
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: UI_FONT,
              marginBottom: 36,
            }}
          >
            Open an account
          </a>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e0e0e0",
              margin: "0 0 28px 0",
            }}
          />

          {/* Why section */}
          <p
            style={{
              fontSize: 15,
              color: "#111",
              margin: "0 0 20px 0",
              fontFamily: UI_FONT,
              fontWeight: 400,
            }}
          >
            Why Questrade is the best choice
            <sup style={{ fontSize: 10 }}>1</sup>
          </p>

          {/* Two-column feature list */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px 32px",
            }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  fontSize: 14,
                  color: "#222",
                  lineHeight: 1.45,
                  fontFamily: UI_FONT,
                }}
              >
                {/* Checkmark */}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  style={{ flexShrink: 0, marginTop: 1 }}
                >
                  <path
                    d="M2.5 7.5L6 11L12.5 4"
                    stroke={GREEN}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN – Hero image */}
        <div
          style={{
            flex: 1,
            borderRadius: 16,
            overflow: "hidden",
            minHeight: 520,
          }}
        >
          <svg
            viewBox="0 0 700 540"
            width="100%"
            style={{ display: "block", borderRadius: 16 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="tunnel" cx="50%" cy="45%" r="52%">
                <stop offset="0%" stopColor="#d8d8d0" />
                <stop offset="60%" stopColor="#b0b09a" />
                <stop offset="100%" stopColor="#1a1a14" />
              </radialGradient>
              <radialGradient id="innerLight" cx="50%" cy="42%" r="40%">
                <stop offset="0%" stopColor="#e8e8e0" />
                <stop offset="100%" stopColor="#c8c8bc" />
              </radialGradient>
              <radialGradient id="outerDark" cx="50%" cy="50%" r="50%">
                <stop offset="55%" stopColor="transparent" />
                <stop offset="100%" stopColor="#111108" />
              </radialGradient>
              <clipPath id="roundedRect">
                <rect width="700" height="540" rx="16" />
              </clipPath>
            </defs>

            <g clipPath="url(#roundedRect)">
              {/* Dark background */}
              <rect width="700" height="540" fill="#181810" />

              {/* Outer dark tunnel wall texture */}
              <ellipse cx="350" cy="270" rx="340" ry="265" fill="#2a2a1e" />
              <ellipse cx="350" cy="270" rx="300" ry="230" fill="#222218" />

              {/* Main tunnel opening – light at end */}
              <ellipse
                cx="350"
                cy="255"
                rx="240"
                ry="210"
                fill="url(#tunnel)"
              />
              <ellipse
                cx="350"
                cy="248"
                rx="210"
                ry="185"
                fill="url(#innerLight)"
              />

              {/* Tunnel depth rings */}
              <ellipse
                cx="350"
                cy="248"
                rx="200"
                ry="178"
                fill="none"
                stroke="#c0c0b4"
                strokeWidth="1"
                opacity="0.3"
              />
              <ellipse
                cx="350"
                cy="248"
                rx="180"
                ry="160"
                fill="none"
                stroke="#b8b8ac"
                strokeWidth="1"
                opacity="0.2"
              />

              {/* Green mossy bottom of tunnel */}
              <ellipse
                cx="350"
                cy="460"
                rx="340"
                ry="90"
                fill="#1e2e14"
                opacity="0.9"
              />
              <ellipse cx="350" cy="480" rx="320" ry="70" fill="#243318" />
              <ellipse cx="350" cy="500" rx="290" ry="55" fill="#2a3a1c" />

              {/* The THREE large "O" / "0" numerals */}
              {/* "0" left */}
              <ellipse
                cx="200"
                cy="248"
                rx="62"
                ry="80"
                fill="none"
                stroke="#f0f0e8"
                strokeWidth="28"
                opacity="0.92"
              />
              {/* "0" center */}
              <ellipse
                cx="350"
                cy="248"
                rx="62"
                ry="80"
                fill="none"
                stroke="#f0f0e8"
                strokeWidth="28"
                opacity="0.92"
              />
              {/* "0" right */}
              <ellipse
                cx="500"
                cy="248"
                rx="62"
                ry="80"
                fill="none"
                stroke="#f0f0e8"
                strokeWidth="28"
                opacity="0.92"
              />

              {/* Outer vignette / dark frame */}
              <ellipse
                cx="350"
                cy="270"
                rx="349"
                ry="269"
                fill="url(#outerDark)"
              />

              {/* PERSON silhouette – walking figure */}
              <g transform="translate(310, 330)">
                {/* Body */}
                <rect
                  x="14"
                  y="20"
                  width="18"
                  height="42"
                  rx="4"
                  fill="#0d0d08"
                />
                {/* Head */}
                <ellipse cx="23" cy="14" rx="10" ry="11" fill="#0d0d08" />
                {/* Left leg – forward */}
                <path
                  d="M18 62 Q12 82 8 98"
                  stroke="#0d0d08"
                  strokeWidth="9"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Right leg – back */}
                <path
                  d="M26 62 Q32 80 36 95"
                  stroke="#0d0d08"
                  strokeWidth="9"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Left arm */}
                <path
                  d="M16 28 Q4 46 2 58"
                  stroke="#0d0d08"
                  strokeWidth="7"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Right arm – with briefcase */}
                <path
                  d="M30 28 Q42 44 46 55"
                  stroke="#0d0d08"
                  strokeWidth="7"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Briefcase */}
                <rect
                  x="42"
                  y="50"
                  width="14"
                  height="11"
                  rx="2"
                  fill="#0d0d08"
                />
                <path
                  d="M45 50 Q45 46 49 46 Q53 46 53 50"
                  stroke="#0d0d08"
                  strokeWidth="2"
                  fill="none"
                />
              </g>

              {/* subtle ground shadow */}
              <ellipse
                cx="347"
                cy="428"
                rx="22"
                ry="5"
                fill="#050504"
                opacity="0.5"
              />
            </g>
          </svg>
        </div>
      </main>
    </div>
  );
}

export default ExperimentalComponent;
