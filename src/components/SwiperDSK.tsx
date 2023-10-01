"use client";

import React, { useState } from "react";

import "../styles/swiperDSK.css";

import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import pic1 from "../../public/images/image-product-1.jpg";
import pic2 from "../../public/images/image-product-2.jpg";
import pic3 from "../../public/images/image-product-3.jpg";
import pic4 from "../../public/images/image-product-4.jpg";

import smallPic1 from "../../public/images/image-product-1-thumbnail.jpg";
import smallPic2 from "../../public/images/image-product-2-thumbnail.jpg";
import smallPic3 from "../../public/images/image-product-3-thumbnail.jpg";
import smallPic4 from "../../public/images/image-product-4-thumbnail.jpg";

interface SwiperDSKProps {
    showPics: boolean;
    setShowPics: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SwiperDSK({ showPics, setShowPics }: SwiperDSKProps) {
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
    return (
        <>
            <section className="md:w-fit z-[0] relative md:flex flex-col m-auto items-center hidden">
                <button
                    className="flex w-[104%] align-middle justify-end mb-5 cursor-pointer absolute top-[-50px]"
                    onClick={() => setShowPics(!showPics)}
                >
                    <IoClose fill="hsl(26, 100%, 55%)" size={35} />
                </button>
                <div className="flex items-center relative">
                    <button
                        className="p-2 bg-white rounded-full absolute left-[-20px]"
                        onClick={handlePrevImage}
                    >
                        <BiChevronLeft size={30} />
                    </button>

                    <Image
                        src={pics[activeIndex]}
                        width={500}
                        height={500}
                        alt=""
                        className="md:rounded-xl"
                    />
                    <button
                        className="p-2 bg-white rounded-full absolute right-[-20px]"
                        onClick={handleNextImage}
                    >
                        <BiChevronRight size={30} />
                    </button>
                </div>

                <div className="md:flex justify-between mt-10 hidden gap-5">
                    {thumbnails.map((pic, index) => (
                        <div
                            key={pic as any}
                            className={`${
                                index === activeIndex
                                    ? "border-orange bg-white border-[2px]"
                                    : "bg-white border-white/30 border-[2px]"
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
                                        ? "opacity-40 "
                                        : "hover:opacity-40"
                                } rounded-lg w-full h-auto`}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
