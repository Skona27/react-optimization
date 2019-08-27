import React from "react";
import { TextContent } from "./components/TextContent";
import { CountedItems } from "./components/CountedItems";

export default () => {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <CountedItems />
      <TextContent text="Lorem ipsum dolor sit amet." />
    </div>
  );
};
