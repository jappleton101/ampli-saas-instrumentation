import * as React from "react";
import { useState } from "react";

const Star = () => (
  <svg viewBox="0 0 24 24" fill="#FFB800" width="28" height="28">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Trophy = () => (
  <svg viewBox="0 0 64 64" fill="none" width="80" height="80">
    <path
      d="M32 44c-8 0-14-6-14-14V10h28v20c0 8-6 14-14 14z"
      fill="#FFD700"
      stroke="#E5A800"
      strokeWidth="1.5"
    />
    <path
      d="M18 14H8c0 8 4 14 10 16"
      fill="#FFD700"
      stroke="#E5A800"
      strokeWidth="1.5"
    />
    <path
      d="M46 14h10c0 8-4 14-10 16"
      fill="#FFD700"
      stroke="#E5A800"
      strokeWidth="1.5"
    />
    <rect
      x="26"
      y="44"
      width="12"
      height="8"
      fill="#FFD700"
      stroke="#E5A800"
      strokeWidth="1.5"
    />
    <rect
      x="20"
      y="52"
      width="24"
      height="4"
      rx="2"
      fill="#FFD700"
      stroke="#E5A800"
      strokeWidth="1.5"
    />
    <path
      d="M26 30l2 6h-3l5-4-2 6 5-4-2 6"
      stroke="#E5A800"
      strokeWidth="1"
      fill="none"
      opacity="0.4"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
    <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="2" />
    <ellipse cx="20" cy="20" rx="8" ry="16" stroke="white" strokeWidth="2" />
    <line x1="4" y1="20" x2="36" y2="20" stroke="white" strokeWidth="2" />
    <line x1="6" y1="12" x2="34" y2="12" stroke="white" strokeWidth="1.5" />
    <line x1="6" y1="28" x2="34" y2="28" stroke="white" strokeWidth="1.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

export default function LoginPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      {/* Left panel */}
      <div
        style={{
          flex: 1,
          background:
            "linear-gradient(135deg, #b8e6b0 0%, #a0d898 40%, #8ecf86 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        {/* Top-left card */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            background: "#1a6b2e",
            borderRadius: 16,
            padding: "20px 24px",
            color: "white",
            maxWidth: 220,
          }}
        >
          <div style={{ marginBottom: 10 }}>
            <GlobeIcon />
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
            Free. Fast. Flexible.
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.95 }}>
            $0 Commissions
            <br />0 Minimums
            <br />0 Account Fees
          </div>
        </div>

        {/* Top-right quote card */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            background: "#e8f5e2",
            borderRadius: 16,
            padding: "20px 24px",
            maxWidth: 220,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#1a1a1a",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            "Robust platforms, responsive service and a product lineup that
            appeals to all investor types."
          </div>
          <div
            style={{
              marginTop: 10,
              color: "#1a6b2e",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            — MoneySense
          </div>
        </div>

        {/* Center logo mark */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <svg viewBox="0 0 80 60" width="90" height="70">
            <polygon points="20,55 40,10 55,40" fill="#1a6b2e" opacity="0.85" />
            <polygon points="42,55 62,20 75,50" fill="#1a6b2e" opacity="0.6" />
          </svg>
        </div>

        {/* Bottom center: desk + monitors */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "flex-end",
            gap: 10,
          }}
        >
          {/* Phone mock */}
          <div
            style={{
              background: "#111",
              borderRadius: 14,
              width: 90,
              height: 160,
              display: "flex",
              flexDirection: "column",
              padding: 8,
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                background: "#1a1a2e",
                borderRadius: 8,
                flex: 1,
                padding: 6,
              }}
            >
              <div style={{ color: "#aaa", fontSize: 7, marginBottom: 4 }}>
                Custom ABCD strategy
              </div>
              <div
                style={{
                  color: "#4ade80",
                  fontSize: 8,
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                $154.29 <span style={{ fontSize: 6 }}>+1.38</span>
              </div>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 3,
                  }}
                >
                  <div
                    style={{
                      background: i === 2 ? "#ef4444" : "#333",
                      borderRadius: 2,
                      width: "45%",
                      height: 8,
                    }}
                  />
                  <div
                    style={{
                      background: "#333",
                      borderRadius: 2,
                      width: "45%",
                      height: 8,
                    }}
                  />
                </div>
              ))}
              <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
                <div
                  style={{
                    background: "#4ade80",
                    borderRadius: 4,
                    flex: 1,
                    height: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "#000", fontSize: 7, fontWeight: 700 }}>
                    Buy
                  </span>
                </div>
                <div
                  style={{
                    background: "#ef4444",
                    borderRadius: 4,
                    flex: 1,
                    height: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "#fff", fontSize: 7, fontWeight: 700 }}>
                    Sell
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Desk */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 4,
                alignItems: "flex-end",
              }}
            >
              {[
                { w: 160, h: 110 },
                { w: 120, h: 90 },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "#e8f0e8",
                    border: "2px solid #ccc",
                    borderRadius: 8,
                    width: s.w,
                    height: s.h,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      background: "#1a6b2e",
                      height: 16,
                      width: "100%",
                      opacity: 0.9,
                    }}
                  />
                  <div style={{ padding: "6px 8px" }}>
                    <div
                      style={{
                        background: "#d4edda",
                        height: 40,
                        borderRadius: 4,
                        marginBottom: 4,
                        backgroundImage:
                          "linear-gradient(90deg, #4ade80 0%, transparent 30%, #4ade80 60%, transparent 80%)",
                        backgroundSize: "100% 2px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "0 50%",
                      }}
                    />
                    <div style={{ display: "flex", gap: 4 }}>
                      {[1, 2, 3].map((j) => (
                        <div
                          key={j}
                          style={{
                            background: "#cce5cc",
                            height: 8,
                            flex: 1,
                            borderRadius: 2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Desk surface */}
            <div
              style={{
                background: "white",
                width: 310,
                height: 12,
                borderRadius: 4,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            />
            {/* Chair (simple) */}
            <div
              style={{
                marginTop: -2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "#1a6b2e",
                  width: 70,
                  height: 50,
                  borderRadius: "8px 8px 0 0",
                  marginTop: 6,
                }}
              />
              <div
                style={{
                  background: "#1a6b2e",
                  width: 60,
                  height: 10,
                  borderRadius: 4,
                }}
              />
              <div style={{ display: "flex", gap: 20, marginTop: 4 }}>
                <div
                  style={{
                    background: "#1a6b2e",
                    width: 4,
                    height: 16,
                    borderRadius: 2,
                  }}
                />
                <div
                  style={{
                    background: "#1a6b2e",
                    width: 4,
                    height: 16,
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-right: rating block */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 40,
            background: "#1a6b2e",
            borderRadius: 16,
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: 150,
          }}
        >
          <div style={{ display: "flex", gap: 2, marginBottom: 6 }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} />
            ))}
          </div>
          <div
            style={{
              color: "white",
              fontSize: 42,
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            4.7
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: 13,
              marginTop: 4,
            }}
          >
            13K Ratings
          </div>
        </div>

        {/* Trophy */}
        <div style={{ position: "absolute", bottom: 130, right: 60 }}>
          <Trophy />
        </div>
      </div>

      {/* Right panel - form */}
      <div
        style={{
          width: 480,
          background: "white",
          display: "flex",
          flexDirection: "column",
          padding: "0 0 40px 0",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.06)",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "16px 24px",
            borderBottom: "1px solid #f0f0f0",
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 13,
              color: "#333",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <PhoneIcon /> Call us 1.888.783.7866
          </span>
          <div style={{ width: 1, height: 18, background: "#ddd" }} />
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#1a6b2e",
              fontWeight: 600,
              fontSize: 14,
              padding: 0,
            }}
          >
            Log in
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 20,
              color: "#555",
              padding: 0,
            }}
          >
            ⋮
          </button>
        </div>

        {/* Form content */}
        <div style={{ padding: "48px 48px 0 48px", flex: 1 }}>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#111",
              marginBottom: 40,
              lineHeight: 1.15,
            }}
          >
            Open your account
          </h1>

          {[
            {
              label: "Legal first name",
              key: "firstName",
              hint: "Must match your government ID",
            },
            {
              label: "Legal last name",
              key: "lastName",
              hint: "Must match your government ID",
            },
            { label: "Email address", key: "email", hint: null },
          ].map(({ label, key, hint }) => (
            <div key={key} style={{ marginBottom: 28 }}>
              <label
                style={{
                  display: "block",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#111",
                  marginBottom: 8,
                }}
              >
                {label}
              </label>
              <input
                type={key === "email" ? "email" : "text"}
                value={form[key]}
                onChange={set(key)}
                style={{
                  width: "100%",
                  padding: "14px 14px",
                  border: "1.5px solid #ccc",
                  borderRadius: 8,
                  fontSize: 15,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#1a6b2e")}
                onBlur={(e) => (e.target.style.borderColor = "#ccc")}
              />
              {hint && (
                <div style={{ fontSize: 12, color: "#888", marginTop: 5 }}>
                  {hint}
                </div>
              )}
            </div>
          ))}

          {/* Phone */}
          <div style={{ marginBottom: 32 }}>
            <label
              style={{
                display: "block",
                fontWeight: 600,
                fontSize: 15,
                color: "#111",
                marginBottom: 8,
              }}
            >
              Phone number
            </label>
            <div
              style={{
                display: "flex",
                border: "1.5px solid #ccc",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "14px 12px",
                  borderRight: "1.5px solid #ccc",
                  background: "#fafafa",
                  cursor: "pointer",
                  minWidth: 80,
                }}
              >
                <span style={{ fontSize: 18 }}>🇨🇦</span>
                <span style={{ fontSize: 13, color: "#555" }}>▼</span>
                <span style={{ fontSize: 14, color: "#555" }}>+1</span>
              </div>
              <input
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                style={{
                  flex: 1,
                  padding: "14px 14px",
                  border: "none",
                  outline: "none",
                  fontSize: 15,
                  background: "transparent",
                }}
              />
            </div>
          </div>

          {/* Disclaimer */}
          <p
            style={{
              fontSize: 12.5,
              color: "#555",
              lineHeight: 1.6,
              marginBottom: 28,
            }}
          >
            By continuing, you agree to Questrade's{" "}
            <a
              href="#"
              style={{
                color: "#1a6b2e",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Terms of Use
            </a>{" "}
            and{" "}
            <a
              href="#"
              style={{
                color: "#1a6b2e",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Privacy Policy
            </a>
            . By providing your email, you consent to receive communications
            from Questrade. You can opt-out at any time.
          </p>

          <button
            onClick={() => window.amplitude.track("Complete Sign Up")}
            style={{
              background: "#1a6b2e",
              color: "white",
              border: "none",
              borderRadius: 50,
              padding: "16px 40px",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              transition: "background 0.2s",
              letterSpacing: 0.3,
            }}
            onMouseEnter={(e) => (e.target.style.background = "#145524")}
            onMouseLeave={(e) => (e.target.style.background = "#1a6b2e")}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
