"use client";

import React, { useRef, useState } from "react";

import _ from "lodash";
import DatePicker from "./date-picker";

export default function Table() {
  const [data, setData] = useState([] as any[]);

  const addRow = () => {
    const newRow = {
      id: data.length + 1,
      name: `Name ${data.length + 1}`,
      date: new Date().toISOString().split("T")[0],
    };
    setData([...data, newRow]);
  };
  const addRows = (date: any, numberOfRows: any) => {
    const newRows = Array.from({ length: numberOfRows }, (_, index) => ({
      id: data.length + index + 1,
      name: `Name ${data.length + index + 1}`,
      date: date,
    }));
    setData([...data, ...newRows]);
  };

  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
          <DatePicker addRows={addRows} />
          <table className='hidden min-w-full text-gray-900 md:table'>
            <thead className='rounded-lg text-left text-sm font-normal'>
              <tr>
                <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                  Date
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Hospital Day
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Device Day
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Test Result/Symptom
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <handleEditingCellChange />
            </tbody>
          </table>
          <div className='mb-1 mt-1 flex flex-col justify-between w-1/4'>
            <button
              className='text-white text-[14px] leading-[100%] '
              onClick={addRow}
            >
              Add Row
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
