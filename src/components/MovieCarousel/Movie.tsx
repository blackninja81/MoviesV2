import React from 'react'
import { Movie } from '../../../typings'
import MovieCard from './MovieCard'
import styles from './styles.module.scss'

type Props = {
    title?: string;
    movies: Movie[];
    isVertical: boolean;
}
const Movie = ({movies, title, isVertical} : Props) => {
  return (
      <div className={styles.movie_container}>
      <h2><b>{title}</b></h2>
    <div className={styles.movies}>
        {movies?.map(movie => (
            <MovieCard key={movie.id} movie={movie}/>
            ))}
    </div>
            </div>
  )
}

export default Movie