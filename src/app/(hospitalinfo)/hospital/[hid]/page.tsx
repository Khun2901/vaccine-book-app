import Image from "next/image"

export default function HospitalDetailPage({params}: {params: {hid: string}}) {

    /**
     * Mock Data for Demonstration Only!
     */

    const mockHospitalRepo = new Map()
    mockHospitalRepo.set("001", {name:'Chulalongkorn Hospital', img:'/img/chula.jpg'})
    mockHospitalRepo.set("002", {name:'Thammasat Hospital', img:'/img/thammasat.jpg'})
    mockHospitalRepo.set("003", {name:'Rajavithi Hospital', img:'/img/rajavithi.jpg'})

    return (
        <main className="text-black text-center font-medium text-lg mx-10">
            <div className="flex flex-row my-10">
                <Image src={(mockHospitalRepo.get(params.hid)).img}
                alt="Hospital Picture"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] shadow-xl"
                />
            <div className="text-xl text-bold font-serif mx-10">{mockHospitalRepo.get(params.hid).name}</div>
            </div>
        </main>
    )
}