// Slide 6 â€” Long Expression Trick  (174.316 â†’ 240.112s, ~1974f)
// Key reveals: 0 header | 63 expression | 190 step1 calc | 496 result | 639 insight |
//              886 ignore evens | 964 count odds | 1073 2 oddsâ†’even | 1390 rule
import { SlideBase, Reveal, Pop, C, F, Pill, Row, RuleBox } from "./shared";
import { AnimImg } from "./shared";
import badgeTrick from "../../../Graphics/badge-trick.png";

export const Slide06LongExpr: React.FC = () => (
  <SlideBase num={6} title="LONG EXPRESSION TRICK">

    {/* The expression */}
    <Reveal at={63}>
      <Pop at={63}>
        <div style={{
          fontFamily: F, fontWeight: 900, fontSize: 76, color: C.dark,
          background: "#F9FAFB", border: "2px solid #E5E7EB", borderRadius: 14,
          padding: "14px 36px", display: "inline-block", marginBottom: 24, letterSpacing: 4,
        }}>
          <span style={{ color: C.odd }}>17</span>
          <span style={{ color: C.dark }}> - </span>
          <span style={{ color: C.even }}>8</span>
          <span style={{ color: C.dark }}> + </span>
          <span style={{ color: C.odd }}>21</span>
          <span style={{ color: C.dark }}> - </span>
          <span style={{ color: C.even }}>10</span>
        </div>
      </Pop>
    </Reveal>

    <Row gap={80} align="flex-start">
      {/* Left: normal calculation */}
      <div style={{ flex: 1 }}>
        <Reveal at={190} style={{ marginBottom: 12 }}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 36, color: C.title, marginBottom: 8 }}>Normal calculation:</div>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark, lineHeight: 1.9 }}>
            17 - 8 = <strong>9</strong><br />
            9 + 21 = <strong>30</strong><br />
            30 - 10 = <strong>20</strong>
          </div>
        </Reveal>
        <Reveal at={496}>
          <Pill color={C.even} bg={C.evenBg} border={C.evenBd} size={40}>Result = 20 → EVEN</Pill>
        </Reveal>
      </div>

      {/* Right: smart method */}
      <div style={{ flex: 1.2 }}>
        <Reveal at={639}>
          <Row gap={12} style={{ marginBottom: 14 }}>
            <AnimImg src={badgeTrick} revealFrame={639} style={{ position: "relative" as const, width: 150, height: 52, top: 0, left: 0 }} />
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 38, color: C.title }}>
              Without calculating!
            </div>
          </Row>
        </Reveal>

        <Reveal at={886} style={{ marginBottom: 12 }}>
          <div style={{
            background: C.evenBg, border: `2px dashed ${C.evenBd}`, borderRadius: 12,
            padding: "12px 20px", fontFamily: F, fontSize: 34, color: C.dark,
          }}>
            <span style={{ fontWeight: 800, color: C.even }}>Step 1:</span> Ignore even terms<br />
            <span style={{ textDecoration: "line-through", color: C.gray }}>8</span> and{" "}
            <span style={{ textDecoration: "line-through", color: C.gray }}>10</span> ignored
          </div>
        </Reveal>

        <Reveal at={964} style={{ marginBottom: 12 }}>
          <div style={{
            background: C.oddBg, border: `2px dashed ${C.oddBd}`, borderRadius: 12,
            padding: "12px 20px", fontFamily: F, fontSize: 34, color: C.dark,
          }}>
            <span style={{ fontWeight: 800, color: C.odd }}>Step 2:</span> Count ODD terms<br />
            <span style={{ fontWeight: 800, color: C.odd }}>17</span> is odd,{" "}
            <span style={{ fontWeight: 800, color: C.odd }}>21</span> is odd <strong>2 odd terms</strong>
          </div>
        </Reveal>

        <Reveal at={1073} style={{ marginBottom: 12 }}>
          <div style={{
            background: C.blueBg, border: `2px dashed ${C.blueBd}`, borderRadius: 12,
            padding: "12px 20px", fontFamily: F, fontSize: 34, color: C.dark,
          }}>
            <span style={{ fontWeight: 800, color: C.title }}>Step 3:</span> 2 odd terms = <strong>even count</strong><br />
            Even count of odds <Pill color={C.even} bg={C.evenBg} border={C.evenBd} size={30}>Result EVEN</Pill>
          </div>
        </Reveal>

        <Reveal at={1390}>
          <RuleBox color={C.title} bg={C.blueBg} border={C.blueBd} style={{ fontSize: 34 }}>
            <strong>Rule:</strong> Count odd terms only<br />
            Odd count <span style={{ color: C.even }}>even</span> → Result <span style={{ fontWeight: 800, color: C.even }}>EVEN</span><br />
            Odd count <span style={{ color: C.odd }}>odd</span> → Result <span style={{ fontWeight: 800, color: C.odd }}>ODD</span>
          </RuleBox>
        </Reveal>
      </div>
    </Row>

  </SlideBase>
);

