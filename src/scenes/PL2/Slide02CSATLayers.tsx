// Slide 2 - CSAT complexity intro (750f, 28s-53s)
// Audio beats (timestamp - 28s) * 30 = slide_frame:
//   8f  : "CSAT itna simple nahi"
//  86f  : "discount, profit," -> Discount badge, Profit badge
// 184f  : "MP, SP, False Weight" -> MP badge, SP badge, FW badge
// 271f  : "complicated lagta hai"
// 421f  : "wahi 400-500 concept"
// 524f  : "bas layers hain"
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SlideBase, Moment, Reveal, Pop, C, F, Row } from "./shared";

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
        fontFamily: F, fontWeight: 900, fontSize: 42, color,
        display: "inline-block",
      }}>
        {text}
      </div>
    </div>
  );
};

// Arrow that draws at `at`
const DrawArrow: React.FC<{ at: number; color?: string; size?: number }> = ({ at, color = "#9CA3AF", size = 72 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const prog = spring({ frame: Math.max(0, frame - at), fps, config: { damping: 16, stiffness: 110 }, from: 0, to: 1 });
  const headOpacity = interpolate(prog, [0.8, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: size * prog, height: 4, background: color, borderRadius: 2 }} />
      <div style={{
        opacity: headOpacity, width: 0, height: 0,
        borderTop: "9px solid transparent", borderBottom: "9px solid transparent",
        borderLeft: `16px solid ${color}`,
      }} />
    </div>
  );
};

export const Slide02CSATLayers: React.FC = () => (
  <SlideBase num={2} title="WHAT CSAT ASKS">

    {/* M1: Topic badges appear one by one on exact audio beats  -  0 to 418f */}
    <Moment from={0} to={418} align="flex-start" justify="flex-start">
      <div style={{ paddingTop: 8 }}>
        <Reveal at={0}>
          <div style={{ fontFamily: F, fontSize: 40, color: C.gray, marginBottom: 32, fontWeight: 700 }}>
            CSAT mixes all of these:
          </div>
        </Reveal>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
          {/* Each badge fires on the exact frame the audio mentions that word */}
          <WordBadge text="Discount"     at={86}  color={C.mp}     bg={C.mpBg}     bd={C.mpBd}     />
          <WordBadge text="Profit %"     at={116} color={C.profit} bg={C.profitBg} bd={C.profitBd} />
          <WordBadge text="Marked Price" at={184} color={C.mp}     bg={C.mpBg}     bd={C.mpBd}     />
          <WordBadge text="Selling Price"at={200} color={C.sp}     bg={C.spBg}     bd={C.spBd}     />
          <WordBadge text="False Weight" at={224} color={C.loss}   bg={C.lossBg}   bd={C.lossBd}   />
        </div>
        <Reveal at={271} style={{ marginTop: 32 }}>
          <div style={{
            background: "#F9FAFB", border: "2px dashed #D1D5DB", borderRadius: 16,
            padding: "16px 36px",
            fontFamily: F, fontSize: 36, color: C.gray,
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
            background: C.cpBg, border: `3px solid ${C.cpBd}`, borderRadius: 24,
            padding: "36px 64px",
          }}>
            <div style={{ fontFamily: F, fontSize: 38, color: C.gray, marginBottom: 18, fontWeight: 600 }}>
              But inside, it&apos;s always the same:
            </div>
            <Row gap={32} align="center" style={{ justifyContent: "center" }}>
              <div style={{ fontFamily: F, fontSize: 80, fontWeight: 900, color: C.cp }}>400</div>
              <DrawArrow at={440} color={C.lightGray} size={56} />
              <div style={{ fontFamily: F, fontSize: 80, fontWeight: 900, color: C.sp }}>500</div>
            </Row>
            <Reveal at={520}>
              <div style={{ fontFamily: F, fontSize: 34, color: C.gray, marginTop: 18 }}>
                Just layers on top.
              </div>
            </Reveal>
          </div>
        </Pop>
      </div>
    </Moment>

  </SlideBase>
);
