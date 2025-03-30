import Image from "next/image";
import HeroImage from "@/images/Image1.png";

const InformationSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[500px]">
      <div className="flex flex-row items-center justify-between gap-[90px]">
        <div>
          <Image src={HeroImage} alt="HeroImage" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-[48px] font-semibold">Get To Know Us More</h1>
          <p className="text-[18px] font-[#BDBDBD] w-[618px] mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but leap into electronic.
          </p>
          <div className="flex flex-row items-center justify-center gap-[116px] mt-[48px]">
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
