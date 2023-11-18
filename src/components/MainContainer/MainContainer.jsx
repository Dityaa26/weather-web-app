import React, { useContext, useEffect } from 'react'
import Card from './Card'
import Label from './Label';
import { WeatherContext } from '../../context/WeatherContext';
import useWeatherData from '../../hooks/useWeatherData';

const MainContainer = () => {
  const [weather, setWeather] = useContext(WeatherContext);
  const data = useWeatherData();

  useEffect(() => {
    setWeather(data);
  }, [data]);
  

  if (!weather) return;
  console.log("weather from MainContainer===>", weather);
  
  return (
    <div className="min-h-screen flex sm:w-10/12 mx-auto mt-14 relative">
      <Label />
      <div className="overflow-x-scroll flex no-scrollbar">
        {weather.list.map((day) => (
          <Card
            key={day?.dt}
            date={day.dt_txt}
            maxTemp={day?.main?.temp_max}
            minTemp={day?.main?.temp_min}
            humidity={day?.main?.humidity}
            sunrise={weather?.city?.sunrise}
            sunset={weather?.city?.sunset}
            description={day?.weather[0]?.main}
          />
        ))}
      </div>
    </div>
  );
}

export default MainContainer