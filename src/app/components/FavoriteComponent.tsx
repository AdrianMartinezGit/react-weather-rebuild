'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IFavoriteProps } from '@/interfaces/interface'
import { NumberFloorString, capitalizeWordLetters, getGeocodingData, getWeatherData } from '../utils/dataservice'

import unfaveButton from '@/assets/RemoveFavButton.svg'
import { removeLocalStorage } from '../utils/localstorage'
import { useRouter } from 'next/navigation'

export default function FavoriteComponent(props: IFavoriteProps) {

    const router = useRouter();

    const [cityName, setCityName] = useState<string>('--------------');
    const [timeDate, setTimeDate] = useState<string>('--:--');
    const [status, setStatus] = useState<string>('--------------');
    const [temp, setTemp] = useState<string>('--');
    const [currentUnit, setCurrentUnit] = useState<string>('°F');
    const [minTemp, setMinTemp] = useState<number>(0);
    const [maxTemp, setMaxTemp] = useState<number>(0);
    const [tempDelete, setTempDelete] = useState<string>('');

    useEffect(() => {
        const getData = async () => {
            const fetchGecodeData = await getGeocodingData(props.cityname);
            const fetchWeatherData = await getWeatherData(fetchGecodeData[0].lat, fetchGecodeData[0].lon);

            const dateTime: string = AMPMTimeFormat(fetchWeatherData.dt);
            setTimeDate(dateTime);

            const cityString: string = fetchGecodeData[0].name;
            setCityName(cityString);

            const statusString: string = capitalizeWordLetters(fetchWeatherData.weather[0].description);
            setStatus(statusString);

            const tempConv: string = NumberFloorString(fetchWeatherData.main.feels_like);
            setTemp(tempConv);

            const minTempConvert: number = Math.floor(fetchWeatherData.main.temp_min);
            setMinTemp(minTempConvert);

            const maxTempCovnert: number = Math.floor(fetchWeatherData.main.temp_max);
            setMaxTemp(maxTempCovnert);
        }

        getData();
    }, []);

    const AMPMTimeFormat = (datetime: number) => {
        let date = new Date(datetime * 1000),
            hours: any = date.getHours(),
            minutes: any = date.getMinutes(),
            ampm: string = hours >= 12 ? 'PM' : 'AM',
            ahours = hours % 12,
            bhours = ahours ? ahours : 12,
            fminutes = minutes < 10 ? '0' + minutes : minutes,
            strTime = bhours + ':' + fminutes + ' ' + ampm;

        return strTime;
    }

    const handleRemove = (e: any) => {
        e.stopPropagation();
        removeLocalStorage(cityName);
        setTempDelete('hidden');
    }

    const handleRedirect = () => {
        //alert('Clicked ontop');
        localStorage.setItem('SearchResult', cityName);
        router.push('../pages/search');
    }

    return (
        <div className={`w-full h-auto bg-white p-4 rounded-[1rem] cursor-pointer ${tempDelete}`} onClick={handleRedirect}>
            <div className='grid grid-cols-2'>
                <div>
                    <h1 className="text-black text-2xl text-left font-semibold">{cityName}</h1>
                    <h2 className="text-black text-sm text-left font-light">{timeDate}</h2>
                    <p className="text-black text-1xl text-left font-bold">{status}</p>
                </div>
                <div>
                    <div className='flex justify-end'>
                        <div className='w-72'>
                            <div className='grid grid-cols-2'>
                                <div className='flex justify-end'>
                                    <Image src={unfaveButton} className='cursor-pointer' alt='Remove Button' onClick={handleRemove} />
                                </div>
                                <div className='hidden sm:block'>
                                    <h1 className='text-black text-5xl font-semibold text-right'>{temp}{currentUnit}</h1>
                                    <p className='text-black text-right'>H: {maxTemp}{currentUnit} | L: {minTemp}{currentUnit}</p>
                                </div>
                                <div className='block sm:hidden'>
                                    <h1 className='text-black text-3xl font-semibold text-right'>{temp}{currentUnit}</h1>
                                    <p className='text-black text-right'>H: {maxTemp}{currentUnit}</p>
                                    <p className='text-black text-right'>L: {minTemp}{currentUnit}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}