import { evolvePath } from "@remotion/paths";
import { interpolate, useCurrentFrame } from "remotion";

type DrawPathProps = {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  startFrame?: number;
  durationInFrames?: number;
  fill?: string;
};

export const DrawPath: React.FC<DrawPathProps> = ({
  d,
  stroke = "#ffffff",
  strokeWidth = 4,
  startFrame = 0,
  durationInFrames = 30,
  fill = "none",
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const evolved = evolvePath(progress, d);

  return (
    <path
      d={d}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={evolved.strokeDasharray}
      strokeDashoffset={evolved.strokeDashoffset}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
};
