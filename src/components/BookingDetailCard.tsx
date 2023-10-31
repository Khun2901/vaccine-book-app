"use client"

import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"

export default function BookingDetailCard() {
    const bookItems = useAppSelector((state) => state.reduxPersistedReducer.bookSlice.bookingItems)
    const dispatch = useDispatch<AppDispatch>()
    return(
        <div>
            {(bookItems.length !== 0) ? bookItems.map((bookingItem) => (
                <div className="flex flex-col items-center">
                    <div className="my-6 text-cyan-800 text-2xl font-bold">
                        Your Booking
                    </div>
                    <div className="bg-slate-200 rounded-lg px-10 mx-5 py-2 my-2">
                        <div className="text-black text-xl font-normal my-2">Name - Surname: {bookingItem.nameSurname}</div>
                        <div className="text-black text-xl font-normal my-2">Citizen ID: {bookingItem.citizenID}</div>
                        <div className="text-black text-xl font-normal my-2">Hospital: {bookingItem.hospital}</div>
                        <div className="text-black text-xl font-normal my-2">Date: {bookingItem.vaccineDate}</div>
                    </div>
                    <button className="block my-4 rounded-md bg-red-600 hover:bg-red-800 px-3 py-2 text-white shadow-sm"
                    onClick={() => dispatch(removeBooking(bookingItem))}>
                    Cancel your Booking
                    </button>
                </div>
            )): <div className="m-8 p-4 text-center text-2xl text-cyan-800 font-bold">No Vaccine Booking.</div>
            }
        </div>
    )
}