import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  items: string[];
  startFrame: number;
  itemDelay?: number;
  accentColor?: string;
};

const STEP_COLORS = [D.blue, D.green, D.yellow, D.red];

export const KeySteps: React.FC<Props> = ({
  items,
  startFrame,
  itemDelay = 20,
  accentColor = D.blue,
}) => {
  const frame = useCurrentFrame();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {items.map((item, i) => {
        const itemStart = startFrame + i * itemDelay;
        const opacity = interpolate(frame, [itemStart, itemStart + 15], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const translateX = interpolate(frame, [itemStart, itemStart + 15], [-28, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const color = STEP_COLORS[i % STEP_COLORS.length];

        return (
          <div
            key={i}
            style={{
              opacity,
              transform: `translateX(${translateX}px)`,
              display: "flex",
              alignItems: "flex-start",
              gap: 28,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 4,
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 28,
                  fontWeight: 700,
                  color: D.bg,
                }}
              >
                {i + 1}
              </span>
            </div>
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: D.sz.body,
                fontWeight: 500,
                color: D.textPrimary,
                lineHeight: 1.4,
              }}
            >
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
};
