// Slide 9 - Practice Q1 (1800f, starts at 375.67s)
import { SlideBase, Moment, Reveal, BounceIn, SlideIn, C, F, Row, Frac, Formula, BigLabel, CallOut, AnimImg, CountUp, Pulse, StampIn } from "./shared";
import badgePause from "../../../Graphics/badge-pause-and-solve.png";
import badgeSol from "../../../Graphics/badge-solution.png";
import tickIcon from "../../../Graphics/right-tickmark-true-icon.png";

export const Slide09PracticeQ1: React.FC = () => (
  <SlideBase num={9} title="PRACTICE Q1">

    {/* M1 (0-135f): "Practice Question" badge */}
    <Moment from={0} to={136}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={0}>
          <div style={{
            background: C.spBg, border: `3px solid ${C.spBd}`,
            borderRadius: 24, padding: "26px 68px", marginBottom: 40, display: "inline-block",
            fontFamily: F, fontWeight: 700, fontSize: 64, color: C.sp,
          }}>
            CSAT Style Question
          </div>
        </BounceIn>
        <Reveal at={28}>
          <AnimImg src={badgePause} revealFrame={28}
            style={{ position: "relative" as const, width: 380, height: 92, top: 0, left: 0 }} />
        </Reveal>
      </div>
    </Moment>

    {/* M2 (136-410f): Question card */}
    <Moment from={136} to={411}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 1100 }}>
        <SlideIn at={136} from="top">
          <div style={{ fontFamily: F, fontSize: 56, color: C.gray, marginBottom: 36 }}>
            A shopkeeper sold an item for:
          </div>
          <Row gap={40} align="center" style={{ justifyContent: "center", marginBottom: 32 }}>
            <Reveal at={180}>
              <div style={{
                background: C.spBg, border: `3px solid ${C.spBd}`,
                borderRadius: 18, padding: "24px 64px",
                fontFamily: F, fontWeight: 700, fontSize: 88, color: C.sp,
                whiteSpace: "nowrap",
              }}>SP = Rs. 1080</div>
            </Reveal>
          </Row>
          <Row gap={40} align="center" style={{ justifyContent: "center" }}>
            <Reveal at={252}>
              <div style={{
                background: C.lossBg, border: `3px solid ${C.lossBd}`,
                borderRadius: 18, padding: "22px 60px",
                fontFamily: F, fontWeight: 700, fontSize: 72, color: C.loss,
                whiteSpace: "nowrap",
              }}>Loss = 10%</div>
            </Reveal>
            <Reveal at={348}>
              <div style={{
                background: C.cpBg, border: `3px dashed ${C.cpBd}`,
                borderRadius: 18, padding: "22px 60px",
                fontFamily: F, fontWeight: 700, fontSize: 72, color: C.cp,
                whiteSpace: "nowrap",
              }}>CP = ?</div>
            </Reveal>
          </Row>
        </SlideIn>
      </div>
    </Moment>

    {/* M3 (411-561f): "PAUSE. Identify first." callout */}
    <Moment from={411} to={562}>
      <div style={{ textAlign: "center" }}>
        <Pulse at={411}>
          <BounceIn at={411}>
            <CallOut color={C.sp} bg={C.spBg} border={C.spBd} style={{ fontSize: 72, padding: "44px 96px" }}>
              PAUSE. Identify first.
            </CallOut>
          </BounceIn>
        </Pulse>
        <Reveal at={495}>
          <div style={{ fontFamily: F, fontSize: 56, color: C.gray, marginTop: 36 }}>
            What type of problem is this?
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M4 (562-820f): Given info list */}
    <Moment from={562} to={822}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 1100 }}>
        <div style={{ fontFamily: F, fontSize: 60, fontWeight: 700, color: C.dark, marginBottom: 40 }}>
          Identify what is given:
        </div>
        <Row gap={40} align="center" style={{ justifyContent: "center" }}>
          <Reveal at={562}>
            <div style={{
              background: C.spBg, border: `3px solid ${C.spBd}`,
              borderRadius: 18, padding: "28px 60px",
              fontFamily: F, fontWeight: 700, fontSize: 68, color: C.sp,
              whiteSpace: "nowrap",
            }}>SP = 1080</div>
          </Reveal>
          <Reveal at={652}>
            <div style={{
              background: C.lossBg, border: `3px solid ${C.lossBd}`,
              borderRadius: 18, padding: "28px 60px",
              fontFamily: F, fontWeight: 700, fontSize: 68, color: C.loss,
              whiteSpace: "nowrap",
            }}>Loss% = 10</div>
          </Reveal>
          <Reveal at={737}>
            <div style={{
              background: C.cpBg, border: `3px dashed ${C.cpBd}`,
              borderRadius: 18, padding: "28px 60px",
              fontFamily: F, fontWeight: 700, fontSize: 68, color: C.cp,
              whiteSpace: "nowrap",
            }}>Find CP</div>
          </Reveal>
        </Row>
      </div>
    </Moment>

    {/* M5 (822-1278f): Formula + calculation */}
    <Moment from={822} to={1278}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={822}>
          <AnimImg src={badgeSol} revealFrame={822}
            style={{ position: "relative" as const, width: 300, height: 74, top: 0, left: 0, marginBottom: 32 }} />
        </Reveal>
        <Reveal at={924}>
          <Formula color={C.cp} bg={C.cpBg} border={C.cpBd} style={{ fontSize: 64, marginBottom: 28 }}>
            CP = SP ×
            <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", margin: "0 12px" }}>
              <span style={{ fontSize: 56, lineHeight: 1.1 }}>100</span>
              <span style={{ display: "block", height: 4, background: C.cp, minWidth: 72, margin: "5px 0" }} />
              <span style={{ fontSize: 56, lineHeight: 1.1 }}>(100 - 10)</span>
            </span>
          </Formula>
        </Reveal>
        <Reveal at={1028}>
          <div style={{
            background: "#FFFFFF", border: "1.5px solid #CCCCCC",
            borderRadius: 18, padding: "24px 60px", marginTop: 24,
          }}>
            <Row gap={24} align="center" style={{ justifyContent: "center" }}>
              <div style={{ fontFamily: F, fontSize: 68, fontWeight: 700, color: C.dark }}>
                = 1080 ×
              </div>
              <Frac num="100" den="90" size={60} color={C.cp} />
            </Row>
          </div>
        </Reveal>
        <Reveal at={1148}>
          <Row gap={28} align="center" style={{ justifyContent: "center", marginTop: 32 }}>
            <div style={{ fontFamily: F, fontSize: 68, fontWeight: 700, color: C.dark }}>=</div>
            <Pulse at={1148}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 108, color: C.cp, lineHeight: 1 }}>
                Rs. <CountUp from={1000} to={1200} at={1148} color={C.cp} size={108} />
              </div>
            </Pulse>
          </Row>
        </Reveal>
      </div>
    </Moment>

    {/* M6 (1278-1800f): Cross-check verification table */}
    <Moment from={1278}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 1100 }}>
        <Reveal at={1278}>
          <div style={{ fontFamily: F, fontSize: 56, fontWeight: 700, color: C.dark, marginBottom: 28 }}>
            Cross-check:
          </div>
        </Reveal>
        <div style={{
          background: "#FFFFFF", border: "2px solid #CCCCCC",
          borderRadius: 22, padding: "32px 64px",
        }}>
          <Row gap={0} align="stretch" style={{ flexDirection: "column", gap: 24 }}>
            <Reveal at={1368}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 52, color: C.dark, whiteSpace: "nowrap" }}>CP</div>
                <BigLabel color={C.cp} size={68}>= 1200</BigLabel>
              </Row>
            </Reveal>
            <Reveal at={1400}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 52, color: C.dark, whiteSpace: "nowrap" }}>SP</div>
                <BigLabel color={C.sp} size={68}>= 1080</BigLabel>
              </Row>
            </Reveal>
            <Reveal at={1454}>
              <div style={{ borderTop: "2px solid #CCCCCC", paddingTop: 24 }}>
                <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                  <div style={{ fontFamily: F, fontSize: 52, color: C.dark, whiteSpace: "nowrap" }}>Loss = 1200 - 1080</div>
                  <BigLabel color={C.loss} size={68}>= 120</BigLabel>
                </Row>
              </div>
            </Reveal>
            <Reveal at={1532}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 52, color: C.dark, whiteSpace: "nowrap" }}>
                  Loss% = 120/1200 × 100
                </div>
                <Row gap={16} align="center">
                  <BigLabel color={C.loss} size={68}>= 10%</BigLabel>
                  <BounceIn at={1532}>
                    <AnimImg src={tickIcon} revealFrame={1532}
                      style={{ position: "relative" as const, width: 68, height: 68, top: 0, left: 0 }} />
                  </BounceIn>
                </Row>
              </Row>
            </Reveal>
          </Row>
        </div>
        <StampIn at={1600}>
          <CallOut color={C.profit} bg={C.profitBg} border={C.profitBd} style={{ fontSize: 52, marginTop: 32 }}>
            Answer confirmed: CP = Rs. 1200
          </CallOut>
        </StampIn>
      </div>
    </Moment>

  </SlideBase>
);
