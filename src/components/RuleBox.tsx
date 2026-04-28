import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  children: React.ReactNode;
  color?: string;
  startFrame?: number;
  style?: React.CSSProperties;
};

export const RuleBox: React.FC<Props> = ({
  children,
  color = D.blue,
  startFrame = 0,
  style,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame, [startFrame, startFrame + 15], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        border: `2px solid ${color}`,
        borderRadius: D.cardR,
        padding: "28px 40px",
        fontFamily: FONTS.body,
        fontSize: D.sz.rule,
        fontWeight: 600,
        color: D.textPrimary,
        backgroundColor: `${color}11`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
