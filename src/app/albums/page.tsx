import SearchBox from "@/components/SearchBox";
import React from "react";

const AlbumsPage = () => {
  return (
    <div className="flex flex-col py-[25px] px-[130px]">
      <SearchBox />
      <main className="mt-[45px]">Album Page</main>
    </div>
  );
};

export default AlbumsPage;
