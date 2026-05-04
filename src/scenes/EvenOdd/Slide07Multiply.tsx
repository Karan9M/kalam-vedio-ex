// Slide 7 â€” Multiplication Rule  (240.112 â†’ 298.162s, ~1742f)
// Key reveals: 0 | 69 OÃ—O | 269 OÃ—E | 470 EÃ—E | 665 pattern | 1193 example | 1441 result
import { SlideBase, Reveal, Pop, C, F, Pill, Row, RuleBox } from "./shared";
import { AnimImg } from "./shared";
import badgeExample from "../../../Graphics/badge-example.png";

const MulRow: React.FC<{ at: number; eq: string; type: string; result: string; isEven: boolean }> = ({
  at, eq, type, result, isEven,
}) => (
  <Reveal at={at} style={{ marginBottom: 8 }}>
    <Row gap={24}>
      <div style={{
        minWidth: 220, fontFamily: F, fontWeight: 800, fontSize: 40,
        background: "#F9FAFB", border: "1.5px solid #E5E7EB",
        borderRadius: 10, padding: "8px 20px", textAlign: "center", color: C.dark,
      }}>{eq}</div>
      <div style={{ fontFamily: F, fontSize: 34, color: C.gray, minWidth: 220 }}>{type}</div>
      <Pop at={at + 10}>
        <Pill color={isEven ? C.even : C.odd} bg={isEven ? C.evenBg : C.oddBg} border={isEven ? C.evenBd : C.oddBd} size={34}>
          {result}
        </Pill>
      </Pop>
    </Row>
  </Reveal>
);

export const Slide07Multiply: React.FC = () => (
  <SlideBase num={7} title="MULTIPLICATION RULE">

    <Row gap={80} align="flex-start">
      {/* Left: 3 examples */}
      <div style={{ flex: 1 }}>
        <MulRow at={69}  eq="3 * 5 = 15" type="Odd * Odd"  result="ODD"  isEven={false} />
        <MulRow at={269} eq="3 * 4 = 12" type="Odd * Even" result="EVEN" isEven />
        <MulRow at={470} eq="6 * 8 = 48" type="Even * Even" result="EVEN" isEven />
      </div>

      {/* Right: pattern + rule */}
      <div style={{ flex: 1.1, display: "flex", flexDirection: "column", gap: 20 }}>
        <Reveal at={665}>
          <RuleBox color={C.title} bg={C.blueBg} border={C.blueBd} style={{ fontSize: 36 }}>
            If <strong>ANY</strong> factor is{" "}
            <span style={{ color: C.even, fontWeight: 800 }}>EVEN</span>{" "}
            → product is <span style={{ color: C.even, fontWeight: 800 }}>EVEN</span>
          </RuleBox>
        </Reveal>

        <Reveal at={780}>
          <RuleBox color={C.odd} bg={C.oddBg} border={C.oddBd} style={{ fontSize: 36 }}>
            Product is <span style={{ fontWeight: 800 }}>ODD</span> only when{" "}
            <strong>ALL</strong> factors are odd
          </RuleBox>
        </Reveal>

        <Reveal at={1022}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.gray, fontStyle: "italic" }}>
             One even factor is enough to make the whole product even
          </div>
        </Reveal>
      </div>
    </Row>

    {/* Example */}
    <Reveal at={1193} style={{ marginTop: 28 }}>
      <Row gap={20} style={{ marginBottom: 12 }}>
        <AnimImg src={badgeExample} revealFrame={1193} style={{ position: "relative" as const, width: 200, height: 60, top: 0, left: 0 }} />
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 40, color: C.dark }}>
          What is the parity of:
        </div>
      </Row>
      <Pop at={1193}>
        <div style={{
          fontFamily: F, fontWeight: 900, fontSize: 68, color: C.dark,
          background: "#F9FAFB", border: "2px solid #E5E7EB", borderRadius: 14,
          padding: "12px 36px", display: "inline-block", letterSpacing: 2,
        }}>
          13 * 21 *{" "}
          <span style={{
            color: C.even, background: C.evenBg,
            border: `2px solid ${C.evenBd}`, borderRadius: 8, padding: "0 12px",
          }}>8</span>
          {" "}* 17
        </div>
      </Pop>
    </Reveal>

    <Reveal at={1441}>
      <Row gap={20} style={{ marginTop: 14 }}>
        <div style={{ fontFamily: F, fontSize: 38, color: C.dark }}>
          <span style={{ fontWeight: 800, color: C.even }}>8</span> is EVEN →{" "}
          No need to calculate anything else →{" "}
        </div>
        <Pill color={C.even} bg={C.evenBg} border={C.evenBd} size={38}>Product is EVEN</Pill>
      </Row>
    </Reveal>

  </SlideBase>
);

