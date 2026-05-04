// Slide 9 — Prime Numbers & Parity  (341.530 → 414.447s, ~2188f)
// Key reveals: 0 | 76 list 2 | 137 3,5,7,11 | 227 13-23 | 510 all odd, 2 even |
//              647 only even prime? | 762 No | 982 2 only | 1324 3+5=8 | 1516 7+11=18 | 1823 conclusion
import { SlideBase, Reveal, Pop, C, F, Pill, Row, RuleBox } from "./shared";

const PrimeChip: React.FC<{ n: number; at: number; isFirst?: boolean }> = ({ n, at, isFirst }) => (
  <Reveal at={at} style={{ display: "inline-block" }}>
    <Pop at={at}>
      <div style={{
        width: 70, height: 70, borderRadius: 12,
        border: `3px solid ${isFirst ? C.evenBd : C.oddBd}`,
        background: isFirst ? C.evenBg : C.oddBg,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: F, fontWeight: 800, fontSize: 34,
        color: isFirst ? C.even : C.odd,
      }}>{n}</div>
    </Pop>
  </Reveal>
);

export const Slide09Primes: React.FC = () => (
  <SlideBase num={9} title="PRIME NUMBERS & PARITY">

    {/* Prime list */}
    <Reveal at={0} style={{ marginBottom: 8 }}>
      <div style={{ fontFamily: F, fontWeight: 700, fontSize: 38, color: C.dark, marginBottom: 14 }}>
        Prime numbers:
      </div>
    </Reveal>
    <Row gap={14} style={{ marginBottom: 28, flexWrap: "wrap" }}>
      <PrimeChip n={2}  at={76}  isFirst />
      <PrimeChip n={3}  at={137} />
      <PrimeChip n={5}  at={150} />
      <PrimeChip n={7}  at={163} />
      <PrimeChip n={11} at={175} />
      <PrimeChip n={13} at={227} />
      <PrimeChip n={17} at={240} />
      <PrimeChip n={19} at={253} />
      <PrimeChip n={23} at={266} />
      <Reveal at={280} style={{ display: "inline-block" }}>
        <div style={{ fontFamily: F, fontWeight: 800, fontSize: 36, color: C.gray, alignSelf: "center" }}>…</div>
      </Reveal>
    </Row>

    {/* Observation */}
    <Reveal at={344} style={{ marginBottom: 14 }}>
      <div style={{ fontFamily: F, fontSize: 38, color: C.dark }}>
        3, 5, 7, 11… are all <span style={{ fontWeight: 800, color: C.odd }}>ODD</span>{" "}
        — but <span style={{ fontWeight: 900, fontSize: 44, color: C.even }}>2</span> is{" "}
        <span style={{ fontWeight: 800, color: C.even }}>EVEN</span>!
      </div>
    </Reveal>

    <Row gap={60} align="flex-start">
      <div style={{ flex: 1 }}>
        <Reveal at={647} style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 38, color: C.title }}>
            Any other even prime besides 2?
          </div>
        </Reveal>
        <Reveal at={762} style={{ marginBottom: 14 }}>
          <Pill color={C.odd} bg={C.oddBg} border={C.oddBd} size={40}>NO! ✗</Pill>
        </Reveal>
        <Reveal at={799} style={{ marginBottom: 20 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.dark }}>
            Any even number &gt; 2 has 2 as a factor<br />→ can't be prime
          </div>
        </Reveal>
        <Reveal at={982}>
          <RuleBox color={C.even} bg={C.evenBg} border={C.evenBd} style={{ fontSize: 36, marginBottom: 14 }}>
            <strong>2</strong> is the <strong>ONLY even prime</strong>.<br />
            All other primes are <span style={{ color: C.odd }}>ODD</span>.
          </RuleBox>
        </Reveal>
      </div>

      <div style={{ flex: 1 }}>
        <Reveal at={1233} style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 38, color: C.title }}>Powerful conclusion:</div>
        </Reveal>
        <Reveal at={1324} style={{ marginBottom: 10 }}>
          <Row gap={16}>
            <div style={{
              background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 10,
              padding: "10px 20px", fontFamily: F, fontWeight: 700, fontSize: 38, color: C.dark,
            }}>3 + 5 = <span style={{ color: C.even }}>8</span></div>
            <span style={{ fontFamily: F, fontSize: 38, color: C.odd, fontWeight: 800 }}>✗ NOT prime</span>
          </Row>
        </Reveal>
        <Reveal at={1516} style={{ marginBottom: 20 }}>
          <Row gap={16}>
            <div style={{
              background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 10,
              padding: "10px 20px", fontFamily: F, fontWeight: 700, fontSize: 38, color: C.dark,
            }}>7 + 11 = <span style={{ color: C.even }}>18</span></div>
            <span style={{ fontFamily: F, fontSize: 38, color: C.odd, fontWeight: 800 }}>✗ NOT prime</span>
          </Row>
        </Reveal>
        <Reveal at={1823}>
          <RuleBox color={C.odd} bg={C.oddBg} border={C.oddBd} style={{ fontSize: 34 }}>
            Odd + Odd = Even &gt; 2 = <strong>composite</strong><br />
            Two odd primes' sum is <strong>NEVER prime</strong>
          </RuleBox>
        </Reveal>
      </div>
    </Row>

  </SlideBase>
);
