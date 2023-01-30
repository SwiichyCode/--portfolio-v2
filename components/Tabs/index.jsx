import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

export const Tabs = ({ tabsItems }) => {
  const [tabs, setTabs] = useState(tabsItems);
  const [activeTab, setActiveTab] = useState(tabs[0].tabName);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <S.Container>
      <S.StyledTabs className="nav">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`nav__item ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.tabName}
            <img
              src="Twitter_perspective_matte_s1.svg"
              alt="arrow"
              width={50}
              height={50}
            />
            {/* <img src="tabsIcon1.svg" alt="arrow" width={50} height={50} /> */}
          </li>
        ))}
      </S.StyledTabs>

      <div className="content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`content__item ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.render}
          </div>
        ))}
      </div>
    </S.Container>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
