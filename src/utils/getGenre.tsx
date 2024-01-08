import React from 'react'
import styles from '../components/genre/styles.module.scss'
import GenreList from '../components/genre/genre';
import { Genres } from '../../typings';

async function GetGenre () {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const options: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
      }
    };

    const response = await fetch(url, options)
    const data = (await response.json()) as Genres
    
    return(
        <div className={styles.Genre}>
            <div className={styles.mainGenre}>
          {data.genres.map((genre) => (
            <GenreList key={genre.id} genre={genre}/>
            ))}
            </div>
        
        </div>
    )
}
export default GetGenre;
