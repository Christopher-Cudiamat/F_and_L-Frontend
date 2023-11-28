'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import './slider.css';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import Overlay from '@/components/Atoms/Overlay/Overlay';

const slides = [
  {
    id: 1,
    image: '/images/home-hero-1.png',
    altText: 'family real estate',
  },
  {
    id: 2,
    image: '/images/home-hero-2.png',
    altText: '',
  },
  {
    id: 3,
    image: '/images/home-hero-3.png',
    altText: '',
  },
];

const options = {
  loop: true,
};

const autoplayOptions = {
  delay: 7000,
  stopOnMouseEnter: true,
};

const Slider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);

  const scrollPrev = (): void => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = (): void => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className='relative h-[550px]'>
      <div
        className='embla'
        ref={emblaRef}
      >
        <div className='embla__container'>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className='embla__slide w-full h-[550px] relative'
            >
              <Image
                src={slide.image}
                alt={slide.altText}
                fill
                className='object-cover'
              />
            </div>
          ))}
        </div>
      </div>
      <Overlay color='bg-slate-950/60' />
      <Overlay color='bg-gradient-to-t from-cyan-500/30 to-blue-500/10' />
      <button onClick={scrollPrev}>
        <ChevronLeftIcon className='z-50 text-white/50 hover:text-white 100 duration-150 w-10 lg:w-20 absolute top-1/2 left-0 transform -translate-y-1/2' />
      </button>
      <button onClick={scrollNext}>
        <ChevronRightIcon className='z-50 text-white/50 hover:text-white 100 duration-150 w-10 lg:w-20 absolute top-1/2 right-0 transform -translate-y-1/2' />
      </button>
    </div>
  );
};

export default Slider;
