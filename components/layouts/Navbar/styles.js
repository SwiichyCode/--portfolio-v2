import styled from "styled-components";

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  align-items: center;
  gap: var(--gap-24);
  gap: ${({ mobile }) => (mobile ? "4.8rem" : "var(--gap-24)")};
  padding-top: 0.7rem;
`;

export const ItemList = styled.li`
  /* font-size: ${({ mobile }) =>
    mobile ? "2.4rem" : "var(--font-size-16)"}; */
  /* font-size: var(--font-size-16); */

  font-size: ${({ mobile }) => (mobile ? "2.4rem" : "var(--font-size-16)")};
  font-weight: var(--font-weight-700);
  color: var(--text-color);
  transition: var(--transition-all);
  cursor: pointer;

  a {
    color: var(--text-color);
    text-decoration: none;
    font-size: ${({ mobile }) => (mobile ? "2.4rem" : "var(--font-size-16)")};
  }

  &:hover {
    color: var(--color-black);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
