import React from 'react';
import HackathonCard from './HackathonCard';

const Challanges = () => {
  return (
    <>
      <div className="bg-bgSecondary">
        <div className="flex flex-col items-center justify-center">
          <h2 className=" text-white font-bold leading-[2.5rem] text-[1.75rem] mt-[5rem]">Explore Challenges</h2>

          <div className="w-full md:w-auto flex items-center space-x-2 my-[4rem] px-8">
            <input type="text" placeholder="Search" className="w-full md:w-96 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 " />
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md flex items-center justify-center focus:outline-none focus:ring-2 ">Filter</button>
          </div>
        </div>
      </div>
      <div className="bg-bgPrimary">
        <div className="px-[2rem] md:px-[6rem] 2xl:px-[25rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-[6rem] justify-items-center">
          <HackathonCard />
          <HackathonCard />
          <HackathonCard />
          <HackathonCard />
        </div>
      </div>
    </>
  );
};

export default Challanges;
