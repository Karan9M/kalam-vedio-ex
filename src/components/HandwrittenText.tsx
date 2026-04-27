import { CSSProperties, useMemo } from "react";
import { useCurrentFrame } from "remotion";
import { FONTS } from "../constants";

type HandwrittenTextProps = {
  text: string;
  startFrame?: number;
  charsPerFrame?: number;
  style?: CSSProperties;
  devanagari?: boolean;
};

export const HandwrittenText: React.FC<HandwrittenTextProps> = ({
  text,
  startFrame = 0,
  charsPerFrame = 1,
  style,
  devanagari = false,
}) => {
  const frame = useCurrentFrame();
  const shownChars = Math.max(0, Math.floor((frame - startFrame) * charsPerFrame));
  const rendered = useMemo(() => text.slice(0, shownChars), [text, shownChars]);

  return (
    <div
      style={{
        fontFamily: devanagari ? FONTS.devanagari : FONTS.handwritten,
        whiteSpace: "pre-wrap",
        ...style,
      }}
    >
      {rendered}
    </div>
  );
};
