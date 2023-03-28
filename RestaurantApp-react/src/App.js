import React, { useState } from "react";
import WrapperContainer from "./components/WrapperContainer";

import Header from "./components/Header";
import HeaderSummary from "./components/HeaderSummary";
import MenuList from "./components/MenuList";
import "./css/styles.css";
import Cart from "./components/Cart";
import CartProvider from "./store/CartProvider";
import Footer from "./components/Footer";

function App() {
    const [isCartShown, setIsCartShown] = useState(false);

    function showCartHandler() {
        setIsCartShown(true);
    }

    function hideCartHandler() {
        setIsCartShown(false);
    }

    return (
        <>
            <CartProvider>
                {isCartShown && <Cart onClose={hideCartHandler} />}
                <main>
                    <Header
                        title="Chef's Kitchen"
                        showCartHandler={showCartHandler}
                    />
                    <HeaderSummary />
                </main>
                <WrapperContainer>
                    <MenuList />
                </WrapperContainer>
            </CartProvider>
            <Footer />
        </>
    );
}

export default App;
