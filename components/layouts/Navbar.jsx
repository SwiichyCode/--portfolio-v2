import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  const items = [
    { text: "Projects", url: "" },
    { text: "About", url: "" },
    { text: "Contact", url: "" },
    { text: "Skills", url: "" },
    { text: "Blog", url: "" },
    { text: "Resume", url: "" },
  ];

  return (
    <Navigation>
      <List>
        {items.map((item, index) => (
          <ItemList key={index}>{item.text}</ItemList>
        ))}
      </List>
    </Navigation>
  );
};

const Navigation = styled.nav`
  @media screen and (max-width: 1110px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: var(--gap-24);
  padding-top: 0.4rem;
`;

const ItemList = styled.li`
  font-size: var(--font-size-15);
  font-weight: var(--font-weight-700);
  color: var(--text-color);
  transition: var(--transition-all);
  cursor: pointer;

  &:hover {
    color: var(--color-black);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
