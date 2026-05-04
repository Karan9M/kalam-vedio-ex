// Slide 5 — Addition & Subtraction Rules  (122.813 → 174.316s, ~1545f)
// Key reveals: 0 header | 194 E+E | 371 O+O | 559 E+O | 750 O+E | 927 pattern | 1316 subtraction
import { SlideBase, Reveal, Pop, C, F, Pill, Row, RuleBox } from "./shared";

const CalcRow: React.FC<{
  at: number; eq: string; type: string; result: string;
  isEven: boolean; typeColor: string;
}> = ({ at, eq, type, result, isEven, typeColor }) => (
  <Reveal at={at}>
    <Row gap={24} style={{ marginBottom: 6 }}>
      <div style={{
        minWidth: 220, fontFamily: F, fontWeight: 800, fontSize: 40,
        background: "#F9FAFB", border: "1.5px solid #E5E7EB",
        borderRadius: 10, padding: "8px 20px", textAlign: "center", color: C.dark,
      }}>{eq}</div>
      <div style={{ fontFamily: F, fontSize: 34, color: C.gray, minWidth: 240 }}>{type}</div>
      <Pop at={at + 10}>
        <Pill color={isEven ? C.even : C.odd} bg={isEven ? C.evenBg : C.oddBg} border={isEven ? C.evenBd : C.oddBd} size={34}>
          {result}
        </Pill>
      </Pop>
    </Row>
  </Reveal>
);

export const Slide05AddSub: React.FC = () => (
  <SlideBase num={5} title="ADDITION & SUBTRACTION RULES">

    <Row gap={80} align="flex-start">
      {/* Left: 4 examples */}
      <div style={{ flex: 1 }}>
        <CalcRow at={194} eq="4 + 6 = 10" type="Even + Even" result="EVEN" isEven typeColor={C.even} />
        <CalcRow at={371} eq="3 + 7 = 10" type="Odd + Odd" result="EVEN" isEven typeColor={C.odd} />
        <CalcRow at={559} eq="4 + 3 = 7"  type="Even + Odd" result="ODD" isEven={false} typeColor={C.dark} />
        <CalcRow at={750} eq="5 + 2 = 7"  type="Odd + Even" result="ODD" isEven={false} typeColor={C.dark} />
      </div>

      {/* Right: Pattern + rule */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
        <Reveal at={927}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 38, color: C.title, marginBottom: 12 }}>
            The Pattern:
          </div>
          <div style={{
            background: C.evenBg, border: `2.5px solid ${C.evenBd}`, borderRadius: 14,
            padding: "16px 24px", fontFamily: F, fontSize: 36, color: C.dark, marginBottom: 12,
          }}>
            <span style={{ fontWeight: 800, color: C.even }}>E+E</span> or <span style={{ fontWeight: 800, color: C.odd }}>O+O</span>
            {" "}→ <span style={{ fontWeight: 800, color: C.even }}>EVEN</span>
          </div>
          <div style={{
            background: C.oddBg, border: `2.5px solid ${C.oddBd}`, borderRadius: 14,
            padding: "16px 24px", fontFamily: F, fontSize: 36, color: C.dark,
          }}>
            <span style={{ fontWeight: 800 }}>E+O</span> or <span style={{ fontWeight: 800 }}>O+E</span>
            {" "}→ <span style={{ fontWeight: 800, color: C.odd }}>ODD</span>
          </div>
        </Reveal>

        <Reveal at={1316}>
          <div style={{
            background: C.yellowBg, border: `2px dashed ${C.yellowBd}`, borderRadius: 14,
            padding: "16px 24px", fontFamily: F, fontSize: 34, color: C.dark, fontWeight: 600,
          }}>
            ✅ Same rules apply for <span style={{ fontWeight: 800 }}>subtraction</span> too!<br />
            <span style={{ fontWeight: 400, color: C.gray, fontSize: 30 }}>Plus or minus — parity doesn't change</span>
          </div>
        </Reveal>
      </div>
    </Row>

  </SlideBase>
);
