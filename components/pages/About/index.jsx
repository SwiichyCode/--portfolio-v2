import React from "react";
import styled from "styled-components";
import { Step } from "../../lib/Step";

export const About = () => {
  return (
    <Container id="about-section">
      <div className="header">
        <Step
          index={1}
          title={"About me"}
          color="blue"
          lSize={150}
          fSize="4.4rem"
        />
        <img src="Rocket_perspective_matte_s 1.svg" alt="" />
      </div>
      <div className="body">
        <div className="card">
          <header className="card__header">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </header>
          <div className="content">
            <h3>- About me:</h3>
            <div>
              <p>
                My name is Dylan, I am 26 years old and I have been actively
                interested in web development for one year now.
              </p>
              <p>
                I completed a six-month online course with OpenClassrooms to
                strengthen my skills and I am currently seeking my first job or
                an apprenticeship to continue my learning and advance my career
                as a web developer.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <header className="card__header">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </header>
          <div className="content">
            <h3>- Technical skills:</h3>
            <div>
              <p>
                As a self-taught individual, I have acquired a deep knowledge of
                React and its ecosystem, as well as HTML, CSS, and JavaScript.
              </p>
              <p>
                I am able to create intuitive and aesthetically pleasing web
                applications through my understanding of React components and
                state management.
              </p>
              <p>
                I am also passionate about the latest trends in web development
                and enjoy learning new skills to improve as a developer.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <header className="card__header">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </header>
          <div className="content">
            <h3>- Professional goals:</h3>
            <p>
              My long-term career goals are to merge my front-end development
              skills with UX/UI knowledge to become a versatile developer. I
              also aim to contribute to creating a component library or create
              my own library to assist other developers in creating web
              applications more easily. I am determined to keep learning and
              growing as a developer to achieve these goals.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

// professional goals
const Container = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 5rem 2.4rem;
  color: var(--text-color);

  .header {
    margin: 0 auto;
    max-width: 100rem;
    display: flex;
    align-items: center;
    gap: var(--gap-24);
  }

  img {
  }

  .body {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--gap-24);
    margin-top: 4.4rem;
    width: 100%;
    margin-bottom: 2.4rem;

    .card {
      width: 100%;

      max-width: 40rem;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      /* padding: 0 2.4rem; */
      border-radius: 0.8rem;
      box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);

      &__header {
        display: flex;
        align-items: center;
        height: 3.2rem;
        border-bottom: 2px solid var(--color-grey-200);
        padding: 0 1.6rem;

        .dot {
          height: 0.8rem;
          width: 0.8rem;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          margin-right: 0.8rem;

          &:nth-child(1) {
            background-color: #4caf50;
          }
          &:nth-child(2) {
            background-color: #ff9800;
          }
          &:nth-child(3) {
            background-color: #f44336;
          }
        }
      }

      .content {
        padding: 2.4rem;

        div {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }

        h3 {
          font-size: var(--font-size-22);
          margin-bottom: 1.6rem;
          /* filter: var(--fileredShadow); */
        }

        p {
          font-size: var(--font-size-18);
          line-height: 1.4;
          font-style: italic;
        }
      }
    }
  }
`;
