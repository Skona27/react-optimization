import React from "react";

export const Button = React.memo(({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
});

Button.displayName = "Button";
