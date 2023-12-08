"use client";

import React, { useState } from "react";
import useIsClient from "@/hooks/useIsClient";
import { locations } from "@/utils/locations";
import { status } from "@/utils/status";
import Link from "next/link";
import Select from "@/components/Atoms/Select/Select";

const Filters: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [selectedStatus, setSelectedStatus] = useState(status[0]);
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return (
    <section className='bg-white px-4'>
      <div className='relative flex flex-col md:flex-row gap-y-3 md:gap-x-3 w-full lg:w-[700px] justify-center items-center bg-slate-100 -mt-14 mx-auto p-8 md:p-8 shadow-md rounded-xl'>
        <Select
          options={locations}
          onChange={setSelectedLocation}
          selected={selectedLocation}
        />
        <Select
          options={status}
          onChange={setSelectedStatus}
          selected={selectedStatus}
        />
        <Link
          href={`/filter-results?location=${selectedLocation.value}&status=${selectedStatus.value}`}
          className='bg-blue-600 text-white w-full text-center py-3 px-8 mt-4 md:mt-0 rounded-md'
        >
          Search
        </Link>
      </div>
    </section>
  );
};

export default Filters;
