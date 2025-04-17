import { createContext } from "react";
import { useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgres, setUserprogres] = useState("");

  function showCart() {
    setUserprogres("cart");
  }

  function hideCart() {
    setUserprogres("");
  }

  function showCheckout() {
    setUserprogres("checkout");
  }

  function hideCheckout() {
    setUserprogres("");
  }

  const userProgressCtx = {
    progress: userProgres,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
