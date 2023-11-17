import Container from '@/components/Atoms/Container/Container';
import Link from 'next/link';
import React from 'react'

interface SectionTitleProps {
  title: string;
  ButtonLabel?: string;
  href?: string;
}

const SectionTitle = ({
  title,
  ButtonLabel,
  href,
}: SectionTitleProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between text-center lg:text-left mb-6 lg:mb-8">
      <h2 className="text-slate-600 text-3xl font-semibold mb-5 lg:mb-0">
        {title}
      </h2>
      {
        (ButtonLabel && href) &&
        <Link 
          href={href} 
          className="bg-blue-600 font-semibold text-white px-4 py-2 w-fit rounded-md"
        >
          {ButtonLabel}
        </Link>
      }
    </div>
  )
}

export default SectionTitle
