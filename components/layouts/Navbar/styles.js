import styled from "styled-components";

export const Navigation = styled.nav`
  @media screen and (max-width: 1110px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: var(--gap-24);
  padding-top: 0.4rem;
`;

export const ItemList = styled.li`
  font-size: var(--font-size-15);
  font-weight: var(--font-weight-700);
  color: var(--text-color);
  transition: var(--transition-all);
  cursor: pointer;

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  &:hover {
    color: var(--color-black);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
