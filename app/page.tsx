import Image from 'next/image'
import { Button } from '@/components/ui/button'
import styles from './styles.module.scss'
import GetGenre from '@/utils/getGenre'
import GenreList from '@/components/genre/genre'

export default function Home() {
  return (
   <main className={styles.landing}>
   {/* <GenreList/> */}
   <GetGenre/>
   </main>
  )
}