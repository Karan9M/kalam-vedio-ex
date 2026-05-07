import {
  AbsoluteFill, Img, interpolate, spring,
  useCurrentFrame, useVideoConfig,
} from "remotion";
import type { CSSProperties } from "react";
import { FONTS } from "../../fonts";

// ─── Color palette ────────────────────────────────────────────────────────────
// White-background boxes with solid accent borders — matches the clean
// whiteboard reference image: color lives on the TEXT and BORDER, not the fill.
export const C = {
  profit:    "#16A34A",
  loss:      "#DC2626",
  cp:        "#1D4ED8",
  sp:        "#7C3AED",
  mp:        "#D97706",
  dark:      "#111111",
  gray:      "#555555",
  lightGray: "#AAAAAA",
  bg:        "#FFFEF9",   // warm notebook white for slide background
  profitBg:  "#FFFFFF",
  profitBd:  "#16A34A",   // solid green border (was pastel #86EFAC)
  lossBg:    "#FFFFFF",
  lossBd:    "#DC2626",   // solid red border (was pastel #FCA5A5)
  cpBg:      "#FFFFFF",
  cpBd:      "#1D4ED8",   // solid blue border
  spBg:      "#FFFFFF",
  spBd:      "#7C3AED",   // solid purple border
  mpBg:      "#FFFFFF",
  mpBd:      "#D97706",   // solid amber border
  badge:     "#DC2626",   // red circle for slide numbers
} as const;

export const F = FONTS.body;

// ─── AnimImg ──────────────────────────────────────────────────────────────────
export const AnimImg: React.FC<{
  src: string; revealFrame: number; endFrame?: number;
  style?: CSSProperties; origin?: string;
}> = ({ src, revealFrame, endFrame, style, origin = "center" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - revealFrame);
  const scale = spring({ frame: elapsed, fps, config: { damping: 22, stiffness: 180, mass: 0.9 }, from: 0.92, to: 1 });
  const fadeIn  = interpolate(frame, [revealFrame, revealFrame + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = endFrame != null ? interpolate(frame, [endFrame, endFrame + 8], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
  return (
    <Img src={src} style={{
      position: "absolute", objectFit: "contain",
      opacity: Math.min(fadeIn, fadeOut),
      transform: `scale(${scale})`, transformOrigin: origin,
      ...style,
    }} />
  );
};

// ─── Reveal ───────────────────────────────────────────────────────────────────
// Smooth fade-up — 6px drift (was 16px) for a clean, subtle entrance.
export const Reveal: React.FC<{
  at: number; end?: number; style?: CSSProperties; children: React.ReactNode;
}> = ({ at, end, style, children }) => {
  const frame = useCurrentFrame();
  const fadeIn  = interpolate(frame, [at, at + 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = end != null ? interpolate(frame, [end, end + 10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
  const ty = interpolate(frame, [at, at + 18], [6, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ opacity: Math.min(fadeIn, fadeOut), transform: `translateY(${ty}px)`, ...style }}>
      {children}
    </div>
  );
};

// ─── Moment ───────────────────────────────────────────────────────────────────
// One concept at a time — position:absolute overlay.
export const Moment: React.FC<{
  from: number; to?: number;
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  style?: CSSProperties; children: React.ReactNode;
}> = ({ from, to, justify = "center", align = "center", style, children }) => {
  const frame = useCurrentFrame();
  const fadeIn  = interpolate(frame, [from, from + 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = to != null ? interpolate(frame, [to, to + 10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
  return (
    <div style={{
      position: "absolute", inset: 0,
      display: "flex", flexDirection: "column",
      alignItems: align, justifyContent: justify,
      opacity: Math.min(fadeIn, fadeOut),
      ...style,
    }}>
      {children}
    </div>
  );
};

// ─── Pop ──────────────────────────────────────────────────────────────────────
// Smooth scale-in (0.92→1, overdamped — no bounce, no jitter).
export const Pop: React.FC<{ at: number; style?: CSSProperties; children: React.ReactNode }> = ({ at, style, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - at);
  const scale = spring({ frame: elapsed, fps, config: { damping: 22, stiffness: 180, mass: 0.8 }, from: 0.92, to: 1 });
  const opacity = interpolate(frame, [at, at + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <div style={{ opacity, transform: `scale(${scale})`, display: "inline-block", ...style }}>{children}</div>;
};

// ─── SweepUnderline ───────────────────────────────────────────────────────────
// Draws a line left→right using a spring — used in SlideBase title.
export const SweepUnderline: React.FC<{ at: number; color?: string; style?: CSSProperties }> = ({ at, color = C.loss, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const prog = spring({ frame: Math.max(0, frame - at), fps, config: { damping: 20, stiffness: 70 }, from: 0, to: 1 });
  return (
    <div style={{ height: 3, background: color, width: `${prog * 100}%`, borderRadius: 2, marginTop: 5, ...style }} />
  );
};

// ─── SlideBase ────────────────────────────────────────────────────────────────
// Warm white background, red-circle number, title + sweep underline.
// Matches the clean whiteboard reference image aesthetic.
export const SlideBase: React.FC<{
  num: number; title: string; children: React.ReactNode;
  padTop?: number; showNum?: boolean;
}> = ({ num, title, children, padTop = 40, showNum = true }) => (
  <AbsoluteFill style={{ backgroundColor: C.bg, padding: `${padTop}px 80px 36px`, display: "flex", flexDirection: "column" }}>
    <Reveal at={0} style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 26, flexShrink: 0 }}>
      {showNum && (
        <div style={{
          width: 52, height: 52, borderRadius: "50%",
          border: `3px solid ${C.loss}`, background: "#FFFFFF",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26, fontWeight: 700, fontFamily: F, color: C.loss,
          flexShrink: 0,
        }}>{num}</div>
      )}
      <div>
        <div style={{ fontSize: 44, fontWeight: 700, color: C.dark, fontFamily: F, lineHeight: 1.1 }}>
          {title}
        </div>
        <SweepUnderline at={4} />
      </div>
    </Reveal>
    {/* Content area — Moment children use position:absolute within this */}
    <div style={{ position: "relative", flex: 1 }}>
      {children}
    </div>
  </AbsoluteFill>
);

// ─── Row ──────────────────────────────────────────────────────────────────────
export const Row: React.FC<{
  gap?: number; align?: string; style?: CSSProperties; children: React.ReactNode;
}> = ({ gap = 24, align = "center", style, children }) => (
  <div style={{ display: "flex", flexDirection: "row", alignItems: align, gap, ...style }}>
    {children}
  </div>
);

// ─── Tag ──────────────────────────────────────────────────────────────────────
export const Tag: React.FC<{
  text: string; color: string; bg: string; border: string;
  size?: number; style?: CSSProperties;
}> = ({ text, color, bg, border, size = 52, style }) => (
  <div style={{
    background: bg, border: `2.5px solid ${border}`, borderRadius: 14,
    padding: "14px 36px",
    fontFamily: F, fontWeight: 700, fontSize: size, color,
    display: "inline-block", ...style,
  }}>
    {text}
  </div>
);

// ─── BigLabel ─────────────────────────────────────────────────────────────────
export const BigLabel: React.FC<{
  children: React.ReactNode; color?: string; size?: number; style?: CSSProperties;
}> = ({ children, color = C.dark, size = 88, style }) => (
  <div style={{ fontFamily: F, fontWeight: 700, fontSize: size, color, lineHeight: 1, ...style }}>
    {children}
  </div>
);

// ─── Formula ──────────────────────────────────────────────────────────────────
// Clean white card with solid dark border — matches reference image box style.
export const Formula: React.FC<{
  children: React.ReactNode; color?: string; bg?: string; border?: string; style?: CSSProperties;
}> = ({ children, color = C.dark, bg = "#FFFFFF", border = "#222222", style }) => (
  <div style={{
    background: bg, border: `2.5px solid ${border}`, borderRadius: 16,
    padding: "22px 44px",
    fontFamily: F, fontWeight: 700, fontSize: 50, color,
    display: "inline-flex", alignItems: "center", gap: 14,
    lineHeight: 1.2, ...style,
  }}>
    {children}
  </div>
);

// ─── Card ─────────────────────────────────────────────────────────────────────
export const Card: React.FC<{
  headline: React.ReactNode; sub?: React.ReactNode;
  color: string; bg: string; border: string;
  style?: CSSProperties;
}> = ({ headline, sub, color, bg, border, style }) => (
  <div style={{
    background: bg, border: `2.5px solid ${border}`, borderRadius: 20,
    padding: "28px 44px", minWidth: 280,
    display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
    ...style,
  }}>
    <div style={{ fontFamily: F, fontWeight: 700, fontSize: 68, color, lineHeight: 1 }}>
      {headline}
    </div>
    {sub && (
      <div style={{ fontFamily: F, fontSize: 32, color: C.gray, textAlign: "center", lineHeight: 1.4 }}>
        {sub}
      </div>
    )}
  </div>
);

// ─── CallOut ──────────────────────────────────────────────────────────────────
// Clean rule/callout box — white bg, solid border.
export const CallOut: React.FC<{
  children: React.ReactNode; color?: string; bg?: string; border?: string;
  dashed?: boolean; style?: CSSProperties;
}> = ({ children, color = C.dark, bg = "#FFFFFF", border = "#222222", dashed = false, style }) => (
  <div style={{
    background: bg, border: `2.5px ${dashed ? "dashed" : "solid"} ${border}`, borderRadius: 16,
    padding: "18px 36px",
    fontFamily: F, fontWeight: 700, fontSize: 38, color, lineHeight: 1.5, ...style,
  }}>
    {children}
  </div>
);

// ─── Frac ─────────────────────────────────────────────────────────────────────
export const Frac: React.FC<{
  num: React.ReactNode; den: React.ReactNode; size?: number; color?: string;
}> = ({ num, den, size = 42, color = C.dark }) => (
  <span style={{
    display: "inline-flex", flexDirection: "column", alignItems: "center",
    verticalAlign: "middle", margin: "0 6px", fontFamily: F, fontWeight: 700, color,
  }}>
    <span style={{ fontSize: size, lineHeight: 1.1 }}>{num}</span>
    <span style={{ display: "block", height: 3, background: color, width: "100%", minWidth: 36, margin: "4px 0" }} />
    <span style={{ fontSize: size, lineHeight: 1.1 }}>{den}</span>
  </span>
);

// ─── WrongBox / RightBox ──────────────────────────────────────────────────────
export const WrongBox: React.FC<{ children: React.ReactNode; style?: CSSProperties }> = ({ children, style }) => (
  <div style={{
    background: C.lossBg, border: `2.5px solid ${C.lossBd}`, borderRadius: 16,
    padding: "22px 36px", flex: 1,
    fontFamily: F, fontSize: 36, color: C.dark, lineHeight: 1.7, ...style,
  }}>
    <div style={{ color: C.loss, fontWeight: 700, fontSize: 22, marginBottom: 12, letterSpacing: "0.5px" }}>
      ✗ WRONG
    </div>
    {children}
  </div>
);

export const RightBox: React.FC<{ children: React.ReactNode; style?: CSSProperties }> = ({ children, style }) => (
  <div style={{
    background: C.profitBg, border: `2.5px solid ${C.profitBd}`, borderRadius: 16,
    padding: "22px 36px", flex: 1,
    fontFamily: F, fontSize: 36, color: C.dark, lineHeight: 1.7, ...style,
  }}>
    <div style={{ color: C.profit, fontWeight: 700, fontSize: 22, marginBottom: 12, letterSpacing: "0.5px" }}>
      ✓ CORRECT
    </div>
    {children}
  </div>
);

// ─── BounceIn ─────────────────────────────────────────────────────────────────
// Smooth scale-in — overdamped spring, NO overshoot or bounce.
export const BounceIn: React.FC<{ at: number; style?: CSSProperties; children: React.ReactNode }> = ({ at, style, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - at);
  const scale = spring({ frame: elapsed, fps, config: { damping: 22, stiffness: 180, mass: 0.8 }, from: 0.92, to: 1 });
  const opacity = interpolate(frame, [at, at + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <div style={{ opacity, transform: `scale(${scale})`, display: "inline-block", ...style }}>{children}</div>;
};

// ─── SlideIn ──────────────────────────────────────────────────────────────────
// Smooth spring translate from left/right/top — dist reduced to 20px default.
export const SlideIn: React.FC<{
  at: number; from?: "left" | "right" | "top"; dist?: number;
  style?: CSSProperties; children: React.ReactNode;
}> = ({ at, from = "left", dist = 20, style, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - at);
  const prog = spring({ frame: elapsed, fps, config: { damping: 22, stiffness: 140, mass: 0.9 }, from: 0, to: 1 });
  const opacity = interpolate(frame, [at, at + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tx = from === "left" ? (1 - prog) * -dist : from === "right" ? (1 - prog) * dist : 0;
  const ty = from === "top" ? (1 - prog) * -dist : 0;
  return (
    <div style={{ opacity, transform: `translate(${tx}px, ${ty}px)`, ...style }}>
      {children}
    </div>
  );
};

// ─── DrawArrow ────────────────────────────────────────────────────────────────
// Line grows right then arrowhead fades in — unchanged, it already looks clean.
export const DrawArrow: React.FC<{
  at: number; color?: string; lineLen?: number; vertical?: boolean;
}> = ({ at, color = "#AAAAAA", lineLen = 72, vertical = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const prog = spring({ frame: Math.max(0, frame - at), fps, config: { damping: 16, stiffness: 110 }, from: 0, to: 1 });
  const headOpacity = interpolate(prog, [0.8, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  if (vertical) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 4, height: lineLen * prog, background: color, borderRadius: 2 }} />
        <div style={{
          opacity: headOpacity, width: 0, height: 0,
          borderLeft: "9px solid transparent", borderRight: "9px solid transparent",
          borderTop: `16px solid ${color}`,
        }} />
      </div>
    );
  }
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: lineLen * prog, height: 4, background: color, borderRadius: 2 }} />
      <div style={{
        opacity: headOpacity, width: 0, height: 0,
        borderTop: "9px solid transparent", borderBottom: "9px solid transparent",
        borderLeft: `16px solid ${color}`,
      }} />
    </div>
  );
};

// ─── CountUp ──────────────────────────────────────────────────────────────────
// Spring-eased number counter for key result values.
export const CountUp: React.FC<{
  from?: number; to: number; at: number;
  suffix?: string; color?: string; size?: number; style?: CSSProperties;
}> = ({ from = 0, to, at, suffix = "", color = C.dark, size = 72, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const prog = spring({ frame: Math.max(0, frame - at), fps, config: { damping: 18, stiffness: 80, mass: 1 }, from: 0, to: 1 });
  const value = Math.round(from + (to - from) * prog);
  const opacity = interpolate(frame, [at, at + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <span style={{ fontFamily: F, fontWeight: 700, fontSize: size, color, opacity, lineHeight: 1, ...style }}>
      {value}{suffix}
    </span>
  );
};

// ─── Pulse ────────────────────────────────────────────────────────────────────
// Very subtle sine-wave scale beat (±0.7%) — barely perceptible, keeps result alive.
export const Pulse: React.FC<{ at: number; style?: CSSProperties; children: React.ReactNode }> = ({ at, style, children }) => {
  const frame = useCurrentFrame();
  const elapsed = Math.max(0, frame - (at + 20));
  const beat = Math.sin((elapsed / 60) * Math.PI) * 0.007 + 1;
  const opacity = interpolate(frame, [at, at + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ opacity, transform: `scale(${beat})`, display: "inline-block", ...style }}>
      {children}
    </div>
  );
};

// ─── StampIn ──────────────────────────────────────────────────────────────────
// Gentle drop-in from -10px (not -60px) — smooth, professional feel.
export const StampIn: React.FC<{ at: number; style?: CSSProperties; children: React.ReactNode }> = ({ at, style, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - at);
  const ty = spring({ frame: elapsed, fps, config: { damping: 22, stiffness: 180, mass: 0.8 }, from: -10, to: 0 });
  const opacity = interpolate(frame, [at, at + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ opacity, transform: `translateY(${ty}px)`, display: "inline-block", ...style }}>
      {children}
    </div>
  );
};
