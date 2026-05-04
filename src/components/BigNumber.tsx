import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  value: string;
  sub?: string;
  startFrame: number;
  accentColor?: string;
};

export const BigNumber: React.FC<Props> = ({
  value,
  sub,
  startFrame,
  accentColor = D.yellow,
}) => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [startFrame, startFrame + 20], [0.7, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(frame, [startFrame, startFrame + 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subOp = interpolate(frame, [startFrame + 18, startFrame + 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
      <span
        style={{
          opacity,
          transform: `scale(${scale})`,
          fontFamily: FONTS.body,
          fontSize: 180,
          fontWeight: 700,
          color: accentColor,
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      {sub && (
        <span
          style={{
            opacity: subOp,
            fontFamily: FONTS.body,
            fontSize: D.sz.sub,
            fontWeight: 400,
            color: D.textSecondary,
          }}
        >
          {sub}
        </span>
      )}
    </div>
  );
};
