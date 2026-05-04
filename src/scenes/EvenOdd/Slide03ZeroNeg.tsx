// Slide 3 — Zero & Negative Numbers  (52.765 → 93.907s, ~1234f)
// Key reveals: 0f title | 140f zero demo | 547f negatives | 652f -4 | 837f -3 | 1090f conclusion
import { SlideBase, Reveal, Pop, C, F, Pill, Row, RuleBox } from "./shared";

export const Slide03ZeroNeg: React.FC = () => (
  <SlideBase num={3} title="ZERO & NEGATIVE NUMBERS">

    {/* Zero section */}
    <Reveal at={0} style={{ marginBottom: 10 }}>
      <div style={{ fontFamily: F, fontWeight: 700, fontSize: 40, color: C.title }}>
        🤔 Is <span style={{ color: C.dark, fontSize: 48, fontWeight: 900 }}>Zero</span> even or odd?
      </div>
    </Reveal>

    <Reveal at={140}>
      <Row gap={48} style={{ marginBottom: 8 }}>
        <div style={{
          background: C.blueBg, border: `2px solid ${C.blueBd}`, borderRadius: 14,
          padding: "20px 32px", fontFamily: F, fontSize: 40, color: C.dark, fontWeight: 600,
        }}>
          <Pop at={140}>
            <span style={{ fontWeight: 900, fontSize: 52 }}>0</span>
          </Pop>
          {" "}÷ 2 = 0 &nbsp;
          <span style={{ color: C.even, fontWeight: 800 }}>✓ No remainder</span>
        </div>
      </Row>
    </Reveal>

    <Reveal at={297}>
      <Row gap={20} style={{ marginBottom: 8 }}>
        <Pill color={C.even} bg={C.evenBg} border={C.evenBd} size={40}>Zero is EVEN</Pill>
        <div style={{ fontFamily: F, fontSize: 34, color: C.gray }}>
          (Many get confused here — but 0 is definitely even!)
        </div>
      </Row>
    </Reveal>

    {/* Divider */}
    <Reveal at={520} style={{ margin: "18px 0" }}>
      <div style={{ height: 2, background: "#E5E7EB", borderRadius: 1 }} />
    </Reveal>

    {/* Negative numbers */}
    <Reveal at={547} style={{ marginBottom: 14 }}>
      <div style={{ fontFamily: F, fontWeight: 700, fontSize: 40, color: C.title }}>
        What about <span style={{ color: C.dark }}>Negative Numbers?</span>
      </div>
    </Reveal>

    <Row gap={60} align="flex-start">

      <Reveal at={652} style={{
        background: C.evenBg, border: `2.5px solid ${C.evenBd}`, borderRadius: 14,
        padding: "18px 28px", minWidth: 340,
      }}>
        <Pop at={652}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 60, color: C.odd, textAlign: "center" }}>−4</div>
        </Pop>
        <div style={{ fontFamily: F, fontSize: 34, color: C.dark, marginTop: 8 }}>
          −4 ÷ 2 = <span style={{ fontWeight: 800 }}>−2</span> perfectly
        </div>
        <Reveal at={717} style={{ marginTop: 8 }}>
          <Pill color={C.even} bg={C.evenBg} border={C.evenBd} size={32}>→ EVEN</Pill>
        </Reveal>
      </Reveal>

      <Reveal at={837} style={{
        background: C.oddBg, border: `2.5px solid ${C.oddBd}`, borderRadius: 14,
        padding: "18px 28px", minWidth: 340,
      }}>
        <Pop at={837}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 60, color: C.odd, textAlign: "center" }}>−3</div>
        </Pop>
        <div style={{ fontFamily: F, fontSize: 34, color: C.dark, marginTop: 8 }}>
          −3 ÷ 2 → not clean
        </div>
        <Reveal at={948} style={{ marginTop: 8 }}>
          <Pill color={C.odd} bg={C.oddBg} border={C.oddBd} size={32}>→ ODD</Pill>
        </Reveal>
      </Reveal>

      {/* Number line */}
      <Reveal at={700} style={{ flexDirection: "column", display: "flex", alignItems: "center", paddingTop: 16 }}>
        <div style={{ position: "relative", width: 460, height: 60 }}>
          <div style={{ position: "absolute", top: 28, left: 0, right: 0, height: 3, background: C.dark }} />
          {[-5,-4,-3,-2,-1,0,1,2,3].map((n, i) => (
            <div key={n} style={{ position: "absolute", left: i * 50 + 5, top: 0, textAlign: "center" }}>
              <div style={{
                width: 20, height: 20, borderRadius: "50%", margin: "0 auto",
                background: n % 2 === 0 ? C.even : n === -3 ? C.odd : C.odd,
                border: `2px solid ${n === -4 || n === 0 ? C.even : C.odd}`,
                marginTop: 18,
              }} />
              <div style={{
                fontFamily: F, fontSize: 26, fontWeight: 700, marginTop: 4,
                color: n % 2 === 0 ? C.even : C.odd,
              }}>{n}</div>
            </div>
          ))}
        </div>
      </Reveal>

    </Row>

    <Reveal at={1090}>
      <RuleBox color={C.title} bg={C.blueBg} border={C.blueBd} style={{ marginTop: 20, fontSize: 36 }}>
        💡 Parity works for <strong>positive AND negative</strong> integers
      </RuleBox>
    </Reveal>

  </SlideBase>
);
