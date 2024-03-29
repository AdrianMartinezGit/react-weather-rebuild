"use client";

import React, { useState } from 'react'
import Link from "next/link";
import Image from 'next/image';
import { Navbar } from "flowbite-react";

import SunIconImage from '@/assets/SunIcon.svg'
import Dropdownmage from '@/assets/Dropdown.svg'
import { useRouter } from 'next/navigation';
import { ISearchBarProp } from '@/interfaces/interface';

export default function SearchBarComponent(props: ISearchBarProp) {
  const [userInput, setUserInput] = useState<string>("");

  const router = useRouter();

  const handleClick = () => {
    router.push(props.routerURL);
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      if (e.target.value !== '') {
        localStorage.setItem('SearchResult', e.target.value);
        e.target.value = '';

        if (props.searchURL !== 'refresh') {
          router.push(props.searchURL);
        } else {
          window.location.reload();
        }
      }
    }
  }

  return (
    <Navbar fluid className='bg-[#1A30A6] px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 fixed w-full z-[1]'>
      <Navbar.Brand as={Link} href="/">
        <Image src={SunIconImage} className="mr-3 h-6 sm:h-9 w-auto" alt="Cloud 9 Logo" />
        <span className="self-center whitespace-nowrap text-4xl font-semibold text-white ubuntu-regular">Cloud 9</span>
      </Navbar.Brand>
      <div className='block sm:hidden'><Image src={Dropdownmage} className='cursor-pointer p-4 mr-2' onClick={handleClick} alt='Toggle Button' /></div>
      <input type='text' className='w-[720px] rounded-3xl max-sm:mt-2' placeholder='Location' onChange={(e) => setUserInput(e.target.value)} onKeyDown={handleKeyDown} required />
      <div className='hidden sm:block'><Image src={Dropdownmage} className='cursor-pointer p-3 mr-2' onClick={handleClick} alt='Toggle Button' /></div>
    </Navbar>
  )
}
