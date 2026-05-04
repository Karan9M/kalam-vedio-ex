// Slide 11 - Quick Recap (17210 -> 19400f, ~2190f)
import { SlideBase, Reveal, C, F, Row, AnimImg } from "./shared";
import tickIcon     from "../../../Graphics/right-tickmark-true-icon.png";
import humanTick    from "../../../Graphics/human-right-tick-true.png";
import starIcon     from "../../../Graphics/star-icon.png";
import ideaBulb     from "../../../Graphics/Idea-Bulb-icon.png";

const CheckPoint: React.FC<{ at: number; text: React.ReactNode }> = ({ at, text }) => (
  <Reveal at={at} style={{ marginBottom: 18 }}>
    <Row gap={18} align="flex-start">
      <AnimImg src={tickIcon} revealFrame={at}
        style={{ position: "relative" as const, top: 2, left: 0, width: 44, height: 44, flexShrink: 0 }} />
      <div style={{ fontFamily: F, fontSize: 36, color: C.dark, lineHeight: 1.4 }}>
        {text}
      </div>
    </Row>
  </Reveal>
);

export const Slide11Recap: React.FC = () => (
  <SlideBase num={11} title="QUICK RECAP">
    <Row gap={72} align="flex-start">

      <div style={{ flex: 1.2 }}>
        <CheckPoint at={199} text={
          <>
            <strong>Efficiency = 1/N.</strong>{" "}
            Fewer days means{" "}
            <strong style={{ color: C.blue }}>higher efficiency</strong>.
          </>
        } />

        <CheckPoint at={458} text={
          <>
            <strong>Combined work:</strong> Always add{" "}
            <strong style={{ color: C.green }}>efficiencies</strong>, never days.
          </>
        } />

        <CheckPoint at={815} text={
          <>
            <strong>LCM method</strong> is safest.
            Set Total Work = LCM. No fractions.
          </>
        } />

        <CheckPoint at={1069} text={
          <>
            <strong>Pipes:</strong>{" "}
            Inlet = <span style={{ color: C.green, fontWeight: 800 }}>positive</span>,{" "}
            Outlet = <span style={{ color: C.red, fontWeight: 800 }}>negative</span>.
            Always subtract outlet.
          </>
        } />

        <CheckPoint at={1268} text={
          <>
            <strong>Wages</strong> are divided in the{" "}
            <strong style={{ color: C.orange }}>ratio of efficiency</strong>,
            not ratio of days.
          </>
        } />

        <Reveal at={1429} style={{ marginTop: 8 }}>
          <div style={{
            background: C.yellowBg, border: `2.5px dashed ${C.yellowBd}`,
            borderRadius: 14, padding: "14px 28px",
            fontFamily: F, fontSize: 34, color: C.dark, lineHeight: 1.5,
          }}>
            <AnimImg src={ideaBulb} revealFrame={1429}
              style={{ position: "relative" as const, width: 40, height: 40, top: 0, left: 0, marginRight: 12 }} />
            Understand the concept - efficiency, work, and time.
            All problems follow the same pattern.
          </div>
        </Reveal>

        <Reveal at={1915} style={{ marginTop: 14 }}>
          <Row gap={14}>
            <AnimImg src={starIcon} revealFrame={1915}
              style={{ position: "relative" as const, width: 38, height: 38, top: 0, left: 0 }} />
            <div style={{ fontFamily: F, fontSize: 32, color: C.gray, fontStyle: "italic" }}>
              Master the LCM method and CSAT Time and Work becomes easy.
            </div>
          </Row>
        </Reveal>
      </div>

      <div style={{ flex: 0.7, position: "relative", minHeight: 600 }}>
        <AnimImg src={humanTick} revealFrame={0} style={{ right: 0, top: 60, width: 290 }} />
      </div>

    </Row>
  </SlideBase>
);
