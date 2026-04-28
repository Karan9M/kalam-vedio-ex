import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";
import { SceneShell } from "../components/SceneShell";
import { RevealText } from "../components/RevealText";

export const SceneTopicReveal: React.FC = () => {
  const frame = useCurrentFrame();

  const badgeOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneShell label="UPSC CSAT · GS Paper 2" accentColor={D.blue}>
      <RevealText
        text="Numbers & Simplification"
        wordsPerSecond={2.5}
        fontSize={D.sz.heading}
        color={D.yellow}
        style={{ maxWidth: 1400, marginBottom: D.gap }}
      />

      <div
        style={{
          opacity: badgeOpacity,
          display: "inline-flex",
          alignItems: "center",
          gap: 16,
          fontFamily: FONTS.body,
          fontSize: D.sz.body,
          fontWeight: 400,
          color: D.textSecondary,
          marginTop: 16,
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: D.blue,
          }}
        />
        Marks Foundation for every CSAT aspirant
      </div>
    </SceneShell>
  );
};
