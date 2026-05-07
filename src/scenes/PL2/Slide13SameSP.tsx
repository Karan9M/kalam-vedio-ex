// Slide 13 - Same SP Trap (4110f, starts at 684.67s)
import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import {
  SlideBase, Moment, Reveal, C, F, Row,
  Formula, BigLabel, CallOut, BounceIn, SlideIn, AnimImg,
  CountUp, Pulse, StampIn,
} from "./shared";
import badgeImportant from "../../../Graphics/badge-important.png";

const SituationCompare: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Spring fires at 1430 — when "दूसरी situation" is said
  const prog = spring({
    frame: Math.max(0, frame - 1430),
    fps,
    config: { damping: 24, stiffness: 80, mass: 1 },
    from: 0, to: 1,
  });

  // Item 1 (right panel): starts shifted left to appear visually centered, springs to its natural right position
  const item1X = interpolate(prog, [0, 1], [-280, 0]);
  // Item 2 (left panel): slides in from offscreen left
  const item2X = interpolate(prog, [0, 1], [-640, 0]);
  const item2Op = interpolate(prog, [0, 0.15], [0, 1], { extrapolateRight: "clamp" });
  const dividerOp = interpolate(prog, [0, 0.2], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{
      position: "relative", width: "100%", maxWidth: 1200,
      overflow: "hidden", display: "flex", alignItems: "flex-start",
    }}>
      {/* Item 2 — slides in from left */}
      <div style={{
        width: 560, flexShrink: 0,
        transform: `translateX(${item2X}px)`,
        opacity: item2Op,
        textAlign: "center", paddingRight: 20,
      }}>
        <SlideIn at={1430} from="left">
          <div style={{ fontFamily: F, fontSize: 40, color: C.loss, fontWeight: 700, marginBottom: 12 }}>
            Item 2: 20% Loss
          </div>
        </SlideIn>
        <div style={{ fontFamily: F, fontSize: 36, color: C.dark, marginBottom: 16 }}>
          SP = 960
        </div>
        <BounceIn at={1480}>
          <Formula color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 44 }}>
            CP = 960 × 100 / 80
          </Formula>
        </BounceIn>
        <Reveal at={1520}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 72, color: C.loss, marginTop: 16 }}>
            = 1200
          </div>
        </Reveal>
      </div>

      {/* Vertical divider */}
      <div style={{
        width: 4, background: "#CCCCCC",
        opacity: dividerOp,
        alignSelf: "stretch", minHeight: 280,
        margin: "0 16px", flexShrink: 0,
      }} />

      {/* Item 1 — starts centered, springs right */}
      <div style={{
        width: 560, flexShrink: 0,
        transform: `translateX(${item1X}px)`,
        textAlign: "center", paddingLeft: 20,
      }}>
        <SlideIn at={1122} from="right">
          <div style={{ fontFamily: F, fontSize: 40, color: C.profit, fontWeight: 700, marginBottom: 12 }}>
            Item 1: 20% Profit
          </div>
        </SlideIn>
        <div style={{ fontFamily: F, fontSize: 36, color: C.dark, marginBottom: 16 }}>
          SP = 960
        </div>
        <BounceIn at={1196}>
          <Formula color={C.cp} bg={C.cpBg} border={C.cpBd} style={{ fontSize: 44 }}>
            CP = 960 × 100 / 120
          </Formula>
        </BounceIn>
        <Reveal at={1300}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 72, color: C.cp, marginTop: 16 }}>
            = 800
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export const Slide13SameSP: React.FC = () => (
  <SlideBase num={13} title="SAME SP TRAP">

    {/* M1 (0–210f): Heading — classic CSAT trap */}
    <Moment from={0} to={210}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={19} from="top">
          <BigLabel color={C.loss} size={72}>
            Classic CSAT question — students always get this wrong
          </BigLabel>
        </SlideIn>
      </div>
    </Moment>

    {/* M2 (211–600f): The question card */}
    <Moment from={211} to={600}>
      <div style={{ width: "100%", maxWidth: 1000, textAlign: "center" }}>
        <SlideIn at={211} from="left">
          <div style={{
            background: "#FFFFFF", border: "2px solid #CCCCCC",
            borderRadius: 24, padding: "40px 64px",
            fontFamily: F, fontSize: 48, color: C.dark, lineHeight: 1.8,
          }}>
            A shopkeeper sells{" "}
            <strong>2 items</strong>.
            <br />
            Both at the <strong>same SP = Rs. 960</strong>.
            <br />
            <Reveal at={299}>
              <span>
                Item 1:{" "}
                <strong style={{ color: C.profit }}>20% profit</strong>
              </span>
            </Reveal>
            <br />
            <Reveal at={431}>
              <span>
                Item 2:{" "}
                <strong style={{ color: C.loss }}>20% loss</strong>
              </span>
            </Reveal>
            <br />
            <Reveal at={502}>
              <strong>Overall: profit / loss / zero?</strong>
            </Reveal>
          </div>
        </SlideIn>
      </div>
    </Moment>

    {/* M3 (736–916f): Students say ZERO */}
    <Moment from={736} to={916}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={736} from="left">
          <div style={{ fontFamily: F, fontSize: 52, color: C.gray, marginBottom: 24 }}>
            Students say:
          </div>
        </SlideIn>
        <BounceIn at={736}>
          <div style={{
            background: "#FFFFFF", border: "2px solid #CCCCCC",
            borderRadius: 20, padding: "32px 72px",
          }}>
            <BigLabel color={C.gray} size={88}>
              +20% and −20% cancel out = ZERO
            </BigLabel>
          </div>
        </BounceIn>
      </div>
    </Moment>

    {/* M4 (917–1035f): WRONG — ALWAYS LOSS */}
    <Moment from={917} to={1035}>
      <div style={{ textAlign: "center" }}>
        <StampIn at={917}>
          <div style={{
            background: C.lossBg, border: `4px solid ${C.lossBd}`,
            borderRadius: 28, padding: "36px 88px",
          }}>
            <BigLabel color={C.loss} size={120}>WRONG!</BigLabel>
          </div>
        </StampIn>
        <Reveal at={1037}>
          <CallOut color={C.loss} bg={C.lossBg} border={C.lossBd}
            style={{ fontSize: 60, marginTop: 28, padding: "28px 64px" }}>
            It is ALWAYS a LOSS.
          </CallOut>
        </Reveal>
      </div>
    </Moment>

    {/* M4b (1037–1121f): Let's see why */}
    <Moment from={1037} to={1121}>
      <div style={{ textAlign: "center" }}>
        <StampIn at={1037}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 108, color: C.loss }}>
            ALWAYS LOSS
          </div>
        </StampIn>
        <Reveal at={1037}>
          <div style={{ fontFamily: F, fontSize: 52, color: C.dark, marginTop: 28 }}>
            Let's see why...
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M5+M6 (1122–1568f): Item 1 shown centered, at 1430 it springs right while Item 2 slides in from left */}
    <Moment from={1122} to={1568}>
      <SituationCompare />
    </Moment>

    {/* M7 (1569–1990f): Tally table */}
    <Moment from={1569} to={1990}>
      <div style={{ width: "100%", maxWidth: 1000 }}>
        <div style={{
          background: "#FFFFFF", border: "2px solid #CCCCCC",
          borderRadius: 20, padding: "32px 56px",
        }}>
          <Row gap={0} align="stretch" style={{ flexDirection: "column", gap: 24 }}>

            <Reveal at={1569}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 48, color: C.dark, whiteSpace: "nowrap" }}>Total CP</div>
                <BigLabel color={C.cp} size={60}>
                  800 + 1200 = 2000
                </BigLabel>
              </Row>
            </Reveal>

            <Reveal at={1699}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 48, color: C.dark, whiteSpace: "nowrap" }}>Total SP</div>
                <BigLabel color={C.sp} size={60}>
                  960 + 960 = 1920
                </BigLabel>
              </Row>
            </Reveal>

            <Reveal at={1850}>
              <div style={{ borderTop: "2px solid #CCCCCC", paddingTop: 24 }}>
                <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                  <div style={{ fontFamily: F, fontSize: 52, fontWeight: 700, color: C.dark, whiteSpace: "nowrap" }}>
                    Loss =
                  </div>
                  <BounceIn at={1991}>
                    <BigLabel color={C.loss} size={80}>Rs. 80</BigLabel>
                  </BounceIn>
                </Row>
              </div>
            </Reveal>

          </Row>
        </div>
      </div>
    </Moment>

    {/* M7b (1991–2091f): Loss = 80 standalone bounce */}
    <Moment from={1991} to={2091}>
      <div style={{ textAlign: "center" }}>
        <Pulse at={1991}>
          <BounceIn at={1991}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: F, fontSize: 52, color: C.gray, marginBottom: 12 }}>Total Loss</div>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 120, color: C.loss, lineHeight: 1 }}>
                Rs. <CountUp from={0} to={80} at={1991} color={C.loss} size={120} />
              </div>
            </div>
          </BounceIn>
        </Pulse>
      </div>
    </Moment>

    {/* M8 (2092–2488f): Golden rule callout */}
    <Moment from={2092} to={2488}>
      <div style={{ textAlign: "center" }}>
        <Row gap={20} align="center" style={{ justifyContent: "center", marginBottom: 32 }}>
          <AnimImg
            src={badgeImportant}
            revealFrame={2092}
            style={{ position: "relative" as const, width: 220, height: 54, top: 0, left: 0 }}
          />
          <SlideIn at={2092} from="right">
            <BigLabel color={C.loss} size={60}>Golden Rule</BigLabel>
          </SlideIn>
        </Row>
        <StampIn at={2092}>
          <CallOut color={C.dark} bg="#FFFBEB" border="#FCD34D"
            style={{ fontSize: 56, padding: "36px 64px" }}>
            Same SP + Same % profit/loss
            <br />
            <strong style={{ color: C.loss }}>→ ALWAYS a LOSS</strong>
          </CallOut>
        </StampIn>
      </div>
    </Moment>

    {/* M9 (2489–4110f): Formula: Loss% = x²/100 */}
    <Moment from={2489}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: F, fontSize: 48, color: C.dark, fontWeight: 700, marginBottom: 28 }}>
          Formula for this situation:
        </div>
        <Pulse at={2489}>
          <BounceIn at={2489}>
            <Formula color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 72 }}>
              Loss% = x² / 100
            </Formula>
          </BounceIn>
        </Pulse>
        <Reveal at={2600}>
          <div style={{ fontFamily: F, fontSize: 52, color: C.dark, marginTop: 32 }}>
            where x = 20 (the common %):
          </div>
        </Reveal>
        <Reveal at={2700}>
          <div style={{
            background: "#FFFFFF", border: "1.5px solid #CCCCCC",
            borderRadius: 14, padding: "20px 56px", marginTop: 20,
            fontFamily: F, fontSize: 56, color: C.dark,
          }}>
            = 20² / 100 = 400 / 100 ={" "}
            <strong style={{ color: C.loss }}>4% Loss</strong>
          </div>
        </Reveal>
        <Reveal at={2947}>
          <CallOut color={C.loss} bg={C.lossBg} border={C.lossBd}
            style={{ fontSize: 52, padding: "28px 64px", marginTop: 36 }}>
            NEVER profit. <strong>NEVER</strong>.
          </CallOut>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
