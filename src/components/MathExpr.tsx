import { CSSProperties } from "react";
import { COLORS } from "../constants";
import { FONTS } from "../fonts";

type MathExprProps = {
  children: React.ReactNode;
  style?: CSSProperties;
};

export const MathExpr: React.FC<MathExprProps> = ({ children, style }) => {
  return (
    <div
      style={{
        fontFamily: FONTS.body,
        color: COLORS.text,
        fontSize: 86,
        fontWeight: 700,
        letterSpacing: 1,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
