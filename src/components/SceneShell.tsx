import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  label: string;
  accentColor?: string;
  children: React.ReactNode;
};

export const SceneShell: React.FC<Props> = ({
  label,
  accentColor = D.blue,
  children,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: D.bg,
        opacity,
        padding: D.pad,
        paddingTop: D.pad + D.accentHeight + 24,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Accent bar at very top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: D.accentHeight,
          backgroundColor: accentColor,
        }}
      />

      {/* Scene label — top left */}
      <div
        style={{
          position: "absolute",
          top: D.accentHeight + 28,
          left: D.pad,
          fontFamily: FONTS.body,
          fontSize: D.sz.label,
          fontWeight: 400,
          color: D.textLabel,
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </div>

      {children}
    </AbsoluteFill>
  );
};
