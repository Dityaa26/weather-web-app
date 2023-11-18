import React from "react";

const Card = ({ date, maxTemp, minTemp, humidity, sunrise, sunset, description }) => {
    const standardDate = new Date(date.slice(0, 10)).toDateString()
  return (
    <div className="min-w-[180px] mx-3">
      <h1 className="text-center font-bold text-slate-800 text-2xl">
        {"" + standardDate.slice(4)}
      </h1>
      <div className="bg-gradient-to-t from-slate-950 to-slate-800 h-[300px] w-full  rounded-lg text-white">
        <div className="flex items-center justify-around w-full border-b-[1px] border-slate-600 py-2 pl-2 pr-6 h-1/4">
          <img
            width="60"
            src="https://img.icons8.com/sf-ultralight/100/ffffff/summer.png"
            alt="summer"
            className="m-0"
          />
          <span className="font-semibold text-xl">{description}</span>
        </div>
        <div className="flex flex-col items-center justify-between h-3/4">
          <p className="font-semibold my-2">{maxTemp} °C</p>
          <p className="font-semibold my-2">{minTemp} °C</p>
          <p className="font-bold my-2">{humidity} %</p>
          <p className="font-bold my-2">
            {"" + new Date(sunrise * 1000).toUTCString().slice(-11, -7)} AM
          </p>
          <p className="font-bold my-2">
            {"" + new Date(sunset * 1000).toUTCString().slice(-11, -7)} PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
