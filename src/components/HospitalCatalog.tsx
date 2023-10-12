import Link from "next/link"
import HospitalCard from "./HospitalCard"

export default async function HospitalCatalog({hospitalJson}: {hospitalJson: Object}) {
    const hospitalJsonReady = await hospitalJson
    return (
        <>
            <div className='m-[30px] flex flex-wrap flex-row justify-around content-around'>
                {
                    hospitalJsonReady.data.map((hospitalItem: Object)=>(
                        <Link href={`/hospital/${hospitalItem.id}`} className='w-1/4'>
                        <HospitalCard hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture} 
                        /> 
                        </Link>  
                        ) 
                    )
                }
            </div>
        </>
    )
}