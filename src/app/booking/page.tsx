import LocationDateForm from "@/components/LocationDateForm"
import BasicInfoForm from "@/components/BasicInfoForm"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from "../api/auth/[...nextauth]/route"
// import { useState } from "react"
// import dayjs, { Dayjs } from "dayjs"
// import { useDispatch } from "react-redux"
// import { AppDispatch } from "@/redux/store"
// import { addBooking } from "@/redux/features/bookSlice"
// import { BookingItem } from "../../../interfaces"
import BookingForm from "@/components/BookingForm"

export default async function Booking() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    // const dispatch = useDispatch<AppDispatch>()

    // const makeBooking = () => {
    //     if(vaccineDate && hospital && nameSurname && citizenID) {
    //         const item: BookingItem = {
    //             nameSurname: nameSurname,
    //             citizenID: citizenID,
    //             hospital: hospital,
    //             vaccineDate: dayjs(vaccineDate).format("YYYY/MM/DD")
    //         }
    //         dispatch(addBooking(item))
    //     }
    // }

    // const [vaccineDate, setVaccineDate] = useState<Dayjs|null>(null)
    // const [hospital, setHospital] = useState("CU")
    // const [nameSurname, setNameSurname] = useState<string|null>(null)
    // const [citizenID, setCitizenID] = useState<string|null>(null)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="bg-slate-100 m-4 p-2 rounded-lg">
                <div className="text-2xl text-center font-semibold text-black rounded-lg">User Information</div>
                <table className="w-full table-auto border-separate border-spacing-4"><tbody>
                    <tr><td>Name:</td><td>{profile.data.name}</td></tr>
                    <tr><td>Email:</td><td>{profile.data.email}</td></tr>
                    <tr><td>Tel:</td><td>{profile.data.tel}</td></tr>
                    <tr><td>Member since:</td><td>{createdAt.toString()}</td></tr>
                    </tbody></table>
            </div>
            <BookingForm />
            {/* <div className="text-2xl text-cyan-800 font-semibold text-black rounded-lg">New Booking</div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left font-semibold text-cyan-800">Basic Information</div>
                <BasicInfoForm onNameSurnameChange={(value:string) => setNameSurname(value)} 
                onCitizenIDChange={(value: string) => setCitizenID(value)}/>
                <div className="text-md text-left font-semibold text-cyan-800">Pick-up Date and Hospital</div>
                <LocationDateForm onDateChange={(value:Dayjs) => setVaccineDate(value)} 
                onHospitalChange={(value: string) => setHospital(value)} />
            </div> */}

            {/* <button className="block rounded-md bg-lime-600 hover:bg-lime-800 px-3 py-2 text-white shadow-sm"
            onClick={makeBooking}>
                Submit
            </button> */}
            
        </main>
    )
}