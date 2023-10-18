import LocationDateForm from "@/components/LocationDateForm"
import BasicInfoForm from "@/components/BasicInfoForm"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function Booking() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

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
            <div className="text-2xl text-cyan-800 font-semibold text-black rounded-lg">New Booking</div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left font-semibold text-cyan-800">Basic Information</div>
                <BasicInfoForm />
                <div className="text-md text-left font-semibold text-cyan-800">Pick-up Date and Hospital</div>
                <LocationDateForm />
            </div>

            <button className="block rounded-md bg-lime-600 hover:bg-lime-800 px-3 py-2 text-white shadow-sm">
                Submit
            </button>
            
        </main>
    )
}