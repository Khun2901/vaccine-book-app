'use client'

import { useReducer, useState } from 'react'
import { Rating, Typography } from '@mui/material'
import VaccineCard from './VaccineCard'
import Link from 'next/link'

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

    /**
     * MOck Data for Demonstration Only!
     */

    const mockHospitalRepo = [{hid:"001", name:'Chulalongkorn Hospital', img:'/img/chula.jpg'},
        {hid:"002", name:'Thammasat Hospital', img:'/img/thammasat.jpg'},
        {hid:"003", name:'Rajavithi Hospital', img:'/img/rajavithi.jpg'}]

    return (
        <div>
            <div className='m-[30px] flex flex-wrap flex-row justify-around content-around'>
                {
                    mockHospitalRepo.map((hospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.hid}`} className='w-1/4'>
                        <VaccineCard hospitalName={hospitalItem.name} imgSrc={hospitalItem.img} rate={Number(rating.get(hospitalItem.name))}
                        onRating={(hospital:string, rating: number) => dispatchRating({type: 'add', hospitalName: hospital, rate: rating})}
                        /> 
                        </Link>
                        
                        ) 
                    )
                }
            </div>

            <div className='w-full text-xl text-black font-semibold p-[10px]'>Rating List: {ratingList.size}</div>
            {Array.from(ratingList).map((element) => <div className='text-black pl-[10px] pb-[10px]' 
            onClick={()=>dispatchRating({type:'remove', hospitalName: element[0], rate: null})} key={element[0]}> 
            {element[0]}: {element[1]}</div> )}
        </div>
    ) 
   
}