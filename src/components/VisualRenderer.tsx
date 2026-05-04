import type { VisualSpec } from "../content/types";
import { EquationBuild } from "./EquationBuild";
import { RatioBars } from "./RatioBars";
import { FractionList } from "./FractionList";
import { BarChart } from "./BarChart";
import { FormulaReveal } from "./FormulaReveal";
import { ComparisonCard } from "./ComparisonCard";
import { BigNumber } from "./BigNumber";
import { KeySteps } from "./KeySteps";
import { D } from "../design";
import { FONTS } from "../fonts";
import { interpolate, useCurrentFrame } from "remotion";

type Props = {
  spec: VisualSpec;
  startFrame: number;
  accentColor?: string;
};

export const VisualRenderer: React.FC<Props> = ({ spec, startFrame, accentColor = D.blue }) => {
  switch (spec.kind) {
    case "equation":
      return (
        <EquationBuild
          parts={spec.parts}
          startFrame={startFrame}
          highlightIndex={spec.highlightIndex}
        />
      );

    case "fraction-list":
      return (
        <FractionList
          items={spec.items}
          startFrame={startFrame}
          accentColor={accentColor}
        />
      );

    case "ratio-bars":
      return (
        <RatioBars
          a={spec.a}
          b={spec.b}
          labelA={spec.labelA}
          labelB={spec.labelB}
          startFrame={startFrame}
          accentColor={accentColor}
        />
      );

    case "bar-chart":
      return (
        <BarChart
          bars={spec.bars}
          average={spec.average}
          startFrame={startFrame}
        />
      );

    case "formula":
      return (
        <FormulaReveal
          lhs={spec.lhs}
          rhs={spec.rhs}
          note={spec.note}
          startFrame={startFrame}
          accentColor={accentColor}
        />
      );

    case "comparison":
      return (
        <ComparisonCard
          left={spec.left}
          right={spec.right}
          note={spec.note}
          startFrame={startFrame}
          accentColor={accentColor}
        />
      );

    case "steps":
      return (
        <KeySteps
          items={spec.items}
          startFrame={startFrame}
          accentColor={accentColor}
        />
      );

    case "big-number":
      return (
        <BigNumber
          value={spec.value}
          sub={spec.sub}
          startFrame={startFrame}
          accentColor={accentColor}
        />
      );

    case "keyword-cloud":
      return <KeywordCloud words={spec.words} startFrame={startFrame} accentColor={accentColor} />;
  }
};

// Inline keyword cloud — simple enough to not need a separate file
const KeywordCloud: React.FC<{ words: string[]; startFrame: number; accentColor: string }> = ({
  words,
  startFrame,
  accentColor,
}) => {
  const frame = useCurrentFrame();
  const colors = [accentColor, D.green, D.yellow, D.red, D.blue];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
      {words.map((word, i) => {
        const wStart = startFrame + i * 10;
        const op = interpolate(frame, [wStart, wStart + 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const scale = interpolate(frame, [wStart, wStart + 12], [0.8, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <span
            key={i}
            style={{
              opacity: op,
              transform: `scale(${scale})`,
              fontFamily: FONTS.body,
              fontSize: D.sz.body,
              fontWeight: 700,
              color: colors[i % colors.length],
              border: `2px solid ${colors[i % colors.length]}44`,
              borderRadius: 10,
              padding: "10px 24px",
              backgroundColor: `${colors[i % colors.length]}11`,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
