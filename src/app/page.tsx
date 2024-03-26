'use client'

import Image from "next/image";
import { useEffect } from "react";
import { getWeatherData } from "./dataservices/dataservice";

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const fetchData =  await getWeatherData();
    }

    getData();
  }, []);

  return (
    <>
    </>
  );
}
