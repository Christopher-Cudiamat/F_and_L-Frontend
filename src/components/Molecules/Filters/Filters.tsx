"use client";

import React, { useEffect, useState } from "react";
import { locations } from "@/utils/locations";
import { status } from "@/utils/status";
import Link from "next/link";
import Select from "@/components/Atoms/Select/Select";

const Filters: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [selectedStatus, setSelectedStatus] = useState(status[0]);
  const [query, setQuery] = useState("/properties");

  useEffect(() => {
    if (selectedLocation.value && selectedStatus.value) {
      setQuery(`location=${selectedLocation.value}&status=${selectedStatus.value}`);
    } else if (selectedLocation.value && !selectedStatus.value) {
      setQuery(`location=${selectedLocation.value}`);
    } else if (!selectedLocation.value && selectedStatus.value) {
      setQuery(`status=${selectedStatus.value!}`);
    }
  }, [selectedLocation, selectedStatus]);

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
          href={`/properties?${query}`}
          replace
          className='bg-blue-800 hover:bg-blue-700 text-white w-full text-center py-3 px-8 mt-4 md:mt-0 rounded-md'
        >
          Search
        </Link>
      </div>
    </section>
  );
};

export default Filters;
