'use client';
import React from 'react';
import { usePostContext } from '@/context/PostContext';
import Banner from './Banner';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

const Description = ({ slug }) => {
  const { getPostById, deletePost } = usePostContext();
  const data = getPostById(slug);
  const router = useRouter();

  return (
    <>
      {data?.id ? (
        <>
          <Banner data={data} />
          <Dialog>
            <div className="px-[2rem] md:px-[6rem] 2xl:px-[25rem] shadow-custom">
              <div className="flex flex-row items-end justify-between h-[66px]">
                <div className="px-3 pb-1 font-bold text-[1.125rem] leading-[1.75rem] border-solid border-b-4 border-[#44924C]">Overview</div>
                <div className="flex gap-4 pb-3">
                  <button className="text-white bg-[#44924C] rounded-[10px] font-semibold text-[0.85rem] leading-[1.125rem] px-6 py-2">Edit</button>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="text-red bg-white text-[#DC1414] border-solid border-2 border-[#DC1414] rounded-[10px] font-semibold text-[0.85rem] leading-[1.125rem] px-4 py-2"
                    >
                      Delete
                    </Button>
                  </DialogTrigger>
                  {/* <button className="text-red bg-white text-[#DC1414] border-solid border-2 border-[#DC1414] rounded-[10px] font-semibold text-[0.85rem] leading-[1.125rem] px-4 py-2">Delete</button> */}
                </div>
              </div>
            </div>
            <div className="px-[2rem] md:px-[6rem] 2xl:px-[25rem] my-12 w-full md:w-3/4">
              <p className="text-[#64607D] font-medium text-[1.125rem] leading-[1.75rem]">{data?.description}</p>
            </div>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Hackathon</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="">Are you Sure you want to Delete this Post</div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-[#DC1414]"
                  onClick={() => {
                    router.push('/admin');
                    deletePost(data.id);
                  }}
                >
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="text-[5rem]">404</div>
          <div>Oops Post not found!</div>
          <Link href={'/'}>
            <button className="text-white bg-[#44924C] rounded-[10px] font-semibold text-[0.85rem] leading-[1.125rem] px-6 py-2 mt-10">Go Back</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Description;
