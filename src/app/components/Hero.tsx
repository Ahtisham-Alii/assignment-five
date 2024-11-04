import React from "react";

const Hero = () => {
  return (
    <div >
      <div className=" h-[500px] w-[100%] flex items-center justify-evenly">
        <div className="w-[80%] h-[300px] ml-10 font-[37.84px] text-4xl ">
          <h1 className="font-bold w-[472.97px] font-serif ">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
          <p className=" font-thin mt-5 font-serif w-[798.9px] h-[144px]">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className=" bg-[#A29875] text-white font-bold font-serif p-[10px] hover:bg-black rounded-lg w-[280px]">
            Explore Now
          </button>
        </div>

        <div >
          <img
            src="./aa.png"
            alt="pic"
            className="rounded-tl-[128.99px] rounded-br-[128.99px] mr-24 mt-10 h-[400.59px] outline outline-offset-2 "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
