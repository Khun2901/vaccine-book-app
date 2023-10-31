import HospitalCatalog from "@/components/HospitalCatalog"
import getHospitals from "@/libs/getHospitals"
import { Suspense } from 'react'
import { LinearProgress } from "@mui/material"
import AddHospitalForm from "@/components/AddHospitalForm"

export default async function Hospital() {

    const hospitals = getHospitals()

    return (

        <main className="text-center text-black p-6">
            <h1 className="text-2xl font-bold">Hospital List</h1>
            {/* <CardPanel /> */}
            <Suspense fallback={<p className="my-6 text-lg">Now Loading...<LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals} />
            </Suspense>
            <div className="flex flex-col items-center">
                <AddHospitalForm />
            </div>
            
        </main>
    )
}