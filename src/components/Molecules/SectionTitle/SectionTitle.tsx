import Container from '@/components/Atoms/Container/Container';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  ButtonLabel?: string;
  href?: string;
  className?: string;
  withLine?: boolean;
}

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
          <h2 className='text-slate-600 text-3xl lg:text-4xl font-semibold mb-3'>{title}</h2>
          {withLine && <div className='h-1 w-1/4 lg:w-1/2 bg-yellow-400 mb-3' />}
          <h3 className='text-slate-500 text-lg font-normal'>{subtitle}</h3>
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
