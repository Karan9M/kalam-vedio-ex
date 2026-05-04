// Slide 1 — Title/Banner  (0:00 → 0:17.851, ~535 frames)
// Assets: PL-Banner, Scale, Concept-Formula badge, Master the basics text, Rupee coin, UpTrend
import { AbsoluteFill } from "remotion";
import { AnimImg } from "./shared";
import plBanner          from "../../../Assets/Slide-1/PL-Banner.png";
import scale             from "../../../Assets/Slide-1/Scale.png";
import conceptBadge      from "../../../Assets/Slide-1/Concept-Formula-shortTricks.png";
import masterText        from "../../../Assets/Slide-1/Master the basics.png";
import ruppeCoin         from "../../../Assets/Slide-1/Ruppe-coin.png";
import upTrend           from "../../../Assets/Slide-1/UpTrend.png";

export const SlideTitle: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#FAFAF7" }}>
    {/* Main title banner — left side */}
    <AnimImg
      src={plBanner}
      revealFrame={220}
      origin="center"
      style={{ left: "15%", top: -50, width: 1350 }}
    />

    {/* Balance scale — right side */}
    {/* <AnimImg
      src={scale}
      revealFrame={22}
      origin="top right"
      style={{ right: 40, top: 30, width: 840 }}
    /> */}

    {/* "Concepts, Formulas & Short Tricks" badge */}
    <AnimImg
      src={conceptBadge}
      revealFrame={240}
      origin="center"
      style={{ left: "26%", top: 520, width: 900 }}
    />

    {/* "Master the basics. Solve with confidence." */}
    <AnimImg
      src={masterText}
      revealFrame={250}
      origin="center"
      style={{ left: "31%", top: 670, width: 700 }}
    />

    {/* Rupee coin — bottom right */}
    {/* <AnimImg
      src={ruppeCoin}
      revealFrame={75}
      origin="bottom right"
      style={{ right: 200, bottom: 60, width: 130 }}
    /> */}

    {/* Up-trend icon — bottom right corner */}
    {/* <AnimImg
      src={upTrend}
      revealFrame={85}
      origin="bottom right"
      style={{ right: 50, bottom: 50, width: 120 }}
    /> */}
  </AbsoluteFill>
);
