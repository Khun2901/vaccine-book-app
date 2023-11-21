import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import Hospital from "@/db/models/Hospitals"
import { dbConnect } from "@/db/dbConnect"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default async function AddHospitalForm() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    const addHospital = async (addHospitalForm: FormData) => {
        "use server"
        const name = addHospitalForm.get("name")
        const address = addHospitalForm.get("address")
        const district = addHospitalForm.get("district")
        const province = addHospitalForm.get("province")
        const postalcode = addHospitalForm.get("postalcode")
        const tel = addHospitalForm.get("tel")
        const picture = addHospitalForm.get("picture")

        try {
            await dbConnect()
            const hospital = await Hospital.create({
                "name": name,
                "address": address,
                "district": district,
                "province": province,
                "postalcode": postalcode,
                "tel": tel,
                "picture": picture
            })
        } catch(error) {
            console.log(error)
        }
        revalidateTag("hospitals")
        redirect("/hospital")
    }


    return(
        (profile.data.role == "admin") ?
        <form action={addHospital} className="bg-slate-100 rounded-md w-[35%]">
            <div className="text-xl text-cyan-800 my-4 font-bold">Add New Hospital.</div>
            <div className="flex items-center w-auto my-2 mx-4">
                <label className="block text-gray-700 pr-4 font-medium" htmlFor="name">Name:</label>
                <input type="text" required id="name" name="name" placeholder="Company Name"
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
                focus:outline-none focus:border-cyan-600" />
            </div>
            <div className="flex items-center w-auto my-2 mx-4">
                <label className="block text-gray-700 pr-4 font-medium" htmlFor="address">Address:</label>
                <input type="text" required id="address" name="address" placeholder="Address"
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
                focus:outline-none focus:border-cyan-600" />
            </div>
            <div className="flex items-center w-auto my-2 mx-4">
                <label className="block text-gray-700 pr-4 font-medium" htmlFor="district">District:</label>
                <input type="text" required id="district" name="district" placeholder="District"
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
                focus:outline-none focus:border-cyan-600" />
            </div>
            <div className="flex items-center w-auto my-2 mx-4">
                <label className="block text-gray-700 pr-4 font-medium" htmlFor="province">Province:</label>
                <input type="text" required id="province" name="province" placeholder="Province"
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
                focus:outline-none focus:border-cyan-600" />
            </div>
            <div className="flex items-center w-auto my-2 mx-4">
                <label className="block text-gray-700 pr-4 font-medium" htmlFor="postalcode">Postal Code:</label>
                <input type="text" required id="postalcode" name="postalcode" placeholder="Postal Code"
                className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700
                focus:outline-none focus:border-cyan-600" />
            </div>
            <div className="flex items-center w-auto my-2 mx-4">            
                <label className="block text-gray-700 pr-4 font-medium" htmlFor="tel">Tel:</label>
                <input type="text" required id="tel" name="tel" placeholder="Tel"
                className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700
                focus:outline-none focus:border-cyan-600" />
            </div>
            <div className="flex items-center w-auto my-2 mx-4">
                <label className="block text-gray-700 pr-4 font-medium" htmlFor="picture">URL:</label>
                <input type="text" required id="picture" name="picture" placeholder="Picture URL"
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
                focus:outline-none focus:border-cyan-600" />
            </div>

            <button type="submit" className="bg-cyan-600 hover:bg-cyan-800 text-white font-semibold p-2 rounded my-4">
                Add New Hospital</button>

        </form> : null
    )
}