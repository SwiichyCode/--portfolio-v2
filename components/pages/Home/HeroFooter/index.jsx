import { useWindowSize } from "@/hooks/useWindowSize";
import { ButtonRainbow } from "@/components/common/ButtonRainbow";
import { rainbowBtnTheme } from "@/styles/themes";
import { HrefLink } from "@/components/base/HrefLink";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import * as S from "./styles";

export const HeroFooter = () => {
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
    <S.Container>
      <div className="wrapper">
        <S.ExploreButton onClick={handleClickScroll}>
          Start {size.width > 550 && "Exploration"}
        </S.ExploreButton>
        <ButtonRainbow themes={rainbowBtnTheme} mWidth={130}>
          {size.width > 550 && "Get a"} Resume
        </ButtonRainbow>
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
            icon={<span>💅</span>}
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
    </S.Container>
  );
};
