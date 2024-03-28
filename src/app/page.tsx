'use client'

import { useEffect, useState } from "react";
import { NumberFloorString, capitalizeWordLetters, getGeocodingData, getWeatherData, getWeatherForecastData } from "@/app/utils/dataservice";
import SearchBarComponent from "./components/SearchBarComponent";
import ForecastComponent from "./components/ForecastComponent";
import Image from "next/image";

import sunIcon from '@/assets/SunIcon.png'
import { IWeatherData, IWeatherForecastData } from "@/interfaces/interface";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState<IWeatherData>();
  const [forecastWeather, setForecastWeather] = useState<IWeatherForecastData>();
  const [cityName, setCityName] = useState<string>('--------------');
  const [stateName, setStateName] = useState<string>('--------------');
  const [currentTemp, setCurrentTemp] = useState<number>(0);
  const [currentUnit, setCurrentUnit] = useState<string>('°F');
  const [minTemp, setMinTemp] = useState<number>(0);
  const [maxTemp, setMaxTemp] = useState<number>(0);
  const [weatherStatus, setWeatherStatus] = useState<string>('--------------');
  const [tempToggle, setTempToggle] = useState<boolean>(false);

  const[dayOneFieldOne,   setDayOneFieldOne] = useState<string>('--------------');
  const[dayOneFieldTwo,   setDayOneFieldTwo] = useState<string>('--------------');
  const[dayOneFieldThree, setDayOneFieldThree] = useState<string>('----');
  const[dayOneFieldFour,  setDayOneFieldFour] = useState<string>('----');
  const[dayOneFieldFive,  setDayOneFieldFive] = useState<string>('----');

  const[dayTwoFieldOne,   setDayTwoFieldOne] = useState<string>('--------------');
  const[dayTwoFieldTwo,   setDayTwoFieldTwo] = useState<string>('--------------');
  const[dayTwoFieldThree, setDayTwoFieldThree] = useState<string>('----');
  const[dayTwoFieldFour,  setDayTwoFieldFour] = useState<string>('----');
  const[dayTwoFieldFive,  setDayTwoFieldFive] = useState<string>('----');

  const[dayThreeFieldOne,   setDayThreeFieldOne] = useState<string>('--------------');
  const[dayThreeFieldTwo,   setDayThreeFieldTwo] = useState<string>('--------------');
  const[dayThreeFieldThree, setDayThreeFieldThree] = useState<string>('----');
  const[dayThreeFieldFour,  setDayThreeFieldFour] = useState<string>('----');
  const[dayThreeFieldFive,  setDayThreeFieldFive] = useState<string>('----');

  const[dayFourFieldOne,   setDayFourFieldOne] = useState<string>('--------------');
  const[dayFourFieldTwo,   setDayFourFieldTwo] = useState<string>('--------------');
  const[dayFourFieldThree, setDayFourFieldThree] = useState<string>('----');
  const[dayFourFieldFour,  setDayFourFieldFour] = useState<string>('----');
  const[dayFourFieldFive,  setDayFourFieldFive] = useState<string>('----');

  const[dayFiveFieldOne,   setDayFiveFieldOne] = useState<string>('--------------');
  const[dayFiveFieldTwo,   setDayFiveFieldTwo] = useState<string>('--------------');
  const[dayFiveFieldThree, setDayFiveFieldThree] = useState<string>('----');
  const[dayFiveFieldFour,  setDayFiveFieldFour] = useState<string>('----');
  const[dayFiveFieldFive,  setDayFiveFieldFive] = useState<string>('----');

  useEffect(() => {
    const getData = async () => {
      const fetchGeocodingData = await getGeocodingData('Stockton');

      const latitude: number = fetchGeocodingData[0].lat;
      const longitude: number = fetchGeocodingData[0].lon;

      const fetchWeatherData = await getWeatherData(latitude, longitude);
      const fetchForecastData = await getWeatherForecastData(latitude, longitude);

      const mainCityName: string = fetchWeatherData.name;
      setCityName(mainCityName);

      const mainStateName: string = fetchGeocodingData[0].state + ', ' + fetchGeocodingData[0].country; 
      setStateName(mainStateName);

      const mainTempConvert: number = Math.floor(fetchWeatherData.main.feels_like);
      setCurrentTemp(mainTempConvert);

      const minTempConvert: number = Math.floor(fetchWeatherData.main.temp_min);
      setMinTemp(minTempConvert);

      const maxTempCovnert: number = Math.floor(fetchWeatherData.main.temp_max);
      setMaxTemp(maxTempCovnert);

      const weatherDescription: string = capitalizeWordLetters(fetchWeatherData.weather[0].description);
      setWeatherStatus(weatherDescription);

      setCurrentWeather(fetchWeatherData);

      setForecastWeather(fetchForecastData);

      setDayOneFieldThree(String(Math.floor(fetchForecastData.list[0].main.feels_like)) + currentUnit);
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
            <h2 className="text-white text-1xl text-center sm:text-left">{stateName}</h2>
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
                <ForecastComponent dayweek={dayOneFieldOne} daymonth={dayOneFieldTwo} daytemp={dayOneFieldThree} daystat={dayOneFieldFive} dayicon={dayOneFieldFour}/>
                <ForecastComponent dayweek={dayTwoFieldOne} daymonth={dayTwoFieldTwo} daytemp={dayTwoFieldThree} daystat={dayTwoFieldFive} dayicon={dayTwoFieldFour}/>
                <ForecastComponent dayweek={dayThreeFieldOne} daymonth={dayThreeFieldTwo} daytemp={dayTwoFieldThree} daystat={dayThreeFieldFive} dayicon={dayThreeFieldFour}/>
                <ForecastComponent dayweek={dayFourFieldOne} daymonth={dayFourFieldTwo} daytemp={dayTwoFieldThree} daystat={dayFourFieldFive} dayicon={dayFourFieldFour}/>
                <ForecastComponent dayweek={dayFiveFieldOne} daymonth={dayFiveFieldTwo} daytemp={dayTwoFieldThree} daystat={dayFiveFieldFive} dayicon={dayFiveFieldFour}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
