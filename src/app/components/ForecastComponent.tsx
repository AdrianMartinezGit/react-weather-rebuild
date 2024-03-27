'use client'

import React from 'react'

import sunImage from '@/assets/SunIcon.png'
import Image from "next/image";

export default function ForecastComponent () {
  return (
    <div className="w-72 h-full bg-white p-5 rounded-[1rem]">
    <h1 className="text-black text-4xl text-center">Thursday</h1>
    <h2 className="text-black text-1xl text-center">March 27</h2>
    <p className="text-black text-8xl text-center">62°F</p>
    <div className="flex justify-center">
      <Image src={sunImage} className="w-48 h-48 p-5" alt="Forecast Icon"/>
    </div>
    <p className="text-black text-2xl text-center mt-10">Clear Sky</p>
  </div>
  )
}