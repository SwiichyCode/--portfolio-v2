import { Splash } from "@/components/Splash";
import { ButtonRainbow } from "@/components/ButtonRainbow";
import { rainbowBtnTheme } from "@/styles/themes";
import { useGradientTransition } from "@/hooks/useGradientTransition";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import * as S from "./styles";
import { useWindowSize } from "@/hooks/useWindowSize";

export const Hero = () => {
  const transitionColor = useGradientTransition(5000);
  const size = useWindowSize();

  return (
    <S.Section color={transitionColor}>
      <Splash
        colors="#FBA234"
        size={120}
        top={0}
        left={size.width > 550 ? 50 : null}
        right={size.width > 550 ? null : 0}
      />
      <Splash
        colors="#00D2DB"
        size={120}
        bottom={100}
        right={size.width > 550 ? 50 : 0}
        rotate={90}
      />
      <div className="hero-header">
        <span>hey!</span>
        <S.Welcome src="/love-you-gesture.webp" />
      </div>
      <div className="hero-body">
        <h1>
          I'm <span className="firstName">Dylan</span>{" "}
          <span className="secondName">Jansana,</span>
        </h1>
        <p>
          Junior front-end developer specialized in integration and user
          interaction. I am currently focusing on developing my freelance
          business. I am available for any professional inquiries and ready to
          take on new projects.
        </p>
      </div>
      <div className="hero-footer">
        <div className="wrapper">
          <S.ExploreButton>
            Start {size.width > 550 && "Exploration"}
          </S.ExploreButton>
          <ButtonRainbow themes={rainbowBtnTheme} mWidth={130}>
            {size.width > 550 && "Get a"} Resume
          </ButtonRainbow>
          <div className="icons">
            <p>Built with:</p>
            <a href="https://nextjs.org/" className="next-icon">
              <TbBrandNextjs />
            </a>
            <a href="https://fr.reactjs.org/" className="react-icon">
              <FaReact />
            </a>
            <a href="https://styled-components.com/">
              <span>💅</span>
            </a>
          </div>
        </div>
        <p className="inspired">
          Inspired by: <a href="https://vercel.com/">https://vercel.com/</a>
        </p>
      </div>
    </S.Section>
  );
};
