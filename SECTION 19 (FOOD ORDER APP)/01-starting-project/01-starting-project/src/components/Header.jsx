import logoImg from "../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "./store/CartContext";

import Button from "./UI/Button";
import userProgressContext from "./store/UserProgressContext";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(userProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleSHowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood-App</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleSHowCart}>
          Cart({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
