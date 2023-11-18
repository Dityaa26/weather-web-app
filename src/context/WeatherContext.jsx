import { createContext, useEffect, useState } from "react";
import useWeatherData from "../hooks/useWeatherData";

export const WeatherContext = createContext();


const WeatherProvider = ({children}) => {
  const [weather, setWeather] = useState();

  

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;