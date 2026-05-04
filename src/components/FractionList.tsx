import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";

type Item = { fraction: string; percent: string; decimal?: string };

type Props = {
  items: Item[];
  startFrame: number;
  itemDelay?: number;
  accentColor?: string;
};

const ITEM_COLORS = [D.blue, D.green, D.yellow, D.red];

export const FractionList: React.FC<Props> = ({
  items,
  startFrame,
  itemDelay = 18,
  accentColor = D.blue,
}) => {
  const frame = useCurrentFrame();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {items.map((item, i) => {
        const itemStart = startFrame + i * itemDelay;
        const opacity = interpolate(frame, [itemStart, itemStart + 14], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const translateY = interpolate(frame, [itemStart, itemStart + 14], [20, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const color = ITEM_COLORS[i % ITEM_COLORS.length];

        return (
          <div
            key={i}
            style={{
              opacity,
              transform: `translateY(${translateY}px)`,
              display: "flex",
              alignItems: "center",
              gap: 32,
            }}
          >
            {/* Colored dot */}
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: color,
                flexShrink: 0,
              }}
            />
            {/* Fraction */}
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: 72,
                fontWeight: 700,
                color: D.textPrimary,
                minWidth: 160,
              }}
            >
              {item.fraction}
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: 52, fontWeight: 300, color: D.textLabel }}>
              =
            </span>
            {/* Percent */}
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: 72,
                fontWeight: 700,
                color,
              }}
            >
              {item.percent}
            </span>
            {item.decimal && (
              <span style={{ fontFamily: FONTS.body, fontSize: D.sz.label, color: D.textLabel }}>
                ({item.decimal})
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
