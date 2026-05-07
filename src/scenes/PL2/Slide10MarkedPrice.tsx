// Slide 10 - Marked Price (2880f, starts at 435.67s)
import { SlideBase, Moment, Reveal, BounceIn, SlideIn, C, F, Row, Formula, BigLabel, CallOut, Tag, AnimImg, CountUp, Pulse, StampIn } from "./shared";
import badgeImportant from "../../../Graphics/badge-important.png";
import arrowRight from "../../../Graphics/arrow-right-facing.png";

export const Slide10MarkedPrice: React.FC = () => (
  <SlideBase num={10} title="MARKED PRICE">

    {/* M1 (0-130f): "MARKED PRICE" big heading */}
    <Moment from={0} to={133}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={36}>
          <BigLabel color={C.mp} size={110}>MARKED PRICE</BigLabel>
        </BounceIn>
        <Reveal at={60}>
          <div style={{ fontFamily: F, fontSize: 56, color: C.dark, marginTop: 24 }}>
            The price tag in the market
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M2 (133-400f): Build the MP → Discount → SP flow */}
    <Moment from={133} to={400}>
      <div style={{ textAlign: "center" }}>
        <Row gap={32} align="center" style={{ justifyContent: "center" }}>
          <StampIn at={133}>
            <div style={{ textAlign: "center" }}>
              <Tag text="MP" color={C.mp} bg={C.mpBg} border={C.mpBd} size={88} />
              <div style={{ fontFamily: F, fontSize: 36, color: C.gray, marginTop: 10 }}>Price tag</div>
            </div>
          </StampIn>
          <Reveal at={202}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <AnimImg src={arrowRight} revealFrame={220}
                style={{ position: "relative" as const, width: 110, height: 60, top: 0, left: 0 }} />
              <div style={{
                background: C.lossBg, border: `2px solid ${C.lossBd}`,
                borderRadius: 12, padding: "10px 28px",
                fontFamily: F, fontWeight: 700, fontSize: 38, color: C.loss,
              }}>Discount%</div>
            </div>
          </Reveal>
          <Reveal at={270}>
            <AnimImg src={arrowRight} revealFrame={270}
              style={{ position: "relative" as const, width: 110, height: 60, top: 0, left: 0 }} />
          </Reveal>
          <BounceIn at={308}>
            <div style={{ textAlign: "center" }}>
              <Tag text="SP" color={C.sp} bg={C.spBg} border={C.spBd} size={88} />
              <div style={{ fontFamily: F, fontSize: 36, color: C.gray, marginTop: 10 }}>
                You pay
              </div>
            </div>
          </BounceIn>
        </Row>
        <Reveal at={350}>
          <div style={{ fontFamily: F, fontSize: 46, color: C.dark, marginTop: 36 }}>
            MP is always bigger than SP (when discount is given)
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M3 (400-1013f): Formulas */}
    <Moment from={400} to={1013}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={400}>
          <Formula color={C.mp} bg={C.mpBg} border={C.mpBd} style={{ fontSize: 60, marginBottom: 28 }}>
            Discount = MP - SP
          </Formula>
        </BounceIn>
        <Reveal at={678}>
          <BounceIn at={678}>
            <Formula color={C.mp} bg={C.mpBg} border={C.mpBd} style={{ fontSize: 54 }}>
              Discount% =
              <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", margin: "0 10px" }}>
                <span style={{ fontSize: 48, lineHeight: 1.1 }}>Discount</span>
                <span style={{ display: "block", height: 4, background: C.mp, minWidth: 72, margin: "5px 0" }} />
                <span style={{ fontSize: 48, lineHeight: 1.1 }}>MP</span>
              </span>
              × 100
            </Formula>
          </BounceIn>
        </Reveal>
        <Reveal at={804}>
          <CallOut style={{ fontSize: 44, marginTop: 28 }}>
            Discount% is always on MP — not on CP
          </CallOut>
        </Reveal>
      </div>
    </Moment>

    {/* M4 (1013-1130f): TRAP callout */}
    <Moment from={1013} to={1130}>
      <div style={{ textAlign: "center" }}>
        <Row gap={20} align="center" style={{ justifyContent: "center", marginBottom: 28 }}>
          <AnimImg src={badgeImportant} revealFrame={1013}
            style={{ position: "relative" as const, width: 240, height: 60, top: 0, left: 0 }} />
        </Row>
        <StampIn at={1013}>
          <CallOut color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 52, padding: "32px 64px" }}>
            TRAP: Two different bases!
          </CallOut>
        </StampIn>
        <Reveal at={1050}>
          <Row gap={48} align="stretch" style={{ marginTop: 28 }}>
            <div style={{
              background: C.profitBg, border: `3px solid ${C.profitBd}`,
              borderRadius: 20, padding: "24px 44px", flex: 1, textAlign: "center",
            }}>
              <div style={{ fontFamily: F, fontSize: 40, color: C.gray }}>Profit%</div>
              <BigLabel color={C.cp} size={68}>on CP</BigLabel>
            </div>
            <div style={{
              background: C.mpBg, border: `3px solid ${C.mpBd}`,
              borderRadius: 20, padding: "24px 44px", flex: 1, textAlign: "center",
            }}>
              <div style={{ fontFamily: F, fontSize: 40, color: C.gray }}>Discount%</div>
              <BigLabel color={C.mp} size={68}>on MP</BigLabel>
            </div>
          </Row>
        </Reveal>
      </div>
    </Moment>

    {/* M5 (1130-1458f): Example question setup */}
    <Moment from={1130} to={1458}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 1100 }}>
        <SlideIn at={1130} from="top">
          <div style={{ fontFamily: F, fontSize: 52, color: C.gray, marginBottom: 36 }}>
            A shopkeeper gives:
          </div>
          <Row gap={48} align="center" style={{ justifyContent: "center", marginBottom: 32 }}>
            <Reveal at={1242}>
              <div style={{
                background: C.lossBg, border: `3px solid ${C.lossBd}`,
                borderRadius: 16, padding: "24px 56px",
                fontFamily: F, fontWeight: 700, fontSize: 68, color: C.loss,
                whiteSpace: "nowrap",
              }}>20% discount</div>
            </Reveal>
            <div style={{ fontFamily: F, fontSize: 56, color: C.gray }}>and yet</div>
            <Reveal at={1341}>
              <div style={{
                background: C.profitBg, border: `3px solid ${C.profitBd}`,
                borderRadius: 16, padding: "24px 56px",
                fontFamily: F, fontWeight: 700, fontSize: 68, color: C.profit,
                whiteSpace: "nowrap",
              }}>25% profit</div>
            </Reveal>
          </Row>
          <Reveal at={1380}>
            <div style={{ fontFamily: F, fontSize: 52, color: C.dark, fontWeight: 700 }}>
              Find the Marked Price.
            </div>
          </Reveal>
        </SlideIn>
      </div>
    </Moment>

    {/* M6 (1458-2404f): CP=100 trick solution */}
    <Moment from={1458} to={2404}>
      <div style={{ width: "100%", maxWidth: 1000 }}>
        <div style={{ fontFamily: F, fontSize: 44, color: C.cp, fontWeight: 700, marginBottom: 24 }}>
          CP = 100 method:
        </div>
        <div style={{
          background: "#FFFFFF", border: "2px solid #CCCCCC",
          borderRadius: 20, padding: "28px 56px",
        }}>
          <Row gap={0} align="stretch" style={{ flexDirection: "column", gap: 24 }}>
            <Reveal at={1458}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 46, color: C.gray, whiteSpace: "nowrap" }}>
                  Assume CP
                </div>
                <BigLabel color={C.cp} size={64}>= 100</BigLabel>
              </Row>
            </Reveal>
            <Reveal at={1537}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 46, color: C.dark, whiteSpace: "nowrap" }}>
                  25% profit → SP = 125% of CP
                </div>
                <BigLabel color={C.sp} size={64}>= 125</BigLabel>
              </Row>
            </Reveal>
            <Reveal at={1614}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 46, color: C.dark, whiteSpace: "nowrap" }}>
                  20% discount → SP = 80% of MP
                </div>
              </Row>
            </Reveal>
            <Reveal at={1760}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 46, color: C.dark, whiteSpace: "nowrap" }}>
                  125 = 80% of MP
                </div>
              </Row>
            </Reveal>
            <Reveal at={1845}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 46, color: C.dark, whiteSpace: "nowrap" }}>
                  MP = 125 ÷ 0.8
                </div>
                <Pulse at={1900}>
                  <div style={{ fontFamily: F, fontWeight: 700, fontSize: 72, color: C.mp, lineHeight: 1 }}>
                    = <CountUp from={140} to={156} at={1900} color={C.mp} size={72} suffix=".25" />
                  </div>
                </Pulse>
              </Row>
            </Reveal>
          </Row>
        </div>
      </div>
    </Moment>

    {/* M7 (2404-2880f): Result + key rule callout */}
    <Moment from={2404}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={2404}>
          <div style={{
            background: C.mpBg, border: `3px solid ${C.mpBd}`,
            borderRadius: 24, padding: "36px 80px", marginBottom: 36,
          }}>
            <div style={{ fontFamily: F, fontSize: 48, color: C.gray, marginBottom: 12 }}>
              MP is 56.25% above CP
            </div>
            <Row gap={24} align="center" style={{ justifyContent: "center" }}>
              <BigLabel color={C.cp} size={68}>CP = 100</BigLabel>
              <div style={{ fontFamily: F, fontSize: 60, color: C.gray }}>→</div>
              <BigLabel color={C.mp} size={68}>MP = 156.25</BigLabel>
            </Row>
          </div>
        </BounceIn>
        <Reveal at={2588}>
          <CallOut color={C.cp} bg={C.cpBg} border={C.cpBd} dashed style={{ fontSize: 44, padding: "28px 64px" }}>
            CP = 100 method works every time when CP and MP are both involved.
          </CallOut>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
