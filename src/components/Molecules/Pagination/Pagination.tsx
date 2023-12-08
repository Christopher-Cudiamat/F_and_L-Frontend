import React from "react";
import Link from "next/link";
import Container from "@/components/Atoms/Container/Container";
import PaginationButton from "./PaginationButton/PaginationButton";

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
              <PaginationButton
                href={`${path}?page=${page - 1}`}
                label='Prev'
              />
            )}
            <ul className='flex justify-center items-center gap-x-2'>
              {pages.map((item: any) => (
                <li key={item}>
                  <Link
                    href={`${path}?page=${item}`}
                    className={`border ${
                      item === page
                        ? "bg-yellow-400 border-yellow-400"
                        : "bg-white border-slate-800"
                    } text-slate-800 py-1.5 px-3 rounded-sm hover:bg-yellow-400 hover:border-yellow-400 rounded-md duration-100`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            {pageCount && page !== pages.length && (
              <PaginationButton
                href={`${path}?page=${page + 1}`}
                label='Next'
              />
            )}
          </div>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Pagination;
