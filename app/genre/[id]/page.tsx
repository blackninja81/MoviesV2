import React from 'react'
import styles from './styles.module.scss'
import { GetDiscoverMovies } from '@/utils/getMovie';
import Movie from '@/components/MovieCarousel/Movie';

type props = {
    params: {
      id: string;
    };
    searchParams: {
        genre: string
    }
  };

async function GenrePage ({ params: { id }, searchParams : { genre } }: props) {
  const movies = await GetDiscoverMovies(id);
  return (
    <div className={styles.genre_container}>
    <div>
      <Movie title={genre} movies={movies} isVertical/>
    </div>
    </div>
  )
}

export default GenrePage