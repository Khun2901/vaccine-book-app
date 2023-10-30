import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from "../api/auth/[...nextauth]/route"
import BookingForm from "@/components/BookingForm"

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
            <BookingForm />
           
        </main>
    )
}