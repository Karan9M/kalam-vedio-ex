import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { KeywordChip } from "../components/KeywordChip";
import { MathExpr } from "../components/MathExpr";
import { CaptionOverlay } from "../components/CaptionOverlay";
import { COLORS } from "../constants";
import { FONTS } from "../fonts";

const cycle = ["7^1=7", "7^2=9", "7^3=3", "7^4=1"];

export const SceneUnitDigit: React.FC = () => {
  const frame = useCurrentFrame();
  const glow = interpolate(frame, [20, 50], [0.4, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const angle = interpolate(frame, [40, 140], [0, 270], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ padding: "80px 120px", color: COLORS.text }}>
      <MathExpr style={{ color: COLORS.yellow }}>7^95 - 3^58</MathExpr>
      <div
        style={{
          marginTop: 20,
          fontFamily: FONTS.body,
          fontSize: 38,
          opacity: glow,
          color: COLORS.blue,
        }}
      >
        Focus on unit digits and cyclicity
      </div>

      <div
        style={{
          position: "absolute",
          right: 190,
          top: 220,
          width: 430,
          height: 430,
          borderRadius: "50%",
          border: `3px solid ${COLORS.blue}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cycle.map((item, i) => {
          const a = ((Math.PI * 2) / cycle.length) * i - Math.PI / 2;
          const x = Math.cos(a) * 160;
          const y = Math.sin(a) * 160;
          return (
            <div
              key={item}
              style={{
                position: "absolute",
                transform: `translate(${x}px, ${y}px)`,
                fontFamily: FONTS.body,
                fontSize: 30,
              }}
            >
              {item}
            </div>
          );
        })}
        <div
          style={{
            width: 4,
            height: 160,
            background: COLORS.green,
            transform: `rotate(${angle}deg) translateY(-60px)`,
            transformOrigin: "bottom center",
          }}
        />
      </div>
      <div
        style={{
          marginTop: 120,
          fontFamily: FONTS.body,
          fontSize: 46,
          color: COLORS.green,
        }}
      >
        95 mod 4 = 3{"  =>  "}unit digit of 7^95 is 3
      </div>
      <KeywordChip text="Cyclicity of 7 = 4" color={COLORS.green} x={1300} y={120} />
      <CaptionOverlay sceneName="scene-unitdigit" />
    </AbsoluteFill>
  );
};
