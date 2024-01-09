import React from 'react'
import { MDetails, searchResults } from '../../typings';

async function GetMovie (url: URL) {
    url.searchParams.set("page", "1");
    url.searchParams.set("language", "en-US")
    
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

    const response = await fetch(url.toString(), options);
    const data = (await response.json()) as searchResults
    
    return data;
}

export async function GetUpcomingMovies(){
    const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
    const data = await GetMovie(url)
    return data.results;

}
export async function GetTopRatedMovies(){
    const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
    const data = await GetMovie(url)
    return data.results;

}
export async function GetPopularMovies(){
    const url = new URL('https://api.themoviedb.org/3/movie/popular');
    const data = await GetMovie(url)
    return data.results;

}
export async function GetCurrentMovies(){
  const url = new URL('https://api.themoviedb.org/3/movie/now_playing');
  const data = await GetMovie(url)
  return data.results;

}

export async function GetDiscoverMovies(id?:string, keywords?:string){
    const url = new URL('https://api.themoviedb.org/3/discover/movie');

    keywords && url.searchParams.set("with_keywords", keywords);
    id && url.searchParams.set("with_genres", id)

    const data = await GetMovie(url)
    return data.results;

}

export async function GetSearchMovies(term:string){
    const url = new URL('https://api.themoviedb.org/3/search/movie');
    url.searchParams.set("query", term)
    
    const data = await GetMovie(url)
    return data.results;

}


async function GetDetails (url: URL) {
  
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

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as MDetails
  
  return data;
}


export async function getMovieDetails(id:string) {
  const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);

  const data = await GetDetails(url)
   return data;
}