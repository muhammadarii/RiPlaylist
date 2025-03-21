import Image from "next/image";
import HeroImage from "../../public/images/Hero.png";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <Image
          src={HeroImage}
          alt="HeroImage"
          className="w-[1500px] h-[700px]"
          priority
        />
      </div>
    </>
  );
};

export default page;
