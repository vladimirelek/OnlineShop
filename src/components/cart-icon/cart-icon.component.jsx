import {
  ShoppingIcon,
  ItemCount,
  CartIconContainer,
} from "./cart-icon.style.jsx";
import "./cart-icon.style.jsx";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const clickHandle = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={clickHandle}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
