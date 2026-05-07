// Slide 2 - CSAT complexity intro (750f, 28s-53s)
// Audio beats (timestamp - 28s) * 30 = slide_frame:
//   8f  : "CSAT itna simple nahi"
//  86f  : "discount, profit," -> Discount badge, Profit badge
// 184f  : "MP, SP, False Weight" -> MP badge, SP badge, FW badge
// 271f  : "complicated lagta hai"
// 421f  : "wahi 400-500 concept"
// 524f  : "bas layers hain"
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SlideBase, Moment, Reveal, Pop, Pulse, StampIn, AnimImg, C, F, Row } from "./shared";
import arrowRight from "../../../Graphics/arrow-right-facing.png";

// Badge with pop spring  -  each word appears exactly on its audio beat
const WordBadge: React.FC<{
  text: string; color: string; bg: string; bd: string; at: number;
}> = ({ text, color, bg, bd, at }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - at);
  const scale = spring({ frame: elapsed, fps, config: { damping: 8, stiffness: 280, mass: 0.8 }, from: 0, to: 1 });
  const opacity = interpolate(frame, [at, at + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ opacity, transform: `scale(${scale})` }}>
      <div style={{
        background: bg, border: `3px solid ${bd}`, borderRadius: 18,
        padding: "18px 38px",
        fontFamily: F, fontWeight: 700, fontSize: 42, color,
        display: "inline-block",
      }}>
        {text}
      </div>
    </div>
  );
};

export const Slide02CSATLayers: React.FC = () => (
  <SlideBase num={2} title="WHAT CSAT ASKS">

    {/* M1: Topic badges appear one by one on exact audio beats  -  0 to 418f */}
    <Moment from={0} to={418} align="flex-start" justify="flex-start">
      <div style={{ paddingTop: 16, width: "100%" }}>
        <Reveal at={0}>
          <div style={{ fontFamily: F, fontSize: 54, color: C.gray, marginBottom: 56, fontWeight: 700 }}>
            CSAT mixes all of these:
          </div>
        </Reveal>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>
          <WordBadge text="Discount"     at={86}  color={C.mp}     bg={C.mpBg}     bd={C.mpBd}     />
          <WordBadge text="Profit %"     at={116} color={C.profit} bg={C.profitBg} bd={C.profitBd} />
          <WordBadge text="Marked Price" at={184} color={C.mp}     bg={C.mpBg}     bd={C.mpBd}     />
          <WordBadge text="Selling Price"at={200} color={C.sp}     bg={C.spBg}     bd={C.spBd}     />
          <Pulse at={280}><WordBadge text="False Weight" at={224} color={C.loss} bg={C.lossBg} bd={C.lossBd} /></Pulse>
        </div>
        <Reveal at={271} style={{ marginTop: 80 }}>
          <div style={{
            background: "#FFFFFF", border: "2px dashed #CCCCCC", borderRadius: 20,
            padding: "28px 52px",
            fontFamily: F, fontSize: 50, color: C.gray,
          }}>
            All combined in one question.
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M2: Inside it&apos;s the same concept  -  421 to 750f */}
    <Moment from={421}>
      <div style={{ textAlign: "center" }}>
        <Pop at={421}>
          <div style={{
            background: C.cpBg, border: `3px solid ${C.cpBd}`, borderRadius: 28,
            padding: "52px 96px",
          }}>
            <div style={{ fontFamily: F, fontSize: 50, color: C.gray, marginBottom: 36, fontWeight: 600 }}>
              But inside, it&apos;s always the same:
            </div>
            <Row gap={48} align="center" style={{ justifyContent: "center" }}>
              <div style={{ fontFamily: F, fontSize: 110, fontWeight: 700, color: C.cp }}>400</div>
              <AnimImg src={arrowRight} revealFrame={460}
                style={{ position: "relative" as const, width: 130, height: 64, top: 0, left: 0 }} />
              <div style={{ fontFamily: F, fontSize: 110, fontWeight: 700, color: C.sp }}>500</div>
            </Row>
            <StampIn at={520}>
              <div style={{ fontFamily: F, fontSize: 48, color: C.gray, marginTop: 36 }}>
                Just layers on top.
              </div>
            </StampIn>
          </div>
        </Pop>
      </div>
    </Moment>

  </SlideBase>
);
