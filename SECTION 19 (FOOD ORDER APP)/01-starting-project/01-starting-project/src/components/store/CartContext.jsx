import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //.update the state to add a meal item
    const exisitingCartItemINdex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (exisitingCartItemINdex > -1) {
      const existingItem = state.items[exisitingCartItemINdex];
      const updatedItem = {
        ...state.items[exisitingCartItemINdex],
        quantity: existingItem.quantity + 1,
      };
      updatedItems[exisitingCartItemINdex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    //.Remove the item in the cart
    const exisitingCartItemINdex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const exisitingCartItem = state.items[exisitingCartItemINdex];
    const updatedItems = [...state.items];
    if (exisitingCartItem.quantity === 1) {
      updatedItems.splice(exisitingCartItemINdex, 1);
    } else {
      const updatedItem = {
        ...exisitingCartItem,
        quantity: exisitingCartItem.quantity - 1,
      };
      updatedItems[exisitingCartItemINdex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  }
  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
