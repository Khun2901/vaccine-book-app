import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import VaccineCard from '@/components/VaccineCard'

export default function Home() {
  return (
    <main>
      <Banner />
      <div className='m-[40px] flex flex-wrap flex-row justify-around content-around'>
        <VaccineCard hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg'/>
        <VaccineCard hospitalName='Thammasat Hospital' imgSrc='/img/thammasat.jpg'/>
        <VaccineCard hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'/>
      </div>
    </main>
  )
}
