// Slide 10 - CSAT Practice Question (15080 -> 17210f, ~2130f)
import { SlideBase, Reveal, Pop, C, F, Row, AnimImg, Pill } from "./shared";
import badgePause    from "../../../Graphics/badge-pause-and-solve.png";
import badgeSolution from "../../../Graphics/badge-solution.png";
import humanThink    from "../../../Graphics/human-think-curious.png";
import yellowOval    from "../../../Graphics/yellow-oval.png";

const Step: React.FC<{ at: number; n: number; text: React.ReactNode }> = ({ at, n, text }) => (
  <Reveal at={at} style={{ marginBottom: 10 }}>
    <Row gap={16} align="flex-start">
      <div style={{
        width: 36, height: 36, borderRadius: "50%",
        background: C.title, color: "#fff", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: F, fontWeight: 800, fontSize: 22,
      }}>{n}</div>
      <div style={{ fontFamily: F, fontSize: 34, color: C.dark, lineHeight: 1.4 }}>
        {text}
      </div>
    </Row>
  </Reveal>
);

export const Slide10Question: React.FC = () => (
  <SlideBase num={10} title="CSAT PRACTICE" padTop={48}>
    <Row gap={64} align="flex-start">

      <div style={{ flex: 1.3 }}>

        <Reveal at={0} style={{ marginBottom: 10 }}>
          <Row gap={16}>
            <AnimImg src={badgePause} revealFrame={0}
              style={{ position: "relative" as const, width: 320, height: 58, top: 0, left: 0 }} />
          </Row>
        </Reveal>

        <Reveal at={118} style={{ marginBottom: 16 }}>
          <div style={{
            background: "#F9FAFB", border: "2px solid #E5E7EB",
            borderRadius: 12, padding: "14px 24px",
            fontFamily: F, fontSize: 34, color: C.dark, lineHeight: 1.6,
          }}>
            <strong style={{ color: C.blue }}>A</strong> does work in{" "}
            <strong style={{ color: C.blue }}>12 days</strong>.{" "}
            <strong style={{ color: C.orange }}>B</strong> does it in{" "}
            <strong style={{ color: C.orange }}>16 days</strong>.<br />
            Both work together. After{" "}
            <strong>4 days, A leaves</strong>.<br />
            How many more days does B need alone?
          </div>
        </Reveal>

        <Step at={584} n={1} text={
          <>Total work: LCM(12, 16) = <strong style={{ color: "#7C3AED" }}>48 units</strong></>
        } />
        <Step at={785} n={2} text={
          <>
            A efficiency: 48/12 = <strong style={{ color: C.blue }}>4 units/day</strong>
            &nbsp;&nbsp;
            B efficiency: 48/16 = <strong style={{ color: C.orange }}>3 units/day</strong>
          </>
        } />
        <Step at={1169} n={3} text={
          <>4 days together: 4 x (4 + 3) = 4 x 7 = <strong style={{ color: C.green }}>28 units done</strong></>
        } />
        <Step at={1243} n={4} text={
          <>Remaining: 48 - 28 = <strong style={{ color: C.red }}>20 units left</strong></>
        } />
        <Step at={1354} n={5} text={
          <>B alone: 20 / 3 = <strong>6 days and 2/3 of a day</strong></>
        } />

        <Reveal at={1529} style={{ marginBottom: 10 }}>
          <div style={{ fontFamily: F, fontSize: 32, color: C.gray }}>
            (B does 3 units/day, 2 units left = 2/3 day more)
          </div>
        </Reveal>

        <Reveal at={1795}>
          <Row gap={20}>
            <AnimImg src={badgeSolution} revealFrame={1795}
              style={{ position: "relative" as const, width: 200, height: 54, top: 0, left: 0 }} />
            <Pop at={1795}>
              <Pill color={C.green} bg={C.greenBg} border={C.greenBd} size={44}>
                B needs 6 and 2/3 more days
              </Pill>
            </Pop>
          </Row>
        </Reveal>
      </div>

      <div style={{ flex: 0.6, position: "relative", minHeight: 600 }}>
        <AnimImg src={humanThink} revealFrame={0}    style={{ right: 0, top: 20,  width: 270 }} />
        <AnimImg src={yellowOval} revealFrame={1795} style={{ right: -40, top: 480, width: 340 }} />
      </div>

    </Row>
  </SlideBase>
);
