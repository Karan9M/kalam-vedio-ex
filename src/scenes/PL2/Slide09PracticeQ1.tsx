// Slide 9 - Practice Q1 (1800f, starts at 375.67s)
import { SlideBase, Moment, Reveal, Pop, BounceIn, SlideIn, C, F, Row, Frac, Formula, BigLabel, CallOut, AnimImg } from "./shared";
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
            borderRadius: 24, padding: "16px 48px", marginBottom: 28, display: "inline-block",
            fontFamily: F, fontWeight: 900, fontSize: 44, color: C.sp,
          }}>
            CSAT Style Question
          </div>
        </BounceIn>
        <Reveal at={28}>
          <AnimImg src={badgePause} revealFrame={28}
            style={{ position: "relative" as const, width: 320, height: 78, top: 0, left: 0 }} />
        </Reveal>
      </div>
    </Moment>

    {/* M2 (136-410f): Question card */}
    <Moment from={136} to={411}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 900 }}>
        <SlideIn at={136} from="top">
          <div style={{
            background: "#F9FAFB", border: "2px solid #E5E7EB",
            borderRadius: 22, padding: "36px 56px",
          }}>
            <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginBottom: 20 }}>
              A shopkeeper sold an item for:
            </div>
            <Row gap={40} align="center" style={{ justifyContent: "center", marginBottom: 20 }}>
              <Reveal at={180}>
                <div style={{
                  background: C.spBg, border: `3px solid ${C.spBd}`,
                  borderRadius: 16, padding: "16px 40px",
                  fontFamily: F, fontWeight: 900, fontSize: 56, color: C.sp,
                }}>SP = Rs. 1080</div>
              </Reveal>
            </Row>
            <Reveal at={252}>
              <div style={{
                background: C.lossBg, border: `3px solid ${C.lossBd}`,
                borderRadius: 16, padding: "14px 36px", display: "inline-block",
                fontFamily: F, fontWeight: 800, fontSize: 48, color: C.loss, marginBottom: 20,
              }}>Loss = 10%</div>
            </Reveal>
            <Reveal at={348}>
              <div style={{
                background: C.cpBg, border: `3px dashed ${C.cpBd}`,
                borderRadius: 16, padding: "14px 36px", display: "inline-block",
                fontFamily: F, fontWeight: 800, fontSize: 52, color: C.cp,
              }}>CP = ?</div>
            </Reveal>
          </div>
        </SlideIn>
      </div>
    </Moment>

    {/* M3 (411-561f): "PAUSE. Identify first." callout */}
    <Moment from={411} to={562}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={411}>
          <CallOut color={C.sp} bg={C.spBg} border={C.spBd} style={{ fontSize: 56, padding: "32px 72px" }}>
            PAUSE. Identify first.
          </CallOut>
        </BounceIn>
        <Reveal at={495}>
          <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginTop: 24 }}>
            What type of problem is this?
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M4 (562-820f): Given info list */}
    <Moment from={562} to={822}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 860 }}>
        <div style={{ fontFamily: F, fontSize: 44, fontWeight: 700, color: C.dark, marginBottom: 28 }}>
          Identify what is given:
        </div>
        <Row gap={32} align="center" style={{ justifyContent: "center" }}>
          <Reveal at={562}>
            <div style={{
              background: C.spBg, border: `3px solid ${C.spBd}`,
              borderRadius: 16, padding: "20px 40px",
              fontFamily: F, fontWeight: 800, fontSize: 48, color: C.sp,
            }}>SP = 1080</div>
          </Reveal>
          <Reveal at={652}>
            <div style={{
              background: C.lossBg, border: `3px solid ${C.lossBd}`,
              borderRadius: 16, padding: "20px 40px",
              fontFamily: F, fontWeight: 800, fontSize: 48, color: C.loss,
            }}>Loss% = 10</div>
          </Reveal>
          <Reveal at={737}>
            <div style={{
              background: C.cpBg, border: `3px dashed ${C.cpBd}`,
              borderRadius: 16, padding: "20px 40px",
              fontFamily: F, fontWeight: 800, fontSize: 48, color: C.cp,
            }}>Find CP</div>
          </Reveal>
        </Row>
      </div>
    </Moment>

    {/* M5 (822-1147f): Formula + calculation */}
    <Moment from={822} to={1278}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={822}>
          <AnimImg src={badgeSol} revealFrame={822}
            style={{ position: "relative" as const, width: 260, height: 64, top: 0, left: 0, marginBottom: 24 }} />
        </Reveal>
        <Reveal at={924}>
          <Formula color={C.cp} bg={C.cpBg} border={C.cpBd} style={{ fontSize: 44, marginBottom: 20 }}>
            CP = SP ×
            <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", margin: "0 8px" }}>
              <span style={{ fontSize: 38, lineHeight: 1.1 }}>100</span>
              <span style={{ display: "block", height: 3, background: C.cp, minWidth: 56, margin: "4px 0" }} />
              <span style={{ fontSize: 38, lineHeight: 1.1 }}>(100 - 10)</span>
            </span>
          </Formula>
        </Reveal>
        <Reveal at={1028}>
          <div style={{
            background: "#F9FAFB", border: "1.5px solid #E5E7EB",
            borderRadius: 16, padding: "16px 40px", marginTop: 16,
          }}>
            <Row gap={16} align="center" style={{ justifyContent: "center" }}>
              <div style={{ fontFamily: F, fontSize: 48, fontWeight: 800, color: C.dark }}>
                = 1080 ×
              </div>
              <Frac num="100" den="90" size={42} color={C.cp} />
            </Row>
          </div>
        </Reveal>
        <Reveal at={1148}>
          <Row gap={20} align="center" style={{ justifyContent: "center", marginTop: 20 }}>
            <div style={{ fontFamily: F, fontSize: 48, fontWeight: 800, color: C.dark }}>=</div>
            <Pop at={1148}>
              <BigLabel color={C.cp} size={80}>Rs. 1200</BigLabel>
            </Pop>
          </Row>
        </Reveal>
      </div>
    </Moment>

    {/* M6 (1278-1800f): Cross-check verification table */}
    <Moment from={1278}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 820 }}>
        <Reveal at={1278}>
          <div style={{ fontFamily: F, fontSize: 42, fontWeight: 700, color: C.dark, marginBottom: 20 }}>
            Cross-check:
          </div>
        </Reveal>
        <div style={{
          background: "#F9FAFB", border: "2px solid #E5E7EB",
          borderRadius: 20, padding: "24px 48px",
        }}>
          <Row gap={0} align="stretch" style={{ flexDirection: "column", gap: 16 }}>
            <Reveal at={1368}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>CP</div>
                <BigLabel color={C.cp} size={52}>= 1200</BigLabel>
              </Row>
            </Reveal>
            <Reveal at={1400}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>SP</div>
                <BigLabel color={C.sp} size={52}>= 1080</BigLabel>
              </Row>
            </Reveal>
            <Reveal at={1454}>
              <div style={{ borderTop: "2px solid #E5E7EB", paddingTop: 16 }}>
                <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                  <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>Loss = 1200 - 1080</div>
                  <BigLabel color={C.loss} size={52}>= 120</BigLabel>
                </Row>
              </div>
            </Reveal>
            <Reveal at={1532}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>
                  Loss% = 120/1200 × 100
                </div>
                <Row gap={12} align="center">
                  <BigLabel color={C.loss} size={52}>= 10%</BigLabel>
                  <AnimImg src={tickIcon} revealFrame={1532}
                    style={{ position: "relative" as const, width: 52, height: 52, top: 0, left: 0 }} />
                </Row>
              </Row>
            </Reveal>
          </Row>
        </div>
        <Reveal at={1600}>
          <CallOut color={C.profit} bg={C.profitBg} border={C.profitBd} style={{ fontSize: 38, marginTop: 20 }}>
            Answer confirmed: CP = Rs. 1200
          </CallOut>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
