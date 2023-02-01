import { Splash } from "@/components/common/Splash";
import { useGradientTransition } from "@/hooks/useGradientTransition";
import { useWindowSize } from "@/hooks/useWindowSize";
import { motion } from "framer-motion";
import { HeroStep } from "@/components/common/HeroStep";
import { HeroFooter } from "./HeroFooter";
import * as S from "./styles";

export const Home = () => {
  const transitionColor = useGradientTransition(5000);
  const size = useWindowSize();

  return (
    <S.Section color={transitionColor}>
      <Splash
        colors="#FBA234"
        size={120}
        top={size.width > 550 ? 0 : -30}
        left={size.width > 550 ? 50 : -20}
        right={size.width > 550 ? null : 0}
        delay={0.5}
      />
      <Splash
        colors="#00D2DB"
        size={120}
        bottom={230}
        right={size.width > 550 ? 50 : 0 || size.width < 550 ? -70 : 0}
        rotate={90}
        delay={1}
      />
      <div className="hero-header">
        <span>hey!</span>
        <S.Welcome
          as={motion.img}
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1 }}
          whileInView={{ rotate: 20 }}
          transition={{
            duration: 1,
            repeat: 2,
            repeatType: "reverse",
            delay: 3,
            opacity: 1,
          }}
          src="/love-you-gesture.webp"
        />
      </div>
      <div className="hero-body">
        <motion.h1>
          I'm <span className="firstName">Dylan</span>{" "}
          <span className="secondName">Jansana,</span>
        </motion.h1>
        <p>
          Junior <strong>front-end developer</strong> specialized in integration
          and user interaction. I am currently focusing on developing my
          freelance business. I am available for any professional inquiries and
          ready to take on new projects.
        </p>
      </div>
      <HeroFooter />

      <HeroStep />
    </S.Section>
  );
};
