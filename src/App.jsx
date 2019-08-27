import React from "react";
import { List } from "./components/List";
import { TextContent } from "./components/TextContent";

export default () => {
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
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <button onClick={addItemClick}>Add item</button>
      <button onClick={deleteItemClick}>Delete item</button>

      <TextContent
        style={{ fontWeight: "bold" }}
        text={`Current count: ${count}`}
      />

      <List items={items} />
      <TextContent text="Lorem ipsum dolor sit amet." />
    </div>
  );
};
