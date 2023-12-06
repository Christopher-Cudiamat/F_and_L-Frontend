import React from 'react';
import Hero from '@/components/Molecules/Hero/Hero';

const Career: React.FC = () => {
  return (
    <Hero
      title={'Join our team'}
      subtitle={
        "If you are interested to buy in any of SMDC's projects, We’re happy to assist you wherever you are across the globe"
      }
      image={'/images/career.jpg'}
      altText={'Real estate office'}
      height='md'
    />
  );
};

export default Career;
