import React from 'react';
import hackImg from '../../../../public/static/icons/hack1.png';
import Link from 'next/link';

const HackathonCard = ({ data }) => {
  return (
    <div className="bg-white flex flex-col w-[300px] md:w-[300px] xl:w-[350px] rounded-xl">
      <img src={data.image}></img>
      <div className="flex flex-col text-center justify-center items-center my-4 gap-5  ">
        <div
          className={`rounded-[5px] font-semibold leading-[1rem] text-[0.75rem] ${
            data.status === 'Upcoming' ? 'text-[#666666]' : data.status === 'Active' ? 'text-[#44924C]' : 'text-[#666666]'
          } px-2 py-1 ${data.status === 'Upcoming' ? 'bg-[#F2C94C40]' : data.status === 'Active' ? 'bg-[#44924C3D]' : 'bg-[#FF3C002B]'}`}
        >
          {data.status}
        </div>
        <div className="font-semibold leading-[1.625rem] px-12">{data.name}</div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <div className="font-medium text-[0.875rem] leading-[0.875rem] text-[#444444]">Starts In</div>
        <div className="mt-2 grid grid-cols-5 font-semibold text-[1.125rem] leading-[1.75rem] text-[#454545]">
          <div>00</div>
          <div className="flex items-center justify-center">:</div>
          <div>09</div>
          <div className="flex items-center justify-center">:</div>
          <div>23</div>
        </div>
        <div className="grid grid-cols-3 font-medium leading-[0.625rem] text-[0.625rem] text-[#4F4F4F] gap-5 mt-2">
          <div>Days</div>
          <div className="flex items-center justify-center text-right">Hrs</div>
          <div>Mins</div>
        </div>
        <Link href={`/overview/${data.id}`}>
          <button className="bg-[#44924C] text-white px-3 py-2 rounded-[10px] flex flex-row justify-center items-center gap-2 my-5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.0311 9.84417C15.4686 12.6567 13.348 15.3049 10.3723 15.8967C8.92106 16.1857 7.41561 16.0095 6.07033 15.3931C4.72505 14.7768 3.60851 13.7517 2.87971 12.4638C2.1509 11.176 1.84698 9.69104 2.01122 8.22043C2.17546 6.74981 2.79949 5.3685 3.79445 4.27317C5.8352 2.02542 9.28107 1.40667 12.0936 2.53167"
                stroke="white"
                strokeWidth="1.21875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M6.46875 8.71875L9.28125 11.5312L16.0312 4.21875" stroke="white" strokeWidth="1.21875" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Participate Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HackathonCard;
