import React from "react";

export const ListItem = React.memo(({ text }) => {
  return <li>{text}</li>;
});

ListItem.displayName = "ListItem";
