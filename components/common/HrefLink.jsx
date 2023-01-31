import React from "react";

export const HrefLink = ({ href, text, icon, className }) => {
  return (
    <a href={href} target="_blank" className={`${className}`}>
      {icon} {text}
    </a>
  );
};
