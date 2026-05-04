// Slide 12 â€” Final Recap  (520 â†’ 548.352s, ~851f)
// All 8 rules as a checklist, staggered reveals
import { SlideBase, Reveal, C, F, Row, AnimImg } from "./shared";
import tickIcon from "../../../Graphics/right-tickmark-true-icon.png";

const Check: React.FC<{ at: number; text: React.ReactNode }> = ({ at, text }) => (
  <Reveal at={at} style={{ marginBottom: 14 }}>
    <Row gap={20} align="flex-start">
      <AnimImg src={tickIcon} revealFrame={at} style={{ position: "relative" as const, top: 0, left: 0, width: 48, height: 48, flexShrink: 0 }} />
      <div style={{ fontFamily: F, fontSize: 36, color: C.dark, lineHeight: 1.4 }}>{text}</div>
    </Row>
  </Reveal>
);

export const Slide12Recap: React.FC = () => (
  <SlideBase num={12} title="FINAL RECAP">

    <Row gap={64} align="flex-start">
      <div style={{ flex: 1 }}>
        <Check at={0}   text={<><span style={{ fontWeight: 800, color: C.even }}>Even</span>  divisible by 2. <span style={{ fontWeight: 800, color: C.odd }}>Odd</span> → not divisible by 2.</>} />
        <Check at={60}  text={<>Same type (E+E or O+O) → <span style={{ fontWeight: 800, color: C.even }}>EVEN</span>. Mixed (E+O) → <span style={{ fontWeight: 800, color: C.odd }}>ODD</span>.</>} />
        <Check at={120} text={<>In <strong>+/−</strong>: count odd terms. Even count → Even. Odd count → Odd.</>} />
        <Check at={180} text={<>In <strong>×</strong>: one <span style={{ fontWeight: 800, color: C.even }}>EVEN</span> factor → whole product <span style={{ fontWeight: 800, color: C.even }}>EVEN</span>.</>} />
      </div>
      <div style={{ flex: 1 }}>
        <Check at={240} text={<>Powers do <strong>not change parity</strong>. Evenn = Even, Oddn = Odd.</>} />
        <Check at={300} text={<><span style={{ fontWeight: 800, color: C.even }}>2</span> is the <strong>only even prime</strong>.</>} />
        <Check at={360} text={<>All other primes are <span style={{ fontWeight: 800, color: C.odd }}>ODD</span>.</>} />
        <Check at={460} text={<>Sum of two odd primes is <strong>NEVER prime</strong> (it's always even &gt; 2).</>} />
      </div>
    </Row>

  </SlideBase>
);

