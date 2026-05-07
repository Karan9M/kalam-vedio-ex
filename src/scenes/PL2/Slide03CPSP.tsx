// Slide 3 - CP and SP (870f, 53s - 82s)
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  SlideBase, Moment, Reveal, SlideIn,
  AnimImg, C, F,
} from "./shared";
import arrowRight from "../../../Graphics/arrow-right-facing.png";

// ─── Layout constants ─────────────────────────────────────────────────────────
const BOX_W    = 248;
const ARROW_W  = 130;
const GAP      = 56;
const ROW_OFFSET = Math.round((GAP + ARROW_W + GAP + BOX_W) / 2);

// ─── CPSPRow ─────────────────────────────────────────────────────────────────
const CPSPRow: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cpScale = spring({
    frame: Math.max(0, frame - 94), fps,
    config: { damping: 8, stiffness: 280, mass: 0.8 }, from: 0.88, to: 1,
  });
  const cpOpacity = interpolate(frame, [94, 106], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const slideProg = spring({
    frame: Math.max(0, frame - 235), fps,
    config: { damping: 24, stiffness: 100, mass: 1 }, from: 0, to: 1,
  });

  const rowShiftX = Math.round(ROW_OFFSET * (1 - slideProg));

  const arrowOpacity = interpolate(slideProg, [0.1, 0.5], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const spOpacity = interpolate(slideProg, [0.3, 0.85], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const spExtraX  = interpolate(slideProg, [0, 1], [56, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // 1:09:00 = (69 - 53) × 30 = 480f
  const diffOpacity = interpolate(frame, [480, 494], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

      <div style={{
        display: "flex", flexDirection: "row", alignItems: "center",
        gap: GAP,
        transform: `translateX(${rowShiftX}px)`,
      }}>

        {/* CP box */}
        <div style={{ opacity: cpOpacity, transform: `scale(${cpScale})`, flexShrink: 0 }}>
          <div style={{
            background: C.cpBg, border: `3px solid ${C.cpBd}`,
            borderRadius: 22, padding: "28px 64px", textAlign: "center",
          }}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 84, color: C.cp, lineHeight: 1 }}>CP</div>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 36, color: C.dark, marginTop: 14 }}>Cost Price</div>
            <div style={{ fontFamily: F, fontSize: 30, color: C.gray, marginTop: 6 }}>Buying price</div>
          </div>
        </div>

        {/* Arrow */}
        <div style={{ opacity: arrowOpacity, flexShrink: 0 }}>
          <AnimImg src={arrowRight} revealFrame={268}
            style={{ position: "relative" as const, width: ARROW_W, height: 64, top: 0, left: 0 }} />
        </div>

        {/* SP box */}
        <div style={{ opacity: spOpacity, transform: `translateX(${spExtraX}px)`, flexShrink: 0 }}>
          <div style={{
            background: C.spBg, border: `3px solid ${C.spBd}`,
            borderRadius: 22, padding: "28px 64px", textAlign: "center",
          }}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 84, color: C.sp, lineHeight: 1 }}>SP</div>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 36, color: C.dark, marginTop: 14 }}>Selling Price</div>
            <div style={{ fontFamily: F, fontSize: 30, color: C.gray, marginTop: 6 }}>Selling price</div>
          </div>
        </div>

      </div>

      {/* "Their difference = Profit or Loss" — appears at 1:09:00 (frame 480) */}
      <div style={{ opacity: diffOpacity, marginTop: 40 }}>
        <div style={{ fontFamily: F, fontSize: 42, color: C.gray }}>
          Their difference = Profit or Loss
        </div>
      </div>

    </div>
  );
};

// ─── SPCPComparison ───────────────────────────────────────────────────────────
// Three outcomes in one Moment — focus card shifts as audio progresses:
//   0-177f (560-737):  PROFIT centered, focused
//   177-286f (737-846): PROFIT slides LEFT (dimmed), LOSS enters CENTER
//   286f+ (846+):       LOSS slides RIGHT (dimmed), No P/L enters CENTER

const SLOT_X = 660; // px from canvas center to each side slot

const SPCPComparison: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // p2 fires at frame 737: PROFIT→left, LOSS→center
  const p2 = spring({ frame: Math.max(0, frame - 630), fps,
    config: { damping: 22, stiffness: 110, mass: 1 }, from: 0, to: 1 });

  // p3 fires at frame 846: LOSS→right, NoPL→center
  const p3 = spring({ frame: Math.max(0, frame - 740), fps,
    config: { damping: 22, stiffness: 110, mass: 1 }, from: 0, to: 1 });

  // ── PROFIT ──
  const profitBounce = spring({ frame: Math.max(0, frame - 560), fps,
    config: { damping: 7, stiffness: 300, mass: 0.8 }, from: 0.7, to: 1 });
  const profitOpacity = interpolate(frame, [560, 572], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const profitX   = interpolate(p2, [0, 1], [0, -SLOT_X], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const profitShrink = interpolate(p2, [0, 1], [1.0, 0.82], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const profitDim = interpolate(p2, [0, 0.8], [1, 0.38], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const profitScale = profitBounce * profitShrink;

  // ── LOSS ──
  const lossOpacity = interpolate(frame, [630, 645], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lossEnterX  = interpolate(p2, [0, 1], [SLOT_X + 80, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lossExitX   = interpolate(p3, [0, 1], [0, SLOT_X],      { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lossX       = lossEnterX + lossExitX;
  const lossShrink  = interpolate(p3, [0, 1], [1.0, 0.82], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lossDim     = interpolate(p3, [0, 0.8], [1, 0.38], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // ── No P/L ──
  const noplOpacity = interpolate(frame, [740, 754], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const noplBounce  = spring({ frame: Math.max(0, frame - 740), fps,
    config: { damping: 7, stiffness: 300, mass: 0.8 }, from: 0.7, to: 1 });
  const noplX = interpolate(p3, [0, 1], [SLOT_X + 60, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ position: "relative", width: "100%", height: 320, overflow: "hidden" }}>

      {/* PROFIT card — starts center, slides left */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: `translate(calc(-50% + ${profitX}px), -50%) scale(${profitScale})`,
        opacity: profitOpacity * profitDim,
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 52, color: C.dark }}>
            SP &gt; CP
          </div>
          <div style={{
            background: C.profitBg, border: `3px solid ${C.profitBd}`,
            borderRadius: 50, padding: "20px 72px",
            fontFamily: F, fontWeight: 700, fontSize: 72, color: C.profit,
          }}>
            PROFIT
          </div>
        </div>
      </div>

      {/* LOSS card — enters center from right, then slides right */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: `translate(calc(-50% + ${lossX}px), -50%) scale(${lossShrink})`,
        opacity: lossOpacity * lossDim,
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 52, color: C.dark }}>
            SP &lt; CP
          </div>
          <div style={{
            background: C.lossBg, border: `3px solid ${C.lossBd}`,
            borderRadius: 50, padding: "20px 72px",
            fontFamily: F, fontWeight: 700, fontSize: 72, color: C.loss,
          }}>
            LOSS
          </div>
        </div>
      </div>

      {/* No P/L card — enters center from right, stays */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: `translate(calc(-50% + ${noplX}px), -50%) scale(${noplBounce})`,
        opacity: noplOpacity,
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 52, color: C.dark }}>
            SP = CP
          </div>
          <div style={{
            background: "#F3F4F6", border: `3px solid #CCCCCC`,
            borderRadius: 50, padding: "20px 56px",
            fontFamily: F, fontWeight: 700, fontSize: 62, color: C.gray,
          }}>
            No Profit, No Loss
          </div>
        </div>
      </div>

    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
export const Slide03CPSP: React.FC = () => (
  <SlideBase num={3} title="CP AND SP">

    {/* M1: Setup (0-90f) */}
    <Moment from={0} to={90}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={0} from="top" dist={40}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 72, color: C.dark, lineHeight: 1.1 }}>
            Every transaction has
          </div>
        </SlideIn>
        <Reveal at={18} style={{ marginTop: 18 }}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 96, color: C.cp, letterSpacing: "-1px" }}>
            2 Prices
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M2+M3: CP bounces in centered → slides left as SP enters → "Their difference" at 480f */}
    <Moment from={94} to={560}>
      <CPSPRow />
    </Moment>

    {/* M4-M6: All 3 outcomes — focus shifts across cards */}
    <Moment from={560}>
      <SPCPComparison />
    </Moment>

  </SlideBase>
);
