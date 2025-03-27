const FilterBox = () => {
  return (
    <div className="absolute bg-white w-[963px] h-[155px] rounded-[25px] mt-[600px] flex items-center justify-center">
      <div className="grid grid-cols-4 items-center justify-between gap-10">
        <div className="flex flex-col items-start justify-center text-black">
          <label className="text-[20px]">Locations</label>
          <p className="text-[14px] text-[#828282]">Select your city</p>
        </div>
        <div className="flex flex-col items-start justify-center text-black">
          <label className="text-[20px]">Property Type</label>
          <p className="text-[14px] text-[#828282]">
            Choose your property type
          </p>
        </div>
        <div className="flex flex-col items-start justify-center text-black">
          <label className="text-[20px]">Rent Range</label>
          <p className="text-[14px] text-[#828282]">Choose a range</p>
        </div>
        <button className="w-[137px] h-[59px] bg-black text-white rounded-[8px] font-extralight leading-[120%]">
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
