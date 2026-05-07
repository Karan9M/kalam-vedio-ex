// Slide 6 - Cycle example forward + reverse (750f, 175.67s - 200.67s)
import React from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
  SlideBase, Moment, Reveal, Pop, BounceIn, SlideIn,
  C, F, Row, Frac, BigLabel, CallOut,
  CountUp, Pulse, StampIn, AnimImg,
} from "./shared";
import arrowRight from "../../../Graphics/arrow-right-facing.png";

const NumberPop: React.FC<{ at: number; color: string; children: React.ReactNode }> = ({ at, color, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rawScale = spring({ frame: Math.max(0, frame - at), fps, config: { damping: 18, stiffness: 80, mass: 1.0 }, from: 0.2, to: 1 });
  const scale = frame < at ? 1 : rawScale;
  return (
    <span style={{ display: "inline-block", transform: `scale(${scale})`, fontWeight: 700, color, transformOrigin: "center bottom" }}>
      {children}
    </span>
  );
};

const DownArrow: React.FC<{ at: number }> = ({ at }) => (
  <div style={{ width: 56, height: 90, position: "relative", flexShrink: 0 }}>
    <div style={{ position: "absolute", top: "50%", left: "50%", width: 90, height: 56, transform: "translate(-50%, -50%) rotate(90deg)" }}>
      <AnimImg src={arrowRight} revealFrame={at} style={{ position: "relative" as const, width: 90, height: 56, top: 0, left: 0 }} />
    </div>
  </div>
);

export const Slide06Example: React.FC = () => (
  <SlideBase num={6} title="DIRECT CALCULATION">

    {/* M2: CP→SP flow (0–608f) */}
    <Moment from={0} to={608}>
      <div style={{ width: "100%", maxWidth: 1200, display: "flex", flexDirection: "column", gap: 28 }}>

        {/* CP = 3,000 */}
        <SlideIn at={30} from="left" dist={40}>
          <Row gap={32} align="center" style={{ justifyContent: "space-between" }}>
            <div style={{
              fontFamily: F, fontWeight: 700, fontSize: 60, color: C.cp,
              background: C.cpBg, border: `2px solid ${C.cpBd}`,
              borderRadius: 14, padding: "12px 36px", flexShrink: 0,
            }}>CP</div>
            <div style={{ fontFamily: F, fontSize: 56, color: C.gray, whiteSpace: "nowrap" }}>
              Cycle bought for
            </div>
            <BigLabel color={C.cp} size={80}>Rs. 3,000</BigLabel>
          </Row>
        </SlideIn>

        {/* Down arrow */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DownArrow at={90} />
        </div>

        {/* SP = 3,600 */}
        <SlideIn at={138} from="right" dist={40}>
          <Row gap={32} align="center" style={{ justifyContent: "space-between" }}>
            <div style={{
              fontFamily: F, fontWeight: 700, fontSize: 60, color: C.sp,
              background: C.spBg, border: `2px solid ${C.spBd}`,
              borderRadius: 14, padding: "12px 36px", flexShrink: 0,
            }}>SP</div>
            <div style={{ fontFamily: F, fontSize: 56, color: C.gray, whiteSpace: "nowrap" }}>
              Cycle sold for
            </div>
            <BigLabel color={C.sp} size={80}>Rs. 3,600</BigLabel>
          </Row>
        </SlideIn>

        {/* Divider */}
        <Reveal at={200}>
          <div style={{ height: 2, background: "#E5E7EB", borderRadius: 1 }} />
        </Reveal>

        {/* Profit = 600 */}
        <Reveal at={205}>
          <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
            <div style={{ fontFamily: F, fontSize: 56, color: C.dark, fontWeight: 600, whiteSpace: "nowrap" }}>
              Profit = 3600 − 3000 =
            </div>
            <BounceIn at={316}>
              <Pulse at={316}>
                <div style={{ fontFamily: F, fontWeight: 700, fontSize: 84, color: C.profit, lineHeight: 1 }}>
                  Rs. <CountUp from={0} to={600} at={316} color={C.profit} size={84} />
                </div>
              </Pulse>
            </BounceIn>
          </Row>
        </Reveal>

        {/* Profit % = 20% */}
        <Reveal at={380}>
          <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
            <Row gap={14} align="center">
              <div style={{ fontFamily: F, fontSize: 56, color: C.dark, fontWeight: 600 }}>
                Profit% =
              </div>
              <Frac
                num={<NumberPop at={425} color={C.profit}>600</NumberPop>}
                den={<NumberPop at={470} color={C.profit}>3000</NumberPop>}
                size={52} color={C.profit}
              />
              <span style={{ fontFamily: F, fontSize: 56, color: C.dark }}>
                <NumberPop at={500} color={C.dark}>×</NumberPop>
                <NumberPop at={510} color={C.dark}>100</NumberPop>{" "} = 
              </span>
            </Row>
            <BounceIn at={497}>
              <Pulse at={497}>
                <div style={{ fontFamily: F, fontWeight: 700, fontSize: 92, color: C.profit, lineHeight: 1 }}>
                  <CountUp from={0} to={20} at={497} color={C.profit} size={92} suffix="%" />
                </div>
              </Pulse>
            </BounceIn>
          </Row>
        </Reveal>

      </div>
    </Moment>

    {/* M3: CSAT asks reverse (611–750f) */}
    <Moment from={611}>
      <div style={{ textAlign: "center" }}>
        <Pop at={611}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 80, color: C.dark, marginBottom: 48 }}>
            Simple. Now reverse it.
          </div>
        </Pop>
        <StampIn at={725}>
          <CallOut color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 68, padding: "40px 96px" }}>
            CSAT rarely asks forward.
            <br />
            It asks REVERSE.
          </CallOut>
        </StampIn>
      </div>
    </Moment>

  </SlideBase>
);
