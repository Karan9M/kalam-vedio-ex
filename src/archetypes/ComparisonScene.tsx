import { SceneShell } from "../components/SceneShell";
import { RuleBox } from "../components/RuleBox";
import { D } from "../design";
import { FONTS } from "../fonts";

type ComparisonCard = {
  title: string;
  lines: string[];
  color: string;
};

type Props = {
  label: string;
  heading: string;
  left: ComparisonCard;
  right: ComparisonCard;
  takeaway?: string;
  accentColor?: string;
};

export const ComparisonScene: React.FC<Props> = ({
  label,
  heading,
  left,
  right,
  takeaway,
  accentColor = D.yellow,
}) => {
  return (
    <SceneShell label={label} accentColor={accentColor}>
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 92,
          fontWeight: 700,
          color: D.textPrimary,
          marginBottom: 36,
        }}
      >
        {heading}
      </div>
      <div style={{ display: "flex", gap: 40, marginBottom: 40 }}>
        {[left, right].map((card) => (
          <div
            key={card.title}
            style={{
              flex: 1,
              border: `2px solid ${card.color}`,
              borderRadius: D.cardR,
              padding: "32px 40px",
              backgroundColor: `${card.color}10`,
            }}
          >
            <div
              style={{
                fontFamily: FONTS.body,
                fontSize: D.sz.body,
                fontWeight: 700,
                color: card.color,
                marginBottom: 16,
              }}
            >
              {card.title}
            </div>
            <div
              style={{
                fontFamily: FONTS.body,
                fontSize: D.sz.body,
                color: D.textSecondary,
                lineHeight: 1.8,
                whiteSpace: "pre-line",
              }}
            >
              {card.lines.join("\n")}
            </div>
          </div>
        ))}
      </div>
      {takeaway ? (
        <RuleBox color={accentColor} startFrame={48} style={{ alignSelf: "flex-start" }}>
          {takeaway}
        </RuleBox>
      ) : null}
    </SceneShell>
  );
};
