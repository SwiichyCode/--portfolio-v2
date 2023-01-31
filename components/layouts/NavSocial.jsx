import React from "react";
import styled from "styled-components";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { HrefLink } from "../common/HrefLink";

export const NavSocial = () => {
  const items = [
    {
      icon: <BsTwitter />,
      url: "https://twitter.com/SwiichyCode_",
      className: "twitter",
    },
    {
      icon: <BsGithub />,
      url: "https://github.com/SwiichyCode",
      className: "github",
    },
  ];
  return (
    <Navigation>
      <List>
        {items.map(({ icon, url, className }, index) => (
          <ItemList key={index}>
            <HrefLink href={url} icon={icon} className={className} />
          </ItemList>
        ))}
      </List>
    </Navigation>
  );
};

const Navigation = styled.nav``;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const ItemList = styled.li`
  display: flex;
  align-items: center;
  font-size: var(--font-size-20);
  background: transparent;

  a {
    color: var(--color-black);
    border-radius: 8px;
    padding: 0.7rem;
  }

  .twitter {
    color: var(--color-twitter);
  }
`;
