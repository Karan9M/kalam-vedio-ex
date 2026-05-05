// Slide 12 - False Weights (2310f, starts at 607.67s)
import React from "react";
import {
  SlideBase, Moment, Reveal, Pop, C, F, Row,
  Formula, BigLabel, CallOut, BounceIn, SlideIn, DrawArrow,
} from "./shared";

export const Slide12FalseWeights: React.FC = () => (
  <SlideBase num={12} title="FALSE WEIGHTS">

    {/* M1 (0–205f): Heading + concept intro */}
    <Moment from={0} to={205}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={31} from="top">
          <BigLabel color={C.loss} size={68}>
            A common trick — students often miss this
          </BigLabel>
        </SlideIn>
        <Reveal at={120}>
          <div style={{ fontFamily: F, fontSize: 42, color: C.gray, marginTop: 20 }}>
            A dishonest seller uses a false weight to cheat
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M2 (289–579f): Scenario card */}
    <Moment from={289} to={579}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={289} from="left">
          <div style={{
            background: C.lossBg, border: `3px solid ${C.lossBd}`,
            borderRadius: 24, padding: "36px 64px",
            fontFamily: F, fontSize: 42, color: C.dark, lineHeight: 1.7,
          }}>
            Seller <strong style={{ color: C.loss }}>says</strong>: "I am giving you{" "}
            <strong>1 kg (1000 g)</strong>"
            <br />
            Seller <strong style={{ color: C.loss }}>actually gives</strong>:{" "}
            <strong style={{ color: C.loss }}>800 g</strong>
          </div>
        </SlideIn>
        <Reveal at={360}>
          <div style={{
            fontFamily: F, fontSize: 42, color: C.dark, fontWeight: 800, marginTop: 28,
          }}>
            Profit % = ?
          </div>
        </Reveal>
        <Reveal at={480}>
          <BounceIn at={480}>
            <div style={{
              background: C.mpBg, border: `2px solid ${C.mpBd}`, borderRadius: 16,
              padding: "16px 40px", marginTop: 24,
              fontFamily: F, fontSize: 38, color: C.dark,
            }}>
              No price given — find profit %
            </div>
          </BounceIn>
        </Reveal>
      </div>
    </Moment>

    {/* M3 (580–710f): "No price? Assume 1g = Rs.1" */}
    <Moment from={580} to={710}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={580} from="top">
          <CallOut color={C.cp} bg={C.cpBg} border={C.cpBd} style={{ fontSize: 50, padding: "32px 72px" }}>
            No price given?
            <br />
            <strong>Assume: 1 g = Rs. 1</strong>
          </CallOut>
        </SlideIn>
      </div>
    </Moment>

    {/* M4 (711–1045f): CP and SP boxes */}
    <Moment from={711} to={1045}>
      <Row gap={80} align="stretch" style={{ width: "100%", maxWidth: 900 }}>
        {/* CP box */}
        <Reveal at={855}>
          <div style={{
            background: C.cpBg, border: `3px solid ${C.cpBd}`, borderRadius: 24,
            padding: "32px 52px", flex: 1, textAlign: "center",
          }}>
            <div style={{ fontFamily: F, fontSize: 34, color: C.gray, marginBottom: 10 }}>
              Seller PAYS for
            </div>
            <BigLabel color={C.cp} size={80}>800 g</BigLabel>
            <div style={{
              fontFamily: F, fontSize: 38, fontWeight: 900, color: C.cp, marginTop: 10,
            }}>
              CP = Rs. 800
            </div>
          </div>
        </Reveal>

        <DrawArrow at={970} color={C.gray} lineLen={48} />

        {/* SP box */}
        <Reveal at={970}>
          <div style={{
            background: C.spBg, border: `3px solid ${C.spBd}`, borderRadius: 24,
            padding: "32px 52px", flex: 1, textAlign: "center",
          }}>
            <div style={{ fontFamily: F, fontSize: 34, color: C.gray, marginBottom: 10 }}>
              Seller CHARGES for
            </div>
            <BigLabel color={C.sp} size={80}>1000 g</BigLabel>
            <div style={{
              fontFamily: F, fontSize: 38, fontWeight: 900, color: C.sp, marginTop: 10,
            }}>
              SP = Rs. 1000
            </div>
          </div>
        </Reveal>
      </Row>
    </Moment>

    {/* M5 (1049–1321f): Profit = 200, Profit% = 25% */}
    <Moment from={1049} to={1321}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={1049}>
          <div style={{ fontFamily: F, fontSize: 46, color: C.dark, marginBottom: 20 }}>
            Profit = 1000 − 800 ={" "}
            <strong style={{ color: C.profit }}>Rs. 200</strong>
          </div>
        </Reveal>
        <BounceIn at={1167}>
          <Row gap={20} align="center" style={{ justifyContent: "center" }}>
            <div style={{ fontFamily: F, fontSize: 48, color: C.dark }}>
              Profit% = 200/800 × 100 =
            </div>
            <BigLabel color={C.profit} size={88}>25%</BigLabel>
          </Row>
        </BounceIn>
      </div>
    </Moment>

    {/* M6 (1322–2310f): Formula + verify */}
    <Moment from={1322}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: F, fontSize: 40, color: C.dark, fontWeight: 700, marginBottom: 24 }}>
          Formula:
        </div>
        <Pop at={1419}>
          <Formula color={C.profit} bg={C.profitBg} border={C.profitBd} style={{ fontSize: 44 }}>
            Profit% = (True − False) / False × 100
          </Formula>
        </Pop>
        <Reveal at={1554}>
          <div style={{
            background: "#F9FAFB", border: "1.5px solid #E5E7EB",
            borderRadius: 14, padding: "16px 40px", marginTop: 24,
            fontFamily: F, fontSize: 42, color: C.dark,
          }}>
            = (1000 − 800) / 800 × 100
          </div>
        </Reveal>
        <BounceIn at={1859}>
          <BigLabel color={C.profit} size={96} style={{ marginTop: 20 }}>= 25%</BigLabel>
        </BounceIn>
        <Reveal at={2125}>
          <CallOut style={{ fontSize: 40, padding: "20px 48px", marginTop: 28 }}>
            Price is <strong>not needed</strong>.
            The weights ratio is enough.
          </CallOut>
        </Reveal>
        <Reveal at={2215}>
          <div style={{ fontFamily: F, fontSize: 38, color: C.gray, marginTop: 16 }}>
            True weight : False weight = 1000 : 800
          </div>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
