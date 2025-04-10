import Image from "next/image";
import HeroImage from "@/images/Image1.png";

const InformationSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[280px] lg:mt-[500px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-[90px]">
        <Image
          src={HeroImage}
          alt="HeroImage"
          className="w-screen h-auto px-4"
        />
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-[24px] lg:text-[48px] font-semibold px-4">
            Get To Know Us More
          </h1>
          <p className="lg:text-[18px] font-[#BDBDBD] w-screen px-4 lg:w-[618px] mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but leap into electronic.
          </p>
          <div className="flex flex-row items-center justify-center gap-4 lg:gap-[116px] mt-[48px] px-4">
            <div>
              <a className="text-[28px] font-bold">1200</a>
              <p className="w-[97px] text-[18px]">Property Build</p>
            </div>
            <div>
              <a className="text-[28px] font-bold">50</a>
              <p className="w-[97px] text-[18px]">Awards Gained</p>
            </div>
            <div>
              <a className="text-[28px] font-bold">20</a>
              <p className="w-[97px] text-[18px]">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
