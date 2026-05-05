// Slide 1 - Efficiency Concept (0 -> 1530f)
import { SlideBase, Reveal, Pop, C, F, Row, AnimImg, RuleBox, Frac } from "./shared";
import clockIcon    from "../../../Graphics/clock-or-timer-icon.png";
import humanIdea    from "../../../Graphics/human-got-idea.png";
import upTrend      from "../../../Graphics/UpTrend-icon.png";
import badgeImportant from "../../../Graphics/badge-important.png";

export const Slide01Efficiency: React.FC = () => (
  <SlideBase num={1} title="EFFICIENCY CONCEPT">
    <Row gap={80} align="flex-start">

      <div style={{ flex: 1.2 }}>
        <Reveal at={0} style={{ marginBottom: 20 }}>
          <div style={{ fontFamily: F, fontSize: 38, color: C.dark, lineHeight: 1.5 }}>
            How much work does a person do <strong>per day</strong>?
          </div>
        </Reveal>

        <Reveal at={540} style={{ marginBottom: 20 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark, lineHeight: 1.6 }}>
            If someone finishes work in{" "}
            <strong style={{ color: C.blue }}>N days</strong>...
          </div>
        </Reveal>

        <Reveal at={855} style={{ marginBottom: 24 }}>
          <Pop at={855}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 24,
              background: C.blueBg, border: `2.5px solid ${C.blueBd}`,
              borderRadius: 14, padding: "18px 36px",
            }}>
              <div style={{ fontFamily: F, fontSize: 44, fontWeight: 800, color: C.dark }}>
                Work in <strong style={{ color: C.blue }}>1 day</strong>
              </div>
              <div style={{ fontFamily: F, fontSize: 44, color: C.gray }}>=</div>
              <Frac num="1" den="N" size={42} color={C.blue} />
            </div>
          </Pop>
        </Reveal>

        <Reveal at={962} style={{ marginBottom: 20 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark, lineHeight: 1.6 }}>
            Example: Finishes in <strong style={{ color: C.blue }}>10 days</strong> ={">"}{" "}
            <Frac num="1" den="10" size={32} color={C.blue} /> per day
          </div>
        </Reveal>

        <Reveal at={1165} style={{ marginBottom: 22 }}>
          <RuleBox color={C.title} bg={C.blueBg} border={C.blueBd} style={{ fontSize: 38 }}>
            <strong>Efficiency</strong> ={" "}
            <Frac num="1" den="Time (N days)" size={34} color={C.title} />
          </RuleBox>
        </Reveal>

        <Reveal at={1165} style={{ marginBottom: 10 }}>
          <AnimImg src={badgeImportant} revealFrame={1165}
            style={{ position: "relative" as const, width: 220, height: 54, top: 0, left: 0 }} />
        </Reveal>

        <Reveal at={1345}>
          <div style={{ fontFamily: F, fontSize: 32, color: C.gray, fontStyle: "italic" }}>
            Fewer days = Higher efficiency. More days = Lower efficiency.
          </div>
        </Reveal>
      </div>

      <div style={{ flex: 0.8, position: "relative", minHeight: 600 }}>
        <AnimImg src={clockIcon} revealFrame={0}   style={{ right: 0, top: 0,   width: 240 }} />
        <AnimImg src={upTrend}   revealFrame={540}  style={{ right: 30, top: 260, width: 200 }} />
        <AnimImg src={humanIdea} revealFrame={855}  style={{ right: -10, top: 390, width: 320 }} />
      </div>
    </Row>
  </SlideBase>
);
