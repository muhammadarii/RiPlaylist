import React from "react";

const PopularSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[180px]">
      <div className="flex flex-row items-center justify-between gap-[677px]">
        <h1 className="w-[401px] text-[38px] font-semibold">
          Popular Property Right Now
        </h1>
        <div className="flex flex-row items-center justify-center gap-4">
          <button className="w-[40px] h-[40px] flex items-center justify-center bg-[#F5F5F5] rounded-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
                fill="#828282"
              />
            </svg>
          </button>
          <button className="w-[40px] h-[40px] flex items-center justify-center bg-[#F5F5F5] rounded-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z"
                fill="#828282"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
