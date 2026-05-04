import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  a: number;
  b: number;
  labelA?: string;
  labelB?: string;
  startFrame: number;
  accentColor?: string;
};

const BAR_MAX = 680;

export const RatioBars: React.FC<Props> = ({
  a,
  b,
  labelA = "a",
  labelB = "b",
  startFrame,
  accentColor = D.blue,
}) => {
  const frame = useCurrentFrame();
  const total = a + b;

  const progress = interpolate(frame, [startFrame, startFrame + 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const notationOp = interpolate(frame, [startFrame - 10, startFrame + 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const descOp = interpolate(frame, [startFrame + 36, startFrame + 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const barColor2 = D.green;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
      {/* Ratio notation */}
      <div
        style={{
          opacity: notationOp,
          display: "flex",
          alignItems: "baseline",
          gap: 16,
        }}
      >
        <span style={{ fontFamily: FONTS.body, fontSize: 120, fontWeight: 700, color: accentColor, lineHeight: 1 }}>
          {a}
        </span>
        <span style={{ fontFamily: FONTS.body, fontSize: 80, fontWeight: 300, color: D.textLabel, lineHeight: 1 }}>
          :
        </span>
        <span style={{ fontFamily: FONTS.body, fontSize: 120, fontWeight: 700, color: barColor2, lineHeight: 1 }}>
          {b}
        </span>
      </div>

      {/* Bars */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {[{ val: a, label: labelA, color: accentColor }, { val: b, label: labelB, color: barColor2 }].map(
          ({ val, label, color }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <span
                style={{
                  minWidth: 56,
                  fontFamily: FONTS.body,
                  fontSize: D.sz.body,
                  fontWeight: 700,
                  color,
                }}
              >
                {label}
              </span>
              <div
                style={{
                  height: 28,
                  width: `${progress * (val / total) * BAR_MAX}px`,
                  backgroundColor: color,
                  borderRadius: 6,
                  transition: "none",
                }}
              />
              <span style={{ fontFamily: FONTS.body, fontSize: D.sz.label, color: D.textSecondary }}>
                {val} {val === 1 ? "part" : "parts"}
              </span>
            </div>
          )
        )}
      </div>

      {/* Total description */}
      <div
        style={{
          opacity: descOp,
          fontFamily: FONTS.body,
          fontSize: D.sz.label,
          color: D.textLabel,
          marginLeft: 80,
        }}
      >
        Total = {total} parts
      </div>
    </div>
  );
};
