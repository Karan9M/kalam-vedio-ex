// Slide 7 - SP Formula (2070f, starts at 200.67s)
import { SlideBase, Moment, Reveal, Pop, BounceIn, SlideIn, C, F, Row, Frac, Formula, BigLabel, CallOut } from "./shared";

export const Slide07SPFormula: React.FC = () => (
  <SlideBase num={7} title="FINDING SP">

    {/* M1 (0-115f): CSAT asks REVERSE */}
    <Moment from={0} to={115}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={0}>
          <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginBottom: 16 }}>
            CSAT rarely asks forward calculation
          </div>
        </BounceIn>
        <BounceIn at={28}>
          <CallOut color={C.sp} bg={C.spBg} border={C.spBd} style={{ fontSize: 64, padding: "32px 72px" }}>
            CSAT asks REVERSE
          </CallOut>
        </BounceIn>
      </div>
    </Moment>

    {/* M2 (177-330f): Question setup: SP = ? when CP=3000, Profit=20% */}
    <Moment from={177} to={333}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 860 }}>
        <SlideIn at={177} from="top">
          <div style={{
            background: "#F9FAFB", border: "2px solid #E5E7EB",
            borderRadius: 20, padding: "32px 56px",
          }}>
            <div style={{ fontFamily: F, fontSize: 38, color: C.gray, marginBottom: 20 }}>
              Find SP when:
            </div>
            <Row gap={48} align="center" style={{ justifyContent: "center" }}>
              <div style={{
                background: C.cpBg, border: `3px solid ${C.cpBd}`,
                borderRadius: 16, padding: "16px 36px",
                fontFamily: F, fontWeight: 900, fontSize: 52, color: C.cp,
              }}>CP = 3000</div>
              <div style={{
                background: C.profitBg, border: `3px solid ${C.profitBd}`,
                borderRadius: 16, padding: "16px 36px",
                fontFamily: F, fontWeight: 900, fontSize: 52, color: C.profit,
              }}>Profit = 20%</div>
              <div style={{
                background: C.spBg, border: `3px dashed ${C.spBd}`,
                borderRadius: 16, padding: "16px 36px",
                fontFamily: F, fontWeight: 900, fontSize: 52, color: C.sp,
              }}>SP = ?</div>
            </Row>
          </div>
        </SlideIn>
      </div>
    </Moment>

    {/* M3 (486-650f): Logic derivation: 20% profit means 100 CP → 120 SP */}
    <Moment from={486} to={651}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={486} from="left">
          <div style={{ fontFamily: F, fontSize: 44, color: C.dark, marginBottom: 28 }}>
            20% profit means:
          </div>
        </SlideIn>
        <Row gap={32} align="center" style={{ justifyContent: "center" }}>
          <BounceIn at={546}>
            <div style={{
              background: C.cpBg, border: `3px solid ${C.cpBd}`,
              borderRadius: 16, padding: "20px 40px",
              fontFamily: F, fontWeight: 900, fontSize: 56, color: C.cp,
            }}>100 CP</div>
          </BounceIn>
          <BounceIn at={566}>
            <div style={{
              fontFamily: F, fontSize: 52, color: C.profit, fontWeight: 800,
            }}>+ 20</div>
          </BounceIn>
          <BounceIn at={586}>
            <div style={{ fontFamily: F, fontSize: 52, color: C.gray, fontWeight: 700 }}>→</div>
          </BounceIn>
          <BounceIn at={606}>
            <div style={{
              background: C.spBg, border: `3px solid ${C.spBd}`,
              borderRadius: 16, padding: "20px 40px",
              fontFamily: F, fontWeight: 900, fontSize: 56, color: C.sp,
            }}>120 SP</div>
          </BounceIn>
        </Row>
      </div>
    </Moment>

    {/* M4 (651-1090f): SP formula with numbers: 3000 × 120 / 100 = 3600 */}
    <Moment from={651} to={1265}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={651}>
          <div style={{ fontFamily: F, fontSize: 40, color: C.dark, marginBottom: 20 }}>
            SP = CP × <span style={{ color: C.sp }}>120</span> / 100
          </div>
        </Reveal>
        <Reveal at={746}>
          <div style={{
            background: "#F9FAFB", border: "2px solid #E5E7EB",
            borderRadius: 18, padding: "20px 48px", marginTop: 16,
          }}>
            <Row gap={16} align="center" style={{ justifyContent: "center" }}>
              <div style={{ fontFamily: F, fontSize: 52, fontWeight: 800, color: C.dark }}>
                3000 ×
              </div>
              <Frac num="120" den="100" size={44} color={C.sp} />
              <div style={{ fontFamily: F, fontSize: 52, fontWeight: 800, color: C.dark }}>=</div>
              <Pop at={800}>
                <BigLabel color={C.profit} size={72}>3600</BigLabel>
              </Pop>
            </Row>
          </div>
        </Reveal>
        <Reveal at={1091}>
          <div style={{
            background: C.profitBg, border: `2px solid ${C.profitBd}`,
            borderRadius: 14, padding: "12px 36px", marginTop: 20,
            fontFamily: F, fontSize: 38, color: C.profit,
          }}>
            SP = Rs. 3600 ✓
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M5 (1265-1534f): Formula card: SP = CP × (100 + P) / 100 */}
    <Moment from={1265} to={1595}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={1265}>
          <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginBottom: 20 }}>
            Pattern: Profit% = P
          </div>
        </Reveal>
        <BounceIn at={1265}>
          <Formula color={C.profit} bg={C.profitBg} border={C.profitBd} style={{ fontSize: 52 }}>
            SP = CP ×
            <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", margin: "0 8px" }}>
              <span style={{ fontSize: 44, lineHeight: 1.1 }}>(100 + P)</span>
              <span style={{ display: "block", height: 3, background: C.profit, minWidth: 60, margin: "4px 0" }} />
              <span style={{ fontSize: 44, lineHeight: 1.1 }}>100</span>
            </span>
          </Formula>
        </BounceIn>
        <Reveal at={1468}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.gray, marginTop: 16 }}>
            Divide by 100 at the end
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M6 (1595-1868f): Formula card: SP = CP × (100 - L) / 100 */}
    <Moment from={1595} to={1869}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={1595}>
          <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginBottom: 20 }}>
            Pattern: Loss% = L
          </div>
        </Reveal>
        <BounceIn at={1595}>
          <Formula color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 52 }}>
            SP = CP ×
            <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", margin: "0 8px" }}>
              <span style={{ fontSize: 44, lineHeight: 1.1 }}>(100 - L)</span>
              <span style={{ display: "block", height: 3, background: C.loss, minWidth: 60, margin: "4px 0" }} />
              <span style={{ fontSize: 44, lineHeight: 1.1 }}>100</span>
            </span>
          </Formula>
        </BounceIn>
      </div>
    </Moment>

    {/* M7 (1869-2070f): Summary: Profit → ADD / Loss → SUBTRACT */}
    <Moment from={1869}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Row gap={40} align="stretch" style={{ marginBottom: 28 }}>
          <BounceIn at={1869} style={{ flex: 1 }}>
            <div style={{
              background: C.profitBg, border: `3px solid ${C.profitBd}`,
              borderRadius: 22, padding: "28px 40px",
            }}>
              <div style={{ fontFamily: F, fontSize: 40, fontWeight: 900, color: C.profit, marginBottom: 12 }}>
                PROFIT → ADD
              </div>
              <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
                100 + P
              </div>
              <div style={{ fontFamily: F, fontSize: 32, color: C.gray, marginTop: 8 }}>
                SP = CP × (100+P) / 100
              </div>
            </div>
          </BounceIn>
          <BounceIn at={1922} style={{ flex: 1 }}>
            <div style={{
              background: C.lossBg, border: `3px solid ${C.lossBd}`,
              borderRadius: 22, padding: "28px 40px",
            }}>
              <div style={{ fontFamily: F, fontSize: 40, fontWeight: 900, color: C.loss, marginBottom: 12 }}>
                LOSS → SUBTRACT
              </div>
              <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
                100 - L
              </div>
              <div style={{ fontFamily: F, fontSize: 32, color: C.gray, marginTop: 8 }}>
                SP = CP × (100-L) / 100
              </div>
            </div>
          </BounceIn>
        </Row>
        <Reveal at={1940}>
          <CallOut style={{ fontSize: 38 }}>
            The multiplier = (100 ± %) / 100
          </CallOut>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
