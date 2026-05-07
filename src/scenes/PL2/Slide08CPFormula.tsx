// Slide 8 - CP Formula: Reverse calculation trap (3180f, starts at 269.67s)
import { SlideBase, Moment, Reveal, BounceIn, SlideIn, C, F, Row, Frac, Formula, BigLabel, CallOut, WrongBox, AnimImg, CountUp, Pulse, StampIn } from "./shared";
import crossIcon from "../../../Graphics/cross-wrong-false-icon.png";
import tickIcon from "../../../Graphics/right-tickmark-true-icon.png";

export const Slide08CPFormula: React.FC = () => (
  <SlideBase num={8} title="FINDING CP">

    {/* M1 (0-123f): "Find CP from SP" heading */}
    <Moment from={0} to={126}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={16}>
          <BigLabel color={C.cp} size={96}>Find CP from SP</BigLabel>
        </BounceIn>
        <Reveal at={50}>
          <div style={{ fontFamily: F, fontSize: 52, color: C.gray, marginTop: 24 }}>
            SP is given. Percent is given. Find CP.
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M2 (295-544f): Question: SP = 1200, Profit = 20%. Find CP. */}
    <Moment from={295} to={544}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 1300 }}>
        <SlideIn at={295} from="top">
          <div style={{ fontFamily: F, fontSize: 52, color: C.gray, marginBottom: 36 }}>
            An item was sold for <strong style={{ color: C.sp }}>Rs. 1200</strong>.
          </div>
          <Row gap={40} align="center" style={{ justifyContent: "center" }}>
            <div style={{
              background: C.spBg, border: `3px solid ${C.spBd}`,
              borderRadius: 16, padding: "24px 52px",
              fontFamily: F, fontWeight: 700, fontSize: 72, color: C.sp,
              whiteSpace: "nowrap",
            }}>SP = 1200</div>
            <div style={{
              background: C.profitBg, border: `3px solid ${C.profitBd}`,
              borderRadius: 16, padding: "24px 52px",
              fontFamily: F, fontWeight: 700, fontSize: 72, color: C.profit,
              whiteSpace: "nowrap",
            }}>Profit = 20%</div>
            <div style={{
              background: C.cpBg, border: `3px dashed ${C.cpBd}`,
              borderRadius: 16, padding: "24px 52px",
              fontFamily: F, fontWeight: 700, fontSize: 72, color: C.cp,
              whiteSpace: "nowrap",
            }}>CP = ?</div>
          </Row>
        </SlideIn>
      </div>
    </Moment>

    {/* M3 (544-975f): Wrong approach with WrongBox */}
    <Moment from={544} to={976}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={544}>
          <div style={{ fontFamily: F, fontSize: 48, color: C.dark, marginBottom: 24, fontWeight: 700 }}>
            What most students do:
          </div>
        </Reveal>
        <BounceIn at={604}>
          <WrongBox style={{ maxWidth: 760, textAlign: "left" }}>
            <Reveal at={604}>
              <div style={{ fontFamily: F, fontSize: 50, lineHeight: 1.8 }}>
                20% of 1200 = 240
              </div>
            </Reveal>
            <Reveal at={693}>
              <div style={{ fontFamily: F, fontSize: 50, lineHeight: 1.8 }}>
                1200 - 240 = 960
              </div>
            </Reveal>
            <Reveal at={838}>
              <Row gap={20} align="center">
                <div style={{ fontFamily: F, fontSize: 54, fontWeight: 700, color: C.loss }}>
                  CP = 960
                </div>
                <AnimImg src={crossIcon} revealFrame={838}
                  style={{ position: "relative" as const, width: 64, height: 64, top: 0, left: 0 }} />
              </Row>
            </Reveal>
          </WrongBox>
        </BounceIn>
      </div>
    </Moment>

    {/* M4 (976-1243f): "WRONG" big red + why */}
    <Moment from={976} to={1244}>
      <div style={{ textAlign: "center" }}>
        <Row gap={24} align="center" style={{ justifyContent: "center", marginBottom: 32 }}>
          <AnimImg src={crossIcon} revealFrame={976}
            style={{ position: "relative" as const, width: 96, height: 96, top: 0, left: 0 }} />
          <StampIn at={976}>
            <BigLabel color={C.loss} size={110}>WRONG!</BigLabel>
          </StampIn>
        </Row>
        <Reveal at={1013}>
          <CallOut color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 52 }}>
            20% profit was calculated on <strong>CP</strong>, not SP
          </CallOut>
        </Reveal>
        <Reveal at={1096}>
          <div style={{ fontFamily: F, fontSize: 46, color: C.gray, marginTop: 24 }}>
            But they applied 20% to SP (1200) — that's the trap.
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M5 (1244-1523f): Correct logic */}
    <Moment from={1244} to={1524}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={1244} from="left">
          <div style={{ fontFamily: F, fontSize: 52, color: C.dark, marginBottom: 28 }}>
            Correct logic:
          </div>
        </SlideIn>
        <Reveal at={1349}>
          <div style={{
            background: C.spBg, border: `3px solid ${C.spBd}`,
            borderRadius: 18, padding: "24px 56px", marginBottom: 20,
            fontFamily: F, fontSize: 56, color: C.sp, fontWeight: 700,
          }}>
            SP = 120% of CP
          </div>
        </Reveal>
        <Reveal at={1400}>
          <div style={{ fontFamily: F, fontSize: 52, color: C.dark }}>
            So: CP = SP ÷ 1.2
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M6 (1524-1756f): CP = 1200 × 100 / 120 = 1000 */}
    <Moment from={1524} to={1757}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={1524}>
          <div style={{
            background: "#FFFFFF", border: "2px solid #CCCCCC",
            borderRadius: 18, padding: "32px 64px",
          }}>
            <Row gap={20} align="center" style={{ justifyContent: "center" }}>
              <div style={{ fontFamily: F, fontSize: 64, fontWeight: 700, color: C.dark }}>
                CP = 1200 ×
              </div>
              <Frac num="100" den="120" size={52} color={C.cp} />
              <div style={{ fontFamily: F, fontSize: 64, fontWeight: 700, color: C.dark }}>=</div>
              <Pulse at={1637}>
                <CountUp from={800} to={1000} at={1637} color={C.cp} size={96} />
              </Pulse>
            </Row>
          </div>
        </BounceIn>
      </div>
    </Moment>

    {/* M7 (1757-2287f): Verification table */}
    <Moment from={1757} to={2288}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 1100 }}>
        <div style={{ fontFamily: F, fontSize: 48, color: C.dark, fontWeight: 700, marginBottom: 28 }}>
          Cross-check:
        </div>
        <div style={{
          background: "#FFFFFF", border: "2px solid #CCCCCC",
          borderRadius: 20, padding: "28px 56px",
        }}>
          <Row gap={0} align="stretch" style={{ flexDirection: "column", gap: 20 }}>
            <Reveal at={1757}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 48, color: C.dark, whiteSpace: "nowrap" }}>CP</div>
                <BigLabel color={C.cp} size={64}>= 1000</BigLabel>
              </Row>
            </Reveal>
            <Reveal at={1828}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 48, color: C.dark, whiteSpace: "nowrap" }}>SP</div>
                <BigLabel color={C.sp} size={64}>= 1200</BigLabel>
              </Row>
            </Reveal>
            <Reveal at={2011}>
              <div style={{ borderTop: "2px solid #CCCCCC", paddingTop: 20 }}>
                <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                  <div style={{ fontFamily: F, fontSize: 48, color: C.dark, whiteSpace: "nowrap" }}>Profit = 1200 - 1000</div>
                  <BigLabel color={C.profit} size={64}>= 200</BigLabel>
                </Row>
              </div>
            </Reveal>
            <Reveal at={2122}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 48, color: C.dark, whiteSpace: "nowrap" }}>Profit% = 200/1000 × 100</div>
                <Row gap={16} align="center">
                  <BigLabel color={C.profit} size={64}>= 20%</BigLabel>
                  <BounceIn at={2122}>
                    <AnimImg src={tickIcon} revealFrame={2122}
                      style={{ position: "relative" as const, width: 60, height: 60, top: 0, left: 0 }} />
                  </BounceIn>
                </Row>
              </Row>
            </Reveal>
          </Row>
        </div>
      </div>
    </Moment>

    {/* M8 (2288-2564f): Formula: CP = SP × 100 / (100 + P) */}
    <Moment from={2288} to={2565}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={2288}>
          <div style={{ fontFamily: F, fontSize: 48, color: C.gray, marginBottom: 24 }}>
            When Profit = P%
          </div>
        </Reveal>
        <StampIn at={2445}>
          <Formula color={C.profit} bg={C.profitBg} border={C.profitBd} style={{ fontSize: 60 }}>
            CP = SP ×
            <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", margin: "0 10px" }}>
              <span style={{ fontSize: 52, lineHeight: 1.1 }}>100</span>
              <span style={{ display: "block", height: 4, background: C.profit, minWidth: 72, margin: "5px 0" }} />
              <span style={{ fontSize: 52, lineHeight: 1.1 }}>(100 + P)</span>
            </span>
          </Formula>
        </StampIn>
      </div>
    </Moment>

    {/* M9 (2565-3180f): Formula: CP = SP × 100 / (100 - L) */}
    <Moment from={2565}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={2565}>
          <div style={{ fontFamily: F, fontSize: 48, color: C.gray, marginBottom: 24 }}>
            When Loss = L%
          </div>
        </Reveal>
        <StampIn at={2770}>
          <Formula color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 60 }}>
            CP = SP ×
            <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", margin: "0 10px" }}>
              <span style={{ fontSize: 52, lineHeight: 1.1 }}>100</span>
              <span style={{ display: "block", height: 4, background: C.loss, minWidth: 72, margin: "5px 0" }} />
              <span style={{ fontSize: 52, lineHeight: 1.1 }}>(100 - L)</span>
            </span>
          </Formula>
        </StampIn>
        <Reveal at={2890}>
          <CallOut style={{ fontSize: 44, marginTop: 28 }}>
            Short form: SP × 100 ÷ (100 ± %)
          </CallOut>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
