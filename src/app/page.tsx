import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import VaccineCard from '@/components/VaccineCard'

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{margin:"20px"}}>
        <VaccineCard />
      </div>
    </main>
  )
}
