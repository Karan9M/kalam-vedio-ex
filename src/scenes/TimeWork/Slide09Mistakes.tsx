// Slide 9 - Common Mistakes (13710 -> 15080f, ~1370f)
import { SlideBase, Reveal, C, F, Row, AnimImg } from "./shared";
import crossIcon    from "../../../Graphics/cross-wrong-false-icon.png";
import tickIcon     from "../../../Graphics/right-tickmark-true-icon.png";
import humanFalse   from "../../../Graphics/human-false-feedback.png";
import humanTrue    from "../../../Graphics/human-true-feedback.png";

const MistakeBlock: React.FC<{
  at: number;
  num: number;
  wrong: React.ReactNode;
  right: React.ReactNode;
}> = ({ at, num, wrong, right }) => (
  <Reveal at={at} style={{ marginBottom: 20 }}>
    <div style={{
      background: "#F9FAFB", border: "1.5px solid #E5E7EB",
      borderRadius: 14, overflow: "hidden",
    }}>
      <div style={{
        background: C.title, padding: "8px 20px",
        fontFamily: F, fontWeight: 700, fontSize: 28, color: "#fff",
      }}>
        MISTAKE {num}
      </div>
      <div style={{ padding: "12px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
        <Row gap={14} align="flex-start">
          <AnimImg src={crossIcon} revealFrame={at}
            style={{ position: "relative" as const, width: 36, height: 36, top: 4, left: 0, flexShrink: 0 }} />
          <div style={{
            fontFamily: F, fontSize: 30, color: C.red,
            textDecoration: "line-through", lineHeight: 1.4,
          }}>{wrong}</div>
        </Row>
        <Row gap={14} align="flex-start">
          <AnimImg src={tickIcon} revealFrame={at + 60}
            style={{ position: "relative" as const, width: 36, height: 36, top: 4, left: 0, flexShrink: 0 }} />
          <div style={{
            fontFamily: F, fontSize: 30, color: C.green,
            fontWeight: 700, lineHeight: 1.4,
          }}>{right}</div>
        </Row>
      </div>
    </div>
  </Reveal>
);

export const Slide09Mistakes: React.FC = () => (
  <SlideBase num={9} title="COMMON MISTAKES">
    <Row gap={64} align="flex-start">

      <div style={{ flex: 1.3 }}>
        <MistakeBlock
          at={127}
          num={1}
          wrong={
            <>
              Adding days: A(10 days) + B(20 days) = 15 days together (average).
              10 + 20 / 2 = 15 is WRONG.
            </>
          }
          right={
            <>
              Always add EFFICIENCIES, not days.
              A = 1/10, B = 1/20, Together = 1/10 + 1/20 = 3/20 = 6.67 days.
            </>
          }
        />

        <MistakeBlock
          at={770}
          num={2}
          wrong={
            <>
              Ignoring the outlet pipe in Pipes and Cisterns problems.
            </>
          }
          right={
            <>
              Outlet pipe always subtracts. Inlet = positive, Outlet = negative.
              Never ignore negative work.
            </>
          }
        />

        <MistakeBlock
          at={1053}
          num={3}
          wrong={
            <>
              Dividing wages equally among all workers.
            </>
          }
          right={
            <>
              Wages are always divided in the RATIO of work done
              (efficiency ratio), NOT in ratio of days worked.
            </>
          }
        />
      </div>

      <div style={{ flex: 0.6, position: "relative", minHeight: 600 }}>
        <AnimImg src={humanFalse} revealFrame={0}    style={{ right: 0, top: 0,   width: 240 }} />
        <AnimImg src={humanTrue}  revealFrame={1053} style={{ right: 0, top: 320, width: 240 }} />
      </div>

    </Row>
  </SlideBase>
);
