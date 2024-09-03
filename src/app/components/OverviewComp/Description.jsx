import React from 'react';

const Description = () => {
  return (
    <div>
      <div className="px-[2rem] md:px-[6rem] 2xl:px-[25rem] shadow-custom">
        <div className="flex flex-row items-end justify-between h-[66px]">
          <div className="px-3 pb-1 font-bold text-[1.125rem] leading-[1.75rem] border-solid border-b-4 border-[#44924C]">Overview</div>
          <div className="flex gap-4 pb-3">
            <button className="text-white bg-[#44924C] rounded-[10px] font-semibold text-[0.85rem] leading-[1.125rem] px-6 py-2">Edit</button>
            <button className="text-red bg-white text-[#DC1414] border-solid border-2 border-[#DC1414] rounded-[10px] font-semibold text-[0.85rem] leading-[1.125rem] px-4 py-2">Delete</button>
          </div>
        </div>
      </div>
      <div className="px-[2rem] md:px-[6rem] 2xl:px-[25rem] my-12 w-full md:w-3/4">
        <p className="text-[#64607D] font-medium text-[1.125rem] leading-[1.75rem]">
          Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits
          the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an
          automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient
          model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.
        </p>
      </div>
    </div>
  );
};

export default Description;
