// Slide 10 - Marked Price (2880f, starts at 435.67s)
import { SlideBase, Moment, Reveal, Pop, BounceIn, SlideIn, DrawArrow, C, F, Row, Formula, BigLabel, CallOut, Tag, AnimImg } from "./shared";
import badgeImportant from "../../../Graphics/badge-important.png";

export const Slide10MarkedPrice: React.FC = () => (
  <SlideBase num={10} title="MARKED PRICE">

    {/* M1 (0-130f): "MARKED PRICE" big heading */}
    <Moment from={0} to={133}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={36}>
          <BigLabel color={C.mp} size={96}>MARKED PRICE</BigLabel>
        </BounceIn>
        <Reveal at={60}>
          <div style={{ fontFamily: F, fontSize: 48, color: C.dark, marginTop: 20 }}>
            The price tag in the market
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M2 (133-400f): Build the MP → Discount → SP flow */}
    <Moment from={133} to={400}>
      <div style={{ textAlign: "center" }}>
        <Row gap={20} align="center" style={{ justifyContent: "center" }}>
          <Reveal at={133}>
            <div style={{ textAlign: "center" }}>
              <Tag text="MP" color={C.mp} bg={C.mpBg} border={C.mpBd} size={72} />
              <div style={{ fontFamily: F, fontSize: 30, color: C.gray, marginTop: 8 }}>
                Price tag
              </div>
            </div>
          </Reveal>
          <Reveal at={202}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <DrawArrow at={220} color={C.loss} lineLen={80} />
              <div style={{
                background: C.lossBg, border: `2px solid ${C.lossBd}`,
                borderRadius: 12, padding: "8px 24px", marginTop: 8,
                fontFamily: F, fontWeight: 700, fontSize: 32, color: C.loss,
              }}>Discount%</div>
            </div>
          </Reveal>
          <Reveal at={270}>
            <DrawArrow at={270} color={C.gray} lineLen={60} />
          </Reveal>
          <Reveal at={308}>
            <div style={{ textAlign: "center" }}>
              <Tag text="SP" color={C.sp} bg={C.spBg} border={C.spBd} size={72} />
              <div style={{ fontFamily: F, fontSize: 30, color: C.gray, marginTop: 8 }}>
                You pay
              </div>
            </div>
          </Reveal>
        </Row>
        <Reveal at={350}>
          <div style={{ fontFamily: F, fontSize: 40, color: C.dark, marginTop: 28 }}>
            MP is always bigger than SP (when discount is given)
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M3 (400-674f): Formulas */}
    <Moment from={400} to={1013}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={400}>
          <Formula color={C.mp} bg={C.mpBg} border={C.mpBd} style={{ fontSize: 48, marginBottom: 24 }}>
            Discount = MP - SP
          </Formula>
        </BounceIn>
        <Reveal at={678}>
          <BounceIn at={678}>
            <Formula color={C.mp} bg={C.mpBg} border={C.mpBd} style={{ fontSize: 44 }}>
              Discount% =
              <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", margin: "0 8px" }}>
                <span style={{ fontSize: 38, lineHeight: 1.1 }}>Discount</span>
                <span style={{ display: "block", height: 3, background: C.mp, minWidth: 56, margin: "4px 0" }} />
                <span style={{ fontSize: 38, lineHeight: 1.1 }}>MP</span>
              </span>
              × 100
            </Formula>
          </BounceIn>
        </Reveal>
        <Reveal at={804}>
          <CallOut style={{ fontSize: 36, marginTop: 24 }}>
            Discount% is always on MP — not on CP
          </CallOut>
        </Reveal>
      </div>
    </Moment>

    {/* M4 (1013-1128f): TRAP callout */}
    <Moment from={1013} to={1130}>
      <div style={{ textAlign: "center" }}>
        <Row gap={20} align="center" style={{ justifyContent: "center", marginBottom: 24 }}>
          <AnimImg src={badgeImportant} revealFrame={1013}
            style={{ position: "relative" as const, width: 240, height: 60, top: 0, left: 0 }} />
        </Row>
        <BounceIn at={1013}>
          <CallOut color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 44, padding: "28px 56px" }}>
            TRAP: Two different bases!
          </CallOut>
        </BounceIn>
        <Reveal at={1050}>
          <Row gap={40} align="stretch" style={{ marginTop: 24 }}>
            <div style={{
              background: C.profitBg, border: `3px solid ${C.profitBd}`,
              borderRadius: 20, padding: "20px 36px", flex: 1, textAlign: "center",
            }}>
              <div style={{ fontFamily: F, fontSize: 34, color: C.gray }}>Profit%</div>
              <BigLabel color={C.cp} size={56}>on CP</BigLabel>
            </div>
            <div style={{
              background: C.mpBg, border: `3px solid ${C.mpBd}`,
              borderRadius: 20, padding: "20px 36px", flex: 1, textAlign: "center",
            }}>
              <div style={{ fontFamily: F, fontSize: 34, color: C.gray }}>Discount%</div>
              <BigLabel color={C.mp} size={56}>on MP</BigLabel>
            </div>
          </Row>
        </Reveal>
      </div>
    </Moment>

    {/* M5 (1130-1456f): Example question setup */}
    <Moment from={1130} to={1458}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 860 }}>
        <SlideIn at={1130} from="top">
          <div style={{
            background: "#F9FAFB", border: "2px solid #E5E7EB",
            borderRadius: 22, padding: "32px 56px",
          }}>
            <div style={{ fontFamily: F, fontSize: 40, color: C.dark, fontWeight: 700, marginBottom: 24 }}>
              A shopkeeper gives:
            </div>
            <Row gap={40} align="center" style={{ justifyContent: "center", marginBottom: 20 }}>
              <Reveal at={1242}>
                <div style={{
                  background: C.lossBg, border: `3px solid ${C.lossBd}`,
                  borderRadius: 16, padding: "16px 36px",
                  fontFamily: F, fontWeight: 800, fontSize: 52, color: C.loss,
                }}>20% discount</div>
              </Reveal>
              <div style={{ fontFamily: F, fontSize: 44, color: C.gray }}>and yet</div>
              <Reveal at={1341}>
                <div style={{
                  background: C.profitBg, border: `3px solid ${C.profitBd}`,
                  borderRadius: 16, padding: "16px 36px",
                  fontFamily: F, fontWeight: 800, fontSize: 52, color: C.profit,
                }}>25% profit</div>
              </Reveal>
            </Row>
            <Reveal at={1380}>
              <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>
                Find the Marked Price.
              </div>
            </Reveal>
          </div>
        </SlideIn>
      </div>
    </Moment>

    {/* M6 (1458-2400f): CP=100 trick solution */}
    <Moment from={1458} to={2404}>
      <div style={{ width: "100%", maxWidth: 840 }}>
        <div style={{ fontFamily: F, fontSize: 38, color: C.cp, fontWeight: 800, marginBottom: 20 }}>
          CP = 100 method:
        </div>
        <div style={{
          background: "#F9FAFB", border: "2px solid #E5E7EB",
          borderRadius: 20, padding: "24px 48px",
        }}>
          <Row gap={0} align="stretch" style={{ flexDirection: "column", gap: 20 }}>
            <Reveal at={1458}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 40, color: C.gray }}>
                  Assume CP
                </div>
                <BigLabel color={C.cp} size={56}>= 100</BigLabel>
              </Row>
            </Reveal>
            <Reveal at={1537}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>
                  25% profit → SP = 125% of CP
                </div>
                <BigLabel color={C.sp} size={56}>= 125</BigLabel>
              </Row>
            </Reveal>
            <Reveal at={1614}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>
                  20% discount → SP = 80% of MP
                </div>
              </Row>
            </Reveal>
            <Reveal at={1760}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>
                  125 = 80% of MP
                </div>
              </Row>
            </Reveal>
            <Reveal at={1845}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>
                  MP = 125 ÷ 0.8
                </div>
                <Pop at={1900}>
                  <BigLabel color={C.mp} size={64}>= 156.25</BigLabel>
                </Pop>
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
            borderRadius: 24, padding: "28px 72px", marginBottom: 28,
          }}>
            <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginBottom: 8 }}>
              MP is 56.25% above CP
            </div>
            <Row gap={20} align="center" style={{ justifyContent: "center" }}>
              <BigLabel color={C.cp} size={60}>CP = 100</BigLabel>
              <div style={{ fontFamily: F, fontSize: 52, color: C.gray }}>→</div>
              <BigLabel color={C.mp} size={60}>MP = 156.25</BigLabel>
            </Row>
          </div>
        </BounceIn>
        <Reveal at={2588}>
          <CallOut color={C.cp} bg={C.cpBg} border={C.cpBd} dashed style={{ fontSize: 40, padding: "24px 56px" }}>
            CP = 100 method works every time when CP and MP are both involved.
          </CallOut>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
