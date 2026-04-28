import { SceneShell } from "../../components/SceneShell";
import { RevealText } from "../../components/RevealText";
import { RuleBox } from "../../components/RuleBox";
import { D } from "../../design";

export const ScenePTitle: React.FC = () => {
  return (
    <SceneShell label="CSAT · Percentages & Averages" accentColor={D.blue}>
      <RevealText
        text="Percentages + Averages"
        wordsPerSecond={2.4}
        fontSize={D.sz.heading}
        color={D.blue}
        style={{ marginBottom: 44 }}
      />

      <RuleBox color={D.yellow} startFrame={26} style={{ alignSelf: "flex-start" }}>
        Arithmetic core for UPSC CSAT problem solving
      </RuleBox>
    </SceneShell>
  );
};
