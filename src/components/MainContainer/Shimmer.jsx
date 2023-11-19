import React from 'react'
import Label from './Label';

const Dummy = () => {
    return (
      <div className="min-w-[180px] mx-3">
        <h1 className="text-center font-bold text-slate-800 text-2xl">
          Date
        </h1>
        <div className="bg-gradient-to-t from-slate-950 to-slate-800 h-[300px] w-full  rounded-lg text-white">
          <div className="flex items-center justify-around w-full border-b-[1px] border-slate-600 py-2 pl-2 pr-6 h-1/4">
            
            <span className="font-semibold text-xl"></span>
          </div>
          <div className="flex flex-col items-center justify-between h-3/4">
            <p className="font-semibold my-2"></p>
            <p className="font-semibold my-2"></p>
            <p className="font-bold my-2"></p>
            <p className="font-bold my-2">
             
            </p>
            <p className="font-bold my-2">
              
            </p>
          </div>
        </div>
      </div>
    );
}

const Shimmer = () => {
  return (
    <div className="min-h-screen flex sm:w-10/12 mx-auto mt-14 relative">
      <Label />
      <div className="overflow-x-scroll flex no-scrollbar">
        <Dummy />
        <Dummy />
        <Dummy />
        <Dummy />
        <Dummy />
      </div>
    </div>
  );
}

export default Shimmer