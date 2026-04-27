import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { KeywordChip } from "../components/KeywordChip";
import { COLORS, FONTS } from "../constants";

const lines = [
  "V - Vinculum / Bar",
  "B - Brackets",
  "O - Of",
  "D - Division",
  "M - Multiplication",
  "A - Addition",
  "S - Subtraction",
];

export const SceneVbodmas: React.FC = () => {
  const frame = useCurrentFrame();
  const shownLetters = Math.floor(frame / 8);
  const head = "VBODMAS".slice(0, shownLetters);

  return (
    <AbsoluteFill style={{ padding: "90px 140px", color: COLORS.text }}>
      <div
        style={{
          fontFamily: FONTS.handwritten,
          fontSize: 180,
          color: COLORS.blue,
          letterSpacing: 10,
          fontWeight: 700,
        }}
      >
        {head}
      </div>
      <div style={{ marginTop: 40, fontFamily: FONTS.body, fontSize: 44 }}>
        {lines.map((line, index) => {
          const localStart = 40 + index * 14;
          const opacity = interpolate(frame, [localStart, localStart + 8], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div key={line} style={{ opacity, marginBottom: 12 }}>
              {line}
            </div>
          );
        })}
      </div>
      <KeywordChip text="Your biggest weapon" color={COLORS.yellow} x={1320} y={120} />
    </AbsoluteFill>
  );
};
