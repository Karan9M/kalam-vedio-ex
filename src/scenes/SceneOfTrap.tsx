import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { KeywordChip } from "../components/KeywordChip";
import { CaptionOverlay } from "../components/CaptionOverlay";
import { COLORS } from "../constants";
import { FONTS } from "../fonts";

export const SceneOfTrap: React.FC = () => {
  const frame = useCurrentFrame();
  const pop = interpolate(frame, [0, 20], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ padding: "80px 120px", color: COLORS.text }}>
      <div style={{ fontFamily: FONTS.handwritten, fontSize: 120, color: COLORS.yellow }}>
        1/2 of 18 / 3
      </div>
      <div
        style={{
          display: "flex",
          gap: 80,
          marginTop: 80,
          fontFamily: FONTS.body,
          fontSize: 44,
          transform: `scale(${pop})`,
          transformOrigin: "top left",
        }}
      >
        <div
          style={{ flex: 1, border: `3px solid ${COLORS.red}`, borderRadius: 20, padding: 24 }}
        >
          <div style={{ color: COLORS.red, fontWeight: 700, marginBottom: 12 }}>Wrong Path</div>
          <div>18 / 3 = 6</div>
          <div>1/2 of 6 = 3</div>
          <div style={{ marginTop: 16, color: COLORS.red, fontSize: 60 }}>X</div>
        </div>
        <div
          style={{ flex: 1, border: `3px solid ${COLORS.green}`, borderRadius: 20, padding: 24 }}
        >
          <div style={{ color: COLORS.green, fontWeight: 700, marginBottom: 12 }}>
            Right Path
          </div>
          <div>1/2 of 18 = 9</div>
          <div>9 / 3 = 3</div>
          <div style={{ marginTop: 16, color: COLORS.green, fontSize: 60 }}>✓</div>
        </div>
      </div>
      <KeywordChip text="'Of' solves first" color={COLORS.yellow} x={1400} y={130} />
      <CaptionOverlay sceneName="scene-oftrap" />
    </AbsoluteFill>
  );
};
