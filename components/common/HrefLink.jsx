import React from "react";
import styled from "styled-components";

export const HrefLink = ({ url, text, icon }) => {
  return (
    <a href={url} target="_blank" className="">
      {icon} {text}
    </a>
  );
};
