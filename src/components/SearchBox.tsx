import { SearchBoxProps } from "@/types/types";
import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBox: React.FC<SearchBoxProps> = ({ className }) => {
  return (
    <div
      className={`${className} flex items-center gap-4 rounded-full px-4 py-2 focus-within:border-blue-500`}
    >
      <BiSearch className="text-gray-500 text-lg w-[20px] h-[20px]" />
      <input
        type="text"
        placeholder="Search"
        className="w-full min-w-0 border-none outline-none bg-transparent text-white placeholder-gray-500 text-[14px]"
      />
    </div>
  );
};

export default SearchBox;
