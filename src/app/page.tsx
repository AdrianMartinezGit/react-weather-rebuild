'use client'

import { useEffect, useState } from "react";
import { getWeatherData, getWeatherForecastData } from "@/app/utils/dataservice";
import SearchBarComponent from "./components/SearchBarComponent";
import ForecastComponent from "./components/ForecastComponent";
import Image from "next/image";

import sunIcon from '@/assets/SunIcon.png'
import { IWeatherData } from "@/interfaces/interface";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState<IWeatherData>()
  const [cityName, setCityName] = useState<string>('');
  const [stateName, setStateName] = useState<string>('');
  const [currentTemp, setCurrentTemp] = useState<number>(0);
  const [currentUnit, setCurrentUnit] = useState<string>('°F');
  const [minTemp, setMinTemp] = useState<number>(0);
  const [maxTemp, setMaxTemp] = useState<number>(0);
  const [weatherStatus, setWeatherStatus] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      const fetchData = await getWeatherData();
      setCurrentWeather(fetchData);
      setCityName(fetchData?.name);

      const tempConv = fetchData?.main.feels_like;
      setCurrentTemp(Math.floor(tempConv));

      const minTempConv = fetchData.main.temp_min;
      const maxTempConv = fetchData.main.temp_max; 

      setMinTemp(Math.floor(minTempConv));
      setMaxTemp(Math.floor(maxTempConv));

      setWeatherStatus(fetchData.weather[0].description);
    }

    getData();
  }, []);

  return (
    <>
      <div className="gradient-weather-backdrop"></div>
      <SearchBarComponent />
      <div className="pt-10 px-3 sm:px-10">
        <div className="mt-10">
          <div className="w-full h-auto p-10">
            <h1 className="text-white text-4xl text-center sm:text-left">{cityName}</h1>
            <h2 className="text-white text-1xl text-center sm:text-left">California</h2>
            <p className="text-white text-8xl text-center sm:text-left">{currentTemp}{currentUnit}</p>
            <p className="text-white text-xl text-center sm:text-left">H: {maxTemp}{currentUnit} L: {minTemp}{currentUnit}</p>
            <p className="text-white text-2xl text-center sm:text-left">{weatherStatus}</p>
          </div>
        </div>
      </div>

      <div className="px-3 sm:px-10">
        <div className="mt-10">
          <div className="w-full h-[32rem] px-10 py-5">
            <div className="flex justify-center">
              <div className="flex flex-row space-x-20">
                <ForecastComponent />
                <ForecastComponent />
                <ForecastComponent />
                <ForecastComponent />
                <ForecastComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
