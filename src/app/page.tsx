'use client'

import Image from "next/image";
import { useEffect } from "react";
import { getWeatherData, getWeatherForecastData } from "@/app/utils/dataservice";
import SearchBarComponent from "./components/SearchBarComponent";

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const fetchData =  await getWeatherForecastData('Stockton', 'CA');
    }

    getData();
  }, []);

  return (
    <>
      <div className="gradient-weather-backdrop"></div>
      <SearchBarComponent/>

    </>
  );
}
