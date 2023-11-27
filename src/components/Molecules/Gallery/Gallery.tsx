"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image';
import "./gallery.css";
import {
    ChevronRightIcon,
    ChevronLeftIcon
} from '@heroicons/react/24/outline';
import Container from "@/components/Atoms/Container/Container";

type TSlide = string;

interface ISlides {
    slides: TSlide[]
}

const options = {
    loop: true,
}

const Gallery = ({ slides }: ISlides) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const arrowStlye = "z-50 text-white/80 hover:text-white 100 duration-150 w-10 lg:w-20 absolute top-1/2 transform -translate-y-1/2";
    const slideHeightStyle = "h-[400px] lg:h-[600px]";

    const scrollPrev = () => {
        if (emblaApi) emblaApi.scrollPrev();
    }

    const scrollNext = () => {
        if (emblaApi) emblaApi.scrollNext();
    }

    const scrollTo = (index : number) => {
        if (emblaApi) emblaApi.scrollTo(index)
    }

    return (
        <Container className="grid grid-cols-1 xl:grid-cols-3 xl:items-start xl:gap-x-8">
            <div className={`${slideHeightStyle} relative xl:col-span-2 mb-5 lg:mb-10`}>
                <div className="embla shadow-md" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((slide: TSlide) => (
                            <div 
                                key={slide} 
                                className={`${slideHeightStyle} embla__slide relative`}
                            >
                                <Image 
                                    src={slide} 
                                    alt=""
                                    fill 
                                    className="w-full h-full object-cover rounded-md" 
                                />
                            </div>
                        ))}             
                    </div>
                </div>
                <button onClick={scrollPrev}>
                    <ChevronLeftIcon className={`${arrowStlye} left-0`}/>
                </button>
                <button onClick={scrollNext}>
                    <ChevronRightIcon className={`${arrowStlye} right-0`}/>
                </button>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-2 lg:gap-3">
                {slides.map((slide: TSlide, index: number) => (
                    <div 
                        key={slide} 
                        className="embla__slide w-full h-[80px] sm:h-[100px] md:h-[120px] xl:h-[100px] relative shadow-sm cursor-pointer"
                        onClick={() => scrollTo(index)}
                    >
                        <Image 
                            src={slide} 
                            alt=""
                            fill 
                            className="object-cover rounded-md" 
                        />
                    </div>
                ))}             
            </div>
        </Container>
    )
};

export default Gallery;