import React from 'react'
import styles from './styles.module.scss'
import { Genre } from '../../../typings';
import Link from 'next/link';

type GenreListProps = {
  genre: Genre;
 };

const GenreList = ({ genre }) => {
  return (
    <Link href={`/genre/${genre.id}?genre=${genre.name}`} target='_blank'>
    <div className={styles.genre}>{genre.name}</div>
    </Link>
  )
}

export default GenreList