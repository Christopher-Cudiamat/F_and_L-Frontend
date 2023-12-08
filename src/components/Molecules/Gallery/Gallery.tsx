"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Container from "@/components/Atoms/Container/Container";
import { useEffect, useState } from "react";

type TSlide = string;
interface ISlides {
  slides: TSlide[];
  amenitiesDescription: string;
  lobbyDescription: string;
  unitDescription: string;
}

const options = {
  loop: true,
};

const propertyAreas = ["amenities", "lobby", "unit"];

const Gallery: React.FC<ISlides> = ({
  slides,
  amenitiesDescription,
  lobbyDescription,
  unitDescription,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedArea, setSelectedArea] = useState(propertyAreas[0]);
  const [galleryDescription, setGalleryDescription] = useState(amenitiesDescription);
  const [filteredSlides, setFilteredSlides] = useState(
    slides.filter((slide) => slide.includes(propertyAreas[0]))
  );

  const arrowStlye =
    "z-50 text-white/80 hover:text-white 100 duration-150 w-10 lg:w-20 absolute top-1/2 transform -translate-y-1/2";
  const slideHeightStyle = "h-[400px] lg:h-[600px]";

  const scrollPrev = (): void => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = (): void => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const scrollTo = (index: number): void => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  const handleSelectedArea = (area: string): void => {
    setSelectedArea(area);

    if (area === "amenities") {
      setGalleryDescription(amenitiesDescription);
    } else if (area === "lobby") {
      setGalleryDescription(lobbyDescription);
    } else {
      setGalleryDescription(unitDescription);
    }
    if (area !== "") {
      setFilteredSlides(slides.filter((slide) => slide.includes(area)));
    }
  };
  useEffect(() => {
    setSelectedArea(propertyAreas[0]);
  }, []);

  return (
    <Container className='grid grid-cols-1 xl:grid-cols-3 xl:items-start xl:gap-x-8'>
      <div className={`${slideHeightStyle} relative xl:col-span-2 mb-5 lg:mb-10`}>
        <div
          className='embla shadow-md'
          ref={emblaRef}
        >
          <div className='embla__container'>
            {filteredSlides.map((slide: TSlide) => (
              <div
                key={slide}
                className={`${slideHeightStyle} embla__slide relative`}
              >
                <Image
                  src={slide}
                  alt=''
                  fill
                  className='w-full h-full object-cover rounded-md'
                />
              </div>
            ))}
          </div>
        </div>
        <button onClick={scrollPrev}>
          <ChevronLeftIcon className={`${arrowStlye} left-0`} />
        </button>
        <button onClick={scrollNext}>
          <ChevronRightIcon className={`${arrowStlye} right-0`} />
        </button>
      </div>
      <div>
        <div className='flex justify-evenly lg:justify-start gap-x-3 lg:gap-x-8 w-full text-center lg:text-left text-slate-800 text-base lg:text-xl'>
          {propertyAreas.map((item: string): any => {
            if (item === "lobby" && lobbyDescription === null) return null;

            return (
              <button
                key={item}
                onClick={() => {
                  handleSelectedArea(item);
                }}
                className={`border-b-2 uppercase font-semibold ${
                  selectedArea === item ? "border-blue-800" : "border-white"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <p className='max-w-[400px] text-slate-500 my-8 text-center lg:text-left'>
          {galleryDescription}
        </p>
        <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-2 lg:gap-3'>
          {filteredSlides.map((slide: TSlide, index: number) => (
            <div
              key={slide}
              className='embla__slide w-full h-[80px] sm:h-[100px] md:h-[120px] xl:h-[100px] relative shadow-sm cursor-pointer'
              onClick={() => {
                scrollTo(index);
              }}
            >
              <Image
                src={slide}
                alt=''
                fill
                className='object-cover rounded-md'
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
