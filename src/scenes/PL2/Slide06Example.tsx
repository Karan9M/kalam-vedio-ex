// Slide 6 - Cycle example forward + reverse (750f, 175.67s - 200.67s)
import React from "react";
import {
  SlideBase, Moment, Reveal, Pop, BounceIn, SlideIn, DrawArrow,
  C, F, Row, Frac, BigLabel, CallOut,
} from "./shared";

export const Slide06Example: React.FC = () => (
  <SlideBase num={6} title="DIRECT CALCULATION">

    {/* M1: Title moment (0-28f) */}
    <Moment from={0} to={28}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={0} from="top" dist={32}>
          <BigLabel color={C.dark} size={72}>Direct Calculation</BigLabel>
        </SlideIn>
        <Reveal at={12} style={{ marginTop: 20 }}>
          <div style={{ fontFamily: F, fontSize: 44, color: C.gray }}>
            Given CP and SP → find Profit %
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M2: Build the example step by step (30-608f)
        CP = 3000 at 30f, SP = 3600 at 138f, Profit at 316f, Profit% at 497f */}
    <Moment from={30} to={608}>
      <div style={{ width: "100%", maxWidth: 860 }}>
        <div style={{
          background: "#F9FAFB", border: "2px solid #E5E7EB",
          borderRadius: 20, padding: "32px 56px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* CP = 3000 — at 30f */}
            <SlideIn at={30} from="left" dist={40}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{
                  background: C.cpBg, border: `2px solid ${C.cpBd}`,
                  borderRadius: 14, padding: "12px 32px",
                  fontFamily: F, fontWeight: 800, fontSize: 44, color: C.cp,
                }}>
                  CP
                </div>
                <div style={{ fontFamily: F, fontSize: 42, color: C.gray }}>
                  Cycle bought for
                </div>
                <BigLabel color={C.cp} size={58}>Rs. 3,000</BigLabel>
              </Row>
            </SlideIn>

            {/* Arrow */}
            <Reveal at={90} style={{ display: "flex", justifyContent: "center" }}>
              <DrawArrow at={90} color={C.lightGray} lineLen={80} vertical />
            </Reveal>

            {/* SP = 3600 — at 138f */}
            <Reveal at={138}>
              <SlideIn at={138} from="right" dist={40}>
                <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                  <div style={{
                    background: C.spBg, border: `2px solid ${C.spBd}`,
                    borderRadius: 14, padding: "12px 32px",
                    fontFamily: F, fontWeight: 800, fontSize: 44, color: C.sp,
                  }}>
                    SP
                  </div>
                  <div style={{ fontFamily: F, fontSize: 42, color: C.gray }}>
                    Cycle sold for
                  </div>
                  <BigLabel color={C.sp} size={58}>Rs. 3,600</BigLabel>
                </Row>
              </SlideIn>
            </Reveal>

            {/* Profit = 600 — BounceIn at 316f */}
            <Reveal at={205}>
              <div style={{ borderTop: "2px solid #E5E7EB", paddingTop: 20, marginTop: 4 }}>
                <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                  <div style={{ fontFamily: F, fontSize: 42, color: C.dark, fontWeight: 600 }}>
                    Profit = 3600 − 3000 =
                  </div>
                  <BounceIn at={316}>
                    <div style={{
                      background: C.profitBg, border: `3px solid ${C.profitBd}`,
                      borderRadius: 16, padding: "12px 40px",
                    }}>
                      <BigLabel color={C.profit} size={64}>Rs. 600</BigLabel>
                    </div>
                  </BounceIn>
                </Row>
              </div>
            </Reveal>

            {/* Profit % = 20% — BounceIn at 497f */}
            <Reveal at={380}>
              <Row gap={20} align="center" style={{ justifyContent: "space-between" }}>
                <Row gap={12} align="center">
                  <div style={{ fontFamily: F, fontSize: 42, color: C.dark, fontWeight: 600 }}>
                    Profit% =
                  </div>
                  <Frac num="600" den="3000" size={40} color={C.profit} />
                  <span style={{ fontFamily: F, fontSize: 42, color: C.dark }}>× 100</span>
                </Row>
                <BounceIn at={497}>
                  <div style={{
                    background: C.profitBg, border: `3px solid ${C.profitBd}`,
                    borderRadius: 16, padding: "12px 40px",
                  }}>
                    <BigLabel color={C.profit} size={64}>= 20%</BigLabel>
                  </div>
                </BounceIn>
              </Row>
            </Reveal>

          </div>
        </div>
      </div>
    </Moment>

    {/* M3: CSAT asks reverse (611-750f) — "Simple. Now reverse it." at 611f, "CSAT asks reverse" at 725f */}
    <Moment from={611}>
      <div style={{ textAlign: "center" }}>
        <Pop at={611}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 56, color: C.dark, marginBottom: 32 }}>
            Simple. Now reverse it.
          </div>
        </Pop>
        <BounceIn at={725}>
          <CallOut
            color={C.loss}
            bg={C.lossBg}
            border={C.lossBd}
            style={{ fontSize: 48, padding: "28px 56px" }}
          >
            CSAT rarely asks forward.
            <br />
            It asks REVERSE.
          </CallOut>
        </BounceIn>
      </div>
    </Moment>

  </SlideBase>
);
