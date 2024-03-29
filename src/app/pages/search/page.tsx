'use client'

import SearchBarComponent from '@/app/components/SearchBarComponent'
import React from 'react'

export default function Page() {


  return (
    <>
      <div className='gradient-weather-backdrop'></div>
      <SearchBarComponent routerURL={'../pages/favorites'} searchURL={'refresh'}/>
      <div className="pt-10 px-3 sm:px-10">
        <div className="mt-16 sm:mt-10">
          <div className="w-full h-auto p-10">
            <div className='flex justify-center'>
              <h1 className='text-white text-4xl'>{}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}