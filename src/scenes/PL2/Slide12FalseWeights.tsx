// Slide 12 - False Weights (2310f, starts at 607.67s)
import React from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
  SlideBase, Moment, Reveal, C, F, Row,
  Formula, BigLabel, CallOut, BounceIn, SlideIn, AnimImg,
  CountUp, Pulse, StampIn,
} from "./shared";
import arrowRight from "../../../Graphics/arrow-right-facing.png";

const AnimWeightBar: React.FC<{ at: number; width: number; color: string }> = ({ at, width, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const prog = spring({ frame: Math.max(0, frame - at), fps, config: { damping: 14, stiffness: 100 }, from: 0, to: 1 });
  return (
    <div style={{ height: 32, width: width * prog, background: color, borderRadius: 8 }} />
  );
};

export const Slide12FalseWeights: React.FC = () => (
  <SlideBase num={12} title="FALSE WEIGHTS">

    {/* M1 (0–205f): Heading + concept intro */}
    <Moment from={0} to={205}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={31} from="top">
          <BigLabel color={C.loss} size={76}>
            A common trick — students often miss this
          </BigLabel>
        </SlideIn>
        <Reveal at={120}>
          <div style={{ fontFamily: F, fontSize: 48, color: C.gray, marginTop: 24 }}>
            A dishonest seller uses a false weight to cheat
          </div>
        </Reveal>
        <Reveal at={60} style={{ marginTop: 40, width: "100%", maxWidth: 680 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <div style={{ fontFamily: F, fontSize: 36, color: C.gray, marginBottom: 8 }}>Claims: 1000g</div>
              <AnimWeightBar at={60} width={560} color={C.cp} />
            </div>
            <div>
              <div style={{ fontFamily: F, fontSize: 36, color: C.loss, marginBottom: 8 }}>Gives: 800g</div>
              <AnimWeightBar at={90} width={448} color={C.loss} />
            </div>
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
            borderRadius: 24, padding: "40px 72px",
            fontFamily: F, fontSize: 50, color: C.dark, lineHeight: 1.7,
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
            fontFamily: F, fontSize: 50, color: C.dark, fontWeight: 700, marginTop: 32,
          }}>
            Profit % = ?
          </div>
        </Reveal>
        <Reveal at={480}>
          <BounceIn at={480}>
            <div style={{
              background: C.mpBg, border: `2px solid ${C.mpBd}`, borderRadius: 16,
              padding: "20px 48px", marginTop: 28,
              fontFamily: F, fontSize: 44, color: C.dark,
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
          <CallOut color={C.cp} bg={C.cpBg} border={C.cpBd} style={{ fontSize: 60, padding: "40px 80px" }}>
            No price given?
            <br />
            <strong>Assume: 1 g = Rs. 1</strong>
          </CallOut>
        </SlideIn>
      </div>
    </Moment>

    {/* M4 (711–1045f): CP and SP boxes */}
    <Moment from={711} to={1045}>
      <Row gap={80} align="stretch" style={{ width: "100%", maxWidth: 1000 }}>
        {/* CP box */}
        <Reveal at={855}>
          <div style={{
            background: C.cpBg, border: `3px solid ${C.cpBd}`, borderRadius: 24,
            padding: "36px 60px", flex: 1, textAlign: "center",
          }}>
            <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginBottom: 12 }}>
              Seller PAYS for
            </div>
            <BigLabel color={C.cp} size={88}>800 g</BigLabel>
            <div style={{
              fontFamily: F, fontSize: 44, fontWeight: 700, color: C.cp, marginTop: 14,
            }}>
              CP = Rs. 800
            </div>
          </div>
        </Reveal>

        <div style={{ display: "flex", alignItems: "center" }}>
          <AnimImg src={arrowRight} revealFrame={970}
            style={{ position: "relative" as const, width: 90, height: 52, top: 0, left: 0 }} />
        </div>

        {/* SP box */}
        <Reveal at={970}>
          <div style={{
            background: C.spBg, border: `3px solid ${C.spBd}`, borderRadius: 24,
            padding: "36px 60px", flex: 1, textAlign: "center",
          }}>
            <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginBottom: 12 }}>
              Seller CHARGES for
            </div>
            <BigLabel color={C.sp} size={88}>1000 g</BigLabel>
            <div style={{
              fontFamily: F, fontSize: 44, fontWeight: 700, color: C.sp, marginTop: 14,
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
          <div style={{ fontFamily: F, fontSize: 54, color: C.dark, marginBottom: 28 }}>
            Profit = 1000 − 800 ={" "}
            <strong style={{ color: C.profit }}>Rs. 200</strong>
          </div>
        </Reveal>
        <Pulse at={1167}>
          <BounceIn at={1167}>
            <Row gap={24} align="center" style={{ justifyContent: "center" }}>
              <div style={{ fontFamily: F, fontSize: 56, color: C.dark }}>
                Profit% = 200/800 × 100 =
              </div>
              <CountUp from={0} to={25} at={1167} color={C.profit} size={100} suffix="%" />
            </Row>
          </BounceIn>
        </Pulse>
      </div>
    </Moment>

    {/* M6 (1322–2310f): Formula + verify */}
    <Moment from={1322}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: F, fontSize: 48, color: C.dark, fontWeight: 700, marginBottom: 28 }}>
          Formula:
        </div>
        <StampIn at={1419}>
          <Formula color={C.profit} bg={C.profitBg} border={C.profitBd} style={{ fontSize: 52 }}>
            Profit% = (True − False) / False × 100
          </Formula>
        </StampIn>
        <Reveal at={1554}>
          <div style={{
            background: "#FFFFFF", border: "1.5px solid #CCCCCC",
            borderRadius: 14, padding: "20px 48px", marginTop: 28,
            fontFamily: F, fontSize: 50, color: C.dark,
          }}>
            = (1000 − 800) / 800 × 100
          </div>
        </Reveal>
        <BounceIn at={1859}>
          <Pulse at={1859}>
            <BigLabel color={C.profit} size={108} style={{ marginTop: 24 }}>= 25%</BigLabel>
          </Pulse>
        </BounceIn>
        <Reveal at={2125}>
          <CallOut style={{ fontSize: 46, padding: "24px 56px", marginTop: 32 }}>
            Price is <strong>not needed</strong>.
            The weights ratio is enough.
          </CallOut>
        </Reveal>
        <Reveal at={2215}>
          <div style={{ fontFamily: F, fontSize: 44, color: C.gray, marginTop: 20 }}>
            True weight : False weight = 1000 : 800
          </div>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
