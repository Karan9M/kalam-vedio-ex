// Slide 2 — Basics (Definition)  (20.517 → 52.765s, ~967f)
// Key reveals (relative frames):
//   0f  = header
//   135f = "take 6" demo
//   469f = "take 7" demo
//   762f = summary definitions
import { SlideBase, Reveal, Pop, C, F, Pill, Row } from "./shared";

const Dot: React.FC<{ color: string }> = ({ color }) => (
  <div style={{ width: 44, height: 44, borderRadius: "50%", background: color, flexShrink: 0 }} />
);

const DotGroup: React.FC<{ count: number; color: string }> = ({ count, color }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, width: 120 }}>
    {Array.from({ length: count }).map((_, i) => <Dot key={i} color={color} />)}
  </div>
);

export const Slide02Basics: React.FC = () => (
  <SlideBase num={2} title="BASICS (DEFINITION)">

    {/* Definitions */}
    <Reveal at={0} style={{ marginBottom: 28 }}>
      <Row gap={16} style={{ marginBottom: 10 }}>
        <span style={{ fontFamily: F, fontWeight: 600, fontSize: 42, color: C.dark }}>
          <Pill color={C.even} bg={C.evenBg} border={C.evenBd} size={38}>Even Number</Pill>
          {" "}→{" "}
          <span style={{ color: C.even, fontWeight: 700 }}>Divisible by 2</span>
        </span>
      </Row>
      <Row gap={16}>
        <span style={{ fontFamily: F, fontWeight: 600, fontSize: 42, color: C.dark }}>
          <Pill color={C.odd} bg={C.oddBg} border={C.oddBd} size={38}>Odd Number</Pill>
          {" "}→{" "}
          <span style={{ color: C.odd, fontWeight: 700 }}>NOT divisible by 2</span>
        </span>
      </Row>
    </Reveal>

    {/* Examples side by side */}
    <Row gap={80} align="flex-start" style={{ marginTop: 8 }}>

      {/* 6 — even */}
      <Reveal at={135} style={{
        border: `3px solid ${C.evenBd}`, borderRadius: 18,
        padding: "28px 40px", background: C.evenBg, minWidth: 360, textAlign: "center",
      }}>
        <Pop at={135}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 80, color: C.even, lineHeight: 1 }}>6</div>
        </Pop>
        <Reveal at={250} style={{ marginTop: 12, display: "flex", gap: 16, justifyContent: "center" }}>
          <DotGroup count={3} color={C.even} />
          <DotGroup count={3} color={C.even} />
        </Reveal>
        <Reveal at={360} style={{ marginTop: 14, fontFamily: F, fontWeight: 600, fontSize: 34, color: C.dark }}>
          3 + 3 = 6
        </Reveal>
        <Reveal at={420} style={{ marginTop: 8 }}>
          <Pill color={C.even} bg={C.evenBg} border={C.evenBd} size={32}>→ EVEN ✓</Pill>
        </Reveal>
      </Reveal>

      {/* 7 — odd */}
      <Reveal at={469} style={{
        border: `3px solid ${C.oddBd}`, borderRadius: 18,
        padding: "28px 40px", background: C.oddBg, minWidth: 360, textAlign: "center",
      }}>
        <Pop at={469}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 80, color: C.odd, lineHeight: 1 }}>7</div>
        </Pop>
        <Reveal at={560} style={{ marginTop: 12, display: "flex", gap: 16, justifyContent: "center" }}>
          <DotGroup count={3} color={C.odd} />
          <DotGroup count={3} color={C.odd} />
          <Dot color="#F97316" />
        </Reveal>
        <Reveal at={651} style={{ marginTop: 14, fontFamily: F, fontWeight: 600, fontSize: 34, color: C.dark }}>
          3 + 3 + <span style={{ color: "#F97316", fontWeight: 800 }}>1</span> = 7
        </Reveal>
        <Reveal at={700} style={{ marginTop: 8 }}>
          <Pill color={C.odd} bg={C.oddBg} border={C.oddBd} size={32}>→ ODD ✗</Pill>
        </Reveal>
      </Reveal>

      {/* Summary */}
      <Reveal at={762} style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8 }}>
        <div style={{
          background: C.evenBg, border: `2px dashed ${C.evenBd}`, borderRadius: 14,
          padding: "16px 24px", fontFamily: F, fontSize: 34, color: C.dark,
        }}>
          <span style={{ fontWeight: 800, color: C.even }}>Even</span> = perfectly splits into 2
        </div>
        <div style={{
          background: C.oddBg, border: `2px dashed ${C.oddBd}`, borderRadius: 14,
          padding: "16px 24px", fontFamily: F, fontSize: 34, color: C.dark,
        }}>
          <span style={{ fontWeight: 800, color: C.odd }}>Odd</span> = 1 is always left over
        </div>
      </Reveal>

    </Row>
  </SlideBase>
);
