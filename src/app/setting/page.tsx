import SearchBox from "@/components/SearchBox";
import React from "react";

const SettingPage = () => {
  return (
    <div className="flex flex-col py-[25px] px-[130px]">
      <SearchBox />
      <main className="mt-[45px]">Setting Page</main>
    </div>
  );
};

export default SettingPage;
