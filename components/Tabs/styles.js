import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 100rem;

  .content {
    padding: 2rem;
  }

  .content__item {
    display: none;
  }

  .content__item.active {
    display: block;
  }
`;

export const StyledTabs = styled.ul`
  display: flex;

  .nav__item {
    width: 100%;
    padding: 1rem 2rem;
    cursor: pointer;
    color: #64748b;
    font-size: 2.6rem;
    text-transform: capitalize;
  }

  .nav__item.active {
    color: var(--color-purple);
  }
`;
