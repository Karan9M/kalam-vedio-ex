import { SceneShell } from "../components/SceneShell";
import { RuleBox } from "../components/RuleBox";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  label: string;
  heading: string;
  steps: Array<{ key: string; text: string; color?: string }>;
  takeaway?: string;
  accentColor?: string;
};

export const ProcessScene: React.FC<Props> = ({
  label,
  heading,
  steps,
  takeaway,
  accentColor = D.blue,
}) => {
  return (
    <SceneShell label={label} accentColor={accentColor}>
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 92,
          fontWeight: 700,
          color: accentColor,
          marginBottom: 32,
        }}
      >
        {heading}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
        {steps.map((step) => (
          <div
            key={step.key}
            style={{
              display: "flex",
              gap: 16,
              alignItems: "baseline",
              fontFamily: FONTS.body,
              fontSize: D.sz.body,
              color: step.color ?? D.textPrimary,
            }}
          >
            <span style={{ minWidth: 42, fontWeight: 700, color: accentColor }}>{step.key}</span>
            <span style={{ color: D.textLabel }}>—</span>
            <span>{step.text}</span>
          </div>
        ))}
      </div>
      {takeaway ? (
        <RuleBox color={accentColor} startFrame={42} style={{ alignSelf: "flex-start" }}>
          {takeaway}
        </RuleBox>
      ) : null}
    </SceneShell>
  );
};
