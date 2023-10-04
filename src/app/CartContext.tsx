"use client";

import { createContext, useState } from "react";

interface Props {
    children: any;
}

interface CartContextValue {
    cartOpen: boolean;
    toggleCart: () => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: Props) => {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!cartOpen);

        setTimeout(() => {
            setCartOpen(cartOpen);
        }, 3000);
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
                handleMouseEnter,
                handleMouseLeave,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
