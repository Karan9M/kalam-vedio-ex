// Slide 8 — Powers Rule  (298.162 → 341.530s, ~1301f)
// Key reveals: 0 | 56 odd powers | 281 3^100 | 627 even powers | 996 rule
import { SlideBase, Reveal, Pop, C, F, Pill, Row, RuleBox } from "./shared";

const PowerBox: React.FC<{
  at: number; base: string; exps: Array<[string, string]>; isEven: boolean;
}> = ({ at, base, exps, isEven }) => (
  <Reveal at={at} style={{
    border: `3px solid ${isEven ? C.evenBd : C.oddBd}`,
    background: isEven ? C.evenBg : C.oddBg,
    borderRadius: 16, padding: "22px 32px", flex: 1,
  }}>
    <div style={{ fontFamily: F, fontWeight: 900, fontSize: 52, color: isEven ? C.even : C.odd, marginBottom: 14, textAlign: "center" }}>
      {base}
    </div>
    {exps.map(([exp, result], i) => (
      <Reveal key={i} at={at + i * 80} style={{ marginBottom: 6 }}>
        <Row gap={16}>
          <div style={{
            fontFamily: F, fontWeight: 800, fontSize: 38, color: C.dark,
            background: "#fff", borderRadius: 8, padding: "4px 16px", minWidth: 120, textAlign: "center",
          }}>{exp}</div>
          <div style={{ fontFamily: F, fontSize: 38, color: C.dark }}>= {result}</div>
          <Pill color={isEven ? C.even : C.odd} bg={isEven ? C.evenBg : C.oddBg} border={isEven ? C.evenBd : C.oddBd} size={30}>
            {isEven ? "Even" : "Odd"}
          </Pill>
        </Row>
      </Reveal>
    ))}
  </Reveal>
);

export const Slide08Powers: React.FC = () => (
  <SlideBase num={8} title="POWERS RULE">

    <Row gap={60} align="flex-start" style={{ marginBottom: 32 }}>
      <PowerBox
        at={56}
        base="3 (Odd)"
        exps={[["3²", "9"], ["3³", "27"], ["3¹⁰⁰", "?"]]}
        isEven={false}
      />
      <PowerBox
        at={627}
        base="4 (Even)"
        exps={[["4²", "16"], ["4³", "64"], ["4⁵", "1024"]]}
        isEven
      />
    </Row>

    <Reveal at={281} style={{ marginBottom: 20 }}>
      <div style={{
        background: C.oddBg, border: `2px dashed ${C.oddBd}`, borderRadius: 12,
        padding: "12px 24px", fontFamily: F, fontSize: 34, color: C.dark,
      }}>
        <span style={{ fontWeight: 800 }}>3¹⁰⁰</span> is also <span style={{ fontWeight: 800, color: C.odd }}>ODD</span> —
        no even factor ever enters when multiplying 3s
      </div>
    </Reveal>

    <Reveal at={996}>
      <RuleBox color={C.title} bg={C.blueBg} border={C.blueBd} style={{ fontSize: 40 }}>
        🔑 <strong>Powers do NOT change parity!</strong><br />
        <Row gap={40} style={{ marginTop: 12 }}>
          <span><span style={{ fontWeight: 800, color: C.even }}>Even</span>ⁿ = <span style={{ fontWeight: 800, color: C.even }}>Even</span></span>
          <span style={{ color: C.gray }}>|</span>
          <span><span style={{ fontWeight: 800, color: C.odd }}>Odd</span>ⁿ = <span style={{ fontWeight: 800, color: C.odd }}>Odd</span></span>
        </Row>
      </RuleBox>
    </Reveal>

  </SlideBase>
);
