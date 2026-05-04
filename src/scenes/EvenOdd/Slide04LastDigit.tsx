// Slide 4 â€” Quick Identification Trick  (93.907 â†’ 122.813s, ~867f)
// Key reveals: 0 header | 60 tip | 200 example 7548 | 305 highlight | 546 rule boxes
import { AnimImg, SlideBase, Reveal, Pop, C, F, Pill, Row, RuleBox } from "./shared";
import yellowOval from "../../../Graphics/yellow-oval.png";

export const Slide04LastDigit: React.FC = () => (
  <SlideBase num={4} title="QUICK IDENTIFICATION TRICK">

    <Reveal at={0} style={{ marginBottom: 28 }}>
      <div style={{ fontFamily: F, fontWeight: 700, fontSize: 44, color: C.dark }}>
        For bigger numbers, Look at the <span style={{ color: C.title, fontWeight: 900 }}>last digit!</span>
      </div>
    </Reveal>

    {/* Two rule boxes */}
    <Row gap={48} style={{ marginBottom: 36 }}>
      <Reveal at={546} style={{
        background: C.evenBg, border: `3px solid ${C.evenBd}`, borderRadius: 18,
        padding: "24px 36px", flex: 1, textAlign: "center",
      }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 34, color: C.gray, marginBottom: 8 }}>Last digit</div>
        <div style={{ fontFamily: F, fontWeight: 900, fontSize: 52, color: C.even, letterSpacing: 6 }}>
          0, 2, 4, 6, 8
        </div>
        <div style={{ marginTop: 12 }}>
          <Pill color={C.even} bg={C.evenBg} border={C.evenBd} size={36}> EVEN</Pill>
        </div>
      </Reveal>

      <Reveal at={560} style={{
        background: C.oddBg, border: `3px solid ${C.oddBd}`, borderRadius: 18,
        padding: "24px 36px", flex: 1, textAlign: "center",
      }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 34, color: C.gray, marginBottom: 8 }}>Last digit</div>
        <div style={{ fontFamily: F, fontWeight: 900, fontSize: 52, color: C.odd, letterSpacing: 6 }}>
          1, 3, 5, 7, 9
        </div>
        <div style={{ marginTop: 12 }}>
          <Pill color={C.odd} bg={C.oddBg} border={C.oddBd} size={36}> ODD</Pill>
        </div>
      </Reveal>
    </Row>

    {/* Examples */}
    <Reveal at={200} style={{ marginBottom: 16 }}>
      <div style={{ fontFamily: F, fontWeight: 600, fontSize: 38, color: C.dark, marginBottom: 16 }}>
        Example: no need to divide 7548 by 2 !
      </div>
    </Reveal>

    <Row gap={64}>
      <Reveal at={305} style={{ position: "relative", textAlign: "center" }}>
        <Pop at={305}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 80, color: C.dark, letterSpacing: 4 }}>
            754
            <span style={{ color: C.even, textDecoration: "underline", textDecorationColor: C.even, textDecorationThickness: 4 }}>8</span>
          </div>
        </Pop>
        <div style={{ fontFamily: F, fontSize: 34, color: C.dark, marginTop: 6 }}>
          Last digit = <span style={{ fontWeight: 800, color: C.even }}>8</span>
        </div>
        <Reveal at={420}>
          <Pill color={C.even} bg={C.evenBg} border={C.evenBd} size={32}>8 EVEN</Pill>
        </Reveal>
        <AnimImg src={yellowOval} revealFrame={380} style={{ left: 140, top: 10, width: 100 }} />
      </Reveal>

      <Reveal at={680} style={{ textAlign: "center" }}>
        <Pop at={680}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 80, color: C.dark, letterSpacing: 4 }}>
            739
            <span style={{ color: C.odd, textDecoration: "underline", textDecorationColor: C.odd, textDecorationThickness: 4 }}>1</span>
          </div>
        </Pop>
        <div style={{ fontFamily: F, fontSize: 34, color: C.dark, marginTop: 6 }}>
          Last digit = <span style={{ fontWeight: 800, color: C.odd }}>1</span>
        </div>
        <Reveal at={720}>
          <Pill color={C.odd} bg={C.oddBg} border={C.oddBd} size={32}>1 ODD</Pill>
        </Reveal>
        <AnimImg src={yellowOval} revealFrame={700} style={{ left: 142, top: 10, width: 100 }} />
      </Reveal>
    </Row>

  </SlideBase>
);

