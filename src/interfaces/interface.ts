export interface IWeatherData {
    base: string,
    clouds: All,
    cod: number,
    coord: Coord,
    dt: number,
    id: number,
    main: Main,
    name: string,
    sys: Sys,
    timezone: number,
    visibility: number,
    weather: Weather[],
    wind: Wind
} 

export interface All {
    all: number    
}

export interface Coord {
    lat: number,
    lon: number
}

export interface Main {
    feels_like: number,
    grnd_level?: number,
    humidity: number,
    pressure: number,
    sea_level?: number,
    temp: number,
    temp_kf?: number,
    temp_max: number,
    temp_min: number
} 

export interface Sys {
    country: string,
    id: number,
    sunrise: number,
    sunset: number,
    type: number
}

export interface Weather {
    description: string,
    icon: string,
    id: number,
    main: string
}

export interface Wind {
    deg: number,
    gust?: number,
    speed: number
}

export interface IWeatherForecastData {
    city: City,
    cnt: number,
    cod: string,
    list: List[],
    message: 0
}

export interface City {
    coord: Coord,
    country: string,
    id: number,
    name: string,
    population: number,
    sunrise: number,
    sunset: number,
    timezone: number
}

export interface List {
    clouds: All,
    dt: number,
    dt_txt: string,
    main: Main,
    pop: number,
    snow: Snow,
    sys: Sys1,
    visibility: number,
    weather: Weather[],
    wind: Wind
}

export interface Snow {
    '3h': number
}

export interface Sys1 {
    pod: string
}

export interface IGeocodeData {
    country: string,
    lat: number,
    local_names: LocalNames,
    lon: number,
    name: string,
    state: string
}

export interface LocalNames {
    en: string
}

export interface IWeatherForecastProps {
    dayweek: string,
    daymonth: string,
    daytemp: string,
    dayicon: string,
    daystat: string
}

export interface ISearchBarProp {
    routerURL: string,
    searchURL: string
}