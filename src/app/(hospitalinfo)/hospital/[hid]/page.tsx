import getHospitals from "@/libs/getHospitals"
import Image from "next/image"
import getHospital from "@/libs/getHospital"

export default async function HospitalDetailPage({params}: {params: {hid: string}}) {

    const hospitalDetail = await getHospital(params.hid)

    return (
        <main>
            <div className="flex flex-row mx-20 my-10">
                <Image src={hospitalDetail.data.picture}
                alt="Hospital Picture"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] shadow-xl"
                />
                <div>
                    <h1 className="text-2xl font-bold mx-20 my-4">{hospitalDetail.data.name}</h1>
                    <div className="text-xl text-left font-normal mx-20">
                        <div className="my-4">Address: {hospitalDetail.data.address}</div>
                        <div className="my-4">District: {hospitalDetail.data.district}</div>
                        <div className="my-4">Province: {hospitalDetail.data.province}</div>
                        <div className="my-4">Postal Code: {hospitalDetail.data.postalcode}</div>
                        <div className="my-4">Tel: {hospitalDetail.data.tel}</div>
                    </div>
                </div>           
            </div>   
        </main>
    )
}