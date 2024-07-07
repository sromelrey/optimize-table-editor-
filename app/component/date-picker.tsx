"use client";
import React from "react";

const DatePicker = ({ addRows }: any) => {
  const handleDateChange = (e: { target: { value: any } }) => {
    const date = e.target.value;
    addRows(date, 7);
  };

  return (
    <div className='mb-1 flex flex-col justify-between w-1/4'>
      <p className='text-[12px] text-[#415362] leading-4 mb-1'>Generate Date</p>
      <DatePicker onChange={handleDateChange} />
    </div>
  );
};

export default DatePicker;
