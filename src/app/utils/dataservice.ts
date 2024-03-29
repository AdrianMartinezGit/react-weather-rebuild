import { IGeocodeData, IWeatherData, IWeatherForecastData } from "@/interfaces/interface";

const api_key = process.env.NEXT_PUBLIC_API_KEY

export const getWeatherData = async (lat: number, lon: number) => {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`);
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
    const promise = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${api_key}&units=imperial`);
    const response: IGeocodeData[] = await promise.json();
    
    console.log(response);

    return response;
}

export const capitalizeWordLetters = (string: string, splitOn: string = '-', joinWith: string = ' ') => {
    return string.split(splitOn).map(string => string[0].toUpperCase() + string.slice(1)).join(joinWith);
}

export const convertUnixToLocalDate = (time: number) => {
    let date = new Date(time * 1000),
          month = convertUnixMonth(('0' + (date.getMonth() + 1)).slice(-2)),
          day = ('0' + date.getDate()).slice(-2),
      timeDate;
      
      timeDate = `${month} ${day}`;
          
      return timeDate;
}

export const convertUnixToLocalDateAlt = (time: number) => {
    let date = new Date(time * 1000),
          dweek = convertUnixDayOfWeek(('0' + date.getDay()).slice(-2)),
      timeDate;
      
      timeDate = `${dweek}`;
          
      return timeDate;
}

export const NumberFloorString = (value: number) => {
    return String(Math.floor(value));
}

export const convertUnixMonth = (month: string) => {
    switch (month) {
        case '01':
            return 'January';
        break;

        case '02':
            return 'February';
        break;

        case '03':
            return 'March';
        break;

        case '04':
            return 'April';
        break;

        case '05':
            return 'May';
        break;

        case '06':
            return 'June';
        break;

        case '07':
            return 'July';
        break;

        case '08':
            return 'August';
        break;

        case '09':
            return 'September';
        break;

        case '10':
            return 'October';
        break;

        case '11':
            return 'November';
        break;

        case '12':
            return 'December';
        break;
    }
}

export const convertUnixDayOfWeek = (day: string) => {
    switch (day) {
        case '00':
            return 'Sunday';
        break;

        case '01':
            return 'Monday';
        break;

        case '02':
            return 'Tuesday';
        break;

        case '03':
            return 'Wednesday';
        break;

        case '04':
            return 'Thursday';
        break;

        case '05':
            return 'Friday';
        break;

        case '06':
            return 'Saturday';
        break;
    }
}