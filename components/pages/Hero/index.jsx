import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Splash } from "@/components/common/Splash";
import { ButtonRainbow } from "@/components/common/ButtonRainbow";
import { rainbowBtnTheme } from "@/styles/themes";
import { useGradientTransition } from "@/hooks/useGradientTransition";
import { useWindowSize } from "@/hooks/useWindowSize";
import { HrefLink } from "@/components/common/HrefLink";
import { motion } from "framer-motion";
import * as S from "./styles";

export const Hero = () => {
  const transitionColor = useGradientTransition(5000);
  const size = useWindowSize();

  const handleClickScroll = () => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <S.Section color={transitionColor}>
      <Splash
        colors="#FBA234"
        size={120}
        top={size.width > 550 ? 0 : -30}
        left={size.width > 550 ? 50 : -70}
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
      <div className="hero-footer">
        <div className="wrapper">
          <S.ExploreButton onClick={handleClickScroll}>
            Start {size.width > 550 && "Exploration"}
          </S.ExploreButton>
          {/* <ButtonRainbow themes={rainbowBtnTheme} mWidth={130}>
            {size.width > 550 && "Get a"} Resume
          </ButtonRainbow> */}
          <div className="icons">
            <p>Built with:</p>
            <HrefLink
              href="https://nextjs.org/"
              icon={<TbBrandNextjs />}
              className="next-icon"
            />
            <HrefLink
              href="https://fr.reactjs.org/"
              icon={<FaReact />}
              className="react-icon"
            />
            <HrefLink
              href="https://styled-components.com/"
              icon={<span>????</span>}
            />
            <HrefLink
              href="https://tailwindcss.com/"
              icon={<SiTailwindcss />}
              className="tailwind-icon"
            />
          </div>
        </div>
        <p className="inspired">
          Inspired by:{" "}
          <HrefLink href="https://vercel.com/" text={"https://vercel.com/"} />
        </p>
      </div>
    </S.Section>
  );
};
