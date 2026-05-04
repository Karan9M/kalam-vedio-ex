// Slide 6 - Alternating Work (8245 -> 10060f, ~1815f)
import { SlideBase, Reveal, C, F, Row, AnimImg } from "./shared";
import arrowsCircle from "../../../Graphics/arrows-circle.png";
import letterA      from "../../../Graphics/Letter-A.png";
import letterB      from "../../../Graphics/Letter-B.png";
import badgeTrick   from "../../../Graphics/badge-trick.png";

const DayBox: React.FC<{ label: string; color: string; bg: string; border: string }> = ({
  label, color, bg, border,
}) => (
  <div style={{
    width: 80, height: 80, borderRadius: 12,
    background: bg, border: `2.5px solid ${border}`,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: F, fontWeight: 800, fontSize: 34, color,
  }}>{label}</div>
);

export const Slide06Alternating: React.FC = () => (
  <SlideBase num={6} title="ALTERNATING WORK">
    <Row gap={72} align="flex-start">

      <div style={{ flex: 1.3 }}>
        <Reveal at={0} style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
            A and B take turns - one day each
          </div>
        </Reveal>

        <Reveal at={132} style={{ marginBottom: 18 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.gray, marginBottom: 12 }}>
            Day pattern:
          </div>
          <Row gap={10}>
            {[["A","Day 1"],["B","Day 2"],["A","Day 3"],["B","Day 4"],["A","Day 5"],["...",""]].map(([lbl, day], i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <DayBox
                  label={lbl}
                  color={lbl === "A" ? C.blue : lbl === "B" ? C.orange : C.gray}
                  bg={lbl === "A" ? C.blueBg : lbl === "B" ? C.orangeBg : "#F9FAFB"}
                  border={lbl === "A" ? C.blueBd : lbl === "B" ? C.orangeBd : "#E5E7EB"}
                />
                <div style={{ fontFamily: F, fontSize: 22, color: C.gray }}>{day}</div>
              </div>
            ))}
          </Row>
        </Reveal>

        <Reveal at={437} style={{ marginBottom: 8 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 18,
            background: C.blueBg, border: `2px solid ${C.blueBd}`,
            borderRadius: 10, padding: "10px 22px",
          }}>
            <span style={{ fontFamily: F, fontWeight: 800, fontSize: 38, color: C.blue }}>A</span>
            <span style={{ fontFamily: F, fontSize: 32, color: C.dark }}>= 10 days ={">"} 3 units/day</span>
          </div>
        </Reveal>

        <Reveal at={516} style={{ marginBottom: 16 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 18,
            background: C.orangeBg, border: `2px solid ${C.orangeBd}`,
            borderRadius: 10, padding: "10px 22px",
          }}>
            <span style={{ fontFamily: F, fontWeight: 800, fontSize: 38, color: C.orange }}>B</span>
            <span style={{ fontFamily: F, fontSize: 32, color: C.dark }}>= 15 days ={">"} 2 units/day</span>
          </div>
        </Reveal>

        <Reveal at={602} style={{ marginBottom: 12 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.dark }}>
            Total Work = LCM(10, 15) = <strong style={{ color: "#7C3AED" }}>30 units</strong>
          </div>
        </Reveal>

        <Reveal at={915} style={{ marginBottom: 12 }}>
          <div style={{
            background: "#F9FAFB", border: "1.5px solid #E5E7EB",
            borderRadius: 10, padding: "10px 20px",
            fontFamily: F, fontSize: 34, color: C.dark,
          }}>
            Every 2 days:{" "}
            <strong style={{ color: C.blue }}>3</strong> +{" "}
            <strong style={{ color: C.orange }}>2</strong> ={" "}
            <strong>5 units</strong> done
          </div>
        </Reveal>

        <Reveal at={1024} style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.dark }}>
            30 units / 5 per cycle = <strong>6 cycles</strong> x 2 days ={">"}{" "}
            <strong style={{ color: C.green }}>12 days</strong>
          </div>
        </Reveal>

        <Reveal at={1195}>
          <Row gap={16}>
            <AnimImg src={badgeTrick} revealFrame={1195}
              style={{ position: "relative" as const, width: 180, height: 50, top: 0, left: 0 }} />
            <div style={{ fontFamily: F, fontSize: 32, color: C.orange, fontWeight: 700 }}>
              Always verify: check exactly which day finishes!
            </div>
          </Row>
        </Reveal>
      </div>

      <div style={{ flex: 0.65, position: "relative", minHeight: 600 }}>
        <AnimImg src={arrowsCircle} revealFrame={0}   style={{ right: 0,  top: 20,  width: 240 }} />
        <AnimImg src={letterA}      revealFrame={437}  style={{ right: 60, top: 300, width: 80 }} />
        <AnimImg src={letterB}      revealFrame={516}  style={{ right: 60, top: 390, width: 80 }} />
      </div>

    </Row>
  </SlideBase>
);
