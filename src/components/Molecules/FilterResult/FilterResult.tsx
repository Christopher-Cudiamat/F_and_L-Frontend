"use client";

import Container from "@/components/Atoms/Container/Container";
import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import SortBy from "@/components/Molecules/SortBy/SortBy";

interface IFilterResultProps {
  hasResults?: boolean;
  location?: string;
  status?: string;
}

const FilterResult: React.FC<IFilterResultProps> = ({ hasResults = true, location, status }) => {
  return (
    <Container className='flex flex-col md:flex-row justify-between text-lg md:text-xl gap-4 mb-10'>
      <div className='flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4'>
        <IoFilterSharp
          size={40}
          className='text-slate-700'
        />
        {location === undefined || status === undefined ? (
          <p className='text-slate-500 text-center capitalize font-semibold'>All Properties</p>
        ) : (
          <p className='text-slate-500 text-center'>
            {hasResults ? "Filter results for " : "No results found for "}
            <span className='capitalize font-semibold'>{`"${location}${
              location && status ? "/" : ""
            }${status === "rfo" ? status.toUpperCase() : status}"`}</span>
          </p>
        )}
      </div>
      <div>
        <SortBy />
      </div>
    </Container>
  );
};

export default FilterResult;
