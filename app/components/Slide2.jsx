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

const Slide2 = () => {
  return (
    <div className={clsx("flex gap-6 z-[1] grow", select === 0 || 1 && "z-[-1]")}>       
            <div className={clsx("flex flex-col h-full justify-center px-4 basis-[30%] transition duration-700 ease-in-out opacity-[1]", select === 0 || 1 && "opacity-[0]")}>
                <p className="text-[12px] font-[500]">Miko is a kitsune from the Hakushin Clan and possesses a fox form. In Japanese mythology, kitsune are spiritual fox-like creatures with a reputation for cleverness. Befitting Miko's close ties with the Raiden Shogun, the God of Eternity, mythological kitsune are believed to live for thousands of years and symbolize eternity.</p>
            </div>
            <div className='flex'>
              <div className="">
                <Image src={ig} alt="yae-photo" className={clsx("absolute right-6 bottom-14 z-[2] rotate-0 translate-x-[50rem] opacity-[0] transition duration-700 ease-in-out", select === 2 && "!opacity-[1] !translate-x-0 !rotate-6")} width={700}/>
                <Image src={photo} alt="yae-photo" className={clsx("absolute right-0 bottom-0 z-[1] opacity-[0] transition duration-500 ease-in-out ", select === 2 && "!opacity-[1]")} width={640}/>
            </div>
            </div>
          </div>
  )
}

export default Slide2