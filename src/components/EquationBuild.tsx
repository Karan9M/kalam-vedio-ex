import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  parts: string[];
  startFrame: number;
  partDelay?: number;
  highlightIndex?: number;
  fontSize?: number;
};

export const EquationBuild: React.FC<Props> = ({
  parts,
  startFrame,
  partDelay = 14,
  highlightIndex,
  fontSize = 96,
}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 20,
        justifyContent: "center",
      }}
    >
      {parts.map((part, i) => {
        const partStart = startFrame + i * partDelay;
        const opacity = interpolate(frame, [partStart, partStart + 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const translateX = interpolate(frame, [partStart, partStart + 12], [24, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        const isHighlighted = highlightIndex === i;
        const isOperator = ["=", "+", "−", "-", "×", "÷", "then"].includes(part);

        return (
          <span
            key={i}
            style={{
              opacity,
              transform: `translateX(${translateX}px)`,
              fontFamily: FONTS.body,
              fontSize: isOperator ? fontSize * 0.75 : fontSize,
              fontWeight: isOperator ? 300 : 700,
              color: isHighlighted
                ? D.yellow
                : isOperator
                ? D.textSecondary
                : D.textPrimary,
              lineHeight: 1,
            }}
          >
            {part}
          </span>
        );
      })}
    </div>
  );
};
