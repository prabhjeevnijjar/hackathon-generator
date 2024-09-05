import React from 'react';
import rocketImg from '../../../../public/static/icons/rocket.png';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="bg-bgPrimary">
      <div className="px-[2rem] md:px-[6rem] 2xl:px-[25rem] flex flex-row py-[9rem]">
        <div className="w-full xl:w-2/3">
          <div className="flex flex-row">
            <div className="w-[10px] bg-[#FFCE5C] mr-8"></div>
            <div className="flex flex-col text-white text-[2.5rem] xl:text-[3rem] font-semibold">
              <h1 className="leading-[3.5rem]">Accelerate Innovation</h1>
              <h1 className="leading-[3.5rem]">with Global AI Challenges</h1>
            </div>
          </div>
          <h3 className="text-white text-[1.12rem] font-medium ml-10 flex mt-10 w-3/4 xl:w-2/4">
            AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
          </h3>
          <Link href="/admin">
            <button className="ml-10 bg-white mt-8 rounded-[10px] font-semibold text-[1.125rem] px-3 py-2">Create Challenge</button>
          </Link>
        </div>

        <div className="hidden xl:flex w-1/4 md:w-1/2 xl:w-1/3">
          <img src={rocketImg.src} alt="rocket image"></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
