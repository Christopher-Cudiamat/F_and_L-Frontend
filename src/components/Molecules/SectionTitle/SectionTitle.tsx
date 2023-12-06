'use client';

import Container from '@/components/Atoms/Container/Container';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  ButtonLabel?: string;
  href?: string;
  className?: string;
  withLine?: boolean;
}

const animation = keyframes`
  from {
    opacity: 0;
    width: 0;
  }

  to {
    opacity: 1;
     width: 100%;
  }
`;

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  ButtonLabel,
  href,
  className,
  withLine = false,
}) => {
  return (
    <Container className={`${className}`}>
      <div className='flex flex-col lg:flex-row items-center md:justify-between text-center lg:text-left mb-6 lg:mb-8'>
        <div className='flex flex-col items-center lg:items-start mb-5 lg:mb-0'>
          <div>
            <h2 className='text-slate-600 text-3xl lg:text-4xl font-semibold mb-3'>{title}</h2>
            {withLine && (
              <Reveal
                keyframes={animation}
                cascade
                triggerOnce
                className='flex justify-center md:justify-start'
              >
                <div className='h-1 w-1/2 bg-yellow-400 mb-3' />
              </Reveal>
            )}
          </div>
          <h3 className='text-slate-400 text-base font-semibold'>{subtitle}</h3>
        </div>
        {ButtonLabel && href && (
          <Link
            href={href}
            className='flex items-center gap-x-2 font-semibold text-xl text-slate-600 w-fit border-b-2 border-slate-600/0 hover:border-slate-600 duration-200'
          >
            {ButtonLabel}
            <ArrowLongRightIcon className='w-10' />
          </Link>
        )}
      </div>
    </Container>
  );
};

export default SectionTitle;
