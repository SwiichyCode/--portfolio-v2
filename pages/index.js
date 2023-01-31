import styled from "styled-components";
import { Hero } from "@/components/pages/Hero";
import { HeroStep } from "@/components/layouts/HeroStep";

export default function Home() {
  return (
    <HomeContainer>
      <HeroWrapper>
        <Hero />
        <HeroStep />
      </HeroWrapper>
    </HomeContainer>
  );
}

const HeroWrapper = styled.div`
  height: calc(100vh - var(--header-height));
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -4.8rem;
  padding-left: 4.8rem;
`;

const HomeContainer = styled.div`
  width: 100%;
  max-width: 1550px;
  margin: 0 auto;
`;
