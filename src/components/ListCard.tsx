import { ListCardProps } from "@/types/interface";
import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";

const ListCard: React.FC<ListCardProps> = ({ data, className }) => {
  return (
    <div className={`overflow-y-auto max-h-[600px] space-y-2 ${className}`}>
      {data?.map((item) => (
        <div
          key={item.id}
          className="relative flex items-center justify-between w-full h-14 px-6 bg-[#33373B] rounded-[15px]"
        >
          <div className="absolute inset-0 h-full w-full rounded-[15px] bg-[#33373B] opacity-40 backdrop-blur-2xl" />
          <div className="flex items-center gap-6">
            {/* Avatar & Heart Icon */}
            <div className="flex items-center gap-4">
              <Image
                src={item.imageSrc || "/images/avatar.png"}
                alt="avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg bg-white"
              />
              <BiHeart className="text-red-600 text-xl" />
            </div>

            {/* Title & Artist */}
            <div>
              <h1 className="text-sm text-white font-semibold">{item.title}</h1>
              <p className="text-xs text-gray-400">{item.artist}</p>
            </div>
          </div>
          <label className="text-sm text-white font-semibold">
            {item.duration}
          </label>
          <div className="flex items-center gap-4">
            <FiMoreVertical className="text-white cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;
