"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { TbTrash } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { CartContext } from "../app/CartContext";
import { removeItem, resetCart } from "../redux/features/cartSlice";

interface Props {
    open: boolean;
}

const Cart = ({ open }: Props) => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    const { handleMouseLeave } = useContext(CartContext) || {
        handleMouseLeave: () => {},
    };

    const totalPrice = () => {
        let total = 0;
        products.forEach((item: any) => (total += item.quantity * 125));
        return total.toFixed(2);
    };

    if (products.length === 0) {
        return (
            <div
                open={open}
                className="rounded-lg absolute md:right-[-5%] md:left-auto right-0 left-0  md:top-[85px] z-[99] bg-white shadow-2xl md:w-[350px] w-[100%] top-[70px] text-center font-semibold "
                onMouseLeave={handleMouseLeave}
            >
                <div className="border-b-[1px] border-b-gray-200">
                    <h1 className="text-[16px] text-left p-6">Cart</h1>
                </div>
                <div className="p-20 flex justify-center">
                    <h2 className="text-dark_grayish_blue  text-[16px]">
                        Your cart is empty.
                    </h2>
                </div>
            </div>
        );
    }
    if (products.length > 0) {
        return (
            <div
                open={open}
                className="rounded-lg absolute md:right-[-5%] md:left-auto right-0 left-0  md:top-[85px] z-[99] bg-white shadow-2xl md:w-[350px] w-[100%] top-[70px] text-center font-medium text-grayish_blue"
                onMouseLeave={handleMouseLeave}
            >
                <div className="border-b-[1px] border-b-gray-200">
                    <h1 className="text-[16px] font-bold text-black text-left p-6">
                        Cart
                    </h1>
                </div>
                <div className="max-h-[50vh] overflow-y-scroll p-6">
                    {products?.map((item: any) => (
                        <div key={item.id} className="flex justify-between">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width="100"
                                height="100"
                                className="w-[60px] h-[60px] rounded-lg"
                            />
                            <div>
                                <p className=" text-[15px]">{item.title}</p>
                                <div className="w-[100%] relative flex flex-col">
                                    <div className="flex gap-1">
                                        <p className=" text-blueish text-[15px]">
                                            {item.price}
                                        </p>
                                        <span>x</span>
                                        <p>{item.quantity} </p>
                                        <strong className="text-black">
                                            ${totalPrice()}
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            <button
                                className=" bottom-0 right-0"
                                onClick={() => dispatch(removeItem(item.id))}
                            >
                                <TbTrash size={20} stroke="grey" />
                            </button>
                        </div>
                    ))}
                    <button className="mt-5 w-full flex justify-center gap-3 items-center bg-orange p-5 text-white shadow-2xl rounded-xl shadow-orange/50 h-fit cursor-pointer hover:bg-orange/50">
                        <p className="text-lg font-bold">Checkout</p>
                    </button>
                </div>
            </div>
        );
    }
};

export default Cart;
