import styles from './vaccinecard.module.css'
import Image from 'next/image'

export default function VaccineCard( {hospitalName, imgSrc} : {hospitalName: string, imgSrc: string} ) {
    return (
        <div className='w-[350px] h-[350px] bg-neutral-100 shadow-2xl rounded-lg'>
            <div className='w-full h-[60%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='cover'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[40%] p-[10px]'>
                <h2 className='text-black text-center text-2xl mt-8 mb-8 font-bold font-sans'>{hospitalName}</h2>
            </div>
        </div>
    )
}