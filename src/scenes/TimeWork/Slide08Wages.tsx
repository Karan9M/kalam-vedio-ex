// Slide 8 - Efficiency and Wages (12415 -> 13710f, ~1295f)
import { SlideBase, Reveal, Pop, C, F, Row, AnimImg, Pill, RuleBox } from "./shared";
import rupeeCoin  from "../../../Graphics/Ruppe-coin-icon.png";
import humanHappy from "../../../Graphics/human-happy.png";
import upTrend    from "../../../Graphics/UpTrend-icon.png";

export const Slide08Wages: React.FC = () => (
  <SlideBase num={8} title="EFFICIENCY AND WAGES">
    <Row gap={72} align="flex-start">

      <div style={{ flex: 1.3 }}>
        <Reveal at={0} style={{ marginBottom: 16 }}>
          <RuleBox color={C.title} bg={C.blueBg} border={C.blueBd} style={{ fontSize: 38 }}>
            Rule: <strong>More work done = More wages earned</strong>
          </RuleBox>
        </Reveal>

        <Reveal at={323} style={{ marginBottom: 10 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 32,
            background: "#F9FAFB", border: "1.5px solid #E5E7EB",
            borderRadius: 12, padding: "12px 28px",
          }}>
            <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
              <strong style={{ color: C.blue }}>A</strong> = 10 days
            </div>
            <div style={{ fontFamily: F, fontSize: 28, color: C.gray }}>|</div>
            <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
              <strong style={{ color: C.orange }}>B</strong> = 15 days
            </div>
          </div>
        </Reveal>

        <Reveal at={516} style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
            Both work together. Total earnings:{" "}
            <strong style={{ color: C.green }}>Rs. 500</strong>
          </div>
        </Reveal>

        <Reveal at={665} style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark, fontWeight: 700 }}>
            How much does each person get?
          </div>
        </Reveal>

        <Reveal at={773} style={{ marginBottom: 8 }}>
          <div style={{
            background: "#F9FAFB", border: "1.5px solid #E5E7EB",
            borderRadius: 10, padding: "10px 20px",
            fontFamily: F, fontSize: 34, color: C.dark,
          }}>
            LCM(10, 15) = 30 units total work<br />
            A efficiency = 30/10 = <strong style={{ color: C.blue }}>3 units/day</strong><br />
            B efficiency = 30/15 = <strong style={{ color: C.orange }}>2 units/day</strong>
          </div>
        </Reveal>

        <Reveal at={888} style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
            Work ratio A:B = <strong style={{ color: C.blue }}>3</strong> :{" "}
            <strong style={{ color: C.orange }}>2</strong>
          </div>
        </Reveal>

        <Reveal at={1126}>
          <Pop at={1126}>
            <div style={{
              display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap",
            }}>
              <Pill color={C.blue} bg={C.blueBg} border={C.blueBd} size={42}>
                A = 3/5 x 500 = Rs. 300
              </Pill>
              <Pill color={C.orange} bg={C.orangeBg} border={C.orangeBd} size={42}>
                B = 2/5 x 500 = Rs. 200
              </Pill>
            </div>
          </Pop>
        </Reveal>
      </div>

      <div style={{ flex: 0.65, position: "relative", minHeight: 500 }}>
        <AnimImg src={rupeeCoin}  revealFrame={0}   style={{ right: 20, top: 0,   width: 160 }} />
        <AnimImg src={upTrend}    revealFrame={323}  style={{ right: 0,  top: 180, width: 160 }} />
        <AnimImg src={humanHappy} revealFrame={500}  style={{ right: 0,  top: 300, width: 270 }} />
      </div>

    </Row>
  </SlideBase>
);
