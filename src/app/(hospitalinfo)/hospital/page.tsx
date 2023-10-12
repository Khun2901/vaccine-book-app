import CardPanel from "@/components/CardPanel"
import HospitalCatalog from "@/components/HospitalCatalog"
import getHospitals from "@/libs/getHospitals"
import { Suspense } from 'react'
import { LinearProgress } from "@mui/material"

export default function Hospital() {

    const hospitals = getHospitals()

    return (
        <main className="text-center text-black p-6">
            <h1 className="text-2xl font-bold">Hospital List</h1>
            {/* <CardPanel /> */}
            <Suspense fallback={<p className="my-6 text-lg">Now Loading...<LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals} />
            </Suspense>
            
        </main>
    )
}