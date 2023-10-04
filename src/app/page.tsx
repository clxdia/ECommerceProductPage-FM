"use client";
import Image from "next/image";

import pic1 from "../../public/images/image-product-1.jpg";
import pic2 from "../../public/images/image-product-2.jpg";
import pic3 from "../../public/images/image-product-3.jpg";
import pic4 from "../../public/images/image-product-4.jpg";

import smallPic1 from "../../public/images/image-product-1-thumbnail.jpg";
import smallPic2 from "../../public/images/image-product-2-thumbnail.jpg";
import smallPic3 from "../../public/images/image-product-3-thumbnail.jpg";
import smallPic4 from "../../public/images/image-product-4-thumbnail.jpg";

import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import SwiperDSK from "@/components/SwiperDSK";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import CartButton from "@/components/CartButton";
import product from "../data/product";

export default function Home() {
    const [showPics, setShowPics] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const thumbnails = [smallPic1, smallPic2, smallPic3, smallPic4];
    const pics = [pic1, pic2, pic3, pic4];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleThumbnailClick = (index: any) => {
        setActiveIndex(index);
    };

    const handleNextImage = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % pics.length);
    };

    const handlePrevImage = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? pics.length - 1 : prevIndex - 1
        );
    };

    const item = product;

    return (
        <>
            <main className="text-black md:max-w-[1200px] md:m-auto bg-white font-kumbh flex flex-col mt-[70px] md:mt-0 z-[0] relative align-middle items-center justify-center md:w-[95%] md:h-screen md:min-h-[1000px]">
                <div className="flex md:flex-row flex-col md:gap-[6vw] gap-5 items-center align-middle justify-center md:w-[90%]">
                    <section className="w-full md:w-1/2 z-[0] relative flex md:flex-col md:items-stretch items-center">
                        <button
                            className="md:hidden p-2 bg-white rounded-full absolute left-5"
                            onClick={handlePrevImage}
                        >
                            <BiChevronLeft size={30} />
                        </button>
                        <Image
                            src={pics[activeIndex]}
                            width={1000}
                            height={1000}
                            alt=""
                            className="md:rounded-xl"
                            onClick={() => setShowPics(!showPics)}
                        />
                        <button
                            className="md:hidden p-2 bg-white rounded-full absolute right-5"
                            onClick={handleNextImage}
                        >
                            <BiChevronRight size={30} />
                        </button>
                        <div className="md:flex justify-between mt-7 hidden">
                            {thumbnails.map((pic, index) => (
                                <div
                                    key={pic as any}
                                    className={`border-[2px] ${
                                        index === activeIndex
                                            ? "border-orange"
                                            : "border-white"
                                    } rounded-[10px] cursor-pointer`}
                                    onClick={() => handleThumbnailClick(index)}
                                >
                                    <Image
                                        src={pic}
                                        width={120}
                                        height={120}
                                        alt=""
                                        className={`${
                                            index === activeIndex
                                                ? "opacity-40"
                                                : "hover:opacity-40"
                                        } rounded-lg h-auto min-w-[70px] w-[6vw]`}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="w-[90%] m-auto flex flex-col gap-3 md:gap-5 font-bold md:w-1/2">
                        <p className="uppercase text-orange text-sm font-bold tracking-widest">
                            sneaker company
                        </p>
                        <h2 className="text-3xl md:text-5xl">
                            Fall Limited Edition Sneakers
                        </h2>
                        <p className="font-normal text-dark_grayish_blue md:text-lg md:mt-7 text-lg">
                            These low-profile sneakers are your perfect casual
                            wear companion. Featuring a durable rubber outer
                            sole, theyll withstand everything the weather can
                            offer.
                        </p>
                        <div className="flex justify-between mt-4 mb-4 md:flex-col md:gap-4">
                            <div className="flex gap-5 font-bold">
                                <p className="text-3xl">$125.00</p>
                                <p className="bg-orange/20 p-1 px-2 text-lg rounded-lg text-orange">
                                    50%
                                </p>
                            </div>
                            <div className="font-bold">
                                <s className="text-lg text-grayish_blue">
                                    $250.00
                                </s>
                            </div>
                        </div>
                        <div className="md:flex-row flex-col flex md:w-full md:gap-5">
                            <div className="flex justify-between rounded-lg bg-light_grayish_blue p-5 items-center font-bold mb-4 md:w-1/3">
                                <FaMinus
                                    color="hsl(26, 100%, 55%)"
                                    size={15}
                                    className="cursor-pointer"
                                    onClick={() =>
                                        setQuantity((prevNumber) =>
                                            prevNumber === 1
                                                ? 1
                                                : prevNumber - 1
                                        )
                                    }
                                />
                                <p className="font-bold text-xl">{quantity}</p>
                                <FaPlus
                                    color="hsl(26, 100%, 55%)"
                                    size={15}
                                    className="cursor-pointer"
                                    onClick={() => setQuantity(quantity + 1)}
                                />
                            </div>
                            <CartButton item={item} quantity={quantity} />
                        </div>
                    </section>
                </div>
            </main>
            {showPics ? (
                <div className="absolute hidden z-[10] md:flex flex-col justify-center align-middle items-center right-0 left-0 bottom-0 top-0 w-full h-full bg-black/50">
                    <SwiperDSK showPics={showPics} setShowPics={setShowPics} />
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
