// Slide 8 - CP Formula: Reverse calculation trap (3180f, starts at 269.67s)
import { SlideBase, Moment, Reveal, Pop, BounceIn, SlideIn, C, F, Row, Frac, Formula, BigLabel, CallOut, WrongBox, AnimImg } from "./shared";
import crossIcon from "../../../Graphics/cross-wrong-false-icon.png";
import tickIcon from "../../../Graphics/right-tickmark-true-icon.png";

export const Slide08CPFormula: React.FC = () => (
  <SlideBase num={8} title="FINDING CP">

    {/* M1 (0-123f): "Find CP from SP" heading */}
    <Moment from={0} to={126}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={16}>
          <BigLabel color={C.cp} size={80}>Find CP from SP</BigLabel>
        </BounceIn>
        <Reveal at={50}>
          <div style={{ fontFamily: F, fontSize: 44, color: C.gray, marginTop: 20 }}>
            SP is given. Percent is given. Find CP.
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M2 (295-413f): Question: SP = 1200, Profit = 20%. Find CP. */}
    <Moment from={295} to={544}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 860 }}>
        <SlideIn at={295} from="top">
          <div style={{
            background: "#F9FAFB", border: "2px solid #E5E7EB",
            borderRadius: 20, padding: "32px 56px",
          }}>
            <div style={{ fontFamily: F, fontSize: 38, color: C.gray, marginBottom: 24 }}>
              An item was sold for <strong style={{ color: C.sp }}>Rs. 1200</strong>.
            </div>
            <Row gap={48} align="center" style={{ justifyContent: "center" }}>
              <div style={{
                background: C.spBg, border: `3px solid ${C.spBd}`,
                borderRadius: 16, padding: "16px 36px",
                fontFamily: F, fontWeight: 900, fontSize: 52, color: C.sp,
              }}>SP = 1200</div>
              <div style={{
                background: C.profitBg, border: `3px solid ${C.profitBd}`,
                borderRadius: 16, padding: "16px 36px",
                fontFamily: F, fontWeight: 900, fontSize: 52, color: C.profit,
              }}>Profit = 20%</div>
              <div style={{
                background: C.cpBg, border: `3px dashed ${C.cpBd}`,
                borderRadius: 16, padding: "16px 36px",
                fontFamily: F, fontWeight: 900, fontSize: 52, color: C.cp,
              }}>CP = ?</div>
            </Row>
          </div>
        </SlideIn>
      </div>
    </Moment>

    {/* M3 (544-975f): Wrong approach with WrongBox */}
    <Moment from={544} to={976}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={544}>
          <div style={{ fontFamily: F, fontSize: 40, color: C.dark, marginBottom: 20, fontWeight: 700 }}>
            What most students do:
          </div>
        </Reveal>
        <Pop at={604}>
          <WrongBox style={{ maxWidth: 680, textAlign: "left" }}>
            <Reveal at={604}>
              <div style={{ fontFamily: F, fontSize: 42, lineHeight: 1.8 }}>
                20% of 1200 = 240
              </div>
            </Reveal>
            <Reveal at={693}>
              <div style={{ fontFamily: F, fontSize: 42, lineHeight: 1.8 }}>
                1200 - 240 = 960
              </div>
            </Reveal>
            <Reveal at={838}>
              <Row gap={16} align="center">
                <div style={{ fontFamily: F, fontSize: 46, fontWeight: 900, color: C.loss }}>
                  CP = 960
                </div>
                <AnimImg src={crossIcon} revealFrame={838}
                  style={{ position: "relative" as const, width: 60, height: 60, top: 0, left: 0 }} />
              </Row>
            </Reveal>
          </WrongBox>
        </Pop>
      </div>
    </Moment>

    {/* M4 (976-1243f): "WRONG" big red + why */}
    <Moment from={976} to={1244}>
      <div style={{ textAlign: "center" }}>
        <Row gap={24} align="center" style={{ justifyContent: "center", marginBottom: 28 }}>
          <AnimImg src={crossIcon} revealFrame={976}
            style={{ position: "relative" as const, width: 88, height: 88, top: 0, left: 0 }} />
          <BounceIn at={976}>
            <BigLabel color={C.loss} size={96}>WRONG!</BigLabel>
          </BounceIn>
        </Row>
        <Reveal at={1013}>
          <CallOut color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 44 }}>
            20% profit was calculated on <strong>CP</strong>, not SP
          </CallOut>
        </Reveal>
        <Reveal at={1096}>
          <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginTop: 20 }}>
            But they applied 20% to SP (1200) — that's the trap.
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M5 (1244-1523f): Correct logic */}
    <Moment from={1244} to={1524}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={1244} from="left">
          <div style={{ fontFamily: F, fontSize: 44, color: C.dark, marginBottom: 20 }}>
            Correct logic:
          </div>
        </SlideIn>
        <Reveal at={1349}>
          <div style={{
            background: C.spBg, border: `3px solid ${C.spBd}`,
            borderRadius: 18, padding: "20px 48px", marginBottom: 16,
            fontFamily: F, fontSize: 46, color: C.sp, fontWeight: 700,
          }}>
            SP = 120% of CP
          </div>
        </Reveal>
        <Reveal at={1400}>
          <div style={{ fontFamily: F, fontSize: 44, color: C.dark }}>
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
            background: "#F9FAFB", border: "2px solid #E5E7EB",
            borderRadius: 18, padding: "24px 56px",
          }}>
            <Row gap={16} align="center" style={{ justifyContent: "center" }}>
              <div style={{ fontFamily: F, fontSize: 52, fontWeight: 800, color: C.dark }}>
                CP = 1200 ×
              </div>
              <Frac num="100" den="120" size={44} color={C.cp} />
              <div style={{ fontFamily: F, fontSize: 52, fontWeight: 800, color: C.dark }}>=</div>
              <Pop at={1637}>
                <BigLabel color={C.cp} size={80}>1000</BigLabel>
              </Pop>
            </Row>
          </div>
        </BounceIn>
      </div>
    </Moment>

    {/* M7 (1757-2287f): Verification table */}
    <Moment from={1757} to={2288}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 820 }}>
        <div style={{ fontFamily: F, fontSize: 40, color: C.dark, fontWeight: 700, marginBottom: 24 }}>
          Cross-check:
        </div>
        <div style={{
          background: "#F9FAFB", border: "2px solid #E5E7EB",
          borderRadius: 20, padding: "24px 48px",
        }}>
          <Row gap={0} align="stretch" style={{ flexDirection: "column", gap: 16 }}>
            <Reveal at={1757}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>CP</div>
                <BigLabel color={C.cp} size={52}>= 1000</BigLabel>
              </Row>
            </Reveal>
            <Reveal at={1828}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>SP</div>
                <BigLabel color={C.sp} size={52}>= 1200</BigLabel>
              </Row>
            </Reveal>
            <Reveal at={2011}>
              <div style={{ borderTop: "2px solid #E5E7EB", paddingTop: 16 }}>
                <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                  <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>Profit = 1200 - 1000</div>
                  <BigLabel color={C.profit} size={52}>= 200</BigLabel>
                </Row>
              </div>
            </Reveal>
            <Reveal at={2122}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>Profit% = 200/1000 × 100</div>
                <Row gap={12} align="center">
                  <BigLabel color={C.profit} size={52}>= 20%</BigLabel>
                  <AnimImg src={tickIcon} revealFrame={2122}
                    style={{ position: "relative" as const, width: 52, height: 52, top: 0, left: 0 }} />
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
          <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginBottom: 20 }}>
            When Profit = P%
          </div>
        </Reveal>
        <BounceIn at={2445}>
          <Formula color={C.profit} bg={C.profitBg} border={C.profitBd} style={{ fontSize: 48 }}>
            CP = SP ×
            <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", margin: "0 8px" }}>
              <span style={{ fontSize: 42, lineHeight: 1.1 }}>100</span>
              <span style={{ display: "block", height: 3, background: C.profit, minWidth: 60, margin: "4px 0" }} />
              <span style={{ fontSize: 42, lineHeight: 1.1 }}>(100 + P)</span>
            </span>
          </Formula>
        </BounceIn>
      </div>
    </Moment>

    {/* M9 (2565-3180f): Formula: CP = SP × 100 / (100 - L) */}
    <Moment from={2565}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={2565}>
          <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginBottom: 20 }}>
            When Loss = L%
          </div>
        </Reveal>
        <BounceIn at={2770}>
          <Formula color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 48 }}>
            CP = SP ×
            <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", margin: "0 8px" }}>
              <span style={{ fontSize: 42, lineHeight: 1.1 }}>100</span>
              <span style={{ display: "block", height: 3, background: C.loss, minWidth: 60, margin: "4px 0" }} />
              <span style={{ fontSize: 42, lineHeight: 1.1 }}>(100 - L)</span>
            </span>
          </Formula>
        </BounceIn>
        <Reveal at={2890}>
          <CallOut style={{ fontSize: 36, marginTop: 24 }}>
            Short form: SP × 100 ÷ (100 ± %)
          </CallOut>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
