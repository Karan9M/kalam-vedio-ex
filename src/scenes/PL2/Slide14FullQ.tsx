// Slide 14 - Full CSAT Question (2370f, starts at 821.67s)
import React from "react";
import {
  SlideBase, Moment, Reveal, Pop, C, F, Row,
  BigLabel, CallOut, BounceIn, SlideIn, DrawArrow, AnimImg,
} from "./shared";
import badgePause from "../../../Graphics/badge-pause-and-solve.png";
import badgeSol from "../../../Graphics/badge-solution.png";

export const Slide14FullQ: React.FC = () => (
  <SlideBase num={14} title="FULL CSAT QUESTION">

    {/* M1 (0–124f): Intro */}
    <Moment from={0} to={124}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={16} from="top">
          <BigLabel color={C.cp} size={60}>
            Full CSAT level question — solve step by step
          </BigLabel>
        </SlideIn>
      </div>
    </Moment>

    {/* M2 (125–572f): Question card */}
    <Moment from={125} to={572}>
      <div style={{ width: "100%", maxWidth: 940, textAlign: "center" }}>
        <AnimImg
          src={badgePause}
          revealFrame={125}
          style={{ position: "relative" as const, width: 280, height: 68, top: 0, left: 0, marginBottom: 24 }}
        />
        <SlideIn at={125} from="left">
          <div style={{
            background: "#F9FAFB", border: "2px solid #E5E7EB",
            borderRadius: 24, padding: "32px 56px",
            fontFamily: F, fontSize: 42, color: C.dark, lineHeight: 1.8,
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
        <SlideIn at={573} from="top">
          <CallOut color={C.mp} bg={C.mpBg} border={C.mpBd}
            style={{ fontSize: 48, padding: "28px 64px", marginBottom: 24 }}>
            PAUSE — Identify what is given
          </CallOut>
        </SlideIn>
        <Reveal at={644}>
          <div style={{ fontFamily: F, fontSize: 44, color: C.dark, marginTop: 20 }}>
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
            style={{ fontSize: 50, padding: "28px 64px", marginBottom: 32 }}>
            No CP given → Assume <strong>CP = 100</strong>
          </CallOut>
        </SlideIn>
        <Row gap={48} align="center" style={{ justifyContent: "center" }}>
          <div style={{
            background: C.cpBg, border: `3px solid ${C.cpBd}`, borderRadius: 20,
            padding: "24px 52px", textAlign: "center",
          }}>
            <div style={{ fontFamily: F, fontSize: 34, color: C.gray }}>CP (assumed)</div>
            <BigLabel color={C.cp} size={80}>100</BigLabel>
          </div>
          <Reveal at={751}>
            <Row gap={20} align="center">
              <DrawArrow at={751} color={C.mp} lineLen={56} />
              <div style={{ fontFamily: F, fontSize: 38, color: C.mp, fontWeight: 700 }}>
                +40% markup
              </div>
              <DrawArrow at={780} color={C.mp} lineLen={56} />
            </Row>
          </Reveal>
          <BounceIn at={871}>
            <div style={{
              background: C.mpBg, border: `3px solid ${C.mpBd}`, borderRadius: 20,
              padding: "24px 52px", textAlign: "center",
            }}>
              <div style={{ fontFamily: F, fontSize: 34, color: C.gray }}>MP</div>
              <BigLabel color={C.mp} size={80}>140</BigLabel>
            </div>
          </BounceIn>
        </Row>
      </div>
    </Moment>

    {/* M5 (968–1390f): 25% discount on MP → SP = 105 */}
    <Moment from={968} to={1390}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={968} from="left">
          <div style={{ fontFamily: F, fontSize: 42, color: C.dark, fontWeight: 700, marginBottom: 24 }}>
            25% discount on MP = 140:
          </div>
        </SlideIn>
        <Reveal at={968}>
          <div style={{
            background: "#F9FAFB", border: "1.5px solid #E5E7EB",
            borderRadius: 16, padding: "20px 52px", marginBottom: 24,
            fontFamily: F, fontSize: 48, color: C.dark,
          }}>
            SP = 140 ×{" "}
            <span style={{ color: C.sp }}>75</span>/100
          </div>
        </Reveal>
        <BounceIn at={1067}>
          <Row gap={24} align="center" style={{ justifyContent: "center" }}>
            <div style={{ fontFamily: F, fontSize: 46, color: C.dark }}>SP =</div>
            <div style={{
              background: C.spBg, border: `3px solid ${C.spBd}`, borderRadius: 20,
              padding: "16px 52px", fontFamily: F, fontWeight: 900, fontSize: 80, color: C.sp,
            }}>105</div>
          </Row>
        </BounceIn>
      </div>
    </Moment>

    {/* M6 (1391–1778f): Result — CP=100, SP=105, Profit=5% */}
    <Moment from={1391} to={1778}>
      <div style={{ width: "100%", maxWidth: 820 }}>
        <AnimImg
          src={badgeSol}
          revealFrame={1391}
          style={{ position: "relative" as const, width: 220, height: 54, top: 0, left: 0, marginBottom: 20 }}
        />
        <div style={{
          background: "#F9FAFB", border: "2px solid #E5E7EB",
          borderRadius: 20, padding: "28px 48px",
        }}>
          <Row gap={0} align="stretch" style={{ flexDirection: "column", gap: 18 }}>

            <Reveal at={1391}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 42, color: C.dark }}>CP (assumed)</div>
                <BigLabel color={C.cp} size={56}>100</BigLabel>
              </Row>
            </Reveal>

            <Reveal at={1391}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 42, color: C.dark }}>SP (calculated)</div>
                <BigLabel color={C.sp} size={56}>105</BigLabel>
              </Row>
            </Reveal>

            <Reveal at={1486}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 42, color: C.dark }}>Profit</div>
                <BigLabel color={C.profit} size={56}>105 − 100 = 5</BigLabel>
              </Row>
            </Reveal>

            <Reveal at={1582}>
              <div style={{ borderTop: "2px solid #E5E7EB", paddingTop: 18 }}>
                <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                  <div style={{ fontFamily: F, fontSize: 42, fontWeight: 800, color: C.dark }}>
                    Profit %
                  </div>
                  <BounceIn at={1582}>
                    <BigLabel color={C.profit} size={80}>5%</BigLabel>
                  </BounceIn>
                </Row>
              </div>
            </Reveal>

          </Row>
        </div>
      </div>
    </Moment>

    {/* M7 (1779–2370f): Key insight */}
    <Moment from={1779}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={1779}>
          <div style={{ fontFamily: F, fontSize: 44, color: C.dark, marginBottom: 28 }}>
            The question had <strong style={{ color: C.loss }}>zero actual numbers</strong>.
          </div>
        </Reveal>
        <Pop at={1909}>
          <CallOut color={C.cp} bg={C.cpBg} border={C.cpBd} dashed
            style={{ fontSize: 46, padding: "32px 64px" }}>
            Assuming <strong>CP = 100</strong> solved everything.
          </CallOut>
        </Pop>
        <Reveal at={2060}>
          <CallOut style={{ fontSize: 40, padding: "22px 52px", marginTop: 28 }}>
            This technique is <strong>extremely powerful</strong> for CSAT.
            <br />
            When CP is missing — always assume CP = 100.
          </CallOut>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
