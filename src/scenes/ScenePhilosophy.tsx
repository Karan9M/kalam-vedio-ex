import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../constants";

export const ScenePhilosophy: React.FC = () => {
  const frame = useCurrentFrame();
  const tilt = interpolate(frame, [20, 80], [0, -12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{ justifyContent: "center", alignItems: "center", color: COLORS.text }}
    >
      <div
        style={{
          width: 600,
          height: 10,
          backgroundColor: COLORS.yellow,
          transform: `rotate(${tilt}deg)`,
          borderRadius: 999,
          marginBottom: 24,
        }}
      />
      <div
        style={{
          display: "flex",
          gap: 240,
          fontFamily: FONTS.body,
          fontSize: 56,
          fontWeight: 700,
        }}
      >
        <div style={{ color: COLORS.green }}>Logic</div>
        <div style={{ color: COLORS.red }}>Calculation</div>
      </div>
      <div style={{ marginTop: 80, fontFamily: FONTS.handwritten, fontSize: 90 }}>
        Speed x Accuracy = Mastery
      </div>
    </AbsoluteFill>
  );
};
