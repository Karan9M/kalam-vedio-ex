import { interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../constants";

type KeywordChipProps = {
  text: string;
  color?: string;
  startFrame?: number;
  x?: number;
  y?: number;
};

export const KeywordChip: React.FC<KeywordChipProps> = ({
  text,
  color = COLORS.blue,
  startFrame = 0,
  x = 0,
  y = 0,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const slide = interpolate(frame, [startFrame, startFrame + 18], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `translateY(${slide}px)`,
        opacity,
        padding: "14px 24px",
        borderRadius: 999,
        border: `2px solid ${color}`,
        backgroundColor: "rgba(0,0,0,0.35)",
        fontFamily: FONTS.body,
        fontWeight: 700,
        fontSize: 30,
        color,
      }}
    >
      {text}
    </div>
  );
};
