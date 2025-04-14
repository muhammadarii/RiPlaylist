const PopularSection = () => {
  return (
    <div className="flex flex-col lg:items-center lg:justify-center mt-[50px] lg:mt-[100px]">
      <div className="flex lg:flex-row lg:items-center lg:justify-between lg:gap-[677px]">
        <h1 className="lg:w-[401px] text-[24px] lg:text-[38px] font-semibold px-4 lg:px-0">
          Popular Property Right Now
        </h1>
        <div className="flex-row items-center justify-center gap-4 hidden lg:flex">
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
