import { useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  text: string;
  startFrame?: number;
  wordsPerSecond?: number;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  style?: React.CSSProperties;
};

export const RevealText: React.FC<Props> = ({
  text,
  startFrame = 0,
  wordsPerSecond = 3,
  fontSize = D.sz.heading,
  color = D.textPrimary,
  fontWeight = 700,
  style,
}) => {
  const frame = useCurrentFrame();
  const fps = 30;
  const words = text.split(" ");
  const wordsPerFrame = wordsPerSecond / fps;
  const shownWords = Math.max(0, Math.floor((frame - startFrame) * wordsPerFrame));

  return (
    <div
      style={{
        fontFamily: FONTS.body,
        fontSize,
        fontWeight,
        color,
        lineHeight: 1.15,
        letterSpacing: "-0.02em",
        ...style,
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            opacity: i < shownWords ? 1 : 0,
            marginRight: "0.3em",
            display: "inline-block",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};
