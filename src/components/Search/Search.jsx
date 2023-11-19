import React, { useEffect } from 'react'
import { useState, useContext } from "react";
import useWeatherData from '../../hooks/useWeatherData';
import { CityContext } from '../../context/CityContext';
import Shimmer from './Shimmer';

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [weather, setWeather] = useState(useWeatherData());
  const [city, setCity] = useContext(CityContext)
  let data = useWeatherData()
  useEffect(() => {
    setWeather(data)
  },[data])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city || 'mumbai'}&units=Metric&cnt=5&appid=${
            import.meta.env.VITE_API_KEY
          }`
        );
        data = await response.json();

        setWeather(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [city])

  const handleSearch = (e) => {
    e.preventDefault()
    if(!searchInput) return
    setCity(searchInput)
  setSearchInput('')
  }


  return (!weather? <Shimmer /> :
    <div className="flex flex-col-reverse mx-4 pb-1 mt-8 sm:flex-row sm:w-10/12 sm:mx-auto sm:items-center justify-between border-b-[1px] border-gray-400">
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl flex items-center">
          <img
            src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-location-ui-anggara-basic-outline-anggara-putra.png"
            alt="external-location-ui-anggara-basic-outline-anggara-putra"
          />
          {`${weather?.city?.name || 'Not Found'}, ${weather?.city?.country || ''}`}
        </h1>
        <p className="text-slate-700">{`${weather?.city?.coord?.lat} N & ${weather?.city?.coord?.lon} E`}</p>
      </div>
      <div className="w-10/12 sm:w-4/12 sm:mx-0 mx-auto flex items-center h-10 bg-white px-2 rounded-lg shadow-md sm:mb-3 mb-5">
        <input
          type="text"
          className="w-full outline-none placeholder:italic"
          placeholder="Search your city here..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch} className='outline-none'>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png"
            alt="search--v1"
            className="p-1 outline-none"
          />
        </button>
      </div>
    </div>
  );
}

export default Search