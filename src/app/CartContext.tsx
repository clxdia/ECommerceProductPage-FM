"use client";

import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const products = useSelector((state) => state.cart.products);
    const [cartOpen, setCartOpen] = useState(false);

    const [notif, setNotif] = useState();

    const handleQuantity = () => {
        products.forEach((item) => {
            setNotif((prevNotif) => prevNotif + item.quantity);
        });
    };

    console.log("notifcc" + notif);

    const toggleCart = () => {
        setCartOpen(!cartOpen);

        setTimeout(() => {
            setCartOpen(cartOpen);
        }, 3000);
        console.log(notif);
    };

    const removeCartNotif = () => {
        if (notif === 1) {
            setNotif(false);
        } else {
            setNotif(notif - 1);
        }
    };

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
                notif,
                removeCartNotif,
                handleMouseEnter,
                handleMouseLeave,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
