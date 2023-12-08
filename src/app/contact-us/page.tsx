import React from "react";
import { FaWhatsapp, FaViber, FaMobileAlt } from "react-icons/fa";
import Image from "next/image";
import EmailForm from "@/components/Molecules/EmailForm/EmailForm";
import Hero from "@/components/Molecules/Hero/Hero";
import SectionTitle from "@/components/Molecules/SectionTitle/SectionTitle";
import Flags from "@/components/Molecules/Flags/Flags";

const ContactUsPage: React.FC = () => {
  return (
    <React.Fragment>
      <Hero
        title={"Get in touch"}
        subtitle={
          "If you are interested to buy in any project of SMDC, We are happy to assist you wherever you are across the globe."
        }
        image={"/images/contact-us.png"}
        altText={"Real estate office"}
        height='md'
      />
      <section className='pt-10 pb-5'>
        <Flags />
      </section>
      <section className='w-full lg:w-[1000px] mx-auto py-14 px-4 bg-white'>
        <SectionTitle
          title='Send us an email'
          subtitle='Simply fill out the form below and we will reach out soon.'
          withLine
          className='mb-8'
        />
        <EmailForm />
      </section>
      <section className='flex flex-col lg:flex-row w-full lg:w-[1000px] mx-auto pt-6 lg:pt-14 bg-white'>
        <div className='px-4 mb-8 lg:w-1/2'>
          <SectionTitle
            title={"Let's talk"}
            subtitle='For inquiries please call us in these numbers'
            withLine
            className='mb-12'
          />
          <div className='flex flex-col items-center lg:flex-row lg:items-start lg:items-center gap-x-2 gap-y-8 text-lg text-blue-800 mb-8'>
            <FaMobileAlt
              size={50}
              className='text-blue-800'
            />
            <div className='flex flex-col gap-y-2 text-slate-600 font-semibold'>
              <a href='https://api.whatsapp.com/send?phone=50600000000'>+329 122-2345</a>
              <a href='https://api.whatsapp.com/send?phone=50600000000'>+329 890-7120</a>
            </div>
          </div>
          <div className='flex flex-col items-center lg:flex-row lg:items-start lg:items-center gap-x-2 gap-y-8 text-lg text-blue-800 mb-8'>
            <FaWhatsapp
              size={50}
              className='text-blue-800'
            />
            <div className='flex flex-col gap-y-2 text-slate-600 font-semibold'>
              <a href='https://api.whatsapp.com/send?phone=50600000000'>+329 122-2345</a>
              <a href='https://api.whatsapp.com/send?phone=50600000000'>+329 890-7120</a>
            </div>
          </div>
          <div className='flex flex-col items-center lg:flex-row lg:items-start lg:items-center gap-x-2 gap-y-8 text-lg text-blue-800'>
            <FaViber
              size={50}
              className='text-blue-800'
            />
            <div className='flex flex-col gap-y-2 text-slate-600 font-semibold'>
              <a href='https://api.whatsapp.com/send?phone=50600000000'>+329 122-2345</a>
              <a href='https://api.whatsapp.com/send?phone=50600000000'>+329 890-7120</a>
            </div>
          </div>
        </div>
        <div className='relative h-[300px] lg:h-[500px] w-auto lg:w-1/2'>
          <Image
            src='/images/rome-map.png'
            alt='Rome map'
            fill
            className='object-cover rounded-tr-lg rounded-tl-lg shadow-md'
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactUsPage;
