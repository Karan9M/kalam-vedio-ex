// Slide 4 - LCM Method (4530 -> 6440f, ~1910f)
import { SlideBase, Reveal, Pop, C, F, Row, AnimImg, RuleBox, Pill } from "./shared";
import calcIllus    from "../../../Graphics/Calculator-illustration.png";
import letterA      from "../../../Graphics/Letter-A.png";
import letterB      from "../../../Graphics/Letter-B.png";
import letterC      from "../../../Graphics/Letter-C.png";
import badgeImportant from "../../../Graphics/badge-important.png";

const TableRow: React.FC<{
  at: number; person: string; color: string; days: number; units: number; lcm: number;
}> = ({ at, person, color, days, units, lcm }) => (
  <Reveal at={at} style={{ marginBottom: 8 }}>
    <div style={{
      display: "flex", alignItems: "center", gap: 0,
      background: "#F9FAFB", border: "1.5px solid #E5E7EB",
      borderRadius: 10, overflow: "hidden",
    }}>
      <div style={{
        width: 80, padding: "12px 0", textAlign: "center",
        fontFamily: F, fontWeight: 800, fontSize: 38, color,
        background: color + "18",
        borderRight: "1.5px solid #E5E7EB",
      }}>{person}</div>
      <div style={{
        flex: 1, padding: "12px 20px",
        fontFamily: F, fontSize: 34, color: "#374151",
        borderRight: "1.5px solid #E5E7EB",
      }}>{days} days</div>
      <div style={{
        width: 200, padding: "12px 20px", textAlign: "center",
        fontFamily: F, fontSize: 32, color: "#6B7280",
        borderRight: "1.5px solid #E5E7EB",
      }}>{lcm} / {days}</div>
      <div style={{
        width: 160, padding: "12px 20px", textAlign: "center",
        fontFamily: F, fontWeight: 800, fontSize: 38, color,
      }}>{units} units</div>
    </div>
  </Reveal>
);

export const Slide04LCMMethod: React.FC = () => (
  <SlideBase num={4} title="LCM METHOD" padTop={48}>
    <Row gap={64} align="flex-start">

      <div style={{ flex: 1.4 }}>
        <Reveal at={62} style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.gray }}>
            Most powerful method when numbers are complex
          </div>
        </Reveal>

        <Reveal at={196} style={{ marginBottom: 6 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
            <strong style={{ color: C.blue }}>A</strong> = 12 days &nbsp;|&nbsp;
            <strong style={{ color: C.orange }}>B</strong> = 18 days &nbsp;|&nbsp;
            <strong style={{ color: C.green }}>C</strong> = 9 days
          </div>
        </Reveal>

        <Reveal at={471} style={{ marginBottom: 18 }}>
          <Pop at={471}>
            <div style={{
              background: C.purpleBg, border: `2.5px solid ${C.purpleBd}`,
              borderRadius: 12, padding: "12px 28px", display: "inline-block",
            }}>
              <span style={{ fontFamily: F, fontSize: 36, color: "#7C3AED", fontWeight: 700 }}>
                Total Work = LCM(12, 18, 9) = <strong style={{ fontSize: 44 }}>36 units</strong>
              </span>
            </div>
          </Pop>
        </Reveal>

        <Reveal at={695} style={{ marginBottom: 10 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.dark, fontWeight: 700 }}>
            Daily efficiency = LCM / Days:
          </div>
        </Reveal>

        {/* Table header */}
        <Reveal at={695} style={{ marginBottom: 4 }}>
          <div style={{
            display: "flex", gap: 0,
            background: C.title, borderRadius: "10px 10px 0 0",
            overflow: "hidden",
          }}>
            {["Person", "Days", "Calculation", "Units/Day"].map((h, i) => (
              <div key={i} style={{
                flex: i === 0 ? "0 0 80px" : i === 2 ? "0 0 200px" : i === 3 ? "0 0 160px" : 1,
                padding: "10px 20px", textAlign: "center",
                fontFamily: F, fontWeight: 700, fontSize: 28, color: "#fff",
              }}>{h}</div>
            ))}
          </div>
        </Reveal>

        <TableRow at={775}  person="A" color={C.blue}   days={12} units={3} lcm={36} />
        <TableRow at={939}  person="B" color={C.orange} days={18} units={2} lcm={36} />
        <TableRow at={1099} person="C" color={C.green}  days={9}  units={4} lcm={36} />

        <Reveal at={1263} style={{ marginBottom: 14, marginTop: 8 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
            Together: 3 + 2 + 4 = <strong style={{ color: C.title }}>9 units/day</strong>
          </div>
        </Reveal>

        <Reveal at={1471}>
          <Pop at={1471}>
            <Pill color={C.green} bg={C.greenBg} border={C.greenBd} size={46}>
              36 / 9 = 4 Days
            </Pill>
          </Pop>
        </Reveal>

        <Reveal at={1614} style={{ marginTop: 14 }}>
          <RuleBox color={C.title} bg={C.blueBg} border={C.blueBd} style={{ fontSize: 32 }}>
            No fractions! LCM keeps everything as whole numbers.
          </RuleBox>
        </Reveal>
      </div>

      <div style={{ flex: 0.5, position: "relative", minHeight: 600 }}>
        <AnimImg src={calcIllus} revealFrame={200} style={{ right: 0, top: 0,   width: 240 }} />
        <AnimImg src={letterA}   revealFrame={196} style={{ left: 0, top: 320,  width: 70 }} />
        <AnimImg src={letterB}   revealFrame={285} style={{ left: 0, top: 400,  width: 70 }} />
        <AnimImg src={letterC}   revealFrame={377} style={{ left: 0, top: 480,  width: 70 }} />
        <AnimImg src={badgeImportant} revealFrame={1614}
          style={{ position: "relative" as const, width: 220, height: 54, top: 0, left: 0 }} />
      </div>

    </Row>
  </SlideBase>
);
