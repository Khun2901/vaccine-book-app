'use client'

import styles from './vaccinecard.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating, Typography } from '@mui/material'
import { useState } from 'react'

export default function VaccineCard( {hospitalName, imgSrc, rate, onRating} : 
    {hospitalName: string, imgSrc: string, rate: number|null, onRating: Function} ) {
        
    return (
        <InteractiveCard>
            <div className='w-full h-[60%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='cover'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[20%] p-[10px]'>
                <h2 className='text-black text-center text-2xl mt-4 mb-8 font-bold font-sans'>{hospitalName}</h2>
            </div>
            <div className='mt-[10px] ml-6'>
                <Typography className='w-full h-[20%] text-black font-bold' component="legend">Rating:</Typography>
                <Rating name="hospital-rating" value={Number(rate)}
                onChange={(e, newValue) => {e.stopPropagation(); onRating(hospitalName, newValue)}}
                />
            </div>

        </InteractiveCard>
    )
}