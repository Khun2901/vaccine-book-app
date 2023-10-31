import Link from "next/link"
import HospitalCard from "./HospitalCard"

export default async function HospitalCatalog({hospitalJson}: {hospitalJson: Object}) {
    const hospitalJsonReady = await hospitalJson
    return (
        <>
            <div className='m-[30px] flex flex-wrap flex-row justify-around content-around'>
                {
                    hospitalJsonReady.data.map((hospitalItem: Object)=>(
                        <Link href={`/hospital/${hospitalItem.id}`} 
                        className='w-[100%] sm:w-[50%] md:w-[30%] lg-w[25%] p-2 sm:p-4 md:p-4 lg:p-8'>
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