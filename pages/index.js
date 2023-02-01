import styled from "styled-components";
import { Home } from "@/components/pages/Home";
import { HeroStep } from "@/components/common/HeroStep";

export default function Index() {
  return (
    <HomeWrapper>
      <Home />
      {/* <HeroStep /> */}
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: calc(100vh - var(--header-height));
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -4.8rem;
  padding-left: 4.8rem;

  @media (max-width: 550px) {
    height: 100%;
    padding-bottom: 4.8rem;
  }
`;
