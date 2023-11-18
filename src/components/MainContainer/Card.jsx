import React from "react";

const Card = () => {
  return (
    <div className="min-w-[200px] mx-3">
      <h1 className="text-center">Date</h1>
      <div className="bg-gradient-to-t from-slate-950 to-slate-900 min-h-[300px] min-w-full  rounded-lg text-white">
        <div className="flex items-center justify-between w-full border-b-[1px] border-slate-600 py-2 pl-2 pr-6 h-1/4">
          <img
            width="60"
            src="https://img.icons8.com/sf-ultralight/100/ffffff/summer.png"
            alt="summer"
            className="m-0"
          />
          <span className="font-semibold text-xl">Sunny</span>
        </div>
        <div className="flex flex-col items-center justify-between h-3/4">
          <p className="font-semibold my-2">AAA</p>
          <p className="font-semibold my-2">AAA</p>
          <p className="font-semibold my-2">AAA</p>
          <p className="font-semibold my-2">AAA</p>
          <p className="font-semibold my-2">AAA</p>
        </div>
      </div>
    </div>
  );
};

export default Card;