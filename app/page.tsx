import Image from 'next/image'
import styles from './styles.module.scss'
import GetGenre from '@/utils/getGenre'
import Movie from '@/components/MovieCarousel/Movie'
import { GetPopularMovies, GetTopRatedMovies, GetUpcomingMovies } from '@/utils/getMovie'

export default async function Home() {
  const UpcomingMovies = await GetUpcomingMovies();
  const PopularMovies = await GetPopularMovies();
  const TopRatedMovies = await GetTopRatedMovies();


  return (
   <main className={styles.landing}>
   <GetGenre/>
   <Movie movies={UpcomingMovies} title="Upcoming"/>
   <Movie movies={PopularMovies} title="Popular"/>
   <Movie movies={TopRatedMovies} title="Cinema Classics"/>
   </main>
  )
}