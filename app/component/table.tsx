"use client";

import React, { useRef, useState } from "react";

import _ from "lodash";
import DatePicker from "react-datepicker";

function EditableCell(rowId: string, newValue: string) {
  const [editingCell, setEditingCell] = useState(0);
  const [editingCellValue, setEditingCellValue] = useState(null);
  const inputRef = useRef({});

  const handleEditingCellChange = (rowId: any, newValue: any) => {};
  return (
    <td
      className='whitespace-nowrap py-3 pl-6 pr-3'
      key={rowId}
      role='textbox'
      tabIndex={+rowId}
      onClick={() => setEditingCell(+rowId)}
      onKeyDown={(e: any) => {
        if (e.key === "Enter" || e.key === " ") {
          setEditingCell(+rowId);
        }
      }}
    >
      {editingCell === +rowId ? (
        //@ts-ignore
        <input
          //@ts-ignore
          ref={(el) => (inputRef.current[rowId] = el)}
          type='text'
          value={editingCell}
          //   onChange={}
        />
      ) : (
        newValue
      )}
    </td>
  );
}

export default function EditableTable() {
  const [spanDate, setSpanDate] = useState([]);

  const handleGeneratedDate = (dateSpan: any) => {
    return (
      !_.isEmpty(dateSpan) &&
      dateSpan.map((date: any) => {
        const spanDateLength = spanDate.length < 1 ? 1 : spanDate.length + 1;
        return {
          id: spanDateLength,
          date,
          hospital_day: spanDateLength,
          device_day: spanDateLength,
          test_result_symptom: "Positive",
          comment: "Initial test result",
        };
      })
    );
  };

  const handleSelectedDate = (selectedDate: any) => {
    console.log(selectedDate);
  };
  const handleAddRows = () => {};

  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
          <div>
            <p>Generate Date</p>
            <DatePicker onChange={(e) => handleSelectedDate(e)} />
          </div>
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
        </div>
      </div>
    </div>
  );
}
