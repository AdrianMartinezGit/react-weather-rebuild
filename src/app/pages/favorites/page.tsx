'use client'

import FavoriteComponent from '@/app/components/FavoriteComponent'
import SearchBarComponent from '@/app/components/SearchBarComponent'
import { getLocalStorage } from '@/app/utils/localstorage'
import React, { useEffect } from 'react'

export default function page() {

  useEffect(() => {
    
  }, [])

  return (
    <>
      <div className='gradient-weather-backdrop'></div>
      <SearchBarComponent routerURL={''} searchURL={'../pages/search'}/>
      <div className="pt-10 px-3 sm:px-10">
        <div className="mt-16 sm:mt-10">
          <div className="w-full h-auto p-10">
            <div className='flex justify-center'>
              <h1 className='text-white text-2xl sm:text-4xl'>Your Favorite Cities</h1>
            </div>
          </div>
        </div>
      </div>

      <FavoriteComponent/>
    </>
  )
}