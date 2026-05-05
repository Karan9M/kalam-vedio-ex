// Slide 11 - Successive Discounts (2280f, starts at 531.67s)
import React from "react";
import {
  SlideBase, Moment, Reveal, Pop, C, F, Row,
  Formula, BigLabel, CallOut, BounceIn, SlideIn, DrawArrow, AnimImg,
} from "./shared";
import badgeTrick from "../../../Graphics/badge-trick.png";

export const Slide11Successive: React.FC = () => (
  <SlideBase num={11} title="SUCCESSIVE DISCOUNTS">

    {/* M1 (0–122f): Heading already in SlideBase. Intro label. */}
    <Moment from={0} to={122}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={43} from="top">
          <BigLabel color={C.mp} size={72}>Two discounts applied one after another</BigLabel>
        </SlideIn>
      </div>
    </Moment>

    {/* M2 (123–273f): Question - 20% then 10% */}
    <Moment from={123} to={273}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={123} from="left">
          <div style={{
            background: C.mpBg, border: `3px solid ${C.mpBd}`, borderRadius: 24,
            padding: "32px 64px",
            fontFamily: F, fontSize: 44, color: C.dark, lineHeight: 1.6,
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
        <div style={{ fontFamily: F, fontSize: 44, color: C.gray, marginBottom: 24 }}>
          Students say: 20 + 10 ={" "}
          <strong style={{ color: C.gray }}>30%</strong>
        </div>
        <BounceIn at={274}>
          <div style={{
            background: C.lossBg, border: `4px solid ${C.lossBd}`,
            borderRadius: 24, padding: "28px 80px",
          }}>
            <BigLabel color={C.loss} size={110}>WRONG!</BigLabel>
          </div>
        </BounceIn>
        <Reveal at={350}>
          <div style={{ fontFamily: F, fontSize: 38, color: C.dark, marginTop: 20 }}>
            Successive discounts are <strong style={{ color: C.loss }}>NOT additive</strong>
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M4 (444–443f): bridge Moment - "successive discounts are not additive" rule shown */}
    <Moment from={444} to={565}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={444} from="top">
          <CallOut color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 46, padding: "28px 60px" }}>
            Successive discounts are <strong>NOT additive</strong>
          </CallOut>
        </SlideIn>
      </div>
    </Moment>

    {/* M5 (566–961f): Step-by-step proof */}
    <Moment from={566} to={961}>
      <div style={{ width: "100%", maxWidth: 820 }}>
        <div style={{
          background: "#F9FAFB", border: "2px solid #E5E7EB",
          borderRadius: 20, padding: "28px 48px",
        }}>
          {/* MP = 100 */}
          <Reveal at={566}>
            <Row gap={24} align="center" style={{ justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ fontFamily: F, fontSize: 42, color: C.dark, fontWeight: 700 }}>
                Start: MP =
              </div>
              <div style={{
                background: C.mpBg, border: `2px solid ${C.mpBd}`, borderRadius: 14,
                padding: "8px 36px", fontFamily: F, fontWeight: 900, fontSize: 56, color: C.mp,
              }}>100</div>
            </Row>
          </Reveal>

          {/* After 20% off → 80 */}
          <Reveal at={643}>
            <Row gap={20} align="center" style={{ justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>
                After 20% off:
              </div>
              <Row gap={16} align="center">
                <DrawArrow at={643} color={C.mp} lineLen={60} />
                <div style={{
                  background: C.spBg, border: `2px solid ${C.spBd}`, borderRadius: 14,
                  padding: "8px 36px", fontFamily: F, fontWeight: 900, fontSize: 56, color: C.sp,
                }}>80</div>
              </Row>
            </Row>
          </Reveal>

          {/* After 10% off on 80 → 72 */}
          <Reveal at={762}>
            <Row gap={20} align="center" style={{ justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>
                10% off on 80:
              </div>
              <Row gap={16} align="center">
                <DrawArrow at={762} color={C.sp} lineLen={60} />
                <div style={{
                  background: C.profitBg, border: `2px solid ${C.profitBd}`, borderRadius: 14,
                  padding: "8px 36px", fontFamily: F, fontWeight: 900, fontSize: 56, color: C.profit,
                }}>72</div>
              </Row>
            </Row>
          </Reveal>

          {/* Total discount = 28% */}
          <Reveal at={853}>
            <div style={{ borderTop: "2px solid #E5E7EB", paddingTop: 16 }}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 42, fontWeight: 800, color: C.dark }}>
                  Discount = 100 − 72 =
                </div>
                <BounceIn at={962}>
                  <Row gap={12} align="center">
                    <BigLabel color={C.loss} size={72}>28%</BigLabel>
                    <div style={{ fontFamily: F, fontSize: 36, color: C.gray }}>(not 30%)</div>
                  </Row>
                </BounceIn>
              </Row>
            </div>
          </Reveal>
        </div>
      </div>
    </Moment>

    {/* M5b (962–1161f) — BounceIn 28% standalone */}
    <Moment from={962} to={1161}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={962}>
          <BigLabel color={C.loss} size={110}>Total Discount = 28%</BigLabel>
        </BounceIn>
        <Reveal at={1071}>
          <div style={{ fontFamily: F, fontSize: 44, color: C.dark, marginTop: 20 }}>
            Not 30% — it is <strong style={{ color: C.loss }}>28%</strong>
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M6 (1162–1685f): Formula */}
    <Moment from={1162} to={1685}>
      <div style={{ textAlign: "center" }}>
        <Row gap={20} align="center" style={{ justifyContent: "center", marginBottom: 28 }}>
          <AnimImg
            src={badgeTrick}
            revealFrame={1162}
            style={{ position: "relative" as const, width: 200, height: 50, top: 0, left: 0 }}
          />
          <SlideIn at={1162} from="right">
            <div style={{ fontFamily: F, fontSize: 44, color: C.dark, fontWeight: 700 }}>
              Successive Discount Formula
            </div>
          </SlideIn>
        </Row>
        <Pop at={1247}>
          <Formula color={C.mp} bg={C.mpBg} border={C.mpBd} style={{ fontSize: 56 }}>
            x + y − xy/100
          </Formula>
        </Pop>
        <Reveal at={1362}>
          <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginTop: 20 }}>
            where x and y are the two discount percentages
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M7 (1686–2280f): Verify */}
    <Moment from={1686}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: F, fontSize: 40, color: C.dark, fontWeight: 700, marginBottom: 20 }}>
          Verify with x = 20, y = 10:
        </div>
        <SlideIn at={1686} from="left">
          <div style={{
            background: "#F9FAFB", border: "1.5px solid #E5E7EB",
            borderRadius: 16, padding: "20px 48px", marginBottom: 20,
            fontFamily: F, fontSize: 46, color: C.dark,
          }}>
            20 + 10 −{" "}
            <span style={{ color: C.mp }}>(20 × 10)</span>
            /100
          </div>
        </SlideIn>
        <Reveal at={1807}>
          <div style={{ fontFamily: F, fontSize: 46, color: C.dark, marginBottom: 16 }}>
            = 30 − 200/100 = 30 − 2
          </div>
        </Reveal>
        <BounceIn at={1927}>
          <BigLabel color={C.profit} size={88}>= 28%</BigLabel>
        </BounceIn>
        <Reveal at={2018}>
          <CallOut style={{ fontSize: 40, padding: "20px 48px", marginTop: 24 }}>
            Same answer! Memorize the formula + understand the reasoning.
          </CallOut>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
