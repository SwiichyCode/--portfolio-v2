import styled from "styled-components";
import { StyledButton } from "@/components/base/Button";

export const Container = styled.div`
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
    margin-bottom: 4.8rem;

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
`;

export const ExploreButton = styled(StyledButton)`
  border: none;
  position: relative;
  justify-content: initial;
  width: 100%;
  max-width: 13rem;
  height: 3.8rem;
  color: var(--color-white);
  background: var(--color-black);
  font-weight: 600;
  padding: 0;
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
