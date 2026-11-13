import React from "react";

export default function SortDropdown(props) {
  return (
    <div>
      <select
        value={props.sortOrder}
        className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 cursor-pointer outline-none focus:ring-2 focus:ring-black"
        onChange={(e) => {
          props.setSortOrder(e.target.value);
        }}
      >
        <option value={"default"}>Default Sorting</option>
        <option value={"low"}>Low to High</option>
        <option value={"high"}>High to Low</option>
      </select>
    </div>
  );
}
