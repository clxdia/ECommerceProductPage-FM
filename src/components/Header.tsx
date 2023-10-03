"use client";
import React, { useContext, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import pfp from "../../public/images/image-avatar.png";
import Image from "../../node_modules/next/image";
import Cart from "./Cart";
import { CartContext } from "../app/CartContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    const { cartOpen } = useContext(CartContext);

    const { handleMouseEnter } = useContext(CartContext);

    const products = useSelector((state) => state.cart.products);

    const [qnt, setQnt] = useState();

    const quantityBadge = () => {
        let quantity = 0;
        products.forEach((item) => (quantity += item.quantity));

        return quantity;
    };

    return (
        <>
            <header className="bg-white w-full md:p-0 p-3 text-black flex fixed top-0 z-[1]">
                <nav className="md:max-w-[1200px] w-[100%] md:m-auto flex relative justify-between md:border-b-[1px] md:border-b-grayish_blue">
                    <ul className="flex gap-4 md:gap-10 items-center">
                        <li className="absolute top-0 z-[4] bg-white block md:hidden">
                            <Hamburger
                                size={20}
                                toggled={isOpen}
                                toggle={setOpen}
                                label="Show menu"
                                color="#000"
                                fill-rule=""
                            />
                        </li>
                        <li className="ml-14 md:ml-0 text-4xl font-bold">
                            sneakers
                        </li>
                        <li className="text-dark_grayish_blue py-10 border-b-[2px] border-b-white hover:border-b-[2px] hover:border-b-orange md:block hidden cursor-pointer">
                            Collections
                        </li>
                        <li className="text-dark_grayish_blue py-10 border-b-[2px] border-b-white hover:border-b-[2px] hover:border-b-orange md:block hidden cursor-pointer">
                            Men
                        </li>
                        <li className="text-dark_grayish_blue py-10 border-b-[2px] border-b-white hover:border-b-[2px] hover:border-b-orange md:block hidden cursor-pointer">
                            Women
                        </li>
                        <li className="text-dark_grayish_blue py-10 border-b-[2px] border-b-white hover:border-b-[2px] hover:border-b-orange md:block hidden cursor-pointer">
                            About
                        </li>
                        <li className="text-dark_grayish_blue py-10 border-b-[2px] border-b-white hover:border-b-[2px] hover:border-b-orange md:block hidden cursor-pointer">
                            Contact
                        </li>
                    </ul>
                    <ul className="flex items-center gap-5 md:gap-7">
                        <li
                            className="cursor-pointer relative"
                            onMouseEnter={handleMouseEnter}
                        >
                            <svg
                                width="22"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                    fill="#69707D"
                                    fill-rule="nonzero"
                                />
                            </svg>

                            <div className="bg-redish w-4 h-4 absolute bottom-3 px-[0.6rem] bg-orange right-[-5px] rounded-full flex justify-center text-white text-[10px]">
                                {quantityBadge()}
                            </div>
                        </li>
                        <li className="w-12 rounded-full p-1 border-[2px] border-white hover:border-orange cursor-pointer">
                            <Image
                                src={pfp}
                                width={100}
                                height={100}
                                alt="icon"
                            />
                        </li>
                    </ul>
                    {cartOpen && <Cart onClick={() => setOpen(!open)} />}
                </nav>

                {isOpen ? (
                    <div className="w-full md:hidden top-0 right-0 h-screen bg-black/60 z-[2] fixed">
                        <div className="relative bg-white w-2/3 h-screen text-black pt-20 flex">
                            <nav className="">
                                <ul className="font-black">
                                    <li className="px-6 py-2 ">Collections</li>
                                    <li className="px-6 py-2">Men</li>
                                    <li className="px-6 py-2">Women</li>
                                    <li className="px-6 py-2">About</li>
                                    <li className="px-6 py-2">Contact</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </header>
        </>
    );
};

export default Header;
function quantityBadge() {
    throw new Error("Function not implemented.");
}
