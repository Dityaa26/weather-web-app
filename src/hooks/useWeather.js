import { useEffect, useState } from "react";

const useWeather = (name) => {
    const [weather, setWeather] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                  `https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=Metric&cnt=5&appid=${
                    import.meta.env.VITE_API_KEY
                  }`
                );
                // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=Metric&appid=${import.meta.env.VITE_API_KEY}`)
                const data = await response.json()
                
                setWeather(data)
                

                
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    },[])

    return weather
}

export default useWeather;