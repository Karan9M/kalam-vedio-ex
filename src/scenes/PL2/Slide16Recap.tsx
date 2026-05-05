// Slide 16 - Quick Recap (3000f, starts at 948.67s)
// Audio sync: frame = (ts_seconds - 948.67) × 30
// Uses Reveal (accumulating) — checklist builds up one point at a time.
import React from "react";
import { SlideBase, Reveal, C, F, Row, AnimImg } from "./shared";
import tickIcon from "../../../Graphics/right-tickmark-true-icon.png";
import ideaBulb from "../../../Graphics/Idea-Bulb-icon.png";
import starIcon  from "../../../Graphics/star-icon.png";

// ── Reusable checklist point ─────────────────────────────────────────────────
const Point: React.FC<{ at: number; children: React.ReactNode }> = ({ at, children }) => (
  <Reveal at={at} style={{ marginBottom: 18 }}>
    <Row gap={18} align="flex-start">
      <AnimImg
        src={tickIcon}
        revealFrame={at}
        style={{ position: "relative", top: 4, left: 0, width: 40, height: 40, flexShrink: 0 }}
      />
      <div style={{ fontFamily: F, fontSize: 36, color: C.dark, lineHeight: 1.5 }}>
        {children}
      </div>
    </Row>
  </Reveal>
);

// ─────────────────────────────────────────────────────────────────────────────
export const Slide16Recap: React.FC = () => (
  <SlideBase num={16} title="QUICK RECAP">

    {/* Full-slide two-column layout (list left, breathing room right) */}
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "row", gap: 48 }}>

      {/* ── Left column: checklist ──────────────────────────────────────── */}
      <div style={{ flex: 1.3, paddingTop: 4, overflowY: "visible" }}>

        {/* 1. CP is the base  (audio: 951.308s → 80f) */}
        <Point at={80}>
          <strong>CP is the base.</strong>{" "}
          Profit% and Loss% are always on{" "}
          <strong style={{ color: C.cp }}>CP</strong>.
        </Point>

        {/* 2. Find SP formula  (audio: 959.543s → 326f) */}
        <Point at={326}>
          <strong>Find SP:</strong>{" "}
          CP × (100 ± %) / 100
        </Point>

        {/* 3. Find CP formula  (audio: 970.597s → 657f) */}
        <Point at={657}>
          <strong>Find CP:</strong>{" "}
          SP × 100 / (100 ± %)
        </Point>

        {/* 4. Discount% on MP vs Profit% on CP  (audio: 980.823s → 964f) */}
        <Point at={964}>
          <strong>Discount%</strong> on{" "}
          <strong style={{ color: C.mp }}>MP</strong>.{" "}
          <strong>Profit%</strong> on{" "}
          <strong style={{ color: C.cp }}>CP</strong>.{" "}
          <span style={{ color: C.loss }}>Different bases.</span>
        </Point>

        {/* 5. Successive discounts  (audio: 991.268s → 1278f) */}
        <Point at={1278}>
          <strong>Successive discounts:</strong>{" "}
          <strong style={{ color: C.mp }}>x + y − xy/100</strong>. Never just add.
        </Point>

        {/* 6. False weights  (~1500f — spaced evenly in remaining time) */}
        <Point at={1500}>
          <strong>False weights:</strong>{" "}
          (True − False) / False × 100 = Profit%
        </Point>

        {/* 7. Same SP, same %  (~1750f) */}
        <Point at={1750}>
          <strong>Same SP, same %:</strong>{" "}
          <span style={{ color: C.loss }}>ALWAYS loss.</span>{" "}
          Loss% = x²/100
        </Point>

        {/* ── Idea callout: CP = 100 / MP = 100 trick  (~1920f) ─────────── */}
        <Reveal at={1920} style={{ marginTop: 12 }}>
          <div style={{
            background: "#FFFBEB", border: "2.5px dashed #FCD34D",
            borderRadius: 14, padding: "14px 28px",
            fontFamily: F, fontSize: 34, color: C.dark, lineHeight: 1.5,
          }}>
            <Row gap={12} align="flex-start">
              <AnimImg
                src={ideaBulb}
                revealFrame={1920}
                style={{ position: "relative", width: 36, height: 36, top: 4, left: 0, flexShrink: 0 }}
              />
              <div>
                CP not given → assume <strong>CP = 100</strong>.<br />
                MP not given → assume <strong>MP = 100</strong>.
              </div>
            </Row>
          </div>
        </Reveal>

        {/* ── Closing line  (~2400f) ──────────────────────────────────────── */}
        <Reveal at={2400} style={{ marginTop: 14 }}>
          <Row gap={12} align="center">
            <AnimImg
              src={starIcon}
              revealFrame={2400}
              style={{ position: "relative", width: 34, height: 34, top: 0, left: 0 }}
            />
            <div style={{ fontFamily: F, fontSize: 30, color: C.gray, fontStyle: "italic" }}>
              Identify the structure before you calculate.
            </div>
          </Row>
        </Reveal>

      </div>

      {/* ── Right column: intentionally empty for breathing room ────────── */}
      <div style={{ flex: 0.5, position: "relative" }} />

    </div>
  </SlideBase>
);
