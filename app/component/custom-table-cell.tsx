"use client";
import React, { useRef, useState } from "react";

export default function EditableCell(rowId: string, newValue: string) {
  const [editingCell, setEditingCell] = useState(0);
  const [editingCellValue, setEditingCellValue] = useState(null);
  const inputRef = useRef({});

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
