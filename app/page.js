"use client";

import Image from 'next/image'
import ig from '@/public/ig.png'
import photo from '@/public/photo.png'
import worldwide from '@/public/worldwide.png'
import yaefox from '@/public/yae-fox.png'
import yaefullbody from '@/public/yae-fullbody.png'
import yaegray from '@/public/yae-gray.png'
import yaepink from '@/public/yae-pink.png'
import { useState, useEffect } from 'react'
import clsx from 'clsx';

export default function Home() {

  const [select, setSelect] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      // Mendapatkan tinggi jendela browser
      const windowHeight = window.innerHeight;

      // Jika scroll mencapai posisi tertentu, perbarui state select
      if (scrollPosition >= windowHeight && scrollPosition < windowHeight * 2) {
        setSelect(1);
      } else if (scrollPosition >= windowHeight * 2) {
        setSelect(2);
      } else {
        setSelect(0);
      }
    }

    // Menambahkan event listener pada scroll
    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

    <main className="h-[150rem]">
      <section className='flex flex-col h-screen w-full bg-linen overflow-hidden fixed'>
        <div className="absolute w-full h-full bg-gradient-to-t from-rose-100 to-transparent"></div>
          <Image className="absolute z-[0] top-[-10rem] left-[-5rem] opacity-10" src={yaefullbody} alt="yae"/>
          <div className="flex items-center font-semibold gap-6 p-5 text-metal z-[1]">
            <Image src={worldwide} alt='worldwide' width="60"/>
            <a onClick={() => setSelect(0)} className={clsx("hover:text-gold cursor-pointer transition duration-300 ease-in-out", select === 0 && "border-b-2 border-gold")}>Home</a>
            <a onClick={() => setSelect(1)} className={clsx("hover:text-gold cursor-pointer transition duration-300 ease-in-out", select === 1 && "border-b-2 border-gold")}>About</a>
            <a onClick={() => setSelect(2)} className={clsx("hover:text-gold cursor-pointer transition duration-300 ease-in-out", select === 2 && "border-b-2 border-gold")}>Trivia</a>
          </div>
          <div>
            <div className='flex flex-col justify-center gap-4 p-5 z-[99]'>
                <div onClick={() => setSelect(0)} className={clsx("bg-gray-700/25 rounded-full w-4 h-4 cursor-pointer transition duration-300 ease-in-out", select === 0 && "!bg-gray-700")}></div>
                <div onClick={() => setSelect(1)} className={clsx("bg-gray-700/25 rounded-full w-4 h-4 cursor-pointer transition duration-300 ease-in-out", select === 1 && "!bg-gray-700")}></div>
                <div onClick={() => setSelect(2)} className={clsx("bg-gray-700/25 rounded-full w-4 h-4 cursor-pointer transition duration-300 ease-in-out", select === 2 && "!bg-gray-700")}></div>
            </div>
          </div>
          <div className={clsx("flex h-[1080px] gap-6 z-[1]", select === 1 && "z-[-1]")}>       
            <div className={clsx("flex flex-col h-full justify-center px-4 basis-[30%] transition duration-700 ease-in-out opacity-100", select === 0 || 1 && "opacity-0")}>
              <div className="py-[9.5rem]">
                <h1 className="font-bold text-metal text-6xl">Yae Miko</h1>
                <h4 className="font-medium text-red text-2xl">Guuji Yae</h4>
                <div className="relative">
                  <Image src={yaefox} width="200" alt="fox" className="absolute left-[133px] bottom-[-8rem]"/>
                </div>
              </div>
                <p className="text-[12px] font-[500]">A kitsune of many facets, Yae Miko oversees the Grand Narukami Shrine, owns the Yae Publishing House, and is Eternity's servant and friend.</p>
            </div>
            <div className='flex'>
              <div className="">
                <Image src={yaepink} alt="yae-pink" className={clsx('absolute top-0 right-[-12.5rem] z-[1] translate-x-0 transition duration-500 ease-in-out', select === 0 || 1 && "translate-x-[50rem]")} width="950"/>
                <Image src={yaegray} alt="yae-gray" className={clsx('absolute top-[-0.5rem] right-[-11.5rem] z-[2] translate-x-0 transition duration-300 ease-in-out', select === 0 || 1 && "translate-x-[50rem]")} width="950"/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
