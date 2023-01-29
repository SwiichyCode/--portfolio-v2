import React from "react";
import styled from "styled-components";
import { BsGithub, BsTwitter } from "react-icons/bs";

export const NavSocial = () => {
  const items = [
    { icon: <BsTwitter />, url: "", className: "twitter" },
    { icon: <BsGithub />, url: "" },
  ];
  return (
    <Navigation>
      <List>
        {items.map(({ icon, url, className }, index) => (
          <ItemList key={index}>
            <ItemLink className={className} href={url}>
              {icon}
            </ItemLink>
          </ItemList>
        ))}
      </List>
    </Navigation>
  );
};

const Navigation = styled.nav`
  z-index: 1000;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const ItemList = styled.li`
  display: flex;
  align-items: center;
  font-size: var(--font-size-20);
  background: transparent;

  .twitter {
    color: var(--color-twitter);
  }

  &:hover a {
    color: var(--color-twitter);
  }
`;

const ItemLink = styled.a`
  color: var(--color-black);
  border-radius: 8px;
  padding: 0.7rem;
`;
