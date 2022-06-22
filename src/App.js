import React from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Checkout } from "./components";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CustomLoader from "./ui-components/CustomLoader";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import ForgotPassword from "./components/LoginRegister/ForgotPassword/ForgotPassword";
import LinearRegression from "../src/regression/App";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [isLoadingCart, setIsLoadingCart] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [isUpdateCart, setIsUpdateCart] = useState(false);
  const [loadingCheckout, setLoadingCheckout] = useState(false);

  const { currentUser } = useAuth();

  const fetchProducts = async () => {
    setIsLoadingProducts(true);
    const { data } = await commerce.products.list();

    setProducts(data);
    setIsLoadingProducts(false);
  };

  const fetchCart = async () => {
    setIsLoadingCart(true);
    const cart = await commerce.cart.retrieve();
    setCart(cart);
    setIsLoadingCart(false);
  };

  const handleAddToCart = async (productId, quantity) => {
    setIsAddToCart(true);
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
    setIsAddToCart(false);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    setIsUpdateCart(true);
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
    setIsUpdateCart(false);
  };

  const handleRemoveFromCart = async (productId) => {
    setIsUpdateCart(true);
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
    setIsUpdateCart(false);
  };

  const handleEmptyCart = async () => {
    setIsUpdateCart(true);
    const { cart } = await commerce.cart.empty();

    setCart(cart);
    setIsUpdateCart(false);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <AuthProvider>
        <div>
          {(isLoadingProducts ||
            isLoadingCart ||
            isUpdateCart ||
            loadingCheckout ||
            isAddToCart) && <CustomLoader />}
          <Navbar totalItems={cart.total_items} />
          <Routes>
            <Route
              path="/"
              element={
                <Products products={products} onAddToCart={handleAddToCart} />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleUpdateCartQty={handleUpdateCartQty}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleEmptyCart={handleEmptyCart}
                />
              }
            />

            {!currentUser && (
              <Route path="/login" element={<LoginRegister />} />
            )}

            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route
              path="/checkout"
              element={
                <Checkout
                  cart={cart}
                  order={order}
                  onCaptureCheckout={handleCaptureCheckout}
                  error={errorMessage}
                  setLoadingCheckout={setLoadingCheckout}
                />
              }
            />
            <Route path="/regression" element={<LinearRegression />} />
          </Routes>
        </div>
      </AuthProvider>
    </div>
  );
};

export default App;
