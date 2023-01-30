import React, { useState } from "react";
import styled from "styled-components";
import { tabsItems } from "./data";

export const TabsStory = () => {
  const [tabs, setTabs] = useState(tabsItems);

  const activeTab = tabs.find((item) => item.active === true);

  const handleChangeTab = (index) => {
    const newTabs = tabs.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setTabs(newTabs);
  };

  console.log(activeTab);

  return (
    <Container>
      <TabsWrapper>
        {tabs.map((item, index) => (
          <Tabs
            tabs={item.active}
            key={index}
            onClick={() => handleChangeTab(index)}
          >
            <TabIndex>{index + 1}</TabIndex>
            <TabWrapper>
              <TabTitle>{item.title}</TabTitle>
              <TabDescription>{item.description}</TabDescription>
            </TabWrapper>
          </Tabs>
        ))}
      </TabsWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const TabsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--gap-12);
`;

const Tabs = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  border: 2px solid rgb(226 232 240);

  border-radius: var(--radius-md);
  background: var(--color-white);
  padding: var(--gap-24);
  gap: calc(var(--gap-24) * 2);
  color: var(--text-color);
  cursor: pointer;

  &:hover {
    border: 2px solid transparent;
    background: linear-gradient(white, white) padding-box,
      linear-gradient(to right, #007cf0, #00dfd8) border-box;
  }
`;

const TabIndex = styled.span`
  font-size: 4.6rem;
  font-family: var(--font-robotoMono);
`;

const TabTitle = styled.span`
  font-size: 2rem;
`;

const TabDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
`;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-12);
`;
