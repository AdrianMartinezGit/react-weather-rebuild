import { IWeatherData } from "../interfaces/interface";
import { api_key } from "./environment";

export const getWeatherData = async () => {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${37.958}&lon=${-121.291}&appid=${api_key}`);
    const response: IWeatherData = await promise.json();
    
    console.log(response);
}