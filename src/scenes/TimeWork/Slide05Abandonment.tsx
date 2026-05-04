// Slide 5 - Mid-Work Leaving (6440 -> 8245f, ~1805f)
import { SlideBase, Reveal, Pop, C, F, Row, AnimImg, Pill } from "./shared";
import humanNormal  from "../../../Graphics/human-normal.png";
import humanRunning from "../../../Graphics/human-running-right-facing.png";
import badgeExample from "../../../Graphics/badge-example.png";

export const Slide05Abandonment: React.FC = () => (
  <SlideBase num={5} title="MID-WORK LEAVING">
    <Row gap={64} align="flex-start">

      <div style={{ flex: 1.3 }}>

        {/* Setup */}
        <Reveal at={100} style={{ marginBottom: 8 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 18,
            background: C.blueBg, border: `2.5px solid ${C.blueBd}`,
            borderRadius: 12, padding: "12px 24px",
          }}>
            <span style={{ fontFamily: F, fontWeight: 800, fontSize: 40, color: C.blue }}>A</span>
            <span style={{ fontFamily: F, fontSize: 34, color: C.dark }}>= 20 days</span>
          </div>
        </Reveal>

        <Reveal at={272} style={{ marginBottom: 14 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 18,
            background: C.orangeBg, border: `2.5px solid ${C.orangeBd}`,
            borderRadius: 12, padding: "12px 24px",
          }}>
            <span style={{ fontFamily: F, fontWeight: 800, fontSize: 40, color: C.orange }}>B</span>
            <span style={{ fontFamily: F, fontSize: 34, color: C.dark }}>= 30 days</span>
          </div>
        </Reveal>

        <Reveal at={365} style={{ marginBottom: 10 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
            Both start working together...
          </div>
        </Reveal>

        <Reveal at={436} style={{ marginBottom: 18 }}>
          <div style={{
            background: C.redBg, border: `2.5px dashed ${C.redBd}`,
            borderRadius: 12, padding: "12px 24px",
            fontFamily: F, fontSize: 36, color: C.red, fontWeight: 700,
          }}>
            After 6 days: A LEAVES the work
          </div>
        </Reveal>

        {/* Solution steps */}
        <Reveal at={658} style={{ marginBottom: 10 }}>
          <Row gap={12}>
            <AnimImg src={badgeExample} revealFrame={658}
              style={{ position: "relative" as const, width: 180, height: 50, top: 0, left: 0 }} />
            <div style={{ fontFamily: F, fontSize: 34, color: C.dark, fontWeight: 700 }}>
              LCM(20, 30) = <strong style={{ color: "#7C3AED" }}>60 units</strong> (total work)
            </div>
          </Row>
        </Reveal>

        <Reveal at={873} style={{ marginBottom: 10 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.dark }}>
            A efficiency: 60 / 20 = <strong style={{ color: C.blue }}>3 units/day</strong>
            &nbsp;|&nbsp;
            B: 60 / 30 = <strong style={{ color: C.orange }}>2 units/day</strong>
          </div>
        </Reveal>

        <Reveal at={1056} style={{ marginBottom: 10 }}>
          <div style={{
            background: "#F9FAFB", border: "1.5px solid #E5E7EB",
            borderRadius: 10, padding: "10px 20px",
            fontFamily: F, fontSize: 34, color: C.dark,
          }}>
            6 days together: 6 x (3 + 2) = 6 x 5 ={" "}
            <strong style={{ color: C.green }}>30 units done</strong>
          </div>
        </Reveal>

        <Reveal at={1240} style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.dark }}>
            Remaining: 60 - 30 = <strong style={{ color: C.red }}>30 units left</strong>
          </div>
        </Reveal>

        <Reveal at={1454}>
          <Pop at={1454}>
            <Pill color={C.green} bg={C.greenBg} border={C.greenBd} size={44}>
              B alone: 30 / 2 = 15 more days
            </Pill>
          </Pop>
        </Reveal>
      </div>

      <div style={{ flex: 0.65, position: "relative", minHeight: 600 }}>
        <AnimImg src={humanNormal}  revealFrame={272} style={{ right: 40,  top: 0,   width: 220 }} />
        <AnimImg src={humanRunning} revealFrame={436} style={{ right: -20, top: 280, width: 280 }} />
      </div>

    </Row>
  </SlideBase>
);
