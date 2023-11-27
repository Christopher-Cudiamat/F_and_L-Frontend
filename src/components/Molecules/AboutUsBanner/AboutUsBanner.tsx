"use client";

import Container from '@/components/Atoms/Container/Container';
import React from 'react'
import CountUp from 'react-countup';
import SectionTitle from '../SectionTitle/SectionTitle';
import Link from 'next/link';

interface IStats {
    id: string;
    count: number;
    symbol: string;
    text: string;
}

const stats = [
    {
        id: "1",
        count: 43,
        symbol: "+",
        text: "Delivered units"
    },
    {   
        id: "2",
        count: 10,
        symbol: "+",
        text: "Years of service"
    },
    {
        id: "3",
        count: 100,
        symbol: "%",
        text: "Client's satisfaction"
    }
]

const AboutUsBanner = () => {
  return (
    <section className="pt-10 pb-20  xl:pt-20 xl:pb-24 bg-slate-50">
        <Container className="grid grid-cols-1">
            <div className="flex flex-col items-center lg:items-start mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12">
                    <SectionTitle
                        title="Always choose the SMDC, the leading developer in the Philippines."
                        className="-pl-4"
                    />
                    <p className="text-slate-800 font-semibold text-base mb-10 -mt-4 text-center lg:text-left lg:mt-0">
                        If you are looking for an investment opportunity consider the SMDC.With properties still currently being built and still lined-up, the Philippines is still definitely enjoying the major surge of the Real Estate Market.
                    </p>
                </div>
                <Link 
                    href={"/about-us"} 
                    className="bg-blue-600 hover:bg-blue-700 font-semibold text-white py-3 px-6 w-fit rounded-md duration-200"
                >
                    About Us
                </Link>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-8 sm:gap-14 lg:gap-20">
                {stats.map((item: IStats) => (
                    <React.Fragment key={item.id}>
                        <div className="flex flex-col items-center justify-center text-blue-700">
                            <div className="flex items-center">
                                <CountUp 
                                    end={item.count}
                                    duration={8}
                                    enableScrollSpy
                                    className="text-6xl lg:text-8xl font-semibold"
                                />
                                <p className="text-4xl lg:text-6xl font-semibold">{item.symbol}</p>
                            </div>
                            <p className="font-semibold text-base lg:text-lg text-center text-slate-500">{item.text}</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </Container>
    </section>
  )
}

export default AboutUsBanner;