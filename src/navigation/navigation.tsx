import React, { useEffect } from "react";
import "../index.css";
import HomePage from "../screens/main page";
import {  connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AboutScreen from "../screens/AboutScreen";
import SignInSignUp from "../screens/loginScreen";
import Cart from "../screens/cartScreen";
import ProductScreen from "../screens/adminPage.product.screen";
import { selectorProduct, selectorUserData } from "../redux/store/selector";
import { initialCallRequest } from "../redux/action/initialCall.action";

const Navigation: React.FC = ({ initialCall, product }: any) => {
  useEffect(() => {
    initialCall();
  }, []);
  return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<SignInSignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/admin/product"
            element={<ProductScreen product={product} />}
          />
        </Routes>

  );
};
const mapStateToProps = (state: any) => {
  return {
    product: selectorProduct(state),
  };
};
const mapDispatchToProps = {
  initialCall: initialCallRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
