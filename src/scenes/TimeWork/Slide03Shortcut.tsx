// Slide 3 - Shortcut Formula (2950 -> 4530f, ~1580f)
import { SlideBase, Reveal, Pop, C, F, Row, AnimImg, RuleBox, Pill } from "./shared";
import badgeTrick  from "../../../Graphics/badge-trick.png";
import humanIdeaBulb from "../../../Graphics/human-idea-bulb.png";
import starIcon    from "../../../Graphics/star-icon.png";
import badgeNote   from "../../../Graphics/badge-note.png";

export const Slide03Shortcut: React.FC = () => (
  <SlideBase num={3} title="SHORTCUT FORMULA">
    <Row gap={72} align="flex-start">

      <div style={{ flex: 1.3 }}>
        <Reveal at={0} style={{ marginBottom: 18 }}>
          <Row gap={16}>
            <AnimImg src={badgeTrick} revealFrame={0}
              style={{ position: "relative" as const, width: 200, height: 54, top: 0, left: 0 }} />
            <div style={{ fontFamily: F, fontSize: 36, color: C.title, fontWeight: 700 }}>
              For 2 people working together:
            </div>
          </Row>
        </Reveal>

        <Reveal at={310} style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.gray }}>
            Person A takes <strong style={{ color: C.blue }}>N1</strong> days &nbsp;|&nbsp;
            Person B takes <strong style={{ color: C.orange }}>N2</strong> days
          </div>
        </Reveal>

        <Reveal at={651} style={{ marginBottom: 22 }}>
          <Pop at={651}>
            <div style={{
              background: C.yellowBg, border: `2.5px solid ${C.yellowBd}`,
              borderRadius: 16, padding: "20px 36px", textAlign: "center",
            }}>
              <div style={{ fontFamily: F, fontSize: 36, color: C.gray, marginBottom: 10 }}>
                Time together =
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", fontFamily: F, fontWeight: 800 }}>
                  <span style={{ fontSize: 52, color: C.blue }}>N1</span>
                  <span style={{ display: "block", height: 3, background: C.dark, minWidth: 120, margin: "4px 0" }} />
                  <span style={{ fontSize: 44, color: C.dark }}>
                    <span style={{ color: C.blue }}>N1</span>
                    <span style={{ color: C.dark }}> + </span>
                    <span style={{ color: C.orange }}>N2</span>
                  </span>
                </div>
                <div style={{ fontFamily: F, fontSize: 52, fontWeight: 800, color: C.dark }}>x</div>
                <div style={{ fontFamily: F, fontSize: 52, fontWeight: 800, color: C.orange }}>N2</div>
              </div>
            </div>
          </Pop>
        </Reveal>

        <Reveal at={899} style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
            Example: A = <strong style={{ color: C.blue }}>10</strong> days,
            B = <strong style={{ color: C.orange }}>15</strong> days
          </div>
        </Reveal>

        <Reveal at={988} style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
            = (10 x 15) / (10 + 15) = 150 / 25
          </div>
        </Reveal>

        <Reveal at={1185} style={{ marginBottom: 18 }}>
          <Pop at={1185}>
            <Pill color={C.green} bg={C.greenBg} border={C.greenBd} size={46}>
              = 6 Days
            </Pill>
          </Pop>
        </Reveal>

        <Reveal at={1309} style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.gray }}>
            Same answer as fraction method - but much faster!
          </div>
        </Reveal>

        <Reveal at={1407}>
          <RuleBox color={C.red} bg={C.redBg} border={C.redBd} style={{ fontSize: 34 }}>
            <AnimImg src={badgeNote} revealFrame={1407}
              style={{ position: "relative" as const, width: 150, height: 48, top: 0, left: 0, marginRight: 12 }} />
            This formula works ONLY for 2 people.
            For 3+ people, use the Efficiency method.
          </RuleBox>
        </Reveal>
      </div>

      <div style={{ flex: 0.65, position: "relative", minHeight: 600 }}>
        <AnimImg src={humanIdeaBulb} revealFrame={0}   style={{ right: 0,  top: 0,   width: 280 }} />
        <AnimImg src={starIcon}      revealFrame={651}  style={{ right: 10, top: 310, width: 100 }} />
      </div>

    </Row>
  </SlideBase>
);
