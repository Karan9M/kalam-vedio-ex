// Slide 1 - Profit & Loss intro (840f, 0s-28s)
// Audio beats:
//   0f   : "Simple situation sochte hain"
//  108f  : "400 mein kharida"
//  170f  : [arrow]
//  221f  : "500 mein becha"
//  340f  : "100 rupaiye faayda"
//  432f  : "doosri situation"
//  557f  : "300 mein becha"
//  664f  : "100 rupaiye nuqsan"
//  720f  : "Profit and Loss. Itna simple."
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SlideBase, Moment, Reveal, BounceIn, CountUp, AnimImg, C, F, Row } from "./shared";
import arrowRight from "../../../Graphics/arrow-right-facing.png";

// ─── SlidingTitle ─────────────────────────────────────────────────────────────
// "Simple" over "Situation" (column) → slides up, shrinks, transforms into
// "Simple Situation" side-by-side (row) as a compact label at the top.
//
// Width estimates for Comic Sans at 1920×1080 canvas (1760px content area):
//   "Simple"    at 54px ≈ 182px   "Situation" at 54px ≈ 252px
// These scale linearly with fontSize. Gap between words in row = 14px.
const SIMPLE_W54    = 182;
const SITUATION_W54 = 252;
const WORD_GAP      = 125;
// Centering correction: when row forms, shift container left so the pair
// is visually centered (not just "Simple" centered with Situation hanging right).
const ROW_CENTER_OFFSET = -(SITUATION_W54 + WORD_GAP) / 2; // ≈ -133px

const SlidingTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance: fade + 10px lift (0–16f)
  const entranceOp = interpolate(frame, [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const entranceTy = interpolate(frame, [0, 16], [10, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // "Situation" staggered 10f behind "Simple"
  const word2Op = interpolate(frame, [10, 22], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Sparkle visible only while title is big
  const sparkleOp = interpolate(frame, [16, 26], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Sweep underline draws in at frame 18
  const ulProg = spring({ frame: Math.max(0, frame - 18), fps, config: { damping: 18, stiffness: 90 }, from: 0, to: 1 });

  // Slide-to-top: begins frame 88, smooth overdamped spring
  const slideProg = spring({
    frame: Math.max(0, frame - 88), fps,
    config: { damping: 24, stiffness: 110, mass: 1.0 },
    from: 0, to: 1,
  });

  // Font size: 110 (big column) → 54 (compact row — readable, not tiny)
  const fontSize = Math.round(interpolate(slideProg, [0, 1], [150, 72]));

  // Top: visual center of content area (~320px) → just below header (8px)
  const topPx = interpolate(slideProg, [0, 1], [320, 50]);

  // Underline fades in first 40% of slide animation
  const ulOp = interpolate(slideProg, [0, 0.4], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const sparkleSize = Math.round(36 * (1 - slideProg));

  // Current word widths (scale linearly with fontSize)
  const simpleW    = Math.round(SIMPLE_W54    * (fontSize / 54));
  const situationW = Math.round(SITUATION_W54 * (fontSize / 54));

  // Container shifts left as the row forms, keeping the pair centered
  const containerOffsetX = ROW_CENTER_OFFSET * slideProg;

  // "Situation" Y: starts below "Simple" (column), rises to level (row)
  const situationY = interpolate(slideProg, [0, 1], [fontSize * 1.12 + 4, 0]);

  // "Situation" X: starts centered under "Simple", ends right of "Simple"
  // Centered-below: (simpleW - situationW) / 2  (negative = extends left of container)
  // Right-of:       simpleW + WORD_GAP
  const situationX = interpolate(
    slideProg,
    [0, 1],
    [(simpleW - situationW) / 2, simpleW + WORD_GAP],
  );

  return (
    // Full-width outer shell — textAlign:center centers the inner block
    <div style={{
      position: "absolute",
      top: topPx,
      left: 0,
      right: 0,
      textAlign: "center",
      opacity: entranceOp,
      zIndex: 10,
      transform: `translateY(${entranceTy}px)`,
      overflow: "visible",
    }}>
      {/* Inner block: sized by "Simple" (Situation is absolute), shifts left as row forms */}
      <div style={{
        display: "inline-block",
        position: "relative",
        transform: `translateX(${Math.round(containerOffsetX)}px)`,
      }}>
        {/* ✦ sparkle — disappears as title shrinks */}
        <div style={{
          position: "absolute", top: -10, right: -38,
          opacity: sparkleOp * ulOp,
          fontSize: Math.max(0, sparkleSize),
          color: C.loss, fontFamily: "sans-serif", userSelect: "none",
          lineHeight: 1,
        }}>✦</div>

        {/* "Simple" — in normal flow, sets container width */}
        <div style={{ fontFamily: F, fontWeight: 700, fontSize, color: C.loss, lineHeight: 1.1 }}>
          Simple
        </div>

        {/* "Situation" — absolute: rises from below-center to beside-Simple */}
        <div style={{
          position: "absolute",
          top: Math.round(situationY),
          left: Math.round(situationX),
          fontFamily: F, fontWeight: 700, fontSize, color: C.dark, lineHeight: 1.1,
          opacity: word2Op,
          whiteSpace: "nowrap",
        }}>
          Situation
        </div>

        {/* Red sweep underline — fades away during slide-up */}
        <div style={{ opacity: ulOp, marginTop: 22 }}>
          <div style={{ width: `${ulProg * 480}px`, height: 5, background: C.loss, borderRadius: 3 }} />
        </div>
      </div>
    </div>
  );
};

// Space reserved below the compact sliding title once it reaches the top
const TOP_PAD = 330;

// Mini sizes for side-by-side panel view (each panel ~560px of 1200px container)
const MINI_NUM_H = 96; // 64px font + 2×16px padding

const MiniPriceBox: React.FC<{
  label: string; amount: string;
  color: string; bg: string; bd: string;
  at: number; fromLeft?: boolean;
}> = ({ label, amount, color, bg, bd, at, fromLeft = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - at);
  const sc = spring({ frame: elapsed, fps, config: { damping: 22, stiffness: 180, mass: 0.9 }, from: 0.92, to: 1 });
  const op = interpolate(frame, [at, at + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tx = fromLeft
    ? interpolate(frame, [at, at + 18], [-20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    : interpolate(frame, [at, at + 18], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ opacity: op, transform: `translateX(${tx}px) scale(${sc})`, textAlign: "center" }}>
      <div style={{ fontFamily: F, fontSize: 22, color: C.gray, marginBottom: 8, fontWeight: 700 }}>{label}</div>
      <div style={{ background: bg, border: `2.5px solid ${bd}`, borderRadius: 14, padding: "16px 40px" }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 64, color, lineHeight: 1 }}>{amount}</div>
      </div>
    </div>
  );
};

const MiniRightArrow: React.FC<{ at: number }> = ({ at }) => (
  <AnimImg src={arrowRight} revealFrame={at}
    style={{ position: "relative" as const, width: 96, height: MINI_NUM_H, top: 0, left: 0 }} />
);

const MiniDownArrow: React.FC<{ at: number }> = ({ at }) => (
  <div style={{ width: 38, height: 96, position: "relative", flexShrink: 0 }}>
    <div style={{ position: "absolute", top: "50%", left: "50%", width: 96, height: 38, transform: "translate(-50%, -50%) rotate(90deg)" }}>
      <AnimImg src={arrowRight} revealFrame={at}
        style={{ position: "relative" as const, width: 96, height: 38, top: 0, left: 0 }} />
    </div>
  </div>
);

const MiniResultBadge: React.FC<{
  label: string; value: number; color: string; bg: string; bd: string; at: number;
}> = ({ label, value, color, bg, bd, at }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - at);
  const sc = spring({ frame: elapsed, fps, config: { damping: 22, stiffness: 180, mass: 0.8 }, from: 0.88, to: 1 });
  const op = interpolate(frame, [at, at + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ opacity: op, transform: `scale(${sc})` }}>
      <div style={{
        background: bg, border: `2.5px solid ${bd}`, borderRadius: 50,
        padding: "16px 52px",
        fontFamily: F, fontWeight: 700, fontSize: 48, color,
        display: "inline-flex", alignItems: "center", gap: 8,
      }}>
        {label}<CountUp from={0} to={value} at={at} color={color} size={48} />
      </div>
    </div>
  );
};

// ─── ScenarioPair ─────────────────────────────────────────────────────────────
// Persistent layer (lives outside Moments). Shows profit example centered until
// frame 432, then springs profit RIGHT and slides loss in from LEFT.
const ScenarioPair: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Overall visibility: fade in at 108, fade out at 718 (M4 takes over)
  const fadeIn  = interpolate(frame, [108, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [710, 722], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opacity = Math.min(fadeIn, fadeOut);

  // Split spring fires at 432 ("doosri situation")
  const prog = spring({
    frame: Math.max(0, frame - 432),
    fps,
    config: { damping: 24, stiffness: 80, mass: 1 },
    from: 0, to: 1,
  });

  // Profit panel (right): starts shifted left to appear centered, springs to natural right position
  // Container: 1200px, panels: 560px each, divider+margins: 36px
  // Profit panel left edge at rest: 560+36=596px, center: 876px
  // Container center: 600px → offset = 600-876 = -276 ≈ -280
  const profitX = interpolate(prog, [0, 1], [-280, 0]);

  // Loss panel (left): slides in from offscreen left
  const lossX = interpolate(prog, [0, 1], [-640, 0]);
  const lossOp = interpolate(prog, [0, 0.15], [0, 1], { extrapolateRight: "clamp" });
  const dividerOp = interpolate(prog, [0, 0.2], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "flex-start",
      paddingTop: TOP_PAD,
      opacity,
      zIndex: 5,
    }}>
      <div style={{
        position: "relative", width: "100%", maxWidth: 1200,
        overflow: "hidden", display: "flex", alignItems: "flex-start",
      }}>
        {/* Loss panel — slides in from left */}
        <div style={{
          width: 560, flexShrink: 0,
          transform: `translateX(${lossX}px)`,
          opacity: lossOp,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 24,
          paddingRight: 20,
        }}>
          <Row gap={28} align="flex-end">
            <MiniPriceBox label="Buy for"  amount="400" color={C.cp}   bg={C.cpBg}   bd={C.cpBd}   at={432} fromLeft />
            <MiniRightArrow at={475} />
            <MiniPriceBox label="Sell for" amount="300" color={C.loss} bg={C.lossBg} bd={C.lossBd} at={557} />
          </Row>
          <MiniDownArrow at={640} />
          <MiniResultBadge label="Loss = " value={100} color={C.loss} bg={C.lossBg} bd={C.lossBd} at={664} />
        </div>

        {/* Vertical divider */}
        <div style={{
          width: 4, background: "#CCCCCC",
          opacity: dividerOp,
          alignSelf: "stretch", minHeight: 240,
          margin: "0 16px", flexShrink: 0,
        }} />

        {/* Profit panel — starts centered, springs right */}
        <div style={{
          width: 560, flexShrink: 0,
          transform: `translateX(${profitX}px)`,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 24,
          paddingLeft: 20,
        }}>
          <Row gap={28} align="flex-end">
            <MiniPriceBox label="Buy for"  amount="400" color={C.cp}     bg={C.cpBg}     bd={C.cpBd}     at={108} fromLeft />
            <MiniRightArrow at={170} />
            <MiniPriceBox label="Sell for" amount="500" color={C.profit} bg={C.profitBg} bd={C.profitBd} at={221} />
          </Row>
          <MiniDownArrow at={310} />
          <MiniResultBadge label="Profit = " value={100} color={C.profit} bg={C.profitBg} bd={C.profitBd} at={340} />
        </div>
      </div>
    </div>
  );
};

export const Slide01Intro: React.FC = () => (
  <SlideBase num={1} title="PROFIT AND LOSS" showNum={false}>

    {/* Persistent sliding title — lives outside Moment, always visible */}
    <SlidingTitle />

    {/* Persistent scenario layer — profit centered until 432, then splits side-by-side with loss */}
    <ScenarioPair />

    {/* M4: Punchline — "it's just the difference"  (720–840f) */}
    <Moment from={720} justify="flex-start" align="center">
      <div style={{ paddingTop: TOP_PAD, width: "100%", textAlign: "center" }}>
        <BounceIn at={720}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 72, color: C.dark, lineHeight: 1.1 }}>
            Profit &amp; Loss
          </div>
        </BounceIn>
        <Reveal at={760}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 24, marginTop: 22,
          }}>
            <div style={{ width: 80, height: 4, background: "#CCCCCC", borderRadius: 2 }} />
            <div style={{ fontFamily: F, fontSize: 44, color: C.gray, fontWeight: 700 }}>
              it&apos;s just the difference
            </div>
            <div style={{ width: 80, height: 4, background: "#CCCCCC", borderRadius: 2 }} />
          </div>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
