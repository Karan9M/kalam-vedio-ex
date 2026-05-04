import { interpolate, useCurrentFrame } from "remotion";
import { SceneShell } from "../components/SceneShell";
import { RuleBox } from "../components/RuleBox";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  label: string;
  heading: string;
  formula: string;
  explanation?: string;
  takeaway?: string;
  accentColor?: string;
  formulaColor?: string;
};

export const FormulaScene: React.FC<Props> = ({
  label,
  heading,
  formula,
  explanation,
  takeaway,
  accentColor = D.blue,
  formulaColor = D.yellow,
}) => {
  const frame = useCurrentFrame();

  const headOp  = interpolate(frame, [5, 20],  [0, 1],  { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const headY   = interpolate(frame, [5, 20],  [24, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const expOp   = interpolate(frame, [20, 36], [0, 1],  { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const expY    = interpolate(frame, [20, 36], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const formOp  = interpolate(frame, [30, 50], [0, 1],  { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const formSc  = interpolate(frame, [30, 50], [0.88, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <SceneShell label={label} accentColor={accentColor}>
      <div
        style={{
          opacity: headOp,
          transform: `translateY(${headY}px)`,
          fontFamily: FONTS.body,
          fontSize: 92,
          fontWeight: 700,
          color: D.textPrimary,
          marginBottom: explanation ? 16 : 28,
        }}
      >
        {heading}
      </div>

      {explanation ? (
        <div
          style={{
            opacity: expOp,
            transform: `translateY(${expY}px)`,
            fontFamily: FONTS.body,
            fontSize: D.sz.sub,
            color: D.textSecondary,
            marginBottom: 28,
          }}
        >
          {explanation}
        </div>
      ) : null}

      <div
        style={{
          opacity: formOp,
          transform: `scale(${formSc})`,
          transformOrigin: "left center",
          fontFamily: FONTS.body,
          fontSize: 72,
          fontWeight: 700,
          color: formulaColor,
          marginBottom: 36,
          letterSpacing: "0.02em",
        }}
      >
        {formula}
      </div>

      {takeaway ? (
        <RuleBox color={accentColor} startFrame={50} style={{ alignSelf: "flex-start" }}>
          {takeaway}
        </RuleBox>
      ) : null}
    </SceneShell>
  );
};
