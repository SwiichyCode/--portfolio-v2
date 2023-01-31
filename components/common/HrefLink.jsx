import React from "react";

export const HrefLink = ({ href, text, icon }) => {
  return (
    <a href={href} target="_blank">
      {icon} {text}
    </a>
  );
};
