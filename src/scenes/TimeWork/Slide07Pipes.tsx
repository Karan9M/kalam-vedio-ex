// Slide 7 - Pipes and Cisterns (10060 -> 12415f, ~2355f)
import { SlideBase, Reveal, Pop, C, F, Row, AnimImg, Pill, RuleBox } from "./shared";
import arithPlus    from "../../../Graphics/Arithmatic-plus.png";
import arithMinus   from "../../../Graphics/Arithmatic-minus.png";
import humanMulti   from "../../../Graphics/human-multi-conversation.png";
import badgeImportant from "../../../Graphics/badge-important.png";

const PipeRow: React.FC<{
  at: number; label: string; hours: number; type: "fill" | "empty";
}> = ({ at, label, hours, type }) => {
  const color  = type === "fill" ? C.green : C.red;
  const bg     = type === "fill" ? C.greenBg : C.redBg;
  const border = type === "fill" ? C.greenBd : C.redBd;
  const tag    = type === "fill" ? "+ FILL" : "- EMPTY";
  return (
    <Reveal at={at} style={{ marginBottom: 10 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 16,
        background: bg, border: `2px solid ${border}`, borderRadius: 10,
        padding: "10px 20px",
      }}>
        <div style={{ fontFamily: F, fontWeight: 800, fontSize: 38, color, minWidth: 40 }}>
          {label}
        </div>
        <div style={{ fontFamily: F, fontSize: 32, color: C.dark, flex: 1 }}>
          {type === "fill" ? "fills" : "empties"} tank in{" "}
          <strong style={{ color }}>{hours} hrs</strong>
        </div>
        <div style={{
          background: color + "22", border: `2px solid ${color}`,
          borderRadius: 8, padding: "4px 14px",
          fontFamily: F, fontWeight: 700, fontSize: 28, color,
        }}>{tag}</div>
      </div>
    </Reveal>
  );
};

export const Slide07Pipes: React.FC = () => (
  <SlideBase num={7} title="PIPES AND CISTERNS" padTop={48}>
    <Row gap={64} align="flex-start">

      <div style={{ flex: 1.4 }}>
        <Reveal at={73} style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.gray }}>
            Same concept as Time and Work - only the direction changes!
          </div>
        </Reveal>

        <Reveal at={215} style={{ marginBottom: 6 }}>
          <Row gap={14}>
            <AnimImg src={arithPlus} revealFrame={215}
              style={{ position: "relative" as const, width: 40, height: 40, top: 0, left: 0 }} />
            <div style={{ fontFamily: F, fontSize: 36, fontWeight: 700, color: C.green }}>
              Inlet pipe = fills tank = POSITIVE work
            </div>
          </Row>
        </Reveal>
        <Reveal at={366} style={{ marginBottom: 16 }}>
          <Row gap={14}>
            <AnimImg src={arithMinus} revealFrame={366}
              style={{ position: "relative" as const, width: 40, height: 40, top: 0, left: 0 }} />
            <div style={{ fontFamily: F, fontSize: 36, fontWeight: 700, color: C.red }}>
              Outlet pipe = empties tank = NEGATIVE work
            </div>
          </Row>
        </Reveal>

        <PipeRow at={529} label="A" hours={8}  type="fill" />
        <PipeRow at={649} label="B" hours={12} type="fill" />
        <PipeRow at={775} label="C" hours={6}  type="empty" />

        <Reveal at={909} style={{ marginBottom: 12 }}>
          <div style={{
            background: C.purpleBg, border: `2px solid ${C.purpleBd}`,
            borderRadius: 10, padding: "10px 20px",
            fontFamily: F, fontSize: 34, color: "#7C3AED", fontWeight: 700,
          }}>
            Total Capacity = LCM(8, 12, 6) = 24 units
          </div>
        </Reveal>

        <Reveal at={1124} style={{ marginBottom: 6 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.dark }}>
            A rate: 24 / 8 = <strong style={{ color: C.green }}>+3 units/hr</strong>
          </div>
        </Reveal>
        <Reveal at={1207} style={{ marginBottom: 6 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.dark }}>
            B rate: 24 / 12 = <strong style={{ color: C.green }}>+2 units/hr</strong>
          </div>
        </Reveal>
        <Reveal at={1336} style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.dark }}>
            C rate: 24 / 6 = <strong style={{ color: C.red }}>-4 units/hr</strong>
          </div>
        </Reveal>

        <Reveal at={1534} style={{ marginBottom: 14 }}>
          <div style={{
            background: "#F9FAFB", border: "1.5px solid #E5E7EB",
            borderRadius: 10, padding: "10px 20px",
            fontFamily: F, fontSize: 36, color: C.dark,
          }}>
            All together: 3 + 2 - 4 = <strong>1 unit/hr</strong>
          </div>
        </Reveal>

        <Reveal at={1753} style={{ marginBottom: 14 }}>
          <Pop at={1753}>
            <Pill color={C.green} bg={C.greenBg} border={C.greenBd} size={44}>
              Tank fills in 24 / 1 = 24 hours
            </Pill>
          </Pop>
        </Reveal>

        <Reveal at={1986}>
          <RuleBox color={C.title} bg={C.blueBg} border={C.blueBd} style={{ fontSize: 32 }}>
            <AnimImg src={badgeImportant} revealFrame={1986}
              style={{ position: "relative" as const, width: 200, height: 50, top: 0, left: 0, marginRight: 14 }} />
            Inlet = positive &nbsp;|&nbsp; Outlet = negative. That is the only rule.
          </RuleBox>
        </Reveal>
      </div>

      <div style={{ flex: 0.5, position: "relative", minHeight: 600 }}>
        <AnimImg src={humanMulti} revealFrame={73} style={{ right: 0, top: 0, width: 260 }} />
      </div>

    </Row>
  </SlideBase>
);
