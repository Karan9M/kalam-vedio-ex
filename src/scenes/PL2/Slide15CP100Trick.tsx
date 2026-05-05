// Slide 15 - CP=100 Trick (1440f, starts at 900.67s)
// Audio sync: frame = (ts_seconds - 900.67) × 30
import React from "react";
import {
  SlideBase, Moment, Reveal, Pop, C, F, Row,
  BigLabel, Formula, CallOut, Frac, AnimImg,
  BounceIn, SlideIn, DrawArrow,
} from "./shared";
import badgeTrick from "../../../Graphics/badge-trick.png";
import tickIcon   from "../../../Graphics/right-tickmark-true-icon.png";

export const Slide15CP100Trick: React.FC = () => (
  <SlideBase num={15} title="THE CP = 100 TRICK">

    {/* ── M1 (0-397f): Question card ─────────────────────────────────────── */}
    {/* "shopkeeper: 20% discount still gets 12% profit" at 48f             */}
    {/* "what % of CP is MP?" at 167f                                        */}
    <Moment from={0} to={397}>
      <div style={{ width: "100%", maxWidth: 900, textAlign: "center" }}>

        {/* Badge */}
        <BounceIn at={0} style={{ display: "inline-block", marginBottom: 24 }}>
          <AnimImg src={badgeTrick} revealFrame={0}
            style={{ position: "relative", width: 210, height: 52, top: 0, left: 0 }} />
        </BounceIn>

        {/* Problem statement — slides in at 48f */}
        <SlideIn at={48} from="top" dist={24}>
          <div style={{
            background: "#F9FAFB", border: "2px solid #E5E7EB",
            borderRadius: 20, padding: "28px 52px",
            fontFamily: F, fontSize: 42, color: C.dark, lineHeight: 1.75,
            textAlign: "left",
          }}>
            A shopkeeper gives a{" "}
            <strong style={{ color: C.mp }}>20% discount</strong>{" "}
            and still earns a{" "}
            <strong style={{ color: C.profit }}>12% profit</strong>.
          </div>
        </SlideIn>

        {/* Question — appears at 167f */}
        <Reveal at={167} style={{ marginTop: 24 }}>
          <div style={{
            background: C.cpBg, border: `2.5px solid ${C.cpBd}`,
            borderRadius: 16, padding: "20px 44px",
            fontFamily: F, fontSize: 44, fontWeight: 800, color: C.cp,
          }}>
            What % of CP is the Marked Price?
          </div>
        </Reveal>

      </div>
    </Moment>

    {/* ── M2 (398-635f): Assume CP = 100, derive SP = 112 ───────────────── */}
    {/* "CP = 100" at 398f  |  "12% profit" at 451f  |  "SP = 112" at 477f */}
    <Moment from={398} to={635}>
      <div style={{ width: "100%", maxWidth: 780 }}>

        {/* Step label */}
        <BounceIn at={398} style={{ display: "inline-block", marginBottom: 20 }}>
          <div style={{
            background: C.cpBg, border: `3px solid ${C.cpBd}`, borderRadius: 14,
            padding: "10px 32px", fontFamily: F, fontSize: 34, fontWeight: 900, color: C.cp,
          }}>
            STEP 1 — Assume CP = 100
          </div>
        </BounceIn>

        <div style={{
          background: "#F9FAFB", border: "2px solid #E5E7EB",
          borderRadius: 20, padding: "28px 48px",
        }}>
          {/* CP = 100 */}
          <Row gap={24} align="center" style={{ justifyContent: "space-between", marginBottom: 16 }}>
            <BounceIn at={398}>
              <div style={{ fontFamily: F, fontSize: 44, fontWeight: 800, color: C.cp }}>
                CP = 100
              </div>
            </BounceIn>
          </Row>

          {/* 12% profit label */}
          <Reveal at={451}>
            <Row gap={24} align="center" style={{ justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>
                12% profit on CP
              </div>
              <DrawArrow at={460} color={C.profit} lineLen={60} />
            </Row>
          </Reveal>

          {/* SP = 112 */}
          <Reveal at={477}>
            <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
              <div style={{ fontFamily: F, fontSize: 40, color: C.dark }}>
                SP = CP + 12% of CP
              </div>
              <Pop at={490}>
                <BigLabel color={C.sp} size={64}>SP = 112</BigLabel>
              </Pop>
            </Row>
          </Reveal>
        </div>

      </div>
    </Moment>

    {/* ── M3 (636-866f): 20% discount on MP → SP = 80% of MP ───────────── */}
    {/* "20% discount on MP" at 636f  |  "SP = 80% of MP" at 729f          */}
    <Moment from={636} to={866}>
      <div style={{ width: "100%", maxWidth: 820 }}>

        <BounceIn at={636} style={{ display: "inline-block", marginBottom: 20 }}>
          <div style={{
            background: C.mpBg, border: `3px solid ${C.mpBd}`, borderRadius: 14,
            padding: "10px 32px", fontFamily: F, fontSize: 34, fontWeight: 900, color: C.mp,
          }}>
            STEP 2 — Use the Discount
          </div>
        </BounceIn>

        <div style={{
          background: "#F9FAFB", border: "2px solid #E5E7EB",
          borderRadius: 20, padding: "28px 48px",
        }}>
          {/* 20% discount on MP */}
          <SlideIn at={636} from="left">
            <Row gap={20} align="center" style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: F, fontSize: 42, color: C.dark }}>
                Discount on MP =
              </div>
              <div style={{
                background: C.mpBg, border: `2px solid ${C.mpBd}`, borderRadius: 12,
                padding: "8px 28px", fontFamily: F, fontSize: 42, fontWeight: 900, color: C.mp,
              }}>
                20%
              </div>
            </Row>
          </SlideIn>

          {/* SP = 80% of MP — arrives at 729f */}
          <Reveal at={729}>
            <Row gap={20} align="center" style={{ justifyContent: "center" }}>
              <DrawArrow at={729} color={C.sp} lineLen={64} />
              <Pop at={745}>
                <Formula color={C.sp} bg={C.spBg} border={C.spBd} style={{ fontSize: 44 }}>
                  SP = 80% of MP
                </Formula>
              </Pop>
            </Row>
          </Reveal>
        </div>

      </div>
    </Moment>

    {/* ── M4 (867-1128f): Calculate MP = 112 / 0.8 = 140 ──────────────── */}
    {/* "MP = 112/0.8 = 140" at 867f  |  "= 140" emphasis at 1032f         */}
    <Moment from={867} to={1128}>
      <div style={{ textAlign: "center" }}>

        <BounceIn at={867} style={{ display: "inline-block", marginBottom: 28 }}>
          <div style={{
            background: C.mpBg, border: `3px solid ${C.mpBd}`, borderRadius: 14,
            padding: "10px 32px", fontFamily: F, fontSize: 34, fontWeight: 900, color: C.mp,
          }}>
            STEP 3 — Solve for MP
          </div>
        </BounceIn>

        {/* Equation: SP = 80% × MP, so MP = SP / 0.8 */}
        <SlideIn at={867} from="left">
          <div style={{ fontFamily: F, fontSize: 44, color: C.dark, marginBottom: 20 }}>
            SP = 80% of MP&nbsp;&nbsp;→&nbsp;&nbsp;MP =
            <span style={{ color: C.sp }}> SP </span>÷ 0.8
          </div>
        </SlideIn>

        {/* The fraction MP = 112 / 0.8 */}
        <Reveal at={900}>
          <Row gap={20} align="center" style={{ justifyContent: "center", marginBottom: 20 }}>
            <div style={{ fontFamily: F, fontSize: 44, color: C.dark, fontWeight: 700 }}>MP = </div>
            <Frac num={<span style={{ color: C.sp }}>112</span>} den="0.8" size={44} color={C.dark} />
          </Row>
        </Reveal>

        {/* = 140 highlighted at 1032f */}
        <Reveal at={1032}>
          <Pop at={1032}>
            <div style={{
              background: C.mpBg, border: `3.5px solid ${C.mpBd}`, borderRadius: 20,
              padding: "18px 64px", display: "inline-block",
            }}>
              <BigLabel color={C.mp} size={88}>= 140</BigLabel>
            </div>
          </Pop>
        </Reveal>

      </div>
    </Moment>

    {/* ── M5 (1129-1440f): Result — MP = 140% of CP, 40% more ─────────── */}
    {/* "MP = 140% of CP" at 1129f  |  "MP is 40% more than CP" at 1263f   */}
    <Moment from={1129}>
      <div style={{ textAlign: "center" }}>

        {/* Main result */}
        <BounceIn at={1129}>
          <div style={{
            background: C.mpBg, border: `3px solid ${C.mpBd}`, borderRadius: 24,
            padding: "28px 72px", marginBottom: 28,
          }}>
            <Row gap={20} align="center" style={{ justifyContent: "center" }}>
              <BigLabel color={C.mp} size={72}>MP = 140% of CP</BigLabel>
              <AnimImg src={tickIcon} revealFrame={1160}
                style={{ position: "relative", width: 56, height: 56, top: 0, left: 0 }} />
            </Row>
          </div>
        </BounceIn>

        {/* Insight: 40% more — at 1263f */}
        <Reveal at={1263}>
          <Pop at={1263}>
            <CallOut
              color={C.dark} bg="#F0FDF4" border="#86EFAC"
              style={{ fontSize: 44, padding: "22px 52px" }}
            >
              MP is{" "}
              <strong style={{ color: C.profit }}>40% more</strong>{" "}
              than CP.
            </CallOut>
          </Pop>
        </Reveal>

        {/* Tiny reminder of the trick */}
        <Reveal at={1320} style={{ marginTop: 20 }}>
          <div style={{
            fontFamily: F, fontSize: 34, color: C.gray, lineHeight: 1.6,
          }}>
            CP not given? Assume CP = 100. Always works.
          </div>
        </Reveal>

      </div>
    </Moment>

  </SlideBase>
);
