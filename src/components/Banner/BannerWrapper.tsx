import React from 'react'
import Banner from './Banner';
import { GetCurrentMovies } from '@/utils/getMovie';
import { Movie } from '../../../typings';

async function BannerWrapper () {
    const movies = await GetCurrentMovies();
  return (
    <div><Banner movies={movies}/></div>
  )
}

export default BannerWrapper