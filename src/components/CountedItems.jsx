import React from "react";
import { List } from "./List";
import { TextContent } from "./TextContent";
import { Button } from "./Button";
import { reducer, initialState } from "./reducer";

export const CountedItems = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addItemClick = React.useCallback(() => {
    dispatch({ type: "addItem" });
  }, []);

  const deleteItemClick = React.useCallback(() => {
    dispatch({ type: "deleteItem" });
  }, []);

  return (
    <>
      <Button text="Add item" onClick={addItemClick} />
      <Button text="Delete item" onClick={deleteItemClick} />

      <TextContent
        style={{ fontWeight: "bold" }}
        text={`Current count: ${state.count}`}
      />

      <List items={state.items} />
    </>
  );
};
