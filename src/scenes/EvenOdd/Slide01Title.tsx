// Slide 1 â€” Title  (0.031 â†’ 20.517s, ~615f)
import { AbsoluteFill } from "remotion";
import { AnimImg, C, F, Reveal, Pop } from "./shared";
import badgeTrick from "../../../Graphics/badge-trick.png";

export const Slide01Title: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0 }}>

    {/* Main title */}
    <Reveal at={10} style={{ textAlign: "center", marginBottom: 16 }}>
      <div style={{ fontFamily: F, fontWeight: 900, fontSize: 110, lineHeight: 1, letterSpacing: -2 }}>
        <span style={{ color: C.even }}>EVEN</span>
        <span style={{ color: C.dark }}>, </span>
        <span style={{ color: C.odd }}>ODD</span>
        <span style={{ color: C.dark }}> &</span>
      </div>
      <div style={{ fontFamily: F, fontWeight: 900, fontSize: 96, color: C.title, lineHeight: 1, letterSpacing: -2 }}>
        ITS PROPERTIES
      </div>
    </Reveal>

    {/* EVEN / ODD circles with divider */}
    <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: 36, marginBottom: 36 }}>
      <Reveal at={40} style={{ textAlign: "center" }}>
        <div style={{
          width: 260, height: 260, borderRadius: "50%",
          border: `6px solid ${C.even}`, background: C.evenBg,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4,
        }}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 54, color: C.even }}>EVEN</div>
          <div style={{ fontFamily: F, fontWeight: 600, fontSize: 36, color: C.even }}>2, 4, 6,8</div>
        </div>
      </Reveal>

      <Reveal at={50} style={{ margin: "0 32px" }}>
        <div style={{ width: 3, height: 200, background: "#D1D5DB" }} />
      </Reveal>

      <Reveal at={60} style={{ textAlign: "center" }}>
        <div style={{
          width: 260, height: 260, borderRadius: "50%",
          border: `6px solid ${C.odd}`, background: C.oddBg,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4,
        }}>
          <div style={{ fontFamily: F, fontWeight: 900, fontSize: 54, color: C.odd }}>ODD</div>
          <div style={{ fontFamily: F, fontWeight: 600, fontSize: 36, color: C.odd }}>1, 3, 5,7</div>
        </div>
      </Reveal>
    </div>

    {/* Badge & tagline */}
    <Reveal at={140} style={{ position: "relative", width: 560, height: 70 }}>
      <AnimImg src={badgeTrick} revealFrame={140} style={{ left: 0, top: 0, width: 200, height: 70 }} />
      <div style={{
        position: "absolute", left: 215, top: 10,
        fontFamily: F, fontWeight: 700, fontSize: 36, color: C.dark,
      }}>
        Concepts, Rules &amp; Short Tricks
      </div>
    </Reveal>

    <Reveal at={200} style={{ marginTop: 100 }}>
      <div style={{ fontFamily: F, fontWeight: 500, fontSize: 36, color: C.gray, fontStyle: "italic" }}>
        Master parity. Solve instantly.
      </div>
    </Reveal>

  </AbsoluteFill>
);

