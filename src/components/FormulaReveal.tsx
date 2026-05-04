import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  lhs: string;
  rhs: string;
  note?: string;
  startFrame: number;
  accentColor?: string;
  fontSize?: number;
};

export const FormulaReveal: React.FC<Props> = ({
  lhs,
  rhs,
  note,
  startFrame,
  accentColor = D.yellow,
  fontSize = 88,
}) => {
  const frame = useCurrentFrame();

  const lhsOp = interpolate(frame, [startFrame, startFrame + 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lhsX = interpolate(frame, [startFrame, startFrame + 14], [-20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const eqOp = interpolate(frame, [startFrame + 16, startFrame + 26], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rhsOp = interpolate(frame, [startFrame + 28, startFrame + 42], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rhsX = interpolate(frame, [startFrame + 28, startFrame + 42], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const noteOp = interpolate(frame, [startFrame + 50, startFrame + 62], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <span
          style={{
            opacity: lhsOp,
            transform: `translateX(${lhsX}px)`,
            fontFamily: FONTS.body,
            fontSize,
            fontWeight: 700,
            color: accentColor,
            lineHeight: 1.1,
          }}
        >
          {lhs}
        </span>
        <span
          style={{
            opacity: eqOp,
            fontFamily: FONTS.body,
            fontSize: fontSize * 0.8,
            fontWeight: 300,
            color: D.textLabel,
            lineHeight: 1,
          }}
        >
          =
        </span>
        <span
          style={{
            opacity: rhsOp,
            transform: `translateX(${rhsX}px)`,
            fontFamily: FONTS.body,
            fontSize,
            fontWeight: 700,
            color: D.textPrimary,
            lineHeight: 1.1,
          }}
        >
          {rhs}
        </span>
      </div>
      {note && (
        <div
          style={{
            opacity: noteOp,
            fontFamily: FONTS.body,
            fontSize: D.sz.body,
            color: D.textSecondary,
          }}
        >
          {note}
        </div>
      )}
    </div>
  );
};
