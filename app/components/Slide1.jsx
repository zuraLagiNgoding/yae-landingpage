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
import React from 'react'

const Slide1 = () => {
    const [select, setSelect] = useState(0)

  return (
    <div className={clsx("flex gap-6 z-[1] grow", select === 0 || 1 && "z-[-1]")}>       
            <div className={clsx("flex flex-col h-full justify-center px-4 basis-[30%] transition duration-700 ease-in-out opacity-[1]", select === 0 || 1 && "opacity-[0]")}>
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
                <Image src={yaegray} alt="yae-gray" className={clsx('absolute top-[-0.5rem] right-[-11.5rem] z-[2] translate-x-0 transition duration-300 ease-in-out', select === 0 || 1 && "translate-x-[50rem]")} width="950" />
            </div>
            </div>
          </div>
  )
}

export default Slide1