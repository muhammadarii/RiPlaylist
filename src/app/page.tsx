import Image from "next/image";
import HeroImage from "@/images/Hero.png";
import FilterBox from "@/components/parts/FilterBox";
import InformationSection from "@/components/sections/InformationSection";
import PopularSection from "@/components/sections/PopularSection";
import SuccessSection from "@/components/sections/SuccessSection";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col items-center justify-center mt-[150px] lg:mt-[330px]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black lg:w-[1500px] h-[300px] w-screen lg:h-[600px] rounded-[25px] backdrop-blur-2xl opacity-50">
          <Image
            src={HeroImage}
            alt="HeroImage"
            className="w-full h-full object-cover rounded-[25px] px-2 lg:px-0"
            layout="fill"
            priority
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 flex flex-col items-center justify-center">
          <h1 className="lg:text-[72px] font-bold">
            Easy way to find a perfect property
          </h1>
          <p className="w-screen lg:w-[435px] mt-[20px] lg:text-[18px] text-center">
            We provide a complete service for the sale, purchase or rental of
            real estate
          </p>
          <FilterBox />
        </div>
      </div>
      <InformationSection />
      <PopularSection />
      <SuccessSection />
    </div>
  );
};

export default page;
