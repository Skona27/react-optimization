import React from "react";
import { ListItem } from "./ListItem";

export const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
    </ul>
  );
};
