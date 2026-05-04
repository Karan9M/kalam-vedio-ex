// Slide 2 - Combined Work (1530 -> 2950f, ~1420f)
import { SlideBase, Reveal, Pop, C, F, Row, AnimImg, Pill, Frac } from "./shared";
import handshake from "../../../Graphics/two-human-handshake.png";
import letterA   from "../../../Graphics/Letter-A.png";
import letterB   from "../../../Graphics/Letter-B.png";

const PersonCard: React.FC<{ at: number; label: string; days: number; color: string; bg: string; border: string }> = ({
  at, label, days, color, bg, border,
}) => (
  <Reveal at={at} style={{ marginBottom: 14 }}>
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 18,
      background: bg, border: `2.5px solid ${border}`, borderRadius: 12,
      padding: "12px 28px",
    }}>
      <div style={{ fontFamily: F, fontWeight: 800, fontSize: 42, color }}>{label}</div>
      <div style={{ fontFamily: F, fontSize: 36, color: "#374151" }}>
        completes work in <strong style={{ color }}>{days} days</strong>
      </div>
    </div>
  </Reveal>
);

export const Slide02CombinedWork: React.FC = () => (
  <SlideBase num={2} title="COMBINED WORK">
    <Row gap={64} align="flex-start">

      <div style={{ flex: 1.2 }}>
        <PersonCard at={91}  label="A" days={10} color={C.blue}   bg={C.blueBg}   border={C.blueBd} />
        <PersonCard at={177} label="B" days={15} color={C.orange} bg={C.orangeBg} border={C.orangeBd} />

        <Reveal at={263} style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
            If both work <strong>together</strong>, how many days?
          </div>
        </Reveal>

        <Reveal at={385} style={{ marginBottom: 10 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.dark }}>
            <strong style={{ color: C.blue }}>A</strong>: work per day ={" "}
            <Frac num="1" den="10" size={30} color={C.blue} />
          </div>
        </Reveal>
        <Reveal at={491} style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.dark }}>
            <strong style={{ color: C.orange }}>B</strong>: work per day ={" "}
            <Frac num="1" den="15" size={30} color={C.orange} />
          </div>
        </Reveal>

        <Reveal at={601} style={{ marginBottom: 12 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
            Together:{" "}
            <Frac num="1" den="10" size={30} color={C.blue} />
            {" "}+{" "}
            <Frac num="1" den="15" size={30} color={C.orange} />
          </div>
        </Reveal>

        <Reveal at={793} style={{ marginBottom: 10 }}>
          <div style={{ fontFamily: F, fontSize: 34, color: C.gray }}>
            LCM(10, 15) = 30 &nbsp;={">"}&nbsp;
            <Frac num="3" den="30" size={28} color={C.blue} />
            {" "}+{" "}
            <Frac num="2" den="30" size={28} color={C.orange} />
            {" "}={" "}
            <Frac num="5" den="30" size={28} color={C.dark} />
            {" "}={" "}
            <Frac num="1" den="6" size={28} color={C.dark} />
          </div>
        </Reveal>

        <Reveal at={1142} style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: F, fontSize: 36, color: C.dark }}>
            Together they do{" "}
            <Frac num="1" den="6" size={32} color={C.title} />{" "}
            of the work per day
          </div>
        </Reveal>

        <Reveal at={1307}>
          <Pop at={1307}>
            <Pill color={C.green} bg={C.greenBg} border={C.greenBd} size={44}>
              Work done in 6 Days
            </Pill>
          </Pop>
        </Reveal>
      </div>

      <div style={{ flex: 0.7, position: "relative", minHeight: 600 }}>
        <AnimImg src={handshake} revealFrame={0}   style={{ right: 0, top: 40,  width: 280 }} />
        <AnimImg src={letterA}   revealFrame={91}   style={{ left: 0, top: 280, width: 80 }} />
        <AnimImg src={letterB}   revealFrame={177}  style={{ left: 0, top: 360, width: 80 }} />
      </div>

    </Row>
  </SlideBase>
);
