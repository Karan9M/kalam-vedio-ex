// Slide 7 - SP Formula (2070f, starts at 200.67s)
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SlideBase, Moment, Reveal, BounceIn, SlideIn, C, F, Row, Frac, Formula, CallOut, CountUp, Pulse, StampIn } from "./shared";

// Stamps a single formula element in from scale 0 — invisible before its frame
const WordPop: React.FC<{ at: number; color?: string; children: React.ReactNode }> = ({ at, color, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elapsed = Math.max(0, frame - at);
  const scale = spring({ frame: elapsed, fps, config: { damping: 12, stiffness: 400, mass: 0.6 }, from: 0, to: 1 });
  return (
    <span style={{ display: "inline-block", transform: `scale(${scale})`, opacity: frame >= at ? 1 : 0, transformOrigin: "center bottom", ...(color ? { color } : {}) }}>
      {children}
    </span>
  );
};

const NumberPop: React.FC<{ at: number; color: string; children: React.ReactNode }> = ({ at, color, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rawScale = spring({ frame: Math.max(0, frame - at), fps, config: { damping: 18, stiffness: 80, mass: 1.0 }, from: 0.2, to: 1 });
  const scale = frame < at ? 1 : rawScale;
  return (
    <span style={{ display: "inline-block", transform: `scale(${scale})`, fontWeight: 700, color, transformOrigin: "center bottom" }}>
      {children}
    </span>
  );
};

// "120" and "100" physically leave the boxes and slide into the formula's slots.
// Row decoration fades out at 651f. Numbers stay visible and fly to formula positions.
// Formula surrounding text ("SP = CP × " and " / ") appears AFTER numbers land.
const FormulaTransition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Row (boxes, labels, +20, →) fades out at 651f
  const rowOp = interpolate(frame, [651, 668], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const rowTy = interpolate(frame, [651, 668], [0, -20], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Flying numbers become visible at 651f (handoff from row)
  const flyOp = interpolate(frame, [651, 658], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // "120" springs from SP box (right side, +468px) to formula slot (0)
  const p120 = spring({ frame: Math.max(0, frame - 651), fps, config: { damping: 22, stiffness: 100, mass: 0.8 }, from: 0, to: 1 });
  const num120X = interpolate(p120, [0, 1], [468, 0]);
  const num120Y = interpolate(p120, [0, 1], [190, 0]);

  // "100" springs from CP box (left side, -819px) to formula slot (0), staggered 8f
  const p100 = spring({ frame: Math.max(0, frame - 659), fps, config: { damping: 22, stiffness: 100, mass: 0.8 }, from: 0, to: 1 });
  const num100X = interpolate(p100, [0, 1], [-819, 0]);
  const num100Y = interpolate(p100, [0, 1], [190, 0]);

  // Surrounding formula text ("SP = CP × " and " / ") appears after numbers land ~692f
  const prefOp = interpolate(frame, [692, 706], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const prefTy = interpolate(frame, [692, 706], [8, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ textAlign: "center", width: "100%", display: "grid", alignItems: "start" }}>

      {/* Row layer — full boxes, fades out at 651f */}
      <div style={{ gridRow: 1, gridColumn: 1, opacity: rowOp, transform: `translateY(${rowTy}px)` }}>
        <SlideIn at={486} from="left">
          <div style={{ fontFamily: F, fontSize: 64, color: C.dark, marginBottom: 40 }}>
            20% profit means:
          </div>
        </SlideIn>
        <Row gap={48} align="center" style={{ justifyContent: "center" }}>
          <BounceIn at={546}>
            <div style={{ background: C.cpBg, border: `3px solid ${C.cpBd}`, borderRadius: 18, padding: "32px 64px", fontFamily: F, fontWeight: 700, fontSize: 80, color: C.cp }}>100 CP</div>
          </BounceIn>
          <BounceIn at={566}>
            <div style={{ fontFamily: F, fontSize: 72, color: C.profit, fontWeight: 700 }}>+ 20</div>
          </BounceIn>
          <BounceIn at={586}>
            <div style={{ fontFamily: F, fontSize: 72, color: C.gray, fontWeight: 700 }}>→</div>
          </BounceIn>
          <BounceIn at={606}>
            <div style={{ background: C.spBg, border: `3px solid ${C.spBd}`, borderRadius: 18, padding: "32px 64px", fontFamily: F, fontWeight: 700, fontSize: 80, color: C.sp }}>120 SP</div>
          </BounceIn>
        </Row>
      </div>

      {/* Formula layer — no parent opacity; each element controls itself */}
      <div style={{ gridRow: 1, gridColumn: 1, textAlign: "center" }}>

        {/* Formula line: surrounding text reveals AFTER numbers land */}
        <div style={{ fontFamily: F, fontSize: 68, color: C.dark, fontWeight: 700, marginBottom: 32 }}>
          <span style={{ display: "inline-block", opacity: prefOp, transform: `translateY(${prefTy}px)` }}>
            SP = CP ×{" "}
          </span>
          {/* "120" flies from SP box → formula slot */}
          <span style={{ display: "inline-block", opacity: flyOp, color: C.sp, transform: `translate(${num120X}px, ${num120Y}px)` }}>
            120
          </span>
          <span style={{ display: "inline-block", opacity: prefOp, transform: `translateY(${prefTy}px)` }}>
            {" "}/ {" "}
          </span>
          {/* "100" flies from CP box → formula slot */}
          <span style={{ display: "inline-block", opacity: flyOp, transform: `translate(${num100X}px, ${num100Y}px)` }}>
            100
          </span>
        </div>

        <Reveal at={746}>
          <div style={{ background: "#FFFFFF", border: "2px solid #CCCCCC", borderRadius: 20, padding: "36px 72px", marginTop: 16 }}>
            <Row gap={24} align="center" style={{ justifyContent: "center" }}>
              <div style={{ fontFamily: F, fontSize: 72, fontWeight: 700, color: C.dark }}>
                <NumberPop at={916} color={C.dark}>3000</NumberPop> ×
              </div>
              <Frac
                num={<NumberPop at={930} color={C.sp}>120</NumberPop>}
                den={<NumberPop at={944} color={C.sp}>100</NumberPop>}
                size={64} color={C.sp}
              />
              <div style={{ fontFamily: F, fontSize: 72, fontWeight: 700, color: C.dark }}>=</div>
              <Pulse at={800}>
                <CountUp from={3000} to={3600} at={800} color={C.profit} size={96} />
              </Pulse>
            </Row>
          </div>
        </Reveal>

        <Reveal at={1091}>
          <div style={{ background: C.profitBg, border: `2px solid ${C.profitBd}`, borderRadius: 16, padding: "20px 56px", marginTop: 28, fontFamily: F, fontSize: 56, color: C.profit }}>
            SP = Rs. 3600 ✓
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export const Slide07SPFormula: React.FC = () => (
  <SlideBase num={7} title="FINDING SP">

    {/* M1 (0-115f): CSAT asks REVERSE */}
    <Moment from={0} to={115}>
      <div style={{ textAlign: "center" }}>
        <BounceIn at={0}>
          <div style={{ fontFamily: F, fontSize: 60, color: C.gray, marginBottom: 28 }}>
            CSAT rarely asks forward calculation
          </div>
        </BounceIn>
        <BounceIn at={28}>
          <CallOut color={C.sp} bg={C.spBg} border={C.spBd} style={{ fontSize: 80, padding: "44px 96px" }}>
            CSAT asks REVERSE
          </CallOut>
        </BounceIn>
      </div>
    </Moment>

    {/* M2 (177-330f): Question setup: SP = ? when CP=3000, Profit=20% */}
    <Moment from={177} to={333}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: 1400 }}>
        <SlideIn at={177} from="top">
          <div style={{ fontFamily: F, fontSize: 56, color: C.gray, marginBottom: 36 }}>
            Find SP when:
          </div>
          <Row gap={32} align="center" style={{ justifyContent: "center" }}>
            <div style={{
              background: C.cpBg, border: `3px solid ${C.cpBd}`,
              borderRadius: 18, padding: "22px 52px",
              fontFamily: F, fontWeight: 700, fontSize: 72, color: C.cp,
              whiteSpace: "nowrap",
            }}>CP = <NumberPop at={225} color={C.cp}>3000</NumberPop></div>
            <div style={{
              background: C.profitBg, border: `3px solid ${C.profitBd}`,
              borderRadius: 18, padding: "22px 52px",
              fontFamily: F, fontWeight: 700, fontSize: 72, color: C.profit,
              whiteSpace: "nowrap",
            }}>Profit = <NumberPop at={265} color={C.profit}>20%</NumberPop></div>
            <div style={{
              background: C.spBg, border: `3px dashed ${C.spBd}`,
              borderRadius: 18, padding: "22px 52px",
              fontFamily: F, fontWeight: 700, fontSize: 72, color: C.sp,
              whiteSpace: "nowrap",
            }}>SP = ?</div>
          </Row>
        </SlideIn>
      </div>
    </Moment>

    {/* M3+M4 (486-1265f): boxes transition into formula — numbers carry across */}
    <Moment from={486} to={1265}>
      <FormulaTransition />
    </Moment>

    {/* M5 (1265-1595f): Formula card: SP = CP × (100 + P) / 100 */}
    <Moment from={1265} to={1595}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={1265}>
          <div style={{ fontFamily: F, fontSize: 56, color: C.gray, marginBottom: 32 }}>
            Pattern: Profit% = P
          </div>
        </Reveal>
        <Formula color={C.profit} bg={C.profitBg} border={C.profitBd} style={{ fontSize: 72 }}>
          <WordPop at={1265} color={C.dark}>SP</WordPop>{" "}
          <WordPop at={1275} color={C.dark}>=</WordPop>{" "}
          <WordPop at={1285} color={C.cp}>CP</WordPop>{" "}
          <WordPop at={1295} color={C.dark}>×</WordPop>
          <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", margin: "0 14px" }}>
            <span style={{ fontSize: 64, lineHeight: 1.1 }}>
              <WordPop at={1305} color={C.dark}>(</WordPop>
              <WordPop at={1315} color={C.profit}>100</WordPop>
              <WordPop at={1325} color={C.dark}> +</WordPop>{" "}
              <WordPop at={1335} color={C.dark}>P)</WordPop>
            </span>
            <WordPop at={1345}>
              <span style={{ display: "block", height: 4, background: C.profit, minWidth: 80, margin: "5px 0" }} />
            </WordPop>
            <span style={{ fontSize: 64, lineHeight: 1.1 }}>
              <WordPop at={1355} color={C.profit}>100</WordPop>
            </span>
          </span>
        </Formula>
        <Reveal at={1468}>
          <div style={{ fontFamily: F, fontSize: 48, color: C.gray, marginTop: 24 }}>
            Divide by 100 at the end
          </div>
        </Reveal>
      </div>
    </Moment>

    {/* M6 (1595-1869f): Formula card: SP = CP × (100 - L) / 100 */}
    <Moment from={1595} to={1869}>
      <div style={{ textAlign: "center" }}>
        <Reveal at={1595}>
          <div style={{ fontFamily: F, fontSize: 56, color: C.gray, marginBottom: 32 }}>
            Pattern: Loss% = L
          </div>
        </Reveal>
        <Formula color={C.loss} bg={C.lossBg} border={C.lossBd} style={{ fontSize: 72 }}>
          <WordPop at={1595} color={C.dark}>SP</WordPop>{" "}
          <WordPop at={1605} color={C.dark}>=</WordPop>{" "}
          <WordPop at={1615} color={C.cp}>CP</WordPop>{" "}
          <WordPop at={1625} color={C.dark}>×</WordPop>
          <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", margin: "0 14px" }}>
            <span style={{ fontSize: 64, lineHeight: 1.1 }}>
              <WordPop at={1635} color={C.dark}>(</WordPop>
              <WordPop at={1645} color={C.loss}>100</WordPop>
              <WordPop at={1655} color={C.dark}> -</WordPop>{" "}
              <WordPop at={1665} color={C.dark}>L)</WordPop>
            </span>
            <WordPop at={1675}>
              <span style={{ display: "block", height: 4, background: C.loss, minWidth: 80, margin: "5px 0" }} />
            </WordPop>
            <span style={{ fontSize: 64, lineHeight: 1.1 }}>
              <WordPop at={1685} color={C.loss}>100</WordPop>
            </span>
          </span>
        </Formula>
      </div>
    </Moment>

    {/* M7 (1869-2070f): Summary: Profit → ADD / Loss → SUBTRACT */}
    <Moment from={1869}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Row gap={48} align="stretch" style={{ marginBottom: 40 }}>
          <StampIn at={1869} style={{ flex: 1 }}>
            <div style={{
              background: C.profitBg, border: `3px solid ${C.profitBd}`,
              borderRadius: 24, padding: "44px 52px",
            }}>
              <div style={{ fontFamily: F, fontSize: 60, fontWeight: 700, color: C.profit, marginBottom: 20 }}>
                PROFIT → ADD
              </div>
              <div style={{ fontFamily: F, fontSize: 56, color: C.dark }}>
                100 + P
              </div>
              <div style={{ fontFamily: F, fontSize: 44, color: C.gray, marginTop: 16 }}>
                SP = CP × (100+P) / 100
              </div>
            </div>
          </StampIn>
          <StampIn at={1922} style={{ flex: 1 }}>
            <div style={{
              background: C.lossBg, border: `3px solid ${C.lossBd}`,
              borderRadius: 24, padding: "44px 52px",
            }}>
              <div style={{ fontFamily: F, fontSize: 60, fontWeight: 700, color: C.loss, marginBottom: 20 }}>
                LOSS → SUBTRACT
              </div>
              <div style={{ fontFamily: F, fontSize: 56, color: C.dark }}>
                100 - L
              </div>
              <div style={{ fontFamily: F, fontSize: 44, color: C.gray, marginTop: 16 }}>
                SP = CP × (100-L) / 100
              </div>
            </div>
          </StampIn>
        </Row>
        <Reveal at={1940}>
          <CallOut style={{ fontSize: 56 }}>
            The multiplier = (100 ± %) / 100
          </CallOut>
        </Reveal>
      </div>
    </Moment>

  </SlideBase>
);
