import styled from "styled-components";
import { StyledButton } from "@/components/common/Button";

export const Section = styled.section`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  filter: var(--filterShadow);
  padding: 15rem 2.4rem 8rem 2.4rem;
  /* height: 100vh; */

  @media (max-width: 550px) {
    padding: 5rem 2.4rem 8rem 2.4rem;
  }

  .hero-header {
    display: flex;
    align-items: center;
    gap: var(--gap-12);

    span {
      font-size: 4rem;
    }
  }

  .hero-body {
    h1 {
      display: block;
      font-size: var(--font-size-big);
      letter-spacing: -0.2rem;
      margin-bottom: 1.4rem;

      @media (max-width: 1110px) {
        font-size: 5rem;
      }

      .firstName {
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 100%;
        background-position: 100%;
        background-image: ${(props) => props.color};
        transition: background-position 275ms ease;
      }
    }

    p {
      width: 100%;
      max-width: 800px;
      font-size: var(--font-size-22);
      margin-bottom: 2.4rem;

      @media (max-width: 1110px) {
        font-size: 1.8rem;
        max-width: 600px;
      }
    }
  }

  .hero-footer {
    display: flex;
    flex-direction: column;
    gap: var(--gap-24);

    .wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 2rem;
    }

    .inspired {
      font-size: var(--font-size-16);
      font-weight: var(--font-weight-500);

      a {
        color: var(--color-text);
        font-weight: var(--font-weight-700);
      }
    }

    .icons {
      display: flex;
      align-items: center;
      font-size: var(--font-size-32);
      gap: var(--gap-12);

      a {
        display: flex;
        cursor: pointer;
      }

      .next-icon {
        color: var(--color-black);
      }

      .react-icon {
        color: var(--color-react);
      }

      .tailwind-icon {
        color: var(--color-tailwind);
      }

      span {
        width: 3.2rem;
        height: 3.2rem;
        font-size: var(--font-size-24);
      }
    }

    p {
      font-size: var(--font-size-18);
      font-weight: var(--font-weight-500);
    }
  }
`;

export const Welcome = styled.img`
  width: 50px;
`;

export const ExploreButton = styled(StyledButton)`
  position: relative;
  width: 100%;
  max-width: 13rem;
  height: 3.8rem;
  color: var(--color-white);

  background: var(--color-black);
  font-weight: 600;
  padding: 0;

  /* box-shadow: var(--shadow-large); */
  box-shadow: 0 0 0 0 rgba(0, 210, 219, 0.7);
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);

  @media (max-width: 550px) {
    padding: 1rem 1.5rem;
  }

  &:hover {
    background: var(--color-white);
    color: var(--color-black);
    border: 1px solid var(--color-black);
    max-width: ${(props) => `${props.mWidth - 2}px`};
    animation: none;
  }

  @keyframes pulse {
    to {
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
  }
`;
