import React from "react";

export const TextContent = ({ text, ...rest }) => {
  return <p {...rest}>{text}</p>;
};
