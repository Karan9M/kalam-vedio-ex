// Slide 5 - Formulas and Profit Percent (2000f, 109s - 175.67s)
// frame = (video_seconds - 109) × 30
//   90f = 1:52  — Key Formulas enters big+centered
//  180f = 1:55  — Key Formulas slides up to compact header
//  240f = 1:57  — Profit = SP − CP slides in from left
//  510f = 2:06  — Loss = CP − SP bounces in
//  651f = 2:10.7 — Profit % section (original timing preserved)
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  SlideBase, Moment, Reveal, Pop, BounceIn, SlideIn,
  C, F, Row, Frac, Formula, BigLabel, CallOut,
  CountUp, Pulse, StampIn, AnimImg,
} from "./shared";
import badgeImportant from "../../../Graphics/badge-important.png";

// ─── KeyFormulasTitle ─────────────────────────────────────────────────────────
// Appears big+centered at 1:52 (90f).
// Slides up to compact header at 1:55 (180f).
// Fades out just before Profit% section at 651f.

const TOP_PAD = 200; // clearance below compact title for formula content

const KeyFormulasTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [20, 104], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [620, 651], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opacity = fadeIn * fadeOut;

  const ty = interpolate(frame, [90, 106], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const slideProg = spring({
    frame: Math.max(0, frame - 104), fps,
    config: { damping: 24, stiffness: 110, mass: 1.0 },
    from: 0, to: 1,
  });

  const fontSize = Math.round(interpolate(slideProg, [0, 1], [200, 80]));
  const topPx = interpolate(slideProg, [0, 1], [280, 10]);

  // Underline draws in after title reaches top (slideProg > 0.65)
  const ulProg = spring({
    frame: Math.max(0, frame - 150), fps,
    config: { damping: 18, stiffness: 90 },
    from: 0, to: 1,
  });
  const ulOp = interpolate(slideProg, [0.65, 1.0], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      position: "absolute",
      top: topPx, left: 0, right: 0,
      textAlign: "center",
      opacity,
      zIndex: 10,
      transform: `translateY(${ty}px)`,
    }}>
      <div style={{ fontFamily: F, fontWeight: 700, fontSize, color: C.gray }}>
        Key Formulas
      </div>
      <div style={{ opacity: ulOp, marginTop: 6, display: "flex", justifyContent: "center" }}>
        <div style={{ width: `${ulProg * 380}px`, height: 4, background: C.gray, borderRadius: 2 }} />
      </div>
    </div>
  );
};

// ─── NumberPop ────────────────────────────────────────────────────────────────
// Sits at normal scale, then spring-bounces from 1.5x → 1x when `at` is hit.
const NumberPop: React.FC<{ at: number; color: string; children: React.ReactNode }> = ({ at, color, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rawScale = spring({
    frame: Math.max(0, frame - at), fps,
    config: { damping: 18, stiffness: 80, mass: 1.0 },
    from: 0.2, to: 1,
  });
  const scale = frame < at ? 1 : rawScale;
  return (
    <span style={{ display: "inline-block", transform: `scale(${scale})`, fontWeight: 700, color, transformOrigin: "center bottom" }}>
      {children}
    </span>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
export const Slide05Formulas: React.FC = () => (
  <SlideBase num={5} title="FORMULAS">

    {/* Persistent sliding title — visible from 90f to 651f */}
    <KeyFormulasTitle />

    {/* M1: Profit formula at 1:57, Loss formula at 2:06 — single Moment keeps Profit visible */}
    <Moment from={200} to={651}>
      <div style={{
        paddingTop: TOP_PAD, width: "100%",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 44,
      }}>
        <SlideIn at={200} from="left" dist={40}>
          <Formula color={C.profit} bg={C.profitBg} border={C.profitBd} style={{ fontSize: 72, padding: "28px 88px" }}>
            Profit = SP − CP
          </Formula>
        </SlideIn>
        <BounceIn at={450} style={{ display: "block" }}>
          <Formula color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 72, padding: "28px 88px" }}>
            Loss = CP − SP
          </Formula>
        </BounceIn>
      </div>
    </Moment>

    {/* M4: "Profit %" big title (651-755f) — at 651f */}
    <Moment from={651} to={755}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={651}>
          <BigLabel color={C.mp} size={200}>Profit %</BigLabel>
        </BounceIn>
      </div>
    </Moment>

    {/* M5: Percent of what? Build-up (757-1140f) */}
    <Moment from={757} to={1140}>
      <div style={{ textAlign: "center" }}>
        <Pop at={757}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 150, color: C.dark, marginBottom: 36 }}>
            Percent of what?
          </div>
        </Pop>

        <Reveal at={814} style={{ marginBottom: 28 }}>
          <div style={{
            background: "#FFFFFF", border: "2px solid #CCCCCC",
            borderRadius: 16, padding: "18px 48px", display: "inline-block",
          }}>
            <div style={{ fontFamily: F, fontSize: 42, color: C.dark }}>
              Bought for{" "}
              <NumberPop at={862} color={C.cp}>400</NumberPop>
              ,  Profit ={" "}
              <NumberPop at={903} color={C.profit}>100</NumberPop>
            </div>
          </div>
        </Reveal>

        <Reveal at={1084} style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: F, fontSize: 42, color: C.dark }}>
            Investment was{" "}
            <span style={{ fontWeight: 700, color: C.cp }}>400</span>
            {" "}→ that's the base
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M5b: Profit % calculation (1140-1398f) */}
    <Moment from={1140} to={1398}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginBottom: 32 }}>
          Bought for{" "}
          <span style={{ fontWeight: 700, color: C.cp }}>400</span>
          , Profit ={" "}
          <span style={{ fontWeight: 700, color: C.profit }}>100</span>
        </div>

        <Pop at={1144}>
          <Row gap={16} align="center" style={{ justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ fontFamily: F, fontSize: 52, fontWeight: 700, color: C.dark }}>
              Profit% =
            </div>
            <Frac
              num={<NumberPop at={1210} color={C.profit}>100</NumberPop>}
              den={<NumberPop at={1247} color={C.profit}>400</NumberPop>}
              size={48} color={C.profit}
            />
            <Reveal at={1285} style={{ display: "inline-flex", alignItems: "center" }}>
              <span style={{ fontFamily: F, fontSize: 52, color: C.dark, display: "inline-flex", alignItems: "center", gap: 8 }}>
                ×<NumberPop at={1285} color={C.dark}>100</NumberPop>
              </span>
            </Reveal>
            <Reveal at={1351} style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: F, fontSize: 52, color: C.dark }}>=</span>
              <BounceIn at={1351}>
                <CountUp from={0} to={25} at={1351} color={C.profit} size={80} suffix="%" />
              </BounceIn>
            </Reveal>
          </Row>
        </Pop>
      </div>
    </Moment>

    {/* M6: CP is the base. ALWAYS. (1398-1550f) */}
    <Moment from={1398} to={1550}>
      <div style={{ textAlign: "center" }}>
        <Row gap={20} align="center" style={{ justifyContent: "center", marginBottom: 28 }}>
          <AnimImg
            src={badgeImportant}
            revealFrame={1398}
            style={{ position: "relative" as const, width: 3000, height: 100, top: 0, left: 0 }}
          />
        </Row>
        <Pulse at={1402}>
          <BigLabel color={C.cp} size={100} style={{ textAlign: "center" }}>
            CP is the base. ALWAYS.
          </BigLabel>
        </Pulse>
      </div>
    </Moment>

    {/* M7: Always on CP, never SP (1550-1778f) */}
    <Moment from={1550} to={1778}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 1100 }}>
        <SlideIn at={1550} from="left" dist={40}>
          <CallOut
            color={C.cp}
            bg={C.cpBg}
            border={C.cpBd}
            style={{ fontSize: 68, padding: "40px 96px", marginBottom: 56 }}
          >
            Profit % is ALWAYS on CP
          </CallOut>
        </SlideIn>
        <Reveal at={1620} style={{ marginTop: 16 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 48,
            justifyContent: "center",
          }}>
            <BounceIn at={1620}>
              <div style={{
                background: C.cpBg, border: `3px solid ${C.cpBd}`,
                borderRadius: 20, padding: "28px 80px",
                fontFamily: F, fontWeight: 700, fontSize: 68, color: C.cp,
              }}>
                CP ← Base
              </div>
            </BounceIn>
            <div style={{ fontFamily: F, fontSize: 64, color: C.gray, fontWeight: 700 }}>
              NOT
            </div>
            <BounceIn at={1650}>
              <div style={{
                background: "#FFFFFF", border: `3px solid #CCCCCC`,
                borderRadius: 20, padding: "28px 80px",
                fontFamily: F, fontWeight: 700, fontSize: 68, color: C.gray,
                textDecoration: "line-through",
              }}>
                SP
              </div>
            </BounceIn>
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M8: CSAT trap — Using SP as base = WRONG (1778-2000f) */}
    <Moment from={1778}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={1778} from="top" dist={32}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 52, color: C.dark, marginBottom: 24 }}>
            CSAT Trap
          </div>
        </SlideIn>
        <StampIn at={1781}>
          <div style={{
            background: C.lossBg, border: `3px solid ${C.lossBd}`,
            borderRadius: 20, padding: "28px 56px", display: "inline-block",
          }}>
            <div style={{
              fontFamily: F, fontWeight: 700, fontSize: 28, color: C.loss,
              letterSpacing: "2px", marginBottom: 14,
            }}>
              WRONG
            </div>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 50, color: C.dark }}>
              Using SP as base → Wrong answer
            </div>
          </div>
        </StampIn>
        <Reveal at={1860} style={{ marginTop: 28 }}>
          <div style={{ fontFamily: F, fontSize: 40, color: C.gray }}>
            This is the most common CSAT trap in Profit & Loss
          </div>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
