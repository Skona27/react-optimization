import React from "react";
import { List } from "./List";
import { TextContent } from "./TextContent";

export const CountedItems = () => {
  const [items, setItems] = React.useState([]);
  const [count, setCount] = React.useState(0);

  const addItemClick = () => {
    setItems([...items, count]);
    setCount(count + 1);
  };

  const deleteItemClick = () => {
    setItems(items.slice(0, items.length - 1));
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={addItemClick}>Add item</button>
      <button onClick={deleteItemClick}>Delete item</button>

      <TextContent
        style={{ fontWeight: "bold" }}
        text={`Current count: ${count}`}
      />

      <List items={items} />
    </>
  );
};
