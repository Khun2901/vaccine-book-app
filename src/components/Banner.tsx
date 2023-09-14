'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Banner() {

    const covers = ['/img/banner1.jpg','/img/banner2.jpeg','/img/banner3.jpeg','/img/banner4.jpeg']
    const [index, setIndex] = useState(0)

    return (
        <div className='w-full h-[70vh] p-1.5 block relative' onClick={() => setIndex(index+1)}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className='relative text-center mt-[150px] mr-[45%] z-20'>
                <h1 className='text-6xl font-bold font-sans mb-6'>Secure Your Future</h1>
                <h2 className='text-3xl font-medium font-serif'>Get Vaccinated Today!</h2>
            </div>
        </div>
    )
}