// Slide 13 - Same SP Trap (4110f, starts at 684.67s)
import React from "react";
import {
  SlideBase, Moment, Reveal, Pop, C, F, Row,
  Formula, BigLabel, CallOut, BounceIn, SlideIn, AnimImg,
} from "./shared";
import badgeImportant from "../../../Graphics/badge-important.png";

export const Slide13SameSP: React.FC = () => (
  <SlideBase num={13} title="SAME SP TRAP">

    {/* M1 (0–210f): Heading — classic CSAT trap */}
    <Moment from={0} to={210}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={19} from="top">
          <BigLabel color={C.loss} size={64}>
            Classic CSAT question — students always get this wrong
          </BigLabel>
        </SlideIn>
      </div>
    </Moment>

    {/* M2 (211–600f): The question card */}
    <Moment from={211} to={600}>
      <div style={{ width: "100%", maxWidth: 920, textAlign: "center" }}>
        <SlideIn at={211} from="left">
          <div style={{
            background: "#F9FAFB", border: "2px solid #E5E7EB",
            borderRadius: 24, padding: "32px 56px",
            fontFamily: F, fontSize: 40, color: C.dark, lineHeight: 1.8,
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
          <div style={{ fontFamily: F, fontSize: 44, color: C.gray, marginBottom: 20 }}>
            Students say:
          </div>
        </SlideIn>
        <BounceIn at={736}>
          <div style={{
            background: "#F9FAFB", border: "2px solid #E5E7EB",
            borderRadius: 20, padding: "24px 64px",
          }}>
            <BigLabel color={C.gray} size={80}>
              +20% and −20% cancel out = ZERO
            </BigLabel>
          </div>
        </BounceIn>
      </div>
    </Moment>

    {/* M4 (917–1035f): WRONG — ALWAYS LOSS */}
    <Moment from={917} to={1035}>
      <div style={{ textAlign: "center" }}>
        <Pop at={917}>
          <div style={{
            background: C.lossBg, border: `4px solid ${C.lossBd}`,
            borderRadius: 28, padding: "32px 80px",
          }}>
            <BigLabel color={C.loss} size={110}>WRONG!</BigLabel>
          </div>
        </Pop>
        <Reveal at={1037}>
          <CallOut color={C.loss} bg={C.lossBg} border={C.lossBd}
            style={{ fontSize: 52, marginTop: 24, padding: "24px 56px" }}>
            It is ALWAYS a LOSS.
          </CallOut>
        </Reveal>
      </div>
    </Moment>

    {/* M4b (1037–1121f): Let's see why */}
    <Moment from={1037} to={1121}>
      <div style={{ textAlign: "center" }}>
        <Pop at={1037}>
          <BigLabel color={C.loss} size={96}>ALWAYS LOSS.</BigLabel>
        </Pop>
        <Reveal at={1037}>
          <div style={{ fontFamily: F, fontSize: 44, color: C.dark, marginTop: 24 }}>
            Let's see why...
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M5 (1122–1429f): Item 1 CP calculation */}
    <Moment from={1122} to={1429}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={1122} from="left">
          <div style={{ fontFamily: F, fontSize: 38, color: C.gray, marginBottom: 16 }}>
            Item 1: 20% profit, SP = 960
          </div>
        </SlideIn>
        <div style={{ fontFamily: F, fontSize: 40, color: C.dark, marginBottom: 16 }}>
          CP = SP × 100 / (100 + profit%)
        </div>
        <Pop at={1196}>
          <Formula color={C.cp} bg={C.cpBg} border={C.cpBd} style={{ fontSize: 52 }}>
            CP = 960 × 100 / 120 = 800
          </Formula>
        </Pop>
      </div>
    </Moment>

    {/* M6 (1430–1568f): Item 2 CP calculation */}
    <Moment from={1430} to={1568}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={1430} from="right">
          <div style={{ fontFamily: F, fontSize: 38, color: C.gray, marginBottom: 16 }}>
            Item 2: 20% loss, SP = 960
          </div>
        </SlideIn>
        <div style={{ fontFamily: F, fontSize: 40, color: C.dark, marginBottom: 16 }}>
          CP = SP × 100 / (100 − loss%)
        </div>
        <Pop at={1430}>
          <Formula color={C.cp} bg={C.cpBg} border={C.cpBd} style={{ fontSize: 52 }}>
            CP = 960 × 100 / 80 = 1200
          </Formula>
        </Pop>
      </div>
    </Moment>

    {/* M7 (1569–1990f): Tally table */}
    <Moment from={1569} to={1990}>
      <div style={{ width: "100%", maxWidth: 820 }}>
        <div style={{
          background: "#F9FAFB", border: "2px solid #E5E7EB",
          borderRadius: 20, padding: "28px 48px",
        }}>
          <Row gap={0} align="stretch" style={{ flexDirection: "column", gap: 18 }}>

            <Reveal at={1569}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>Total CP</div>
                <BigLabel color={C.cp} size={52}>
                  800 + 1200 = 2000
                </BigLabel>
              </Row>
            </Reveal>

            <Reveal at={1699}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>Total SP</div>
                <BigLabel color={C.sp} size={52}>
                  960 + 960 = 1920
                </BigLabel>
              </Row>
            </Reveal>

            <Reveal at={1850}>
              <div style={{ borderTop: "2px solid #E5E7EB", paddingTop: 18 }}>
                <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                  <div style={{ fontFamily: F, fontSize: 42, fontWeight: 800, color: C.dark }}>
                    Loss =
                  </div>
                  <BounceIn at={1991}>
                    <BigLabel color={C.loss} size={72}>Rs. 80</BigLabel>
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
        <BounceIn at={1991}>
          <BigLabel color={C.loss} size={110}>Loss = Rs. 80</BigLabel>
        </BounceIn>
      </div>
    </Moment>

    {/* M8 (2092–2488f): Golden rule callout */}
    <Moment from={2092} to={2488}>
      <div style={{ textAlign: "center" }}>
        <Row gap={20} align="center" style={{ justifyContent: "center", marginBottom: 28 }}>
          <AnimImg
            src={badgeImportant}
            revealFrame={2092}
            style={{ position: "relative" as const, width: 220, height: 54, top: 0, left: 0 }}
          />
          <SlideIn at={2092} from="right">
            <BigLabel color={C.loss} size={52}>Golden Rule</BigLabel>
          </SlideIn>
        </Row>
        <Pop at={2211}>
          <CallOut color={C.dark} bg="#FFFBEB" border="#FCD34D"
            style={{ fontSize: 48, padding: "32px 56px" }}>
            Same SP + Same % profit/loss
            <br />
            <strong style={{ color: C.loss }}>→ ALWAYS a LOSS</strong>
          </CallOut>
        </Pop>
      </div>
    </Moment>

    {/* M9 (2489–4110f): Formula: Loss% = x²/100 */}
    <Moment from={2489}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: F, fontSize: 40, color: C.dark, fontWeight: 700, marginBottom: 24 }}>
          Formula for this situation:
        </div>
        <Pop at={2489}>
          <Formula color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 60 }}>
            Loss% = x² / 100
          </Formula>
        </Pop>
        <Reveal at={2600}>
          <div style={{ fontFamily: F, fontSize: 44, color: C.dark, marginTop: 28 }}>
            where x = 20 (the common %):
          </div>
        </Reveal>
        <Reveal at={2700}>
          <div style={{
            background: "#F9FAFB", border: "1.5px solid #E5E7EB",
            borderRadius: 14, padding: "16px 48px", marginTop: 16,
            fontFamily: F, fontSize: 46, color: C.dark,
          }}>
            = 20² / 100 = 400 / 100 ={" "}
            <strong style={{ color: C.loss }}>4% Loss</strong>
          </div>
        </Reveal>
        <Reveal at={2947}>
          <CallOut color={C.loss} bg={C.lossBg} border={C.lossBd}
            style={{ fontSize: 44, padding: "24px 56px", marginTop: 32 }}>
            NEVER profit. <strong>NEVER</strong>.
          </CallOut>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
