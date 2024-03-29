'use client'

import React from 'react'

import Image from "next/image";
import { IWeatherForecastProps } from '@/interfaces/interface';

export default function ForecastComponent (props: IWeatherForecastProps) {
  return (
    <div className="w-72 h-full bg-white p-5 rounded-[1rem]">
    <h1 className="text-black text-4xl text-center">{props.dayweek}</h1>
    <h2 className="text-black text-1xl text-center">{props.daymonth}</h2>
    <p className="text-black text-8xl text-center">{props.daytemp}</p>
    <div className="flex justify-center">
      <Image src={`https://openweathermap.org/img/wn/${props.dayicon}@4x.png`} width={192} height={192} className="p-5" alt="Forecast Icon"/>
    </div>
    <p className="text-black text-2xl text-center mt-10">{props.daystat}</p>
  </div>
  )
}