'use client'

import React from 'react'

import Image from "next/image";
import { IWeatherForecastProps } from '@/interfaces/interface';

export default function ForecastComponent(props: IWeatherForecastProps) {
  return (
    <>
      <div className='hidden sm:block'>
        <div className="w-72 h-full bg-white p-5 rounded-[1rem]">
          <h1 className="text-black text-4xl text-center">{props.dayweek}</h1>
          <h2 className="text-black text-1xl text-center">{props.daymonth}</h2>
          <p className="text-black text-8xl text-center">{props.daytemp}</p>
          <div className="flex justify-center">
            <Image src={`https://openweathermap.org/img/wn/${props.dayicon}@4x.png`} width={192} height={192} className="p-5" alt="Forecast Icon" />
          </div>
          <p className="text-black text-2xl text-center mt-10">{props.daystat}</p>
        </div>
      </div>
      <div className='block sm:hidden'>
        <div className="w-72 h-28 bg-white p-5 rounded-[1rem]">
          <div className='absolute ml-40'><p className="text-black text-4xl text-right">{props.daytemp}</p></div>
          <div className='absolute ml-36'><Image src={`https://openweathermap.org/img/wn/${props.dayicon}@4x.png`} width={128} height={128} className="p-5" alt="Forecast Icon" /></div>
          <h1 className="text-black text-2xl text-left font-semibold">{props.dayweek}</h1>
          <h2 className="text-black text-sm text-left font-light">{props.daymonth}</h2>
          <p className="text-black text-1xl text-left font-bold">{props.daystat}</p>
        </div>
      </div>
    </>
  )
}