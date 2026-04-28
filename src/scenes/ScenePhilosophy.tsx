import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";
import { SceneShell } from "../components/SceneShell";
import { RuleBox } from "../components/RuleBox";

export const ScenePhilosophy: React.FC = () => {
  const frame = useCurrentFrame();

  const col1Opacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const col2Opacity = interpolate(frame, [25, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const eqOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneShell label="CSAT · The Philosophy" accentColor={D.blue}>
      {/* Equation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 48,
          marginBottom: 64,
        }}
      >
        <div
          style={{
            opacity: col1Opacity,
            fontFamily: FONTS.body,
            fontSize: D.sz.heading,
            fontWeight: 700,
            color: D.green,
            letterSpacing: "-0.02em",
          }}
        >
          Logic
        </div>

        <div
          style={{
            opacity: eqOpacity,
            fontFamily: FONTS.body,
            fontSize: 80,
            fontWeight: 300,
            color: D.textLabel,
          }}
        >
          ×
        </div>

        <div
          style={{
            opacity: col2Opacity,
            fontFamily: FONTS.body,
            fontSize: D.sz.heading,
            fontWeight: 700,
            color: D.yellow,
            letterSpacing: "-0.02em",
          }}
        >
          Speed
        </div>

        <div
          style={{
            opacity: eqOpacity,
            fontFamily: FONTS.body,
            fontSize: 80,
            fontWeight: 300,
            color: D.textLabel,
          }}
        >
          =
        </div>

        <div
          style={{
            opacity: eqOpacity,
            fontFamily: FONTS.body,
            fontSize: D.sz.heading,
            fontWeight: 700,
            color: D.blue,
            letterSpacing: "-0.02em",
          }}
        >
          Mastery
        </div>
      </div>

      <RuleBox color={D.blue} startFrame={65} style={{ alignSelf: "flex-start" }}>
        CSAT is not a calculation game — it rewards pattern recognition
      </RuleBox>
    </SceneShell>
  );
};
