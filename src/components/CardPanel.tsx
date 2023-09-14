'use client'

import { useReducer, useState } from 'react'
import { Rating, Typography } from '@mui/material'
import VaccineCard from './VaccineCard'

export default function CardPanel() {

    const [rating, setRating] = useState(new Map<string, number|null>())
    const ratingReducer = (ratingList: Map<string, number|null>, 
        action: {type: string, hospitalName: string, rate: number|null}) => {
        switch(action.type) {
            case 'add' : {
                ratingList.set(action.hospitalName, action.rate)
                setRating(ratingList)
                // console.log(rating)
                switch(action.rate) {
                    case null : {
                        ratingList.delete(action.hospitalName)
                        setRating(ratingList)
                    }
                }
                return new Map(ratingList)
            }
            case 'remove' : {
                ratingList.delete(action.hospitalName)
                setRating(ratingList)
                return new Map(ratingList)
            }
            default : return ratingList
        }
    }

    const [ratingList, dispatchRating] = useReducer(ratingReducer, rating)

    return (
        <div>
            <div className='m-[40px] flex flex-wrap flex-row justify-around content-around'>
                <VaccineCard hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg' rate={Number(rating.get('Chulalongkorn Hospital'))}
                onRating={(hospital:string, rating: number) => dispatchRating({type: 'add', hospitalName: hospital, rate: rating})} 
                />
                <VaccineCard hospitalName='Thammasat Hospital' imgSrc='/img/thammasat.jpg' rate={Number(rating.get('Thammasat Hospital'))}
                onRating={(hospital:string, rating: number) => dispatchRating({type: 'add', hospitalName: hospital, rate: rating})}
                />
                <VaccineCard hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg' rate={Number(rating.get('Rajavithi Hospital'))}
                onRating={(hospital:string, rating: number) => dispatchRating({type: 'add', hospitalName: hospital, rate: rating})}
                />
            </div>

            <div className='w-full text-xl text-black font-semibold p-[10px]'>Rating List: {ratingList.size}</div>
            {Array.from(ratingList).map((element) => <div className='text-black pl-[10px] pb-[10px]' 
            onClick={()=>dispatchRating({type:'remove', hospitalName: element[0], rate: null})} key={element[0]}> 
            {element[0]}: {element[1]}</div> )}
        </div>
    ) 
   
}