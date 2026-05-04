import { interpolate, useCurrentFrame } from "remotion";
import { SceneShell } from "../components/SceneShell";
import { RuleBox } from "../components/RuleBox";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  label: string;
  title: string;
  accentColor?: string;
  titleColor?: string;
  rule?: string;
  ruleColor?: string;
};

export const TitleScene: React.FC<Props> = ({
  label,
  title,
  accentColor = D.blue,
  titleColor = D.textPrimary,
  rule,
  ruleColor = D.yellow,
}) => {
  const frame = useCurrentFrame();

  const titleY  = interpolate(frame, [5, 26],  [48, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleOp = interpolate(frame, [5, 26],  [0, 1],  { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lineW   = interpolate(frame, [18, 36], [0, 1],  { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <SceneShell label={label} accentColor={accentColor}>
      <div
        style={{
          opacity: titleOp,
          transform: `translateY(${titleY}px)`,
          fontFamily: FONTS.body,
          fontSize: D.sz.heading,
          fontWeight: 700,
          color: titleColor,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          marginBottom: 28,
        }}
      >
        {title}
      </div>

      {/* Decorative line */}
      <div
        style={{
          width: `${lineW * 260}px`,
          height: 3,
          backgroundColor: accentColor,
          borderRadius: 2,
          marginBottom: rule ? 36 : 0,
        }}
      />

      {rule ? (
        <RuleBox color={ruleColor} startFrame={30} style={{ alignSelf: "flex-start" }}>
          {rule}
        </RuleBox>
      ) : null}
    </SceneShell>
  );
};
