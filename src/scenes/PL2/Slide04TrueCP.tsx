// Slide 4 - True CP includes overheads (810f, 82s - 109s)
import React from "react";
import {
  SlideBase, Moment, Reveal, BounceIn, SlideIn, CountUp,
  C, F, Row, BigLabel, CallOut,
} from "./shared";
import badgeImportant from "../../../Graphics/badge-important.png";
import { AnimImg } from "./shared";

export const Slide04TrueCP: React.FC = () => (
  <SlideBase num={4} title="WHAT IS TRUE CP?">

    {/* M1: CP ≠ just buying price (0-120f) — "textbook doesn't say this" at 14f */}
    <Moment from={0} to={120}>
      <div style={{ textAlign: "center" }}>
        <SlideIn at={0} from="top" dist={36}>
          <div style={{
            fontFamily: F, fontWeight: 700, fontSize: 64, color: C.gray,
            marginBottom: 28,
          }}>
            Textbook says:
          </div>
        </SlideIn>
        <Reveal at={14}>
          <div style={{
            background: C.cpBg, border: `3px solid ${C.cpBd}`,
            borderRadius: 20, padding: "32px 80px", display: "inline-block",
          }}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 76, color: C.cp }}>
              CP = Buying Price
            </div>
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M2: "CP is not just buying price" (120-200f) — at 122f */}
    <Moment from={120} to={200}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={122}>
          <div style={{
            background: C.lossBg, border: `3px solid ${C.lossBd}`,
            borderRadius: 24, padding: "40px 88px", display: "inline-block",
          }}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 76, color: C.loss }}>
              CP ≠ just buying price
            </div>
          </div>
        </BounceIn>
        <Reveal at={148} style={{ marginTop: 36 }}>
          <div style={{ fontFamily: F, fontSize: 52, color: C.gray }}>
            All extra costs count too
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M3: Build-up calculation — TV 10,000 at 204f, Transport at 314f, Repair at 382f, total at 472f */}
    <Moment from={204} to={578}>
      <div style={{ width: "100%", maxWidth: 1160 }}>
        <div style={{
          background: "#FFFFFF", border: "2px solid #CCCCCC",
          borderRadius: 24, padding: "40px 64px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

            {/* TV Price — appears at 204f */}
            <SlideIn at={204} from="left" dist={40}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 52, color: C.dark, fontWeight: 600, whiteSpace: "nowrap" }}>
                  Shopkeeper buys TV
                </div>
                <BigLabel color={C.cp} size={68}>Rs. 10,000</BigLabel>
              </Row>
            </SlideIn>

            {/* Transport — appears at 314f */}
            <Reveal at={314}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 52, color: C.dark }}>
                  + Transport
                </div>
                <BigLabel color={C.mp} size={68}>Rs. 500</BigLabel>
              </Row>
            </Reveal>

            {/* Repair — appears at 382f */}
            <Reveal at={382}>
              <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                <div style={{ fontFamily: F, fontSize: 52, color: C.dark }}>
                  + Repair
                </div>
                <BigLabel color={C.mp} size={68}>Rs. 200</BigLabel>
              </Row>
            </Reveal>

            {/* Total CP — appears at 472f */}
            <Reveal at={472}>
              <div style={{ borderTop: "2px solid #CCCCCC", paddingTop: 24, marginTop: 4 }}>
                <Row gap={24} align="center" style={{ justifyContent: "space-between" }}>
                  <div style={{ fontFamily: F, fontSize: 56, fontWeight: 700, color: C.dark }}>
                    Actual CP
                  </div>
                  <BounceIn at={472}>
                    <div style={{ fontFamily: F, fontWeight: 700, fontSize: 88, color: C.cp, lineHeight: 1 }}>
                      Rs. <CountUp from={10000} to={10700} at={472} color={C.cp} size={88} />
                    </div>
                  </BounceIn>
                </Row>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </Moment>

    {/* M4: Key rule — "add all overhead costs to CP" at 701f */}
    <Moment from={581}>
      <div style={{ textAlign: "center" }}>
        <Row gap={20} align="center" style={{ justifyContent: "center", marginBottom: 36 }}>
          <AnimImg
            src={badgeImportant}
            revealFrame={581}
            style={{ position: "relative" as const, width: 280, height: 68, top: 0, left: 0 }}
          />
        </Row>
        <BounceIn at={601}>
          <CallOut
            color={C.cp}
            bg={C.cpBg}
            border={C.cpBd}
            style={{ fontSize: 58, padding: "36px 72px", textAlign: "center" }}
          >
            Add ALL overhead costs to CP
          </CallOut>
        </BounceIn>
        <Reveal at={701} style={{ marginTop: 40, textAlign: "center" }}>
          <div style={{
            background: "#FFFFFF", border: "2px solid #CCCCCC",
            borderRadius: 18, padding: "24px 52px", display: "inline-block",
          }}>
            <div style={{ fontFamily: F, fontSize: 48, color: C.dark, lineHeight: 1.6 }}>
              True CP = Purchase Price + Transport + Repair + ...
            </div>
          </div>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
