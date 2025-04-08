const FilterBox = () => {
  return (
    <div className="absolute bg-white w-[90vw] lg:w-[963px] h-auto lg:h-[155px] rounded-[25px] mt-[200px] lg:mt-[600px] left-1/2 transform -translate-x-1/2 shadow-lg p-4 lg:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center">
        {/* Location Filter */}
        <div className="flex flex-col w-full">
          <label className="text-[16px] lg:text-[20px] font-medium text-black">
            Locations
          </label>
          <select
            className="border-b border-gray-300 py-2 focus:outline-none focus:border-black text-[14px] text-[#828282]"
            aria-label="Select your city"
          >
            <option value="">Select your city</option>
            <option value="jakarta">Jakarta</option>
            <option value="bandung">Bandung</option>
          </select>
        </div>

        {/* Property Type Filter */}
        <div className="flex flex-col w-full">
          <label className="text-[16px] lg:text-[20px] font-medium text-black">
            Property Type
          </label>
          <select
            className="border-b border-gray-300 py-2 focus:outline-none focus:border-black text-[14px] text-[#828282]"
            aria-label="Choose property type"
          >
            <option value="">Choose property type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
          </select>
        </div>

        {/* Rent Range Filter */}
        <div className="flex flex-col w-full">
          <label className="text-[16px] lg:text-[20px] font-medium text-black">
            Rent Range
          </label>
          <select
            className="border-b border-gray-300 py-2 focus:outline-none focus:border-black text-[14px] text-[#828282]"
            aria-label="Select rent range"
          >
            <option value="">Select range</option>
            <option value="1-5">Rp.1.000.000-Rp.5.000.000</option>
            <option value="5-10">Rp.5.000.000-Rp.10.000.000</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          className="w-full h-[40px] lg:h-[59px] bg-black hover:bg-gray-800 text-white rounded-[8px] font-medium lg:font-semibold text-[14px] lg:text-[16px] transition-colors duration-200 col-span-1 sm:col-span-2 lg:col-span-1 mt-2 lg:mt-0"
          aria-label="Search properties"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
