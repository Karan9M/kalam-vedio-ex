import { interpolate, useCurrentFrame } from "remotion";
import { SceneShell } from "../components/SceneShell";
import { RuleBox } from "../components/RuleBox";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  label: string;
  heading: string;
  subheading?: string;
  takeaway?: string;
  accentColor?: string;
  headingColor?: string;
};

export const ConceptScene: React.FC<Props> = ({
  label,
  heading,
  subheading,
  takeaway,
  accentColor = D.blue,
  headingColor = D.textPrimary,
}) => {
  const frame = useCurrentFrame();

  const headOp = interpolate(frame, [5, 22],  [0, 1],  { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const headY  = interpolate(frame, [5, 22],  [28, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subOp  = interpolate(frame, [22, 38], [0, 1],  { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subY   = interpolate(frame, [22, 38], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lineW  = interpolate(frame, [14, 30], [0, 1],  { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <SceneShell label={label} accentColor={accentColor}>
      <div
        style={{
          opacity: headOp,
          transform: `translateY(${headY}px)`,
          fontFamily: FONTS.body,
          fontSize: 96,
          fontWeight: 700,
          color: headingColor,
          marginBottom: 16,
        }}
      >
        {heading}
      </div>

      {/* Decorative divider */}
      <div
        style={{
          width: `${lineW * 200}px`,
          height: 3,
          backgroundColor: accentColor,
          borderRadius: 2,
          marginBottom: subheading ? 24 : 36,
        }}
      />

      {subheading ? (
        <div
          style={{
            opacity: subOp,
            transform: `translateY(${subY}px)`,
            fontFamily: FONTS.body,
            fontSize: D.sz.sub,
            color: D.textSecondary,
            marginBottom: 36,
            lineHeight: 1.5,
          }}
        >
          {subheading}
        </div>
      ) : null}

      {takeaway ? (
        <RuleBox color={accentColor} startFrame={40} style={{ alignSelf: "flex-start" }}>
          {takeaway}
        </RuleBox>
      ) : null}
    </SceneShell>
  );
};
