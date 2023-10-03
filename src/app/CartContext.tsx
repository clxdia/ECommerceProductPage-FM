"use client";

import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const products = useSelector((state) => state.cart.products);
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!cartOpen);

        setTimeout(() => {
            setCartOpen(cartOpen);
        }, 3000);
    };

    // const removeCartNotif = () => {
    //     if (notif === 1) {
    //         setNotif(false);
    //     } else {
    //         setNotif(notif - 1);
    //     }
    // };

    const handleMouseEnter = () => {
        setCartOpen(true);
    };

    const handleMouseLeave = () => {
        setCartOpen(false);
    };

    return (
        <CartContext.Provider
            value={{
                cartOpen,
                toggleCart,
                // notif,
                // removeCartNotif,
                handleMouseEnter,
                handleMouseLeave,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
