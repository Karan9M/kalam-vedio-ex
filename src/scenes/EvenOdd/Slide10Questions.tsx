// Slide 10 â€” Quick Check Questions  (414.447 â†’ 493.152s, ~2361f)
// Key reveals: 0 header | 171 Q1 | 295 A1 | 469 Q2 | 996 step1 | 1335 step2 | 1496 E+O | 1700 A2 | 1794 Q3 | 2088 step | 2250 A3
import { SlideBase, Reveal, Pop, C, F, Pill, Row, RuleBox, AnimImg } from "./shared";
import badgePause   from "../../../Graphics/badge-pause-and-solve.png";
import humanThink   from "../../../Graphics/human-think-curious.png";
import badgeSolution from "../../../Graphics/badge-solution.png";

export const Slide10Questions: React.FC = () => (
  <SlideBase num={10} title="QUICK CHECK QUESTIONS" padTop={48}>

    <Row gap={0} align="flex-start">
      <div style={{ flex: 1 }}>

        {/* Q1 */}
        <Reveal at={0} style={{ marginBottom: 8 }}>
          <Row gap={16} style={{ marginBottom: 8 }}>
            <AnimImg src={badgePause} revealFrame={0} style={{ position: "relative" as const, width: 340, height: 60, top: 0, left: 0 }} />
          </Row>
        </Reveal>

        <Reveal at={171} style={{ marginBottom: 6 }}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 40, color: C.title }}>
            Q1. Is <span style={{ fontWeight: 900, fontSize: 46 }}>Zero</span> even or odd?
          </div>
        </Reveal>
        <Reveal at={224} style={{ fontFamily: F, fontSize: 34, color: C.dark, marginBottom: 6 }}>
          0 / 2 → no remainder
        </Reveal>
        <Reveal at={295} style={{ marginBottom: 20 }}>
          <Row gap={16}>
            <AnimImg src={badgeSolution} revealFrame={295} style={{ position: "relative" as const, width: 220, height: 54, top: 0, left: 0 }} />
            <Pill color={C.even} bg={C.evenBg} border={C.evenBd} size={38}>Zero is EVEN</Pill>
          </Row>
        </Reveal>

        {/* Q2 */}
        <Reveal at={469} style={{ marginBottom: 6 }}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 40, color: C.title }}>
            Q2. Is{" "}
            <span style={{ fontFamily: F, fontWeight: 900, fontSize: 38 }}>
              222³³³ + 333²²²
            </span>{" "}
            divisible by 2?
          </div>
        </Reveal>
        <Reveal at={996} style={{ fontFamily: F, fontSize: 34, color: C.dark, marginBottom: 4 }}>
          222 is <span style={{ color: C.even, fontWeight: 800 }}>even</span> → 222³³³ is{" "}
          <span style={{ color: C.even, fontWeight: 800 }}>EVEN</span>
        </Reveal>
        <Reveal at={1335} style={{ fontFamily: F, fontSize: 34, color: C.dark, marginBottom: 4 }}>
          333 is <span style={{ color: C.odd, fontWeight: 800 }}>odd</span> → 333²²² is{" "}
          <span style={{ color: C.odd, fontWeight: 800 }}>ODD</span>
        </Reveal>
        <Reveal at={1496} style={{ fontFamily: F, fontSize: 34, color: C.dark, marginBottom: 4 }}>
          <span style={{ color: C.even, fontWeight: 700 }}>Even</span> +{" "}
          <span style={{ color: C.odd, fontWeight: 700 }}>Odd</span> ={" "}
          <span style={{ color: C.odd, fontWeight: 800 }}>ODD</span> → not divisible by 2
        </Reveal>
        <Reveal at={1700} style={{ marginBottom: 20 }}>
          <Row gap={16}>
            <AnimImg src={badgeSolution} revealFrame={1700} style={{ position: "relative" as const, width: 220, height: 54, top: 0, left: 0 }} />
            <Pill color={C.odd} bg={C.oddBg} border={C.oddBd} size={38}>Answer: NO</Pill>
          </Row>
        </Reveal>

        {/* Q3 */}
        <Reveal at={1794} style={{ marginBottom: 6 }}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 40, color: C.title }}>
            Q3. Can the sum of two odd primes be prime?
          </div>
        </Reveal>
        <Reveal at={2088} style={{ fontFamily: F, fontSize: 34, color: C.dark, marginBottom: 4 }}>
          Odd + Odd = <span style={{ color: C.even, fontWeight: 800 }}>EVEN</span>,
          and this even &gt; 2 <strong>composite</strong>
        </Reveal>
        <Reveal at={2250} style={{ marginBottom: 8 }}>
          <Row gap={16}>
            <AnimImg src={badgeSolution} revealFrame={2250} style={{ position: "relative" as const, width: 220, height: 54, top: 0, left: 0 }} />
            <Pill color={C.odd} bg={C.oddBg} border={C.oddBd} size={38}>NO NEVER!</Pill>
          </Row>
        </Reveal>

      </div>

      {/* Right: human figure */}
      <div style={{ width: 280, position: "relative" }}>
        <AnimImg src={humanThink} revealFrame={60} style={{ right: 0, top: 40, width: 260 }} />
      </div>
    </Row>

  </SlideBase>
);

