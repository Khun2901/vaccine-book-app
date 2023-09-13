import LocationDateForm from "@/components/LocationDateForm"
import BasicInfoForm from "@/components/BasicInfoForm"

export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-semibold m-4 text-black">New Booking</div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Basic Information</div>
                <BasicInfoForm/>
                <div className="text-md text-left text-gray-600">Pick-up Date and Hospital</div>
                <LocationDateForm />
            </div>

            <button className="block rounded-md bg-lime-600 hover:bg-lime-800 px-3 py-2 text-white shadow-sm">
                Submit
            </button>
            
        </main>
    )
}