"use client";

import Container from "@/components/Atoms/Container/Container";
import React from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import StatusCounter from "../StatusCounter/StatusCounter";
import Button from "@/components/Atoms/Button/Button";

const AboutUsBanner: React.FC = () => {
  return (
    <section className='relative py-14 lg:py-20 bg-white'>
      <Container className='grid grid-cols-1'>
        <div className='flex flex-col items-center lg:items-start mb-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12'>
            <div>
              <SectionTitle
                title='Our Experts'
                className='px-0'
                withLine
              />
              <Image
                src={"/images/real-estate-experts.jpg"}
                alt='Real estate agents'
                width={300}
                height={300}
                className='w-full mb-8 rounded-lg shadow-md lg:hidden'
              />
              <p className='text-slate-500 font-semibold text-base mb-10 -mt-4 text-center lg:text-left lg:mt-0'>
                If you are looking for an investment opportunity consider the SMDC.With properties
                still currently being built and still lined-up, the Philippines is still definitely
                enjoying the major surge of the Real Estate Market.
              </p>
              <StatusCounter />
              <div className='mb-12' />
              <Button href={"/about-us"}>Learn More</Button>
            </div>
            <Image
              src={"/images/cheerful-business-team.jpg"}
              alt='Real estate agents'
              width={300}
              height={300}
              className='w-full mb-8 rounded-lg shadow-md hidden lg:flex'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsBanner;
