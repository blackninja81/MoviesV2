import React from 'react'
import styles from './styles.module.scss'
import { Genre } from '../../../typings';
import Link from 'next/link';

type Props = {
  genre: Genre;
 };

const GenreList = ({ genre }: Props) => {
  return (
    <Link href={`/genre/${genre.id}?genre=${genre.name}`} target='_blank'>
    <div className={styles.genre}>{genre.name}</div>
    </Link>
  )
}

export default GenreList