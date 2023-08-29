// import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className='w-full h-[60vh] p-1.5 block relative'>
            <Image src={'/img/nurseBanner.jpg'}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className='relative text-center mt-[125px] mr-[45%] z-20'>
                <h1 className='text-6xl font-bold font-sans mb-6'>Secure Your Future</h1>
                <h2 className='text-3xl font-medium font-serif'>Get Vaccinated Today!</h2>
            </div>
        </div>
    )
}