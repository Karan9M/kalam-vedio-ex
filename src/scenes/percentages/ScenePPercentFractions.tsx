import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { KeywordChip } from "../../components/KeywordChip";
import { COLORS, FONTS } from "../../constants";

const mappings = ["10% = 1/10", "12.5% = 1/8", "33.33% = 1/3"];

export const ScenePPercentFractions: React.FC = () => {
  const frame = useCurrentFrame();
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ padding: "90px 120px", color: COLORS.text }}>
      <div
        style={{
          fontFamily: FONTS.handwritten,
          fontSize: 110,
          color: COLORS.yellow,
          opacity: titleOpacity,
        }}
      >
        Percentage = Per Hundred
      </div>
      <div style={{ marginTop: 48, fontFamily: FONTS.body, fontSize: 64 }}>
        {mappings.map((item, index) => {
          const start = 22 + index * 20;
          const opacity = interpolate(frame, [start, start + 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div key={item} style={{ opacity, marginBottom: 20, color: COLORS.blue }}>
              {item}
            </div>
          );
        })}
      </div>
      <KeywordChip
        text="Think in fractions, not decimals"
        color={COLORS.green}
        x={1180}
        y={150}
      />
    </AbsoluteFill>
  );
};
