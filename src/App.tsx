import React from "react";
import "./index.css";
import HomePage from "./screens/main page";
import { Route, Routes } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import SignInSignUp from "./screens/loginScreen";
import Cart from "./screens/cartScreen";


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/login" element={<SignInSignUp />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
