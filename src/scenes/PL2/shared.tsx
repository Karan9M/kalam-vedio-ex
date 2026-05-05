import {
  AbsoluteFill, Img, interpolate, spring,
  useCurrentFrame, useVideoConfig,
} from "remotion";
import type { CSSProperties } from "react";
import { FONTS } from "../../fonts";

export const C = {
  profit:    "#16A34A",
  loss:      "#DC2626",
  cp:        "#1D4ED8",
  sp:        "#7C3AED",
  mp:        "#D97706",
  dark:      "#111827",
  gray:      "#6B7280",
  lightGray: "#9CA3AF",
  bg:        "#FFFFFF",
  profitBg:  "#F0FDF4",
  profitBd:  "#86EFAC",
  lossBg:    "#FEF2F2",
  lossBd:    "#FCA5A5",
  cpBg:      "#EFF6FF",
  cpBd:      "#93C5FD",
  spBg:      "#F5F3FF",
  spBd:      "#C4B5FD",
  mpBg:      "#FFFBEB",
  mpBd:      "#FCD34D",
  badge:     "#0E7490",
} as const;

export const F = FONTS.body;

// AnimImg stays the same
export const AnimImg: React.FC<{
  src: string; revealFrame: number; endFrame?: number;
  style?: CSSProperties; origin?: string;
}> = ({ src, revealFrame, endFrame, style, origin = "center" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - revealFrame);
  const scale = spring({ frame: elapsed, fps, config: { damping: 14, stiffness: 180, mass: 0.9 }, from: 0.88, to: 1 });
  const fadeIn  = interpolate(frame, [revealFrame, revealFrame + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
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

// Reveal: fade-in (and optional fade-out). For accumulating items.
export const Reveal: React.FC<{
  at: number; end?: number; style?: CSSProperties; children: React.ReactNode;
}> = ({ at, end, style, children }) => {
  const frame = useCurrentFrame();
  const fadeIn  = interpolate(frame, [at, at + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = end != null ? interpolate(frame, [end, end + 10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
  const ty = interpolate(frame, [at, at + 14], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ opacity: Math.min(fadeIn, fadeOut), transform: `translateY(${ty}px)`, ...style }}>
      {children}
    </div>
  );
};

// Moment: ONE concept at a time. Position absolute, fills the content area.
// Use this for exclusive visual moments (one replaces another).
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

export const Pop: React.FC<{ at: number; style?: CSSProperties; children: React.ReactNode }> = ({ at, style, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - at);
  const scale = spring({ frame: elapsed, fps, config: { damping: 12, stiffness: 200, mass: 0.8 }, from: 0.6, to: 1 });
  const opacity = interpolate(frame, [at, at + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <div style={{ opacity, transform: `scale(${scale})`, display: "inline-block", ...style }}>{children}</div>;
};

// SlideBase: thin title bar at top, then position:relative content area for Moments.
export const SlideBase: React.FC<{
  num: number; title: string; children: React.ReactNode;
  padTop?: number; showNum?: boolean;
}> = ({ num, title, children, padTop = 48, showNum = true }) => (
  <AbsoluteFill style={{ backgroundColor: C.bg, padding: `${padTop}px 96px 44px`, display: "flex", flexDirection: "column" }}>
    <Reveal at={0} style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 28, flexShrink: 0 }}>
      {showNum && (
        <div style={{
          width: 62, height: 62, borderRadius: "50%",
          background: C.badge, color: "#fff", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 30, fontWeight: 800, fontFamily: F,
        }}>{num}</div>
      )}
      <div style={{ fontSize: 46, fontWeight: 900, color: "#1E3A8A", fontFamily: F, lineHeight: 1, letterSpacing: "-0.5px" }}>
        {title}
      </div>
    </Reveal>
    {/* Content area  -  Moment children use position:absolute within this */}
    <div style={{ position: "relative", flex: 1 }}>
      {children}
    </div>
  </AbsoluteFill>
);

export const Row: React.FC<{
  gap?: number; align?: string; style?: CSSProperties; children: React.ReactNode;
}> = ({ gap = 24, align = "center", style, children }) => (
  <div style={{ display: "flex", flexDirection: "row", alignItems: align, gap, ...style }}>
    {children}
  </div>
);

// Tag pill for CP / SP / MP labels
export const Tag: React.FC<{
  text: string; color: string; bg: string; border: string;
  size?: number; style?: CSSProperties;
}> = ({ text, color, bg, border, size = 52, style }) => (
  <div style={{
    background: bg, border: `3px solid ${border}`, borderRadius: 16,
    padding: "16px 40px",
    fontFamily: F, fontWeight: 900, fontSize: size, color,
    display: "inline-block", ...style,
  }}>
    {text}
  </div>
);

// Big number / headline
export const BigLabel: React.FC<{
  children: React.ReactNode; color?: string; size?: number; style?: CSSProperties;
}> = ({ children, color = C.dark, size = 88, style }) => (
  <div style={{ fontFamily: F, fontWeight: 900, fontSize: size, color, lineHeight: 1, ...style }}>
    {children}
  </div>
);

// Formula card
export const Formula: React.FC<{
  children: React.ReactNode; color?: string; bg?: string; border?: string; style?: CSSProperties;
}> = ({ children, color = C.dark, bg = "#F8FAFC", border = "#CBD5E1", style }) => (
  <div style={{
    background: bg, border: `3px solid ${border}`, borderRadius: 20,
    padding: "28px 56px",
    fontFamily: F, fontWeight: 800, fontSize: 56, color,
    display: "inline-flex", alignItems: "center", gap: 16,
    lineHeight: 1.2, ...style,
  }}>
    {children}
  </div>
);

// Comparison card (for CP vs SP, profit vs loss)
export const Card: React.FC<{
  headline: React.ReactNode; sub?: React.ReactNode;
  color: string; bg: string; border: string;
  style?: CSSProperties;
}> = ({ headline, sub, color, bg, border, style }) => (
  <div style={{
    background: bg, border: `3px solid ${border}`, borderRadius: 24,
    padding: "32px 48px", minWidth: 300,
    display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
    ...style,
  }}>
    <div style={{ fontFamily: F, fontWeight: 900, fontSize: 72, color, lineHeight: 1 }}>
      {headline}
    </div>
    {sub && (
      <div style={{ fontFamily: F, fontSize: 34, color: C.gray, textAlign: "center", lineHeight: 1.4 }}>
        {sub}
      </div>
    )}
  </div>
);

// Highlighted rule / callout box
export const CallOut: React.FC<{
  children: React.ReactNode; color?: string; bg?: string; border?: string;
  dashed?: boolean; style?: CSSProperties;
}> = ({ children, color = C.dark, bg = "#FFFBEB", border = "#FCD34D", dashed = false, style }) => (
  <div style={{
    background: bg, border: `2.5px ${dashed ? "dashed" : "solid"} ${border}`, borderRadius: 18,
    padding: "20px 40px",
    fontFamily: F, fontWeight: 700, fontSize: 40, color, lineHeight: 1.5, ...style,
  }}>
    {children}
  </div>
);

// CSS fraction
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

// Wrong / Right split boxes
export const WrongBox: React.FC<{ children: React.ReactNode; style?: CSSProperties }> = ({ children, style }) => (
  <div style={{
    background: C.lossBg, border: `3px solid ${C.lossBd}`, borderRadius: 20,
    padding: "28px 40px", flex: 1,
    fontFamily: F, fontSize: 38, color: C.dark, lineHeight: 1.7, ...style,
  }}>
    <div style={{ color: C.loss, fontWeight: 900, fontSize: 26, marginBottom: 14, letterSpacing: "1px" }}>
      WRONG
    </div>
    {children}
  </div>
);

export const RightBox: React.FC<{ children: React.ReactNode; style?: CSSProperties }> = ({ children, style }) => (
  <div style={{
    background: C.profitBg, border: `3px solid ${C.profitBd}`, borderRadius: 20,
    padding: "28px 40px", flex: 1,
    fontFamily: F, fontSize: 38, color: C.dark, lineHeight: 1.7, ...style,
  }}>
    <div style={{ color: C.profit, fontWeight: 900, fontSize: 26, marginBottom: 14, letterSpacing: "1px" }}>
      CORRECT
    </div>
    {children}
  </div>
);

// ---- Shared animation helpers ----

// BounceIn: elastic spring pop wrapper  -  damping 7 = satisfying overshoot
export const BounceIn: React.FC<{ at: number; style?: CSSProperties; children: React.ReactNode }> = ({ at, style, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - at);
  const scale = spring({ frame: elapsed, fps, config: { damping: 7, stiffness: 300, mass: 0.7 }, from: 0, to: 1 });
  const opacity = interpolate(frame, [at, at + 7], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <div style={{ opacity, transform: `scale(${scale})`, display: "inline-block", ...style }}>{children}</div>;
};

// SlideIn: spring translate from left/right + fade
export const SlideIn: React.FC<{
  at: number; from?: "left" | "right" | "top"; dist?: number;
  style?: CSSProperties; children: React.ReactNode;
}> = ({ at, from = "left", dist = 30, style, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - at);
  const prog = spring({ frame: elapsed, fps, config: { damping: 13, stiffness: 160, mass: 0.9 }, from: 0, to: 1 });
  const opacity = interpolate(frame, [at, at + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tx = from === "left" ? (1 - prog) * -dist : from === "right" ? (1 - prog) * dist : 0;
  const ty = from === "top" ? (1 - prog) * -dist : 0;
  return (
    <div style={{ opacity, transform: `translate(${tx}px, ${ty}px)`, ...style }}>
      {children}
    </div>
  );
};

// DrawArrow: line grows right then arrowhead appears
export const DrawArrow: React.FC<{
  at: number; color?: string; lineLen?: number; vertical?: boolean;
}> = ({ at, color = "#9CA3AF", lineLen = 72, vertical = false }) => {
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
