import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col lg:items-center lg:justify-center lg:mt-[100px] mx-[30px]">
      <div className="grid grid-cols-2 items-start gap-8 lg:grid lg:grid-cols-4 mt-[100px] lg:gap-[200px] lg:items-start mb-5">
        <div className="flex flex-col items-start justify-center lg:mx-4">
          <h1 className="font-bold text-2xl">R1estate</h1>
          <div className="flex flex-col gap-2 text-gray-400 mt-4 text-[14px]">
            <p>+62 1234 5678</p>
            <p>business@r1estate.com</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Useful Link</h1>
          <div className="flex flex-col gap-2 text-gray-400 mt-4 text-[14px]">
            <p>Property Type</p>
            <p>Recent Property</p>
            <p>Buy Property</p>
            <p>Sell Property</p>
            <p>Top Agents</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Community</h1>
          <div className="flex flex-col gap-2 text-gray-400 mt-4 text-[14px]">
            <p>Events</p>
            <p>Blogs</p>
            <p>Best Deal</p>
            <p>Forum</p>
            <p>Invite Friend</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">About Us</h1>
          <div className="flex flex-col gap-2 text-gray-400 mt-4 text-[14px]">
            <p>About Us</p>
            <p>Partnerships</p>
            <p>FAQs</p>
          </div>
        </div>
      </div>
      <p className="flex justify-center text-gray-400 mt-10 text-[14px] mb-2">
        © 2025 R1estate. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
