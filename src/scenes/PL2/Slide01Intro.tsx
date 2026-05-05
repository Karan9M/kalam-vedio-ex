// Slide 1 - Profit & Loss intro (840f, 0s-28s)
// Audio beats (abs_seconds * 30 = slide_frame since slide starts at 0):
//   0f   : "Simple situation sochte hain"
//  108f  : "400 mein kharida"
//  170f  : [arrow beat - buying to selling]
//  221f  : "500 mein becha"
//  340f  : "100 rupaiye faayda"
//  432f  : "doosri situation"
//  557f  : "300 mein becha"
//  664f  : "100 rupaiye nuqsan"
//  720f  : "Profit and Loss. Itna simple."
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SlideBase, Moment, Reveal, Pop, C, F, Row } from "./shared";
import type { CSSProperties } from "react";

// Price box  -  springs in at `at`, slides from left or right
const PriceBox: React.FC<{
  label: string; amount: string;
  color: string; bg: string; bd: string;
  at: number; fromLeft?: boolean; style?: CSSProperties;
}> = ({ label, amount, color, bg, bd, at, fromLeft = false, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - at);
  const scale = spring({ frame: elapsed, fps, config: { damping: 11, stiffness: 170, mass: 0.9 }, from: 0.74, to: 1 });
  const opacity = interpolate(frame, [at, at + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tx = fromLeft
    ? interpolate(frame, [at, at + 18], [-28, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    : interpolate(frame, [at, at + 18], [28, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ opacity, transform: `translateX(${tx}px) scale(${scale})`, textAlign: "center", ...style }}>
      <div style={{ fontFamily: F, fontSize: 26, color: C.gray, marginBottom: 8, fontWeight: 600 }}>
        {label}
      </div>
      <div style={{ background: bg, border: `3px solid ${bd}`, borderRadius: 22, padding: "20px 52px" }}>
        <div style={{ fontFamily: F, fontWeight: 900, fontSize: 80, color, lineHeight: 1 }}>
          {amount}
        </div>
      </div>
    </div>
  );
};

// Arrow that draws right after `at`
const DrawArrow: React.FC<{ at: number; color?: string }> = ({ at, color = "#9CA3AF" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const prog = spring({ frame: Math.max(0, frame - at), fps, config: { damping: 16, stiffness: 110 }, from: 0, to: 1 });
  const headOpacity = interpolate(prog, [0.8, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: 72 * prog, height: 4, background: color, borderRadius: 2 }} />
      <div style={{
        opacity: headOpacity,
        width: 0, height: 0,
        borderTop: "9px solid transparent",
        borderBottom: "9px solid transparent",
        borderLeft: `16px solid ${color}`,
      }} />
    </div>
  );
};

// Elastic bounce badge  -  satisfying pop for key results
const ResultBadge: React.FC<{
  text: string; color: string; bg: string; bd: string; at: number;
}> = ({ text, color, bg, bd, at }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - at);
  const scale = spring({ frame: elapsed, fps, config: { damping: 7, stiffness: 300, mass: 0.7 }, from: 0, to: 1 });
  const opacity = interpolate(frame, [at, at + 7], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ opacity, transform: `scale(${scale})` }}>
      <div style={{
        background: bg, border: `3px solid ${bd}`, borderRadius: 60,
        padding: "18px 56px",
        fontFamily: F, fontWeight: 900, fontSize: 52, color, display: "inline-block",
      }}>
        {text}
      </div>
    </div>
  );
};

// Title with underline that sweeps right at frame 20
const SweepTitle: React.FC<{ text: string; underlineColor: string }> = ({ text, underlineColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame);
  const scale = spring({ frame: elapsed, fps, config: { damping: 14, stiffness: 180 }, from: 0.88, to: 1 });
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ulProg = spring({ frame: Math.max(0, frame - 20), fps, config: { damping: 16, stiffness: 100 }, from: 0, to: 1 });
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ opacity, transform: `scale(${scale})` }}>
        <div style={{ fontFamily: F, fontWeight: 900, fontSize: 84, color: C.dark, lineHeight: 1 }}>{text}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <div style={{ width: `${ulProg * 320}px`, height: 5, background: underlineColor, borderRadius: 3 }} />
      </div>
    </div>
  );
};

export const Slide01Intro: React.FC = () => (
  <SlideBase num={1} title="PROFIT AND LOSS" showNum={false}>

    {/* M1: "Simple Situation" title  -  0 to 105f */}
    <Moment from={0} to={105}>
      <SweepTitle text="Simple Situation" underlineColor={C.loss} />
    </Moment>

    {/* M2: Profit scenario  400 to 500  -  108 to 430f */}
    <Moment from={108} to={430}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
        <Row gap={36} align="center">
          <PriceBox label="Buy for" amount="400" color={C.cp} bg={C.cpBg} bd={C.cpBd} at={108} fromLeft />
          <DrawArrow at={170} />
          <PriceBox label="Sell for" amount="500" color={C.sp} bg={C.spBg} bd={C.spBd} at={221} />
        </Row>
        <ResultBadge text="Profit = 100" color={C.profit} bg={C.profitBg} bd={C.profitBd} at={340} />
      </div>
    </Moment>

    {/* M3: Loss scenario  400 to 300  -  432 to 718f */}
    <Moment from={432} to={718}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
        <Row gap={36} align="center">
          <PriceBox label="Buy for" amount="400" color={C.cp} bg={C.cpBg} bd={C.cpBd} at={432} fromLeft />
          <DrawArrow at={475} />
          <PriceBox label="Sell for" amount="300" color={C.loss} bg={C.lossBg} bd={C.lossBd} at={557} />
        </Row>
        <ResultBadge text="Loss = 100" color={C.loss} bg={C.lossBg} bd={C.lossBd} at={664} />
      </div>
    </Moment>

    {/* M4: P&L summary  -  720 to 840f */}
    <Moment from={720}>
      <div style={{ textAlign: "center" }}>
        <Pop at={720}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 76, color: C.dark, lineHeight: 1.1 }}>
            Profit &amp; Loss
          </div>
        </Pop>
        <Reveal at={760}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 20 }}>
            <div style={{ width: 60, height: 4, background: C.lightGray, borderRadius: 2 }} />
            <div style={{ fontFamily: F, fontSize: 44, color: C.gray, fontWeight: 700 }}>
              it&apos;s just the difference
            </div>
            <div style={{ width: 60, height: 4, background: C.lightGray, borderRadius: 2 }} />
          </div>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
