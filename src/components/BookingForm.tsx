"use client"

import { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { addBooking } from "@/redux/features/bookSlice"
import { BookingItem } from "../../interfaces" 
import BasicInfoForm from "./BasicInfoForm"
import LocationDateForm from "./LocationDateForm"

export default function BookingForm() {

    const dispatch = useDispatch<AppDispatch>()

    const [vaccineDate, setVaccineDate] = useState<Dayjs|null>(null)
    const [hospital, setHospital] = useState("CU")
    const [nameSurname, setNameSurname] = useState<string|null>(null)
    const [citizenID, setCitizenID] = useState<string|null>(null)

    const makeBooking = () => {
        if(vaccineDate && hospital && nameSurname && citizenID) {
            const item: BookingItem = {
                nameSurname: nameSurname,
                citizenID: citizenID,
                hospital: hospital,
                vaccineDate: dayjs(vaccineDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
        }
    }

    return(
        <div className="flex flex-col items-center">
            <div className="text-2xl text-cyan-800 font-semibold text-black rounded-lg">New Booking</div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left font-semibold text-cyan-800">Basic Information</div>
                <BasicInfoForm onNameSurnameChange={(value:string) => setNameSurname(value)} 
                onCitizenIDChange={(value: string) => setCitizenID(value)}/>
                <div className="text-md text-left font-semibold text-cyan-800">Pick-up Date and Hospital</div>
                <LocationDateForm onDateChange={(value:Dayjs) => setVaccineDate(value)} 
                onHospitalChange={(value: string) => setHospital(value)} />
            </div>    
            <button className="block my-4 rounded-md bg-lime-600 hover:bg-lime-800 px-3 py-2 text-white shadow-sm"
            onClick={makeBooking}>
                Submit!
            </button>
        </div>
        
    )

}