import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  mode: "intro" | "outro";
  introSubtitle?: string;   // "UPSC CSAT — Topic Name" format
  outroSubtitle?: string;   // unused in new design, kept for compat
  brandName?: string;       // unused in new design, kept for compat
  logoPath?: string;        // unused in new design, kept for compat
};

const BASE_IMG = "brand/SuperKalam-Intro-Outro-img.png";

export const SceneBrand: React.FC<Props> = ({
  mode,
  introSubtitle = "UPSC CSAT — Topic",
}) => {
  const frame = useCurrentFrame();

  // Parse "UPSC CSAT — Addition and Subtraction" → seriesLabel + topicName
  const dashIdx = introSubtitle.indexOf(" — ");
  const seriesLabel = dashIdx >= 0 ? introSubtitle.slice(0, dashIdx) : "UPSC CSAT";
  const topicName   = dashIdx >= 0 ? introSubtitle.slice(dashIdx + 3) : introSubtitle;

  const imgOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  if (mode === "outro") {
    return (
      <AbsoluteFill
        style={{
          backgroundColor: D.bg,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ opacity: imgOpacity }}>
          <Img
            src={staticFile(BASE_IMG)}
            style={{ width: 1500, height: "auto", objectFit: "contain" }}
          />
        </div>
      </AbsoluteFill>
    );
  }

  // Intro
  const seriesOpacity = interpolate(frame, [22, 42], [0, 1], { extrapolateRight: "clamp" });
  const topicOpacity  = interpolate(frame, [30, 55], [0, 1], { extrapolateRight: "clamp" });
  const topicY        = interpolate(frame, [30, 55], [16, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: D.bg,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {/* Brand image */}
      <div style={{ opacity: imgOpacity }}>
        <Img
          src={staticFile(BASE_IMG)}
          style={{ width: 1200, height: "auto", objectFit: "contain" }}
        />
      </div>

      {/* Series label — "UPSC CSAT" */}
      <div
        style={{
          opacity: seriesOpacity,
          fontFamily: FONTS.body,
          fontSize: 36,
          fontWeight: 500,
          color: D.textSecondary,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          // marginTop: 01,
        }}
      >
        {seriesLabel}
      </div>

      {/* Topic name — bold, large */}
      <div
        style={{
          opacity: topicOpacity,
          transform: `translateY(${topicY}px)`,
          fontFamily: FONTS.body,
          fontSize: 72,
          fontWeight: 700,
          color: D.textPrimary,
          letterSpacing: "-0.01em",
          textAlign: "center",
          maxWidth: 1200,
          lineHeight: 1.15,
        }}
      >
        {topicName}
      </div>
    </AbsoluteFill>
  );
};
