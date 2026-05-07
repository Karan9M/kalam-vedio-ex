// Slide 14 - Full CSAT Question (2370f, starts at 821.67s)
import React from "react";
import {
  SlideBase, Moment, Reveal, C, F, Row,
  BigLabel, CallOut, BounceIn, SlideIn, AnimImg,
  CountUp, Pulse, StampIn,
} from "./shared";
import badgePause from "../../../Graphics/badge-pause-and-solve.png";
import badgeSol from "../../../Graphics/badge-solution.png";
import arrowRight from "../../../Graphics/arrow-right-facing.png";

export const Slide14FullQ: React.FC = () => (
  <SlideBase num={14} title="FULL CSAT QUESTION">

    {/* M1 (0–124f): Intro */}
    <Moment from={0} to={124}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={16} from="top">
          <BigLabel color={C.cp} size={72}>
            Full CSAT level question — solve step by step
          </BigLabel>
        </SlideIn>
      </div>
    </Moment>

    {/* M2 (125–572f): Question card */}
    <Moment from={125} to={572}>
      <div style={{ width: "100%", maxWidth: 1000, textAlign: "center" }}>
        <AnimImg
          src={badgePause}
          revealFrame={125}
          style={{ position: "relative" as const, width: 280, height: 68, top: 0, left: 0, marginBottom: 28 }}
        />
        <SlideIn at={125} from="left">
          <div style={{
            background: "#FFFFFF", border: "2px solid #CCCCCC",
            borderRadius: 24, padding: "40px 64px",
            fontFamily: F, fontSize: 50, color: C.dark, lineHeight: 1.8,
          }}>
            <Reveal at={125}>
              A bought an article.
            </Reveal>
            <Reveal at={190}>
              <br />
              Marked it up by{" "}
              <strong style={{ color: C.mp }}>40%</strong>{" "}
              above CP to set the{" "}
              <strong style={{ color: C.mp }}>MP</strong>.
            </Reveal>
            <Reveal at={333}>
              <br />
              Gave a{" "}
              <strong style={{ color: C.loss }}>25% discount</strong>{" "}
              on the MP.
            </Reveal>
            <Reveal at={461}>
              <br />
              <strong>Profit or Loss? By how much %?</strong>
            </Reveal>
          </div>
        </SlideIn>
      </div>
    </Moment>

    {/* M3 (573–750f): PAUSE — Identify, no CP given */}
    <Moment from={573} to={750}>
      <div style={{ textAlign: "center" }}>
        <Pulse at={573}>
          <BounceIn at={573}>
            <CallOut color={C.mp} bg={C.mpBg} border={C.mpBd}
              style={{ fontSize: 56, padding: "36px 72px", marginBottom: 28 }}>
              PAUSE — Identify what is given
            </CallOut>
          </BounceIn>
        </Pulse>
        <Reveal at={644}>
          <div style={{ fontFamily: F, fontSize: 52, color: C.dark, marginTop: 24 }}>
            CP is <strong style={{ color: C.loss }}>not given</strong>
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M4 (751–967f): CP = 100 → MP = 140 */}
    <Moment from={751} to={967}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={751} from="left">
          <CallOut color={C.cp} bg={C.cpBg} border={C.cpBd}
            style={{ fontSize: 56, padding: "32px 72px", marginBottom: 36 }}>
            No CP given → Assume <strong>CP = 100</strong>
          </CallOut>
        </SlideIn>
        <Row gap={48} align="center" style={{ justifyContent: "center" }}>
          <div style={{
            background: C.cpBg, border: `3px solid ${C.cpBd}`, borderRadius: 20,
            padding: "28px 60px", textAlign: "center",
          }}>
            <div style={{ fontFamily: F, fontSize: 40, color: C.gray }}>CP (assumed)</div>
            <BigLabel color={C.cp} size={88}>100</BigLabel>
          </div>
          <Reveal at={751}>
            <Row gap={16} align="center">
              <AnimImg src={arrowRight} revealFrame={751}
                style={{ position: "relative" as const, width: 80, height: 48, top: 0, left: 0 }} />
              <div style={{ fontFamily: F, fontSize: 44, color: C.mp, fontWeight: 700 }}>
                +40%
              </div>
              <AnimImg src={arrowRight} revealFrame={780}
                style={{ position: "relative" as const, width: 80, height: 48, top: 0, left: 0 }} />
            </Row>
          </Reveal>
          <BounceIn at={871}>
            <div style={{
              background: C.mpBg, border: `3px solid ${C.mpBd}`, borderRadius: 20,
              padding: "28px 60px", textAlign: "center",
            }}>
              <div style={{ fontFamily: F, fontSize: 40, color: C.gray }}>MP</div>
              <BigLabel color={C.mp} size={88}>140</BigLabel>
            </div>
          </BounceIn>
        </Row>
      </div>
    </Moment>

    {/* M5 (968–1390f): 25% discount on MP → SP = 105 */}
    <Moment from={968} to={1390}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={968} from="left">
          <div style={{ fontFamily: F, fontSize: 50, color: C.dark, fontWeight: 700, marginBottom: 28 }}>
            25% discount on MP = 140:
          </div>
        </SlideIn>
        <Reveal at={968}>
          <div style={{
            background: "#FFFFFF", border: "1.5px solid #CCCCCC",
            borderRadius: 16, padding: "24px 60px", marginBottom: 32,
            fontFamily: F, fontSize: 56, color: C.dark,
          }}>
            SP = 140 ×{" "}
            <span style={{ color: C.sp }}>75</span>/100
          </div>
        </Reveal>
        <Pulse at={1067}>
          <BounceIn at={1067}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 96, color: C.sp, lineHeight: 1 }}>
              SP = <CountUp from={100} to={105} at={1067} color={C.sp} size={96} />
            </div>
          </BounceIn>
        </Pulse>
      </div>
    </Moment>

    {/* M6 (1391–1778f): Result — CP=100, SP=105, Profit=5% */}
    <Moment from={1391} to={1778}>
      <div style={{ width: "100%", maxWidth: 1000 }}>
        <AnimImg
          src={badgeSol}
          revealFrame={1391}
          style={{ position: "relative" as const, width: 220, height: 54, top: 0, left: 0, marginBottom: 24 }}
        />
        <div style={{
          background: "#FFFFFF", border: "2px solid #CCCCCC",
          borderRadius: 20, padding: "32px 56px",
        }}>
          <Row gap={0} align="stretch" style={{ flexDirection: "column", gap: 22 }}>

            <Reveal at={1391}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 48, color: C.dark, whiteSpace: "nowrap" }}>CP (assumed)</div>
                <BigLabel color={C.cp} size={64}>100</BigLabel>
              </Row>
            </Reveal>

            <Reveal at={1391}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 48, color: C.dark, whiteSpace: "nowrap" }}>SP (calculated)</div>
                <BigLabel color={C.sp} size={64}>105</BigLabel>
              </Row>
            </Reveal>

            <Reveal at={1486}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 48, color: C.dark, whiteSpace: "nowrap" }}>Profit</div>
                <BigLabel color={C.profit} size={64}>105 − 100 = 5</BigLabel>
              </Row>
            </Reveal>

            <BounceIn at={1582}>
              <div style={{ borderTop: "2px solid #CCCCCC", paddingTop: 22 }}>
                <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                  <div style={{ fontFamily: F, fontSize: 48, fontWeight: 700, color: C.dark, whiteSpace: "nowrap" }}>
                    Profit %
                  </div>
                  <BigLabel color={C.profit} size={88}>5%</BigLabel>
                </Row>
              </div>
            </BounceIn>

          </Row>
        </div>
      </div>
    </Moment>

    {/* M7 (1779–2370f): Key insight */}
    <Moment from={1779}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={1779}>
          <div style={{ fontFamily: F, fontSize: 52, color: C.dark, marginBottom: 32 }}>
            The question had <strong style={{ color: C.loss }}>zero actual numbers</strong>.
          </div>
        </Reveal>
        <StampIn at={1909}>
          <CallOut color={C.cp} bg={C.cpBg} border={C.cpBd} dashed
            style={{ fontSize: 56, padding: "36px 72px" }}>
            Assuming <strong>CP = 100</strong> solved everything.
          </CallOut>
        </StampIn>
        <Reveal at={2060}>
          <CallOut style={{ fontSize: 46, padding: "26px 60px", marginTop: 32 }}>
            This technique is <strong>extremely powerful</strong> for CSAT.
            <br />
            When CP is missing — always assume CP = 100.
          </CallOut>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
