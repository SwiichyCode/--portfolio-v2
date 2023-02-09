import { PageLayout } from "@/components/layouts/PageLayout";
import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <PageLayout
      fTitle="About"
      sTitle="About me"
      subTitle={
        "Explore my journey, skills, and goals as an aspiring web developer"
      }
    >
      <AboutContainer>
        {/* Add animation delay to each dot */}
        <div className="header">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <CardEditor>
          <TabNavigation>
            <span>About.js</span>
            <span>Presentation.js</span>
            <span>Technical_skills.js</span>
            <span>Professional_goals.js</span>
          </TabNavigation>
          <TabContent>
            <TabWrapper>
              <div className="wrapper goals">
                <h3>- Presentation:</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, repellat itaque.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, repellat itaque.
                </p>
              </div>
              <div className="line"></div>
              <div className="wrapper technical">
                <h3>- Soft skills:</h3>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, repellat itaque.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, repellat itaque.
                </p>
              </div>
              <div className="line"></div>
              <div className="wrapper technical">
                <h3>- Professional goals:</h3>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, repellat itaque.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, repellat itaque.
                </p>
              </div>
            </TabWrapper>
          </TabContent>
        </CardEditor>
      </AboutContainer>
    </PageLayout>
  );
}

const CardEditor = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  opacity: 0.9;
  background: var(--text-color);
  font-family: var(--font-jetbrains);
`;

const TabNavigation = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  background: var(--color-grey-200);
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;

  span {
    display: inline-block;
    background: var(--color-grey-200);
    color: var(--color-yellow);
    border-right: 1px solid var(--color-grey-200);
    font-size: 1.6rem;
    padding: 1.8rem 2.8rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:first-child {
      border-top-left-radius: 0.8rem;
      border-bottom: 1px solid var(--color-yellow);
    }

    &:last-child {
      border-top-right-radius: 0.8rem;
    }
    &:hover {
      opacity: 0.8;
      border-bottom: 1px solid var(--color-yellow);
    }
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--text-color);
  border-radius: 0.8rem;
  font-family: var(--font-jetbrains);
  opacity: 0.9;
`;

const TabWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3.2rem 0;
`;

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 4rem 0;
  padding: 1.2rem 2.4rem 2.4rem 2.4rem;
  gap: 1.2rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);

  a {
    color: var(--color-yellow);
  }

  .header {
    display: flex;
    align-items: center;
    height: 3.2rem;
    gap: var(--gap-8);

    .dot {
      display: inline-block;
      border-radius: 50%;
      width: 11px;
      height: 11px;
      background: rgb(216, 224, 234);

      &:nth-child(1) {
        background: #ff5f56;
      }

      &:nth-child(2) {
        background: #ffbd2e;
      }

      &:nth-child(3) {
        background: #27c93f;
      }
    }
  }

  .main-content {
    display: flex;
    flex-direction: column;
    background: var(--text-color);
    border-radius: 0.8rem;
    font-family: var(--font-jetbrains);
    opacity: 0.9;
  }

  .main-wrapper {
    display: flex;
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 2.4rem;
  }

  p {
    font-size: var(--font-size-16);
    color: var(--color-white);
    line-height: 2.8rem;
    padding-left: 2.4rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-yellow);
    margin-bottom: 0.4rem;
    font-family: var(--font-robotoMono);
  }
`;
