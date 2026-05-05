// Slide 5 - Formulas and Profit Percent (2000f, 109s - 175.67s)
import React from "react";
import {
  SlideBase, Moment, Reveal, Pop, BounceIn, SlideIn,
  C, F, Row, Frac, Formula, BigLabel, CallOut,
} from "./shared";
import badgeImportant from "../../../Graphics/badge-important.png";
import { AnimImg } from "./shared";

export const Slide05Formulas: React.FC = () => (
  <SlideBase num={5} title="FORMULAS">

    {/* M1: Profit = SP - CP (0-168f) — "formulas" at 15f, "Profit = SP - CP" at 171f */}
    <Moment from={0} to={168}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={0} from="top" dist={32}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 56, color: C.gray, marginBottom: 32 }}>
            Key Formulas
          </div>
        </SlideIn>
        <BounceIn at={15}>
          <Formula color={C.profit} bg={C.profitBg} border={C.profitBd}>
            Profit = SP − CP
          </Formula>
        </BounceIn>
      </div>
    </Moment>

    {/* M2: Loss = CP - SP (168-418f) — "Loss = CP - SP" at 421f */}
    <Moment from={168} to={418}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={168} from="left" dist={40}>
          <Formula color={C.profit} bg={C.profitBg} border={C.profitBd}>
            Profit = SP − CP
          </Formula>
        </SlideIn>
        <BounceIn at={215} style={{ marginTop: 36, display: "block" }}>
          <Formula color={C.loss} bg={C.lossBg} border={C.lossBd}>
            Loss = CP − SP
          </Formula>
        </BounceIn>
      </div>
    </Moment>

    {/* M3: Both formulas side by side (418-648f) — transition at 421f */}
    <Moment from={418} to={648}>
      <Row gap={60} align="center" style={{ justifyContent: "center" }}>
        <SlideIn at={418} from="left" dist={50}>
          <Formula color={C.profit} bg={C.profitBg} border={C.profitBd} style={{ fontSize: 44 }}>
            Profit = SP − CP
          </Formula>
        </SlideIn>
        <SlideIn at={418} from="right" dist={50}>
          <Formula color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 44 }}>
            Loss = CP − SP
          </Formula>
        </SlideIn>
      </Row>
    </Moment>

    {/* M4: "Profit %" big title (651-755f) — at 651f */}
    <Moment from={651} to={755}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={651}>
          <BigLabel color={C.mp} size={96}>Profit %</BigLabel>
        </BounceIn>
      </div>
    </Moment>

    {/* M5: Percent of what? Build-up (757-1140f) */}
    <Moment from={757} to={1140}>
      <div style={{ textAlign: "center" }}>
        {/* "Percent of what?" at 757f */}
        <Pop at={757}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 64, color: C.dark, marginBottom: 36 }}>
            Percent of what?
          </div>
        </Pop>

        {/* "Bought 400, Profit 100" at 814f */}
        <Reveal at={814} style={{ marginBottom: 28 }}>
          <div style={{
            background: "#F9FAFB", border: "2px solid #E5E7EB",
            borderRadius: 16, padding: "18px 48px", display: "inline-block",
          }}>
            <div style={{ fontFamily: F, fontSize: 42, color: C.dark }}>
              Bought for{" "}
              <span style={{ fontWeight: 900, color: C.cp }}>400</span>
              ,  Profit ={" "}
              <span style={{ fontWeight: 900, color: C.profit }}>100</span>
            </div>
          </div>
        </Reveal>

        {/* "Investment was 400" at 1084f */}
        <Reveal at={1084} style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: F, fontSize: 42, color: C.dark }}>
            Investment was{" "}
            <span style={{ fontWeight: 900, color: C.cp }}>400</span>
            {" "}→ that's the base
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M5b: Profit % calculation builds at 1144f, × 100 at 1204f, = 25% at 1278f */}
    <Moment from={1140} to={1398}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginBottom: 32 }}>
          Bought for{" "}
          <span style={{ fontWeight: 900, color: C.cp }}>400</span>
          , Profit ={" "}
          <span style={{ fontWeight: 900, color: C.profit }}>100</span>
        </div>

        <Pop at={1144}>
          <Row gap={16} align="center" style={{ justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ fontFamily: F, fontSize: 52, fontWeight: 800, color: C.dark }}>
              Profit% =
            </div>
            <Frac num="100" den="400" size={48} color={C.profit} />
            <Reveal at={1204} style={{ display: "inline-flex", alignItems: "center" }}>
              <span style={{ fontFamily: F, fontSize: 52, color: C.dark }}>× 100</span>
            </Reveal>
            <Reveal at={1278} style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: F, fontSize: 52, color: C.dark }}>=</span>
              <BounceIn at={1278}>
                <BigLabel color={C.profit} size={80}>25%</BigLabel>
              </BounceIn>
            </Reveal>
          </Row>
        </Pop>
      </div>
    </Moment>

    {/* M6: CP is the base. ALWAYS. (1278-1550f) — at 1402f */}
    <Moment from={1398} to={1550}>
      <div style={{ textAlign: "center" }}>
        <Row gap={20} align="center" style={{ justifyContent: "center", marginBottom: 28 }}>
          <AnimImg
            src={badgeImportant}
            revealFrame={1398}
            style={{ position: "relative" as const, width: 220, height: 54, top: 0, left: 0 }}
          />
        </Row>
        <BounceIn at={1402}>
          <BigLabel color={C.cp} size={80} style={{ textAlign: "center" }}>
            CP is the base. ALWAYS.
          </BigLabel>
        </BounceIn>
      </div>
    </Moment>

    {/* M7: Always on CP, never SP (1551-1778f) — at 1551f */}
    <Moment from={1550} to={1778}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={1550} from="left" dist={40}>
          <CallOut
            color={C.cp}
            bg={C.cpBg}
            border={C.cpBd}
            style={{ fontSize: 46, padding: "28px 56px", marginBottom: 28 }}
          >
            Profit % is ALWAYS on CP
          </CallOut>
        </SlideIn>
        <Reveal at={1620} style={{ marginTop: 24 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 32,
            justifyContent: "center",
          }}>
            <div style={{
              background: C.cpBg, border: `3px solid ${C.cpBd}`,
              borderRadius: 16, padding: "16px 44px",
              fontFamily: F, fontWeight: 900, fontSize: 44, color: C.cp,
            }}>
              CP ← Base
            </div>
            <div style={{ fontFamily: F, fontSize: 44, color: C.gray, fontWeight: 700 }}>
              NOT
            </div>
            <div style={{
              background: "#F9FAFB", border: `3px solid #D1D5DB`,
              borderRadius: 16, padding: "16px 44px",
              fontFamily: F, fontWeight: 900, fontSize: 44, color: C.gray,
              textDecoration: "line-through",
            }}>
              SP
            </div>
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M8: CSAT trap - Using SP as base = WRONG (1781-2000f) — at 1721f (CSAT trap), 1781f (Wrong) */}
    <Moment from={1778}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={1778} from="top" dist={32}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 52, color: C.dark, marginBottom: 24 }}>
            CSAT Trap
          </div>
        </SlideIn>
        <BounceIn at={1781}>
          <div style={{
            background: C.lossBg, border: `3px solid ${C.lossBd}`,
            borderRadius: 20, padding: "28px 56px", display: "inline-block",
          }}>
            <div style={{
              fontFamily: F, fontWeight: 900, fontSize: 28, color: C.loss,
              letterSpacing: "2px", marginBottom: 14,
            }}>
              WRONG
            </div>
            <div style={{ fontFamily: F, fontWeight: 800, fontSize: 50, color: C.dark }}>
              Using SP as base → Wrong answer
            </div>
          </div>
        </BounceIn>
        <Reveal at={1860} style={{ marginTop: 28 }}>
          <div style={{ fontFamily: F, fontSize: 40, color: C.gray }}>
            This is the most common CSAT trap in Profit & Loss
          </div>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
