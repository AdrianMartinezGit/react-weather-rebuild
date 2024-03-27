import { IWeatherData, IWeatherForecastData } from "@/interfaces/interface";
import { api_key } from "./environment";

export const getWeatherData = async () => {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${37.958}&lon=${-121.291}&appid=${api_key}&units=imperial`);
    const response: IWeatherData = await promise.json();
    
    console.log(response);

    return response;
}

export const getWeatherForecastData = async (cityname: string, statecode: string) => {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname},${statecode}&appid=${api_key}`);
    const response: IWeatherForecastData = await promise.json();
    
    console.log(response);

    return response;
} 