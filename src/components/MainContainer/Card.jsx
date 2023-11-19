import React from "react";

const descriptionIcon = {
  Clear: "https://img.icons8.com/sf-ultralight/100/ffffff/summer.png",
  Clouds: "https://img.icons8.com/sf-ultralight/100/ffffff/cloud.png",
  Snow: "https://img.icons8.com/metro/52/000000/snow.png",
  Rain: "https://img.icons8.com/sf-ultralight/100/ffffff/rain.png",
  Thunderstorm:
    "https://img.icons8.com/sf-ultralight/100/ffffff/lightning-bolt.png",
  Mist: "https://img.icons8.com/ios/100/ffffff/fog-day--v1.png",
};

const Card = ({
  date,
  maxTemp,
  minTemp,
  humidity,
  sunrise,
  sunset,
  weather,
}) => {
  const standardDate = new Date(date.slice(0, 10)).toDateString();
  return (
    <div className="min-w-[180px] mx-3">
      <h1 className="text-center font-bold text-slate-800 text-2xl">
        {"" + standardDate.slice(4)}
      </h1>
      <div className="bg-gradient-to-t from-slate-950 to-slate-800 h-[300px] w-full  rounded-lg text-white">
        <div className="flex items-center justify-around w-full border-b-[1px] border-slate-600 py-2 pl-2 pr-6 h-1/4">
          <img
            width="60"
            src={descriptionIcon[weather]}
            alt="summer"
            className="m-0"
          />
          <span className="font-semibold text-xl">{weather}</span>
        </div>
        <div className="flex flex-col items-center justify-between h-3/4">
          <p className="font-semibold my-2">{`${Math.trunc(
            maxTemp
          )} °C / ${Math.trunc(maxTemp * (9 / 5) + 32)} °F`}</p>
          <p className="font-semibold my-2">{`${Math.trunc(
            minTemp
          )} °C / ${Math.trunc(minTemp * (9 / 5) + 32)} °F`}</p>
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
