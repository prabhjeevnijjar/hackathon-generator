'use client';

import useTimer from '@/hooks/useTimer';

const Banner = ({ data }) => {
  const { status, days, hours, minutes, seconds, formattedStartDate, formattedEndDate } = useTimer(data.startDate, data.endDate);
  console.log({ formattedStartDate });
  return (
    <div className="bg-bgPrimary">
      <div className="px-[2rem] md:px-[6rem] 2xl:px-[25rem] py-12">
        <span className="font-semibold md:leading-[0.75rem] text-[0.875rem] w-3/4 md:w-[460px] bg-[#FFCE5C] flex flex-row items-center gap-2 px-4 py-1 rounded-[5px]">
          <svg className="hidden md:block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.16667 15.3333C12.1247 15.3333 15.3333 12.1247 15.3333 8.16667C15.3333 4.20863 12.1247 1 8.16667 1C4.20863 1 1 4.20863 1 8.16667C1 12.1247 4.20863 15.3333 8.16667 15.3333Z"
              stroke="black"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M10.316 11.0333L8.58598 9.3033C8.31716 9.03456 8.1661 8.67005 8.16602 8.28993V3.86667" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{status === 'upcoming' ? `Starts on ${formattedStartDate?.toLocaleLowerCase()} (IST)` : null}</span>
          <span>{status === 'active' ? `Ends on ${formattedEndDate?.toLocaleLowerCase()} (IST)` : null}</span>
          <span>{status === 'ended' ? `Hackathon Ended (Results to be announced)` : null}</span>
        </span>
        <h1 className="mt-7 font-semibold text-white text-[2rem] md:text-[2.5rem] leading-[2.5rem] md:leading-[3rem]">{data?.name || 'Event'}</h1>
        {/* <h3 className="font-medium leading-[1.5rem] text-white text-[1.125rem] mt-5">Identify the class to which each butterfly belongs to</h3> */}
        <span className="mt-8 bg-[#F8F9FD] flex items-center px-3 py-2 rounded-[5px] w-[102px] gap-2 justify-center">
          {data?.level === 'hard' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
              <path fill="black" d="M30 30h-8V4h8zm-10 0h-8V12h8zm-10 0H2V18h8z"></path>
            </svg>
          ) : data?.level === 'easy' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
              <path fill="black" d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-6-2h4V14h-4zm-4 2H2V18h8z"></path>
            </svg>
          ) : data?.level === 'medium' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
              <path fill="black" d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-10 0H2V18h8z"></path>
            </svg>
          ) : null}
          <p className="font-semibold text-[#003145] leading-[0.75rem] text-[0.875rem]">{data?.level}</p>
        </span>
      </div>
    </div>
  );
};

export default Banner;
