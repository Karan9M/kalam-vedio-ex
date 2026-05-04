import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { CSSProperties } from "react";

// Reusable animated image — snaps in at revealFrame with spring scale + fade,
// fades out over 8 frames starting at endFrame (if provided)
export const AnimImg: React.FC<{
  src: string;
  revealFrame: number;
  endFrame?: number;
  style?: CSSProperties;
  origin?: string;
}> = ({ src, revealFrame, endFrame, style, origin = "center" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const elapsed = Math.max(0, frame - revealFrame);
  const scale = spring({
    frame: elapsed,
    fps,
    config: { damping: 14, stiffness: 180, mass: 0.9 },
    from: 0.88,
    to: 1,
  });

  const fadeIn = interpolate(frame, [revealFrame, revealFrame + 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut =
    endFrame !== undefined
      ? interpolate(frame, [endFrame, endFrame + 8], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;
  const opacity = Math.min(fadeIn, fadeOut);

  return (
    <Img
      src={src}
      style={{
        position: "absolute",
        opacity,
        transform: `scale(${scale})`,
        transformOrigin: origin,
        objectFit: "contain",
        ...style,
      }}
    />
  );
};
