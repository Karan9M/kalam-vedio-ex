import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";

type Bar = { label: string; value: number; color?: string };

type Props = {
  bars: Bar[];
  average?: number;
  startFrame: number;
  maxHeight?: number;
};

export const BarChart: React.FC<Props> = ({
  bars,
  average,
  startFrame,
  maxHeight = 340,
}) => {
  const frame = useCurrentFrame();
  const maxVal = Math.max(...bars.map((b) => b.value), average ?? 0);

  const barProgress = interpolate(frame, [startFrame, startFrame + 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const avgOp = interpolate(frame, [startFrame + 38, startFrame + 52], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const defaultColors = [D.red, D.yellow, D.green, D.blue];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0 }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 48,
          position: "relative",
          paddingBottom: 8,
        }}
      >
        {bars.map((bar, i) => {
          const color = bar.color ?? defaultColors[i % defaultColors.length];
          const targetH = (bar.value / maxVal) * maxHeight;
          const currentH = barProgress * targetH;

          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  fontFamily: FONTS.body,
                  fontSize: D.sz.label,
                  fontWeight: 700,
                  color,
                  opacity: barProgress,
                }}
              >
                {bar.value}
              </span>
              <div
                style={{
                  width: 100,
                  height: currentH,
                  backgroundColor: color,
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <span style={{ fontFamily: FONTS.body, fontSize: D.sz.label, color: D.textSecondary }}>
                {bar.label}
              </span>
            </div>
          );
        })}

        {/* Average line */}
        {average !== undefined && (
          <div
            style={{
              opacity: avgOp,
              position: "absolute",
              left: 0,
              right: 0,
              bottom: (average / maxVal) * maxHeight + 8,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                flex: 1,
                height: 3,
                backgroundColor: D.blue,
                borderRadius: 2,
                boxShadow: `0 0 8px ${D.blue}88`,
              }}
            />
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: D.sz.label,
                fontWeight: 700,
                color: D.blue,
                whiteSpace: "nowrap",
              }}
            >
              avg = {average}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
