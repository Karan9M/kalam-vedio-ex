// Slide 2 — Basics  (0:18.661 → 1:08.694, ~1501 frames)
// Reveal schedule (relative to this slide's frame 0):
//   Top-Details   → 5f   (CP/SP bullet list, appears immediately)
//   Kirana-store  → 190f (SP mentioned at 0:24.989 → (24.989−18.661)×30 = 190f)
//   Banner-Bottom → 891f ("relatable example" at 0:48.361 → (48.361−18.661)×30 = 891f)
import { AbsoluteFill } from "remotion";
import { AnimImg } from "./shared";
import topDetails    from "../../../Assets/Slide-2/Top-Details.png";
import kiranaStore   from "../../../Assets/Slide-2/Kirana-store.png";
import bannerBottom  from "../../../Assets/Slide-2/Banner-Bottom.png";

export const SlideBasics: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
    {/* Bullet list — CP, SP, Profit, Loss cases */}
    <AnimImg
      src={topDetails}
      revealFrame={5}
      endFrame={890}
      origin="top left"
      style={{ left: 50, top: 60, width: 1800 }}
    />

    {/* Kirana store illustration — right side */}
    <AnimImg
      src={kiranaStore}
      revealFrame={900}
      origin="top right"
      style={{ right: -100, top: 500, width: 880 }}
    />

    {/* Example box — Rohan's rice example, pinned to lower third */}
    <AnimImg
      src={bannerBottom}
      revealFrame={891}
      origin="bottom center"
      style={{ left: "-10%", top: -100, width: 1800 }}
    />
  </AbsoluteFill>
);
