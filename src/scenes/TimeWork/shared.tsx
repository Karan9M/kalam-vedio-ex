import {
  AbsoluteFill, Img, interpolate, spring,
  useCurrentFrame, useVideoConfig,
} from "remotion";
import type { CSSProperties } from "react";
import { FONTS } from "../../fonts";

export const C = {
  blue:     "#2563EB",
  orange:   "#EA580C",
  green:    "#059669",
  red:      "#DC2626",
  title:    "#1E3A8A",
  badge:    "#0E7490",
  bg:       "#FAFAF7",
  dark:     "#1F2937",
  gray:     "#6B7280",
  blueBg:   "#EFF6FF",
  blueBd:   "#93C5FD",
  orangeBg: "#FFF7ED",
  orangeBd: "#FDBA74",
  greenBg:  "#F0FDF4",
  greenBd:  "#86EFAC",
  redBg:    "#FEF2F2",
  redBd:    "#FCA5A5",
  yellowBg: "#FEFCE8",
  yellowBd: "#FDE047",
  purpleBg: "#F5F3FF",
  purpleBd: "#C4B5FD",
} as const;

export const F = FONTS.body;

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

export const Reveal: React.FC<{
  at: number; end?: number; style?: CSSProperties; children: React.ReactNode;
}> = ({ at, end, style, children }) => {
  const frame = useCurrentFrame();
  const fadeIn  = interpolate(frame, [at, at + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = end != null ? interpolate(frame, [end, end + 8], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
  const ty = interpolate(frame, [at, at + 14], [18, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ opacity: Math.min(fadeIn, fadeOut), transform: `translateY(${ty}px)`, ...style }}>
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

export const SlideBase: React.FC<{
  num: number; title: string; children: React.ReactNode; padTop?: number;
}> = ({ num, title, children, padTop = 58 }) => (
  <AbsoluteFill style={{ backgroundColor: C.bg, padding: `${padTop}px 88px 48px` }}>
    <Reveal at={0} style={{ display: "flex", alignItems: "center", gap: 26, marginBottom: 36 }}>
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        background: C.badge, color: "#fff", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 36, fontWeight: 800, fontFamily: F,
      }}>{num}</div>
      <div style={{ fontSize: 54, fontWeight: 800, color: C.title, fontFamily: F, lineHeight: 1 }}>
        {title}
      </div>
    </Reveal>
    {children}
  </AbsoluteFill>
);

export const Pill: React.FC<{
  color: string; bg: string; border: string; children: React.ReactNode; size?: number;
}> = ({ color, bg, border, children, size = 40 }) => (
  <span style={{
    background: bg, border: `2.5px solid ${border}`, borderRadius: 10,
    color, fontFamily: F, fontWeight: 700, fontSize: size,
    padding: "6px 20px", display: "inline-block", lineHeight: 1.3,
  }}>
    {children}
  </span>
);

export const RuleBox: React.FC<{
  color: string; bg: string; border: string;
  children: React.ReactNode; style?: CSSProperties;
}> = ({ color, bg, border, children, style }) => (
  <div style={{
    background: bg, border: `2.5px dashed ${border}`, borderRadius: 14,
    color, fontFamily: F, fontWeight: 600, fontSize: 36,
    padding: "14px 28px", lineHeight: 1.5, ...style,
  }}>
    {children}
  </div>
);

export const Row: React.FC<{
  gap?: number; align?: string; style?: CSSProperties; children: React.ReactNode;
}> = ({ gap = 24, align = "center", style, children }) => (
  <div style={{ display: "flex", flexDirection: "row", alignItems: align, gap, ...style }}>
    {children}
  </div>
);

// CSS fraction: numerator / bar / denominator
export const Frac: React.FC<{
  num: React.ReactNode; den: React.ReactNode; size?: number; color?: string;
}> = ({ num, den, size = 34, color = "#1F2937" }) => (
  <span style={{
    display: "inline-flex", flexDirection: "column", alignItems: "center",
    verticalAlign: "middle", margin: "0 4px", fontFamily: F, fontWeight: 700, color,
  }}>
    <span style={{ fontSize: size, lineHeight: 1.1 }}>{num}</span>
    <span style={{ display: "block", height: 3, background: color, width: "100%", minWidth: 28, margin: "3px 0" }} />
    <span style={{ fontSize: size, lineHeight: 1.1 }}>{den}</span>
  </span>
);
