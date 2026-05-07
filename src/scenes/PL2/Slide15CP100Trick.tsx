// Slide 15 - CP=100 Trick (1440f, starts at 900.67s)
// Audio sync: frame = (ts_seconds - 900.67) × 30
import React from "react";
import {
  SlideBase, Moment, Reveal, C, F, Row,
  BigLabel, Formula, CallOut, Frac, AnimImg,
  BounceIn, SlideIn,
  CountUp, Pulse, StampIn,
} from "./shared";
import badgeTrick from "../../../Graphics/badge-trick.png";
import tickIcon   from "../../../Graphics/right-tickmark-true-icon.png";
import arrowRight from "../../../Graphics/arrow-right-facing.png";

export const Slide15CP100Trick: React.FC = () => (
  <SlideBase num={15} title="THE CP = 100 TRICK">

    {/* ── M1 (0-397f): Question card ─────────────────────────────────────── */}
    <Moment from={0} to={397}>
      <div style={{ width: "100%", maxWidth: 1000, textAlign: "center" }}>

        {/* Badge */}
        <BounceIn at={0} style={{ display: "inline-block", marginBottom: 36 }}>
          <AnimImg src={badgeTrick} revealFrame={0}
            style={{ position: "relative", width: 270, height: 66, top: 0, left: 0 }} />
        </BounceIn>

        {/* Problem statement — slides in at 48f */}
        <SlideIn at={48} from="top" dist={24}>
          <div style={{
            background: "#FFFFFF", border: "2px solid #CCCCCC",
            borderRadius: 24, padding: "40px 72px",
            fontFamily: F, fontSize: 60, color: C.dark, lineHeight: 1.75,
            textAlign: "left",
          }}>
            A shopkeeper gives a{" "}
            <strong style={{ color: C.mp }}>20% discount</strong>{" "}
            and still earns a{" "}
            <strong style={{ color: C.profit }}>12% profit</strong>.
          </div>
        </SlideIn>

        {/* Question — appears at 167f */}
        <Reveal at={167} style={{ marginTop: 36 }}>
          <div style={{
            background: C.cpBg, border: `2.5px solid ${C.cpBd}`,
            borderRadius: 18, padding: "30px 64px",
            fontFamily: F, fontSize: 64, fontWeight: 700, color: C.cp,
          }}>
            What % of CP is the Marked Price?
          </div>
        </Reveal>

      </div>
    </Moment>

    {/* ── M2 (398-635f): Assume CP = 100, derive SP = 112 ───────────────── */}
    <Moment from={398} to={635}>
      <div style={{ width: "100%", maxWidth: 1000 }}>

        {/* Step label */}
        <StampIn at={398}>
          <div style={{
            background: C.cpBg, border: `3px solid ${C.cpBd}`, borderRadius: 16,
            padding: "16px 52px", fontFamily: F, fontSize: 52, fontWeight: 700, color: C.cp,
            marginBottom: 24,
          }}>
            STEP 1 — Assume CP = 100
          </div>
        </StampIn>

        <div style={{
          background: "#FFFFFF", border: "2px solid #CCCCCC",
          borderRadius: 24, padding: "40px 64px",
        }}>
          {/* CP = 100 */}
          <Row gap={24} align="center" style={{ justifyContent: "space-between", marginBottom: 24 }}>
            <BounceIn at={398}>
              <div style={{ fontFamily: F, fontSize: 64, fontWeight: 700, color: C.cp }}>
                CP = 100
              </div>
            </BounceIn>
          </Row>

          {/* 12% profit label */}
          <Reveal at={451}>
            <Row gap={24} align="center" style={{ justifyContent: "space-between", marginBottom: 24 }}>
              <div style={{ fontFamily: F, fontSize: 60, color: C.dark }}>
                12% profit on CP
              </div>
              <AnimImg src={arrowRight} revealFrame={460}
                style={{ position: "relative" as const, width: 90, height: 52, top: 0, left: 0 }} />
            </Row>
          </Reveal>

          {/* SP = 112 */}
          <Reveal at={477}>
            <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
              <div style={{ fontFamily: F, fontSize: 60, color: C.dark, whiteSpace: "nowrap" }}>
                SP = CP + 12% of CP
              </div>
              <BounceIn at={490}>
                <BigLabel color={C.sp} size={88}>SP = 112</BigLabel>
              </BounceIn>
            </Row>
          </Reveal>
        </div>

      </div>
    </Moment>

    {/* ── M3 (636-866f): 20% discount on MP → SP = 80% of MP ───────────── */}
    <Moment from={636} to={866}>
      <div style={{ width: "100%", maxWidth: 1000 }}>

        <StampIn at={636}>
          <div style={{
            background: C.mpBg, border: `3px solid ${C.mpBd}`, borderRadius: 16,
            padding: "16px 52px", fontFamily: F, fontSize: 52, fontWeight: 700, color: C.mp,
            marginBottom: 24,
          }}>
            STEP 2 — Use the Discount
          </div>
        </StampIn>

        <div style={{
          background: "#FFFFFF", border: "2px solid #CCCCCC",
          borderRadius: 24, padding: "40px 64px",
        }}>
          {/* 20% discount on MP */}
          <SlideIn at={636} from="left">
            <Row gap={28} align="center" style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: F, fontSize: 60, color: C.dark }}>
                Discount on MP =
              </div>
              <div style={{
                background: C.mpBg, border: `2px solid ${C.mpBd}`, borderRadius: 14,
                padding: "14px 44px", fontFamily: F, fontSize: 60, fontWeight: 700, color: C.mp,
              }}>
                20%
              </div>
            </Row>
          </SlideIn>

          {/* SP = 80% of MP */}
          <Reveal at={729}>
            <Row gap={28} align="center" style={{ justifyContent: "center" }}>
              <AnimImg src={arrowRight} revealFrame={729}
                style={{ position: "relative" as const, width: 90, height: 52, top: 0, left: 0 }} />
              <BounceIn at={745}>
                <Formula color={C.sp} bg={C.spBg} border={C.spBd} style={{ fontSize: 64 }}>
                  SP = 80% of MP
                </Formula>
              </BounceIn>
            </Row>
          </Reveal>
        </div>

      </div>
    </Moment>

    {/* ── M4 (867-1128f): Calculate MP = 112 / 0.8 = 140 ──────────────── */}
    <Moment from={867} to={1128}>
      <div style={{ textAlign: "center" }}>

        <StampIn at={867}>
          <div style={{
            background: C.mpBg, border: `3px solid ${C.mpBd}`, borderRadius: 16,
            padding: "16px 52px", fontFamily: F, fontSize: 52, fontWeight: 700, color: C.mp,
            marginBottom: 28,
          }}>
            STEP 3 — Solve for MP
          </div>
        </StampIn>

        {/* Equation */}
        <SlideIn at={867} from="left">
          <div style={{ fontFamily: F, fontSize: 64, color: C.dark, marginBottom: 32 }}>
            SP = 80% of MP&nbsp;&nbsp;→&nbsp;&nbsp;MP =
            <span style={{ color: C.sp }}> SP </span>÷ 0.8
          </div>
        </SlideIn>

        {/* Fraction MP = 112 / 0.8 */}
        <Reveal at={900}>
          <Row gap={28} align="center" style={{ justifyContent: "center", marginBottom: 32 }}>
            <div style={{ fontFamily: F, fontSize: 64, color: C.dark, fontWeight: 700 }}>MP = </div>
            <Frac num={<span style={{ color: C.sp }}>112</span>} den="0.8" size={64} color={C.dark} />
          </Row>
        </Reveal>

        {/* = 140 highlighted at 1032f */}
        <Pulse at={1032}>
          <BounceIn at={1032}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 108, color: C.mp, lineHeight: 1 }}>
              MP = <CountUp from={100} to={140} at={1032} color={C.mp} size={108} suffix="%" />
            </div>
          </BounceIn>
        </Pulse>

      </div>
    </Moment>

    {/* ── M5 (1129-1440f): Result — MP = 140% of CP, 40% more ─────────── */}
    <Moment from={1129}>
      <div style={{ textAlign: "center" }}>

        {/* Main result */}
        <BounceIn at={1129}>
          <div style={{
            background: C.mpBg, border: `3px solid ${C.mpBd}`, borderRadius: 28,
            padding: "40px 96px", marginBottom: 40,
          }}>
            <Row gap={28} align="center" style={{ justifyContent: "center" }}>
              <BigLabel color={C.mp} size={96}>MP = 140% of CP</BigLabel>
              <AnimImg src={tickIcon} revealFrame={1160}
                style={{ position: "relative", width: 72, height: 72, top: 0, left: 0 }} />
            </Row>
          </div>
        </BounceIn>

        {/* Insight: 40% more */}
        <StampIn at={1263}>
          <CallOut
            color={C.dark} bg="#F0FDF4" border="#86EFAC"
            style={{ fontSize: 64, padding: "36px 72px" }}
          >
            MP is{" "}
            <strong style={{ color: C.profit }}>40% more</strong>{" "}
            than CP.
          </CallOut>
        </StampIn>

        {/* Reminder */}
        <Reveal at={1320} style={{ marginTop: 32 }}>
          <div style={{
            fontFamily: F, fontSize: 50, color: C.gray, lineHeight: 1.6,
          }}>
            CP not given? Assume CP = 100. Always works.
          </div>
        </Reveal>

      </div>
    </Moment>

  </SlideBase>
);
