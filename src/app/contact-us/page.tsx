import React from 'react';
import ContactForm from '@/components/Molecules/ContactForm/ContactForm';
import Hero from '@/components/Molecules/Hero/Hero';
import { FlagIcon } from 'react-flag-kit';
import { flags } from './config';
import SectionTitle from '@/components/Molecules/SectionTitle/SectionTitle';

const ContactUsPage: React.FC = () => {
  return (
    <React.Fragment>
      <Hero
        title={'Get in touch'}
        subtitle={
          "If you are interested to buy in any of SMDC's projects, We’re happy to assist you wherever you are across the globe"
        }
        image={'/images/contact-us.png'}
        altText={'Real estate office'}
        height='md'
      />
      <section className='pt-10 pb-5'>
        <ul className='flex flex-wrap justify-center gap-x-10 gap-y-10 w-full lg:w-[600px] mx-auto'>
          {flags.map((item: any) => (
            <li key={item}>
              <FlagIcon
                code={item}
                size={45}
                className='rounded-lg shadow-md'
              />
            </li>
          ))}
        </ul>
      </section>
      <section className='py-14 px-4-10 bg-white'>
        <div className='w-full lg:w-[700px] mx-auto px-4 bg-white'>
          <SectionTitle
            title='Send us an email'
            withLine
            className='mb-12'
          />
          <ContactForm />
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactUsPage;
