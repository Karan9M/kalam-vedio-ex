import { AbsoluteFill } from "remotion";
import { HandwrittenText } from "../../components/HandwrittenText";
import { COLORS, FONTS } from "../../constants";

export const ScenePConclusion: React.FC = () => {
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", color: COLORS.text }}>
      <HandwrittenText
        text="Smart Observer bano, formula machine nahi."
        charsPerFrame={0.6}
        style={{ fontSize: 96, color: COLORS.blue, fontWeight: 700, textAlign: "center" }}
      />
      <div
        style={{
          marginTop: 30,
          fontFamily: FONTS.devanagari,
          fontSize: 52,
          color: COLORS.yellow,
        }}
      >
        चलिए, अब इन concepts को solve करते हैं!
      </div>
    </AbsoluteFill>
  );
};
