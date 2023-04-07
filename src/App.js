import "./category.style.scss";
import Home from "./router/Home/home.component";
import { Route, Routes } from "react-router-dom";
import Authentication from "./router/authentication/authentication.component";
import Navigation from "./router/navigation/nav-bar.component";
import Shop from "./router/shop/shop.component";
import Checkout from "./router/checkout/checkout.component";
import { useDispatch } from "react-redux";

import { checkUserSession } from "./store/user/user.action";
import { useEffect } from "react";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
