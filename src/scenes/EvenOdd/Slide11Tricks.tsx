// Slide 11 â€” Short Tricks  (493.152 â†’ 520s, ~805f)
// Staggered reveals for each trick point
import { SlideBase, Reveal, C, F, Row, AnimImg } from "./shared";
import ideaBulb from "../../../Graphics/Idea-Bulb-icon.png";

const Trick: React.FC<{ at: number; text: React.ReactNode }> = ({ at, text }) => (
  <Reveal at={at} style={{ marginBottom: 18 }}>
    <Row gap={20} align="flex-start">
      <div style={{
        width: 32, height: 32, borderRadius: "50%",
        background: "#FACC15", flexShrink: 0, marginTop: 8,
      }} />
      <div style={{ fontFamily: F, fontSize: 38, color: C.dark, lineHeight: 1.5 }}>{text}</div>
    </Row>
  </Reveal>
);

export const Slide11Tricks: React.FC = () => (
  <SlideBase num={11} title="SHORT TRICKS">

    <Row gap={60} align="flex-start">
      <div style={{ flex: 1 }}>
        <Trick at={0} text={
          <>In <strong>+/-</strong>, count only <span style={{ fontWeight: 800, color: C.odd }}>ODD</span> numbers.</>
        } />
        <Trick at={100} text={
          <>Odd count is <span style={{ fontWeight: 800, color: C.even }}>even</span> → result <span style={{ fontWeight: 800, color: C.even }}>EVEN</span></>
        } />
        <Trick at={200} text={
          <>Odd count is <span style={{ fontWeight: 800, color: C.odd }}>odd</span> →   result <span style={{ fontWeight: 800, color: C.odd }}>ODD</span></>
        } />
        <Trick at={350} text={
          <>In <strong>+</strong>, if one factor is <span style={{ fontWeight: 800, color: C.even }}>EVEN</span> → whole product is <span style={{ fontWeight: 800, color: C.even }}>EVEN</span></>
        } />
        <Trick at={500} text={
          <>Powers <strong>preserve parity</strong> — even stays even, odd stays odd.</>
        } />
        <Trick at={620} text={
          <><span style={{ fontWeight: 800, color: C.even }}>2</span> is the <strong>only even prime</strong>. Sum of two odd primes is <strong>never prime</strong>.</>
        } />
      </div>

      <div style={{ width: 220, position: "relative" }}>
        <AnimImg src={ideaBulb} revealFrame={80} style={{ right: 0, top: 60, width: 200 }} />
      </div>
    </Row>

  </SlideBase>
);

