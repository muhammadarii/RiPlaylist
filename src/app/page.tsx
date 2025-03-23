import Image from "next/image";
import HeroImage from "../../public/images/Hero.png";

const page = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center mt-[330px]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black w-[1500px] h-[600px] rounded-[25px] backdrop-blur-2xl opacity-50">
          <Image
            src={HeroImage}
            alt="HeroImage"
            className="w-full h-full object-cover rounded-[25px]"
            layout="fill"
            priority
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 flex flex-col items-center justify-center">
          <h1 className="text-[72px] font-bold">
            Easy way to find a perfect property
          </h1>
          <p className="w-[435px] mt-[20px] text-[18px] text-center">
            We provide a complete service for the sale, purchase or rental of
            real estate
          </p>
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
        </div>
      </div>
    </>
  );
};

export default page;
