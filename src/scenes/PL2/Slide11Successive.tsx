// Slide 11 - Successive Discounts (2280f, starts at 531.67s)
import React from "react";
import {
  SlideBase, Moment, Reveal, C, F, Row,
  Formula, BigLabel, CallOut, BounceIn, SlideIn, AnimImg,
  CountUp, Pulse,
} from "./shared";
import badgeTrick from "../../../Graphics/badge-trick.png";
import arrowRight from "../../../Graphics/arrow-right-facing.png";

export const Slide11Successive: React.FC = () => (
  <SlideBase num={11} title="SUCCESSIVE DISCOUNTS">

    {/* M1 (0–122f): Heading already in SlideBase. Intro label. */}
    <Moment from={0} to={122}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={43} from="top">
          <BigLabel color={C.mp} size={80}>Two discounts applied one after another</BigLabel>
        </SlideIn>
      </div>
    </Moment>

    {/* M2 (123–273f): Question - 20% then 10% */}
    <Moment from={123} to={273}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={123} from="left">
          <div style={{
            background: C.mpBg, border: `3px solid ${C.mpBd}`, borderRadius: 24,
            padding: "40px 72px",
            fontFamily: F, fontSize: 52, color: C.dark, lineHeight: 1.6,
          }}>
            Board says: <strong style={{ color: C.mp }}>20% discount</strong>
            {" then "}
            <strong style={{ color: C.mp }}>10% discount</strong>
            <br />
            Total discount = ?
          </div>
        </SlideIn>
      </div>
    </Moment>

    {/* M3 (274–440f): Students say 30% → WRONG */}
    <Moment from={274} to={440}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: F, fontSize: 52, color: C.gray, marginBottom: 28 }}>
          Students say: 20 + 10 ={" "}
          <strong style={{ color: C.gray }}>30%</strong>
        </div>
        <BounceIn at={274}>
          <div style={{
            background: C.lossBg, border: `4px solid ${C.lossBd}`,
            borderRadius: 24, padding: "32px 88px",
          }}>
            <BigLabel color={C.loss} size={120}>WRONG!</BigLabel>
          </div>
        </BounceIn>
        <Reveal at={350}>
          <div style={{ fontFamily: F, fontSize: 46, color: C.dark, marginTop: 24 }}>
            Successive discounts are <strong style={{ color: C.loss }}>NOT additive</strong>
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M4 (444–565f): bridge Moment */}
    <Moment from={444} to={565}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={444} from="top">
          <CallOut color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 56, padding: "36px 72px" }}>
            Successive discounts are <strong>NOT additive</strong>
          </CallOut>
        </SlideIn>
      </div>
    </Moment>

    {/* M5 (566–961f): Step-by-step proof */}
    <Moment from={566} to={961}>
      <div style={{ width: "100%", maxWidth: 1000 }}>
        <div style={{
          background: "#FFFFFF", border: "2px solid #CCCCCC",
          borderRadius: 20, padding: "32px 56px",
        }}>
          {/* MP = 100 */}
          <Reveal at={566}>
            <Row gap={24} align="center" style={{ justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ fontFamily: F, fontSize: 50, color: C.dark, fontWeight: 700, whiteSpace: "nowrap" }}>
                Start: MP =
              </div>
              <div style={{
                background: C.mpBg, border: `2px solid ${C.mpBd}`, borderRadius: 14,
                padding: "10px 44px", fontFamily: F, fontWeight: 700, fontSize: 64, color: C.mp,
              }}>100</div>
            </Row>
          </Reveal>

          {/* After 20% off → 80 */}
          <Reveal at={643}>
            <Row gap={24} align="center" style={{ justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ fontFamily: F, fontSize: 48, color: C.dark, whiteSpace: "nowrap" }}>
                After 20% off:
              </div>
              <Row gap={20} align="center">
                <AnimImg src={arrowRight} revealFrame={643}
                  style={{ position: "relative" as const, width: 90, height: 50, top: 0, left: 0 }} />
                <div style={{
                  background: C.spBg, border: `2px solid ${C.spBd}`, borderRadius: 14,
                  padding: "10px 44px", fontFamily: F, fontWeight: 700, fontSize: 64, color: C.sp,
                }}>80</div>
              </Row>
            </Row>
          </Reveal>

          {/* After 10% off on 80 → 72 */}
          <Reveal at={762}>
            <Row gap={24} align="center" style={{ justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ fontFamily: F, fontSize: 48, color: C.dark, whiteSpace: "nowrap" }}>
                10% off on 80:
              </div>
              <Row gap={20} align="center">
                <AnimImg src={arrowRight} revealFrame={762}
                  style={{ position: "relative" as const, width: 90, height: 50, top: 0, left: 0 }} />
                <div style={{
                  background: C.profitBg, border: `2px solid ${C.profitBd}`, borderRadius: 14,
                  padding: "10px 44px", fontFamily: F, fontWeight: 700, fontSize: 64, color: C.profit,
                }}>72</div>
              </Row>
            </Row>
          </Reveal>

          {/* Total discount = 28% */}
          <Reveal at={853}>
            <div style={{ borderTop: "2px solid #CCCCCC", paddingTop: 20 }}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 50, fontWeight: 700, color: C.dark, whiteSpace: "nowrap" }}>
                  Discount = 100 − 72 =
                </div>
                <Pulse at={962}>
                  <BounceIn at={962}>
                    <Row gap={16} align="center">
                      <BigLabel color={C.loss} size={80}>28%</BigLabel>
                      <div style={{ fontFamily: F, fontSize: 44, color: C.gray }}>(not 30%)</div>
                    </Row>
                  </BounceIn>
                </Pulse>
              </Row>
            </div>
          </Reveal>
        </div>
      </div>
    </Moment>

    {/* M5b (962–1161f) — 28% standalone result */}
    <Moment from={962} to={1161}>
      <div style={{ textAlign: "center" }}>
        <Pulse at={962}>
          <BounceIn at={962}>
            <BigLabel color={C.loss} size={120}>Total Discount = 28%</BigLabel>
          </BounceIn>
        </Pulse>
        <Reveal at={1071}>
          <div style={{ fontFamily: F, fontSize: 52, color: C.dark, marginTop: 24 }}>
            Not 30% — it is <strong style={{ color: C.loss }}>28%</strong>
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M6 (1162–1685f): Formula */}
    <Moment from={1162} to={1685}>
      <div style={{ textAlign: "center" }}>
        <Row gap={24} align="center" style={{ justifyContent: "center", marginBottom: 32 }}>
          <AnimImg
            src={badgeTrick}
            revealFrame={1162}
            style={{ position: "relative" as const, width: 200, height: 50, top: 0, left: 0 }}
          />
          <SlideIn at={1162} from="right">
            <div style={{ fontFamily: F, fontSize: 52, color: C.dark, fontWeight: 700 }}>
              Successive Discount Formula
            </div>
          </SlideIn>
        </Row>
        <Pulse at={1162}>
          <BounceIn at={1247}>
            <Formula color={C.mp} bg={C.mpBg} border={C.mpBd} style={{ fontSize: 72 }}>
              x + y − xy/100
            </Formula>
          </BounceIn>
        </Pulse>
        <Reveal at={1362}>
          <div style={{ fontFamily: F, fontSize: 48, color: C.gray, marginTop: 24 }}>
            where x and y are the two discount percentages
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M7 (1686–2280f): Verify */}
    <Moment from={1686}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: F, fontSize: 48, color: C.dark, fontWeight: 700, marginBottom: 24 }}>
          Verify with x = 20, y = 10:
        </div>
        <SlideIn at={1686} from="left">
          <div style={{
            background: "#FFFFFF", border: "1.5px solid #CCCCCC",
            borderRadius: 16, padding: "24px 56px", marginBottom: 24,
            fontFamily: F, fontSize: 56, color: C.dark,
          }}>
            20 + 10 −{" "}
            <span style={{ color: C.mp }}>(20 × 10)</span>
            /100
          </div>
        </SlideIn>
        <Reveal at={1807}>
          <div style={{ fontFamily: F, fontSize: 56, color: C.dark, marginBottom: 20 }}>
            = 30 − 200/100 = 30 − 2
          </div>
        </Reveal>
        <Pulse at={1927}>
          <CountUp from={25} to={28} at={1927} color={C.profit} size={100} suffix="%" />
        </Pulse>
        <Reveal at={2018}>
          <CallOut style={{ fontSize: 46, padding: "24px 56px", marginTop: 28 }}>
            Same answer! Memorize the formula + understand the reasoning.
          </CallOut>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
