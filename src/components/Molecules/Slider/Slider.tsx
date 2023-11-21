"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import "./slider.css";
import {
    ChevronRightIcon,
    ChevronLeftIcon
} from '@heroicons/react/24/outline';

const slides = [
    {
        id: '1',
        title: 'TITLE 1',
        image: '/images/home-hero-2.png',
        altText: ''
    },
    {
        id: '2',
        title: 'TITLE 1',
        image: '/images/real-estate-agents.png',
        altText: ''
    },
    {
        id: '3',
        title: 'TITLE 1',
        image: '/images/home-hero-3.png',
        altText: ''
    },
]

const options = {
    loop: true,
}

const autoplayOptions = {
    delay: 7000, 
    stopOnMouseEnter: true,
}

const Slider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options,[Autoplay(autoplayOptions)]);

    const scrollPrev = () => {
        if (emblaApi) emblaApi.scrollPrev();
    }

    const scrollNext = () => {
        if (emblaApi) emblaApi.scrollNext();
    }

    const scrollTo = (index: number) => {
        console.log("index",emblaApi)
        
        if (emblaApi) emblaApi.scrollTo(index);
        if (emblaApi) console.log(emblaApi.slidesInView()); // <-- Pass true to the slidesInView method
    }

    return (
        <div className="relative">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide) => (
                        <div key={slide.id} className="embla__slide w-full h-[550px] relative">
                            <h1>{slide.title}</h1>
                            <Image 
                                src={slide.image} 
                                alt={slide.altText} 
                                fill 
                                className="object-cover" 
                            />
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex justify-center gap-x-4">
                                {slides.map((item, index) => (
                                    <button
                                        key={item.id} 
                                        onClick={() => scrollTo(index)} 
                                        className={`flex w-8 h-1 bg-white/50 hover:bg-white/100 duration-150`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}                
                </div>
            </div>
            <button onClick={scrollPrev}>
                <ChevronLeftIcon className="z-50 text-white/50 hover:text-white 100 duration-150 w-10 lg:w-20 absolute top-1/2 left-1 transform -translate-y-1/2"/>
            </button>
            <button onClick={scrollNext}>
                <ChevronRightIcon className="z-50 text-white/50 hover:text-white 100 duration-150 w-10 lg:w-20 absolute top-1/2 right-1 transform -translate-y-1/2"/>
            </button>
        </div>
    )
};

export default Slider;