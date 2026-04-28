import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";
import { SceneShell } from "../components/SceneShell";
import { RuleBox } from "../components/RuleBox";

const CYCLE = [
  { exp: "7¹", digit: "7" },
  { exp: "7²", digit: "9" },
  { exp: "7³", digit: "3" },
  { exp: "7⁴", digit: "1" },
];

export const SceneUnitDigit: React.FC = () => {
  const frame = useCurrentFrame();

  const problemOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });
  const cycleOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const stepOpacity = interpolate(frame, [50, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneShell label="Numbers · Unit Digit Method" accentColor={D.green}>
      {/* Problem */}
      <div
        style={{
          opacity: problemOpacity,
          fontFamily: FONTS.body,
          fontSize: 96,
          fontWeight: 700,
          color: D.textPrimary,
          letterSpacing: "-0.02em",
          marginBottom: 48,
        }}
      >
        7⁹⁵ − 3⁵⁸
      </div>

      {/* Cyclicity row */}
      <div
        style={{
          opacity: cycleOpacity,
          display: "flex",
          gap: 32,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            fontFamily: FONTS.body,
            fontSize: D.sz.body,
            color: D.textSecondary,
            alignSelf: "center",
            marginRight: 8,
          }}
        >
          Cyclicity of 7:
        </div>
        {CYCLE.map((c) => (
          <div
            key={c.exp}
            style={{
              border: `2px solid ${D.blue}40`,
              borderRadius: D.cardR,
              padding: "16px 28px",
              textAlign: "center",
              fontFamily: FONTS.body,
            }}
          >
            <div style={{ fontSize: 28, color: D.textSecondary }}>{c.exp}</div>
            <div style={{ fontSize: 48, fontWeight: 700, color: D.blue }}>
              {c.digit}
            </div>
          </div>
        ))}
      </div>

      {/* Calculation step */}
      <div
        style={{
          opacity: stepOpacity,
          fontFamily: FONTS.body,
          fontSize: D.sz.body,
          color: D.textSecondary,
          marginBottom: 40,
        }}
      >
        95 mod 4 = 3 → unit digit of 7⁹⁵ is{" "}
        <span style={{ color: D.green, fontWeight: 700 }}>3</span>
      </div>

      <RuleBox color={D.green} startFrame={80} style={{ alignSelf: "flex-start" }}>
        Don't compute — just find the unit digit via cyclicity
      </RuleBox>
    </SceneShell>
  );
};
