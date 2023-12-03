import React from 'react';
import { data } from './config';
import Image from 'next/image';
import Hero from '@/components/Molecules/Hero/Hero';
import SectionTitle from '@/components/Molecules/SectionTitle/SectionTitle';
import Container from '@/components/Atoms/Container/Container';
import ContactUsBanner from '@/components/Molecules/ContactUsBanner/ContactUsBanner';
import Testimonials from '@/components/Molecules/Testimonials/Testimonials';

const AboutUsPage: React.FC<any> = () => {
  return (
    <React.Fragment>
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        image={data.image}
        altText={data.altText}
        height='md'
      />
      <section className='bg-white py-16'>
        <Container className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20'>
          <Image
            src={data.history.image}
            alt={data.history.altText}
            height={300}
            width={300}
            className='w-full h-auto mb-10 lg:order-last border-r-2 border-slate-200
            py-5 pr-4'
          />
          <div>
            <SectionTitle
              title={data.history.title}
              withLine
              className='mb-3 px-0'
            />
            <p className='text-base text-center lg:text-left text-slate-800'>{data.history.text}</p>
          </div>
        </Container>
      </section>
      <section className='bg-white pb-10'>
        <Container className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20'>
          <Image
            src={data.missionAndVision.image}
            alt={data.missionAndVision.altText}
            height={300}
            width={300}
            className='w-full h-auto mb-10 border-l-2 border-slate-200
            py-5 pl-4'
          />
          <div>
            <SectionTitle
              title={data.missionAndVision.title}
              withLine
              className='mb-3 px-0'
            />
            <p className='text-base text-center lg:text-left text-slate-800 '>
              {data.missionAndVision.text}
            </p>
          </div>
        </Container>
      </section>
      <section className='bg-slate-50 pt-10 pb-14'>
        <SectionTitle
          title={data.testimonials.title}
          withLine
          className='mb-3 px-0'
        />
        <Testimonials testimonials={data.testimonials.slides} />
      </section>
      <section className='bg-slate-50'>
        <ContactUsBanner
          image='/images/real-estate-agents.png'
          altText='Real estate agents'
          full
        />
      </section>
    </React.Fragment>
  );
};

export default AboutUsPage;
