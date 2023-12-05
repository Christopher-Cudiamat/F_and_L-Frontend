'use client';

import React from 'react';
import CountUp from 'react-countup';

interface IStats {
  id: string;
  count: number;
  symbol: string;
  text: string;
}

const stats = [
  {
    id: '1',
    count: 150,
    symbol: '+',
    text: 'Delivered units',
  },
  {
    id: '2',
    count: 12,
    symbol: '+',
    text: 'Years of service',
  },
  {
    id: '3',
    count: 100,
    symbol: '%',
    text: "Client's satisfaction",
  },
];

const StatusCounter: React.FC = () => {
  return (
    <div className='flex justify-center lg:justify-start sm:gap-10 lg:gap-14'>
      {stats.map((item: IStats) => (
        <React.Fragment key={item.id}>
          <div className='flex flex-col items-center justify-center text-blue-800'>
            <div className='flex items-center'>
              <CountUp
                end={item.count}
                duration={8}
                enableScrollSpy
                scrollSpyOnce
                className='text-5xl md:text-7xl font-semibold'
              />
              <p className='text-4xl lg:text-4xl font-semibold'>{item.symbol}</p>
            </div>
            <p className='font-semibold text-base lg:text-lg text-center text-slate-500'>
              {item.text}
            </p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default StatusCounter;
