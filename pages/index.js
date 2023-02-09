import styled from "styled-components";
import { Hero } from "@/components/pages/Hero";
import { HeroStep } from "@/components/layouts/HeroStep";

export default function Home() {
  return (
    <HeroWrapper>
      <Hero />
      <HeroStep />
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  width: 100%;
  max-width: 1550px;
  height: calc(100vh - var(--header-height));
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -4.8rem;
  padding-left: 4.8rem;
  margin: 0 auto;

  @media (max-width: 550px) {
    height: 100%;
    padding-bottom: 4.8rem;
    padding-left: 0;
  }
`;
