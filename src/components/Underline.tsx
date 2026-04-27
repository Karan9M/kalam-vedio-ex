import { AbsoluteFill } from "remotion";
import { DrawPath } from "./DrawPath";

type UnderlineProps = {
  y?: number;
  color?: string;
  startFrame?: number;
  durationInFrames?: number;
};

export const Underline: React.FC<UnderlineProps> = ({
  y = 0,
  color = "#FFC857",
  startFrame = 0,
  durationInFrames = 30,
}) => {
  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        transform: `translateY(${y}px)`,
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 1920 1080">
        <DrawPath
          d="M 560 620 C 760 670, 1100 560, 1360 620"
          stroke={color}
          strokeWidth={8}
          startFrame={startFrame}
          durationInFrames={durationInFrames}
        />
      </svg>
    </AbsoluteFill>
  );
};
