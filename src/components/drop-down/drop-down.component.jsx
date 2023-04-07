import Button from "../button/button-component";
import CartItem from "../cart-item/cart-item.component";
import {
  DropDownContainer,
  EmptyMessage,
  CartItemss,
} from "./drop-down.style.jsx";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const checkOutHandle = () => {
    navigate("/checkout");
  };
  return (
    <DropDownContainer>
      <CartItemss>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} prop={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemss>
      <Button onClick={checkOutHandle}>CHECKOUT</Button>
    </DropDownContainer>
  );
};
export default DropDown;
