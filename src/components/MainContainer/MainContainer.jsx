import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import Label from './Label';
import useWeatherData from '../../hooks/useWeatherData';
import { CityContext } from '../../context/CityContext';
import Shimmer from './Shimmer';

const MainContainer = () => {

  const [weather, setWeather] = useState(useWeatherData());
  const [city, setCity] = useContext(CityContext);
  let data = useWeatherData();
  useEffect(() => {
    setWeather(data);
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${
            city || "mumbai"
          }&units=Metric&cnt=5&appid=${import.meta.env.VITE_API_KEY}`
        );
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=Metric&appid=${import.meta.env.VITE_API_KEY}`)
        data = await response.json();

        setWeather(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [city]);


  return ( !weather ? <Shimmer /> :
    <div className="min-h-screen flex sm:w-10/12 mx-auto mt-14 relative">
      <Label />
      <div className="overflow-x-scroll flex no-scrollbar">
        {weather?.list?.map((day) => (
          <Card
            key={day?.dt}
            date={day?.dt}
            maxTemp={day?.main?.temp_max}
            minTemp={day?.main?.temp_min}
            humidity={day?.main?.humidity}
            sunrise={weather?.city?.sunrise}
            sunset={weather?.city?.sunset}
            weather={day?.weather[0]?.main}
          />
        ))}
      </div>
    </div>
  );
}

export default MainContainer