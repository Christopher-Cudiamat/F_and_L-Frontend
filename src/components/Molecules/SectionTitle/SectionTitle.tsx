import Container from '@/components/Atoms/Container/Container';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'

interface SectionTitleProps {
  title: string;
  ButtonLabel?: string;
  href?: string;
  className?: string;
}

const SectionTitle = ({
  title,
  ButtonLabel,
  href,
  className
}: SectionTitleProps) => {
  return (
    <Container className={`${className}`}>
      <div className="flex flex-col md:flex-row items-center md:justify-between text-center lg:text-left mb-6 lg:mb-8">
        <h2 className="text-slate-600 text-3xl lg:text-4xl font-semibold mb-5 md:mb-0">
          {title}
        </h2>
        {
          (ButtonLabel && href) &&
          <Link 
            href={href} 
            className="flex items-center gap-x-2 font-semibold text-xl text-slate-600 w-fit border-b-2 border-slate-600/0 hover:border-slate-600 duration-200"
          >
            {ButtonLabel}
            <ArrowLongRightIcon className='w-10' />
          </Link>
        }
      </div>
    </Container>
  )
}

export default SectionTitle
