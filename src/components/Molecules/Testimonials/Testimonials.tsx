'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Container from '@/components/Atoms/Container/Container';

interface ITestimonial {
  image: string;
  name: string;
  text: string;
  description: string;
}

interface ITestimonials {
  testimonials: ITestimonial[];
}

const Gallery: React.FC<ITestimonials> = ({ testimonials }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center' });
  const arrowStlye = 'z-50 text-slate-800/60 hover:text-slate-800/80 duration-150 w-16';

  const scrollPrev = (): void => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = (): void => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <Container>
      <div
        className='embla'
        ref={emblaRef}
      >
        <div className='embla__container py-5'>
          {testimonials.map((testimonial: ITestimonial, index: number) => (
            <div
              className='shadow-lg rounded-lg text-center bg-white mr-4 md:mr-10'
              key={index}
            >
              <div className='px-2 w-[300px] mb-12'>
                <p className='text-left text-8xl text-blue-800 mb-2'>“</p>
                <p className='mb-8 text-slate-800'>{testimonial.text}</p>
              </div>
              <div className='flex flex-col items-center bg-blue-600 text-white px-2 pt-4 pb-6 rounded-b-lg'>
                <div className='relative border-4 border-white mb-5 -mt-10 h-20 w-20 rounded-full'>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className='absolute object-fit w-full h-full inset-0 rounded-full'
                  />
                </div>
                <p className='text-base mb-1'>{testimonial.name}</p>
                <p className='text-sm'>{testimonial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center gap-x-5 lg:justify-end mt-5 lg:mt-6'>
        <button onClick={scrollPrev}>
          <ArrowLongLeftIcon className={`${arrowStlye}`} />
        </button>
        <button onClick={scrollNext}>
          <ArrowLongRightIcon className={`${arrowStlye}`} />
        </button>
      </div>
    </Container>
  );
};

export default Gallery;
