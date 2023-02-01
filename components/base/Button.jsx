import styled from "styled-components";

export const StyledButton = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  /* border: none; */
  border-radius: var(--radius-md);
  padding: 1rem 1.5rem;
  gap: var(--gap-12);
  transition: var(--transition-all);
  cursor: pointer;
`;
