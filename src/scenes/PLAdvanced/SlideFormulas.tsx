// Slide 3 — Formulas  (1:08.694 → 1:49.216, ~1216 frames)
// Reveal schedule (relative to this slide's frame 0):
//   Header        → 5f   (title appears immediately)
//   Details-Box   → 20f  (formula box, starts just after title)
//   Calculator    → 120f (~4s in, right-side decoration)
//   Clipped-Paper → 864f ("important tip" at 1:37.484 → (97.484−68.694)×30 = 864f)
import { AbsoluteFill } from "remotion";
import { AnimImg } from "./shared";
import formulaHeader  from "../../../Assets/Slide-3/Formula- you must know.png";
import detailsBox     from "../../../Assets/Slide-3/Details-Box.png";
import clippedPaper   from "../../../Assets/Slide-3/Clipped-Paper.png";
import calculator     from "../../../Assets/Slide-3/Calculator.png";

export const SlideFormulas: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
    {/* "FORMULAS — MUST KNOW!" header */}
    <AnimImg
      src={formulaHeader}
      revealFrame={5}
      origin="top left"
      style={{ left: "-10%", top: -350, width: 1500 }}
    />

    {/* Red formula box — 4 formulas, pushed down to clear header */}
    <AnimImg
      src={detailsBox}
      revealFrame={20}
      origin="top left"
      style={{ left: "-7%", top: 100, width: 1500 }}
    />

    {/* Calculator — bottom-right corner */}
    <AnimImg
      src={calculator}
      revealFrame={870}
      origin="bottom right"
      style={{ right: 290, bottom: 120, width: 500 }}
    />

    {/* Sticky note tip — appears when "important tip" is mentioned */}
    <AnimImg
      src={clippedPaper}
      revealFrame={864}
      origin="top right"
      style={{ right: -180, top: 0, width: 1200 }}
    />
  </AbsoluteFill>
);
