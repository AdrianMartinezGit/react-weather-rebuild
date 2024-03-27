"use client";

import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { Navbar } from "flowbite-react";

import SunIconImage from '@/assets/SunIcon.png'
import { useRouter } from 'next/navigation';

export default function SearchBarComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push('./favoritespage');
  }
  
  return (
    <Navbar fluid className='bg-[#1A30A6] px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 fixed w-full'> 
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image src={SunIconImage} className="mr-3 h-6 sm:h-9 w-auto" alt="Cloud 9 Logo" />
        <span className="self-center whitespace-nowrap text-4xl font-semibold text-white ubuntu-regular">Cloud 9</span>
      </Navbar.Brand>
      <Navbar.Toggle onClick={handleClick}/>
        <input type='text' className='w-[720px] rounded-3xl' placeholder='Location'/>
        <Navbar.Collapse>
        </Navbar.Collapse>
    </Navbar>
  )
}
