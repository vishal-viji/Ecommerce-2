import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignupScreen from "./components/screens/SignupScreen";
import LoginScreen from "./components/screens/LoginScreen";
import ProductDetails from "./components/screens/ProductDetails";
import CartScreen from "./components/screens/CartScreen";
import ShippingScreen from "./components/screens/ShippingScreen";
import PlaceOrderScreen from "./components/screens/PlaceOrderScreen";
import PaymentScreen from "./components/screens/PaymentScreen";
import OrderScreen from "./components/screens/OrderScreen";
import ProductListScreen from "./components/screens/ProductListScreen";
import ProductEditScreen from "./components/screens/ProductEditScreen";
import OrderListScreen from "./components/screens/OrderListScreen";
import UserListScreen from "./components/screens/UserListScreen";
import UserEditScreen from "./components/screens/UserEditScreen";
import ProfileScreen from "./components/screens/ProfileScreen";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
            <Routes>
              <Route path="/signup" element={<SignupScreen />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<LoginScreen />} />
            </Routes>
            <Routes>
              <Route path="/cart/:id?" element={<CartScreen />} />
            </Routes>
            <Routes>
              <Route path="/checkout" element={<ShippingScreen />} />
            </Routes>
            <Routes>
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
            </Routes>
            <Routes>
              <Route path="/payment" element={<PaymentScreen />} />
            </Routes>
            <Routes>
              <Route path="/order/:id" element={<OrderScreen />} />
            </Routes>
            <Routes>
              <Route path="/admin/productList" element={<ProductListScreen />} />
            </Routes>
            <Routes>
              <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
            </Routes>
            <Routes>
              <Route path="/admin/orderlist" element={<OrderListScreen />} />
            </Routes>
            <Routes>
              <Route path="/admin/userlist" element={<UserListScreen />} />
            </Routes>
            <Routes>
              <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            </Routes>
            <Routes>
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
