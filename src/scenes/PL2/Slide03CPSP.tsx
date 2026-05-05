// Slide 3 - CP and SP (870f, 53s - 82s)
import React from "react";
import {
  SlideBase, Moment, Reveal, Pop, BounceIn, SlideIn, DrawArrow,
  C, F, Row,
} from "./shared";

export const Slide03CPSP: React.FC = () => (
  <SlideBase num={3} title="CP AND SP">

    {/* M1: Setup (0-90f) — "two numbers in every transaction" at 18f */}
    <Moment from={0} to={90}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={0} from="top" dist={40}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 72, color: C.dark, lineHeight: 1.1 }}>
            Every transaction has
          </div>
        </SlideIn>
        <Reveal at={18} style={{ marginTop: 18 }}>
          <div style={{
            fontFamily: F, fontWeight: 900, fontSize: 96, color: C.cp,
            letterSpacing: "-1px",
          }}>
            2 Prices
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M2: CP appears (94-235f) — "CP = Cost Price, buying price" at 94f */}
    <Moment from={94} to={235}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={94}>
          <div style={{
            background: C.cpBg, border: `3px solid ${C.cpBd}`,
            borderRadius: 22, padding: "28px 80px", display: "inline-block",
          }}>
            <div style={{ fontFamily: F, fontWeight: 900, fontSize: 96, color: C.cp, lineHeight: 1 }}>
              CP
            </div>
          </div>
        </BounceIn>
        <Reveal at={118} style={{ marginTop: 28 }}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 46, color: C.dark }}>
            Cost Price
          </div>
        </Reveal>
        <Reveal at={132} style={{ marginTop: 10 }}>
          <div style={{ fontFamily: F, fontSize: 38, color: C.gray }}>
            What you paid to buy
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M3: CP + SP together (240-405f) — "SP = Selling Price" at 177f, "difference" at 240f */}
    <Moment from={240} to={405}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Row gap={80} align="stretch" style={{ justifyContent: "center" }}>
          <SlideIn at={240} from="left" dist={60}>
            <div style={{
              background: C.cpBg, border: `3px solid ${C.cpBd}`,
              borderRadius: 22, padding: "28px 64px", textAlign: "center",
            }}>
              <div style={{ fontFamily: F, fontWeight: 900, fontSize: 84, color: C.cp, lineHeight: 1 }}>
                CP
              </div>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 36, color: C.dark, marginTop: 14 }}>
                Cost Price
              </div>
              <div style={{ fontFamily: F, fontSize: 30, color: C.gray, marginTop: 6 }}>
                Buying price
              </div>
            </div>
          </SlideIn>

          <div style={{ display: "flex", alignItems: "center" }}>
            <DrawArrow at={268} color={C.lightGray} lineLen={80} />
          </div>

          <SlideIn at={240} from="right" dist={60}>
            <div style={{
              background: C.spBg, border: `3px solid ${C.spBd}`,
              borderRadius: 22, padding: "28px 64px", textAlign: "center",
            }}>
              <div style={{ fontFamily: F, fontWeight: 900, fontSize: 84, color: C.sp, lineHeight: 1 }}>
                SP
              </div>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 36, color: C.dark, marginTop: 14 }}>
                Selling Price
              </div>
              <div style={{ fontFamily: F, fontSize: 30, color: C.gray, marginTop: 6 }}>
                Selling price
              </div>
            </div>
          </SlideIn>
        </Row>

        <Reveal at={320} style={{ marginTop: 40, textAlign: "center" }}>
          <div style={{ fontFamily: F, fontSize: 42, color: C.gray }}>
            Their difference = Profit or Loss
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M4: SP > CP → Profit (407-525f) — at 407f */}
    <Moment from={407} to={525}>
      <div style={{ textAlign: "center" }}>
        <Pop at={407}>
          <div style={{
            fontFamily: F, fontWeight: 800, fontSize: 64, color: C.dark,
            marginBottom: 28, letterSpacing: "-0.5px",
          }}>
            SP &gt; CP
          </div>
        </Pop>
        <BounceIn at={430}>
          <div style={{
            background: C.profitBg, border: `3px solid ${C.profitBd}`,
            borderRadius: 60, padding: "20px 72px",
            fontFamily: F, fontWeight: 900, fontSize: 68, color: C.profit,
            display: "inline-block",
          }}>
            PROFIT
          </div>
        </BounceIn>
      </div>
    </Moment>

    {/* M5: SP < CP → Loss (527-636f) — at 527f */}
    <Moment from={527} to={636}>
      <div style={{ textAlign: "center" }}>
        <Pop at={527}>
          <div style={{
            fontFamily: F, fontWeight: 800, fontSize: 64, color: C.dark,
            marginBottom: 28, letterSpacing: "-0.5px",
          }}>
            SP &lt; CP
          </div>
        </Pop>
        <BounceIn at={550}>
          <div style={{
            background: C.lossBg, border: `3px solid ${C.lossBd}`,
            borderRadius: 60, padding: "20px 72px",
            fontFamily: F, fontWeight: 900, fontSize: 68, color: C.loss,
            display: "inline-block",
          }}>
            LOSS
          </div>
        </BounceIn>
      </div>
    </Moment>

    {/* M6: SP = CP → No Profit No Loss (638-870f) — at 638f */}
    <Moment from={638}>
      <div style={{ textAlign: "center" }}>
        <Pop at={638}>
          <div style={{
            fontFamily: F, fontWeight: 800, fontSize: 64, color: C.dark,
            marginBottom: 28, letterSpacing: "-0.5px",
          }}>
            SP = CP
          </div>
        </Pop>
        <BounceIn at={660}>
          <div style={{
            background: "#F3F4F6", border: `3px solid #D1D5DB`,
            borderRadius: 60, padding: "20px 72px",
            fontFamily: F, fontWeight: 900, fontSize: 56, color: C.gray,
            display: "inline-block",
          }}>
            No Profit, No Loss
          </div>
        </BounceIn>
      </div>
    </Moment>

  </SlideBase>
);
