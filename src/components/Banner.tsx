'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Banner() {

    const covers = ['/img/banner1.jpg','/img/banner2.jpeg','/img/banner3.jpeg','/img/banner4.jpeg']
    const [index, setIndex] = useState(0)
    const router = useRouter();
    const { data: session } = useSession()

    console.log(session?.user.token)

    return (
        <div className='w-full h-[70vh] p-1.5 block relative' onClick={() => setIndex(index+1)}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className='relative text-center text-white mt-[150px] mr-[45%] z-20'>
                <h1 className='text-6xl font-bold font-sans mb-6'>Secure Your Future</h1>
                <h2 className='text-3xl font-medium font-serif'>Get Vaccinated Today!</h2>
            </div>
            {
                session? <div className='z-30 absolute top-5 right-10 py-2 px-4 font-semibold text-cyan-600 
                text-xl rounded-lg bg-slate-100 shadow-lg'>
                    Welcome, {session.user?.name}</div>:null
            }
            <button className='bg-white text-cyan-600 border border-cyan-700 font-bold text-lg px-4 py-2 m-4 rounded z-30
            absolute bottom-4 right-6 hover:bg-cyan-700 hover:text-white hover:border-transparent'
            onClick={(e) => {e.stopPropagation(); router.push('/hospital')}}>
                Hospital List
            </button>
        </div>
    )
}