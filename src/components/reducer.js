export const initialState = {
  items: [],
  count: 0
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      return {
        count: state.count + 1,
        items: [...state.items, state.count]
      };

    case "deleteItem":
      return {
        count: state.count - 1,
        items: state.items.slice(0, state.items.length - 1)
      };

    default:
      return state;
  }
};
