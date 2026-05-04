import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  left: string;
  right: string;
  note?: string;
  startFrame: number;
  accentColor?: string;
};

export const ComparisonCard: React.FC<Props> = ({
  left,
  right,
  note,
  startFrame,
  accentColor = D.yellow,
}) => {
  const frame = useCurrentFrame();

  const leftOp = interpolate(frame, [startFrame, startFrame + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const leftX = interpolate(frame, [startFrame, startFrame + 18], [-40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const vsOp = interpolate(frame, [startFrame + 20, startFrame + 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rightOp = interpolate(frame, [startFrame + 22, startFrame + 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rightX = interpolate(frame, [startFrame + 22, startFrame + 40], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const noteOp = interpolate(frame, [startFrame + 48, startFrame + 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cardStyle: React.CSSProperties = {
    border: `2px solid ${accentColor}44`,
    borderRadius: D.cardR,
    padding: "36px 44px",
    backgroundColor: `${accentColor}0D`,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  };

  const lines = (text: string) => text.split("\n");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28, width: "100%" }}>
      <div style={{ display: "flex", alignItems: "stretch", gap: 24 }}>
        {/* Left card */}
        <div style={{ ...cardStyle, opacity: leftOp, transform: `translateX(${leftX}px)` }}>
          {lines(left).map((line, i) => (
            <span
              key={i}
              style={{
                fontFamily: FONTS.body,
                fontSize: i === 0 ? 64 : D.sz.body,
                fontWeight: i === 0 ? 700 : 400,
                color: i === 0 ? accentColor : D.textSecondary,
                lineHeight: 1.2,
              }}
            >
              {line}
            </span>
          ))}
        </div>

        {/* VS separator */}
        <div
          style={{
            opacity: vsOp,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 8px",
          }}
        >
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: D.sz.label,
              fontWeight: 700,
              color: D.textLabel,
              letterSpacing: "0.1em",
            }}
          >
            VS
          </span>
        </div>

        {/* Right card */}
        <div style={{ ...cardStyle, opacity: rightOp, transform: `translateX(${rightX}px)`, borderColor: `${D.red}44`, backgroundColor: `${D.red}0D` }}>
          {lines(right).map((line, i) => (
            <span
              key={i}
              style={{
                fontFamily: FONTS.body,
                fontSize: i === 0 ? 64 : D.sz.body,
                fontWeight: i === 0 ? 700 : 400,
                color: i === 0 ? D.red : D.textSecondary,
                lineHeight: 1.2,
              }}
            >
              {line}
            </span>
          ))}
        </div>
      </div>

      {note && (
        <div
          style={{
            opacity: noteOp,
            fontFamily: FONTS.body,
            fontSize: D.sz.body,
            color: D.textSecondary,
            textAlign: "center",
          }}
        >
          {note}
        </div>
      )}
    </div>
  );
};
