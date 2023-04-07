import "./checkout-item.style.scss";
import { addItemToCart } from "../../store/cart/cart.action";
import { removeItemFromCart } from "../../store/cart/cart.action";
import { clearItemFromCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
const CheckoutItem = ({ id, cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const removeButtonHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItem = () => dispatch(removeItemFromCart(cartItems, cartItem));
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="blabla"></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span onClick={removeButtonHandler} className="remove-button">
        &#10005;
      </span>
    </div>
  );
};
export default CheckoutItem;
