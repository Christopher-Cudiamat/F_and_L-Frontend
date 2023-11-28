import Container from '@/components/Atoms/Container/Container';
import Link from 'next/link';
import React from 'react';

interface PaginationProps {
  page: number;
  pageCount?: number;
  path: string;
}

const MIN_PAGE_COUNT = 1;

const Pagination: React.FC<PaginationProps> = ({ page, pageCount, path }) => {
  const pages = Array.from(Array(pageCount), (_, i) => i + 1);

  return (
    <React.Fragment>
      {pageCount !== MIN_PAGE_COUNT && (
        <Container>
          <div className='flex justify-center items-center gap-x-4 my-24'>
            {page !== 1 && (
              <Link
                href={`${path}?page=${page - 1}`}
                className='bg-blue-600 hover:bg-blue-700 text-sm md:text-base font-normal rounded-sm py-1.5 px-4 text-white duration-100'
              >
                Previous
              </Link>
            )}
            <ul className='flex justify-center items-center gap-x-2'>
              {pages.map((item: any) => (
                <li key={item}>
                  <Link
                    href={`${path}?page=${item}`}
                    className={`border ${
                      item === page
                        ? 'bg-yellow-400 border-yellow-400'
                        : 'bg-white border-slate-800'
                    } text-slate-800 py-1.5 px-3 rounded-sm hover:bg-yellow-400 hover:border-yellow-400 duration-100`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            {pageCount && page !== pages.length && (
              <Link
                className='bg-blue-600 hover:bg-blue-700 text-sm md:text-base font-normal rounded-sm py-1.5 px-4 text-white duration-100'
                href={`${path}?page=${page + 1}`}
              >
                Next
              </Link>
            )}
          </div>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Pagination;
