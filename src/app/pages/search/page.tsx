'use client'

import { useEffect, useState } from "react";
import { NumberFloorString, capitalizeWordLetters, convertUnixToLocalDate, convertUnixToLocalDateAlt, getGeocodingData, getWeatherData, getWeatherForecastData } from "@/app/utils/dataservice";
import SearchBarComponent from "@/app/components/SearchBarComponent";
import ForecastComponent from "@/app/components/ForecastComponent";
import Image from "next/image";

import { IWeatherData, IWeatherForecastData } from "@/interfaces/interface";

import faveButton from '@/assets/AddFavButton.svg'
import unfaveButton from '@/assets/RemoveFavButton.svg'
import { getLocalStorage, removeLocalStorage, saveToLocalStorage } from "@/app/utils/localstorage";


export default function Home() {
  const [currentWeather, setCurrentWeather] = useState<IWeatherData>();
  const [forecastWeather, setForecastWeather] = useState<IWeatherForecastData>();
  const [cityName, setCityName] = useState<string>('--------------');
  const [stateName, setStateName] = useState<string>('--------------');
  const [currentTemp, setCurrentTemp] = useState<number>(0);
  const [currentUnit, setCurrentUnit] = useState<string>('°F');
  const [minTemp, setMinTemp] = useState<number>(0);
  const [maxTemp, setMaxTemp] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<string>('');
  const [weatherStatus, setWeatherStatus] = useState<string>('--------------');

  const [faveImage, setFaveImage] = useState<string>(faveButton)

  const [dayOneFieldOne, setDayOneFieldOne] = useState<string>('--------------');
  const [dayOneFieldTwo, setDayOneFieldTwo] = useState<string>('--------------');
  const [dayOneFieldThree, setDayOneFieldThree] = useState<string>('----');
  const [dayOneFieldFour, setDayOneFieldFour] = useState<string>('');
  const [dayOneFieldFive, setDayOneFieldFive] = useState<string>('----');

  const [dayTwoFieldOne, setDayTwoFieldOne] = useState<string>('--------------');
  const [dayTwoFieldTwo, setDayTwoFieldTwo] = useState<string>('--------------');
  const [dayTwoFieldThree, setDayTwoFieldThree] = useState<string>('----');
  const [dayTwoFieldFour, setDayTwoFieldFour] = useState<string>('');
  const [dayTwoFieldFive, setDayTwoFieldFive] = useState<string>('----');

  const [dayThreeFieldOne, setDayThreeFieldOne] = useState<string>('--------------');
  const [dayThreeFieldTwo, setDayThreeFieldTwo] = useState<string>('--------------');
  const [dayThreeFieldThree, setDayThreeFieldThree] = useState<string>('----');
  const [dayThreeFieldFour, setDayThreeFieldFour] = useState<string>('');
  const [dayThreeFieldFive, setDayThreeFieldFive] = useState<string>('----');

  const [dayFourFieldOne, setDayFourFieldOne] = useState<string>('--------------');
  const [dayFourFieldTwo, setDayFourFieldTwo] = useState<string>('--------------');
  const [dayFourFieldThree, setDayFourFieldThree] = useState<string>('----');
  const [dayFourFieldFour, setDayFourFieldFour] = useState<string>('');
  const [dayFourFieldFive, setDayFourFieldFive] = useState<string>('----');

  const [dayFiveFieldOne, setDayFiveFieldOne] = useState<string>('--------------');
  const [dayFiveFieldTwo, setDayFiveFieldTwo] = useState<string>('--------------');
  const [dayFiveFieldThree, setDayFiveFieldThree] = useState<string>('----');
  const [dayFiveFieldFour, setDayFiveFieldFour] = useState<string>('');
  const [dayFiveFieldFive, setDayFiveFieldFive] = useState<string>('----');

  useEffect(() => {
    const getData = async () => {
      const search: string = String(localStorage.getItem('SearchResult'));
      const fetchGeocodingData = await getGeocodingData(search);

      setCurrentUnit('°F');

      const latitude: number = fetchGeocodingData[0].lat;
      const longitude: number = fetchGeocodingData[0].lon;

      const fetchWeatherData = await getWeatherData(latitude, longitude);
      const fetchForecastData = await getWeatherForecastData(latitude, longitude);

      const mainCityName: string = fetchWeatherData.name;
      setCityName(mainCityName);

      const mainImageName: string = `https://openweathermap.org/img/wn/${fetchWeatherData.weather[0].icon}@4x.png`;
      setCurrentImage(mainImageName);

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

      let favorites = getLocalStorage();
      const currentCity: any = fetchWeatherData.name;
  
      if (favorites.includes(currentCity)) {
        setFaveImage(unfaveButton);
      } else {
        setFaveImage(faveButton);
      }

      setDayOneFieldOne(convertUnixToLocalDateAlt(fetchForecastData.list[0].dt));
      setDayTwoFieldOne(convertUnixToLocalDateAlt(fetchForecastData.list[12].dt));
      setDayThreeFieldOne(convertUnixToLocalDateAlt(fetchForecastData.list[18].dt));
      setDayFourFieldOne(convertUnixToLocalDateAlt(fetchForecastData.list[24].dt));
      setDayFiveFieldOne(convertUnixToLocalDateAlt(fetchForecastData.list[32].dt));

      setDayOneFieldTwo(convertUnixToLocalDate(fetchForecastData.list[0].dt));
      setDayTwoFieldTwo(convertUnixToLocalDate(fetchForecastData.list[12].dt));
      setDayThreeFieldTwo(convertUnixToLocalDate(fetchForecastData.list[18].dt));
      setDayFourFieldTwo(convertUnixToLocalDate(fetchForecastData.list[24].dt));
      setDayFiveFieldTwo(convertUnixToLocalDate(fetchForecastData.list[32].dt));

      setDayOneFieldThree(NumberFloorString(fetchForecastData.list[0].main.feels_like) + currentUnit);
      setDayTwoFieldThree(NumberFloorString(fetchForecastData.list[12].main.feels_like) + currentUnit);
      setDayThreeFieldThree(NumberFloorString(fetchForecastData.list[18].main.feels_like) + currentUnit);
      setDayFourFieldThree(NumberFloorString(fetchForecastData.list[24].main.feels_like) + currentUnit);
      setDayFiveFieldThree(NumberFloorString(fetchForecastData.list[32].main.feels_like) + currentUnit);

      setDayOneFieldFour(fetchForecastData.list[0].weather[0].icon);
      setDayTwoFieldFour(fetchForecastData.list[12].weather[0].icon);
      setDayThreeFieldFour(fetchForecastData.list[18].weather[0].icon);
      setDayFourFieldFour(fetchForecastData.list[24].weather[0].icon);
      setDayFiveFieldFour(fetchForecastData.list[32].weather[0].icon);

      setDayOneFieldFive(capitalizeWordLetters(fetchForecastData.list[0].weather[0].description));
      setDayTwoFieldFive(capitalizeWordLetters(fetchForecastData.list[12].weather[0].description));
      setDayThreeFieldFive(capitalizeWordLetters(fetchForecastData.list[18].weather[0].description));
      setDayFourFieldFive(capitalizeWordLetters(fetchForecastData.list[24].weather[0].description));
      setDayFiveFieldFive(capitalizeWordLetters(fetchForecastData.list[32].weather[0].description));
    }

    getData();
  }, []);

  const handleFavorite = () => {
    let favorites = getLocalStorage();
    const currentCity: any = currentWeather?.name;

    if (favorites.includes(currentCity)) {
      setFaveImage(faveButton);
      removeLocalStorage(currentCity);
    } else {
      setFaveImage(unfaveButton);
      saveToLocalStorage(currentCity);
    }
  }

  return (
    <>
      <div className="gradient-weather-backdrop"></div>
      <SearchBarComponent routerURL={"../pages/favorites"} searchURL={'refresh'} />
      <div className="pt-10 px-3 sm:px-10">
        <div className="mt-16 sm:mt-10">
          <div className="w-full h-auto p-10">
            <div className="grid min-w-[640px]:grid-rows-3 sm:grid-cols-3">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <h1 className="text-white text-4xl text-center sm:text-left">{cityName}</h1>
                  <Image src={faveImage} className="cursor-pointer absolute w-8 h-8 sm:w-12 sm:h-12 max-sm:mt-2 sm:mt-2 ml-56 sm:ml-[11rem]" alt="Favorite Button" onClick={handleFavorite} />
                </div>
                <h2 className="text-white text-1xl text-center sm:text-left">{stateName}</h2>
                <p className="text-white text-8xl text-center sm:text-left">{currentTemp}{currentUnit}</p>
                <div className="block sm:hidden">
                  <div className="flex justify-center">
                    <Image src={currentImage} width={200} height={200} alt="Weather Icon" />
                  </div>
                </div>
                <p className="text-white text-xl text-center sm:text-left">H: {maxTemp}{currentUnit} L: {minTemp}{currentUnit}</p>
                <p className="text-white text-2xl text-center sm:text-left">{weatherStatus}</p>
              </div>
              <div className="hidden sm:block">
                <div className="flex justify-center">
                  <Image src={currentImage} width={200} height={200} alt="Weather Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 sm:px-20">
        <hr />
      </div>

      <div className="px-3 sm:px-10">
        <div className="mt-10">
          <div className="w-full h-[32rem] px-10 py-5">
            <div className="flex justify-center">
              <div className="flex max-sm:flex-col max-sm:space-y-3 sm:flex-row sm:space-x-20">
                <ForecastComponent dayweek={dayOneFieldOne} daymonth={dayOneFieldTwo} daytemp={dayOneFieldThree} daystat={dayOneFieldFive} dayicon={dayOneFieldFour} />
                <ForecastComponent dayweek={dayTwoFieldOne} daymonth={dayTwoFieldTwo} daytemp={dayTwoFieldThree} daystat={dayTwoFieldFive} dayicon={dayTwoFieldFour} />
                <ForecastComponent dayweek={dayThreeFieldOne} daymonth={dayThreeFieldTwo} daytemp={dayThreeFieldThree} daystat={dayThreeFieldFive} dayicon={dayThreeFieldFour} />
                <ForecastComponent dayweek={dayFourFieldOne} daymonth={dayFourFieldTwo} daytemp={dayFourFieldThree} daystat={dayFourFieldFive} dayicon={dayFourFieldFour} />
                <ForecastComponent dayweek={dayFiveFieldOne} daymonth={dayFiveFieldTwo} daytemp={dayFiveFieldThree} daystat={dayFiveFieldFive} dayicon={dayFiveFieldFour} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}