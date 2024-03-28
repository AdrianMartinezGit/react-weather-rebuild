import { IGeocodeData, IWeatherData, IWeatherForecastData } from "@/interfaces/interface";
import { api_key } from "./environment";

export const getWeatherData = async (lat: number, lon: number) => {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${37.958}&lon=${-121.291}&appid=${api_key}&units=imperial`);
    const response: IWeatherData = await promise.json();
    
    console.log(response);

    return response;
}

export const getWeatherForecastData = async (lat: number, lon: number) => {
    
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`);
    const response: IWeatherForecastData = await promise.json();
    
    console.log(response);

    return response;
} 

export const getGeocodingData = async (cityname: string) => {
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${api_key}&units=imperial`);
    const response: IGeocodeData[] = await promise.json();
    
    console.log(response);

    return response;
}

export const capitalizeWordLetters = (string: string, splitOn: string = '-', joinWith: string = ' ') => {
    return string.split(splitOn).map(string => string[0].toUpperCase() + string.slice(1)).join(joinWith);
}

export const getMonthFromString = (date: string) => {

}

export const NumberFloorString = (value: number) => {
    return String(Math.floor(value));
}