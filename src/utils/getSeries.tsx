import React from 'react'
import { SeriesSearchResults } from '../../typings';

async function GetSeries (url: URL) {
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
    const data = (await response.json()) as SeriesSearchResults
    
    return data;
}

export async function GetPopularSeries(){
    const url = new URL("https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc");
    const data = await GetSeries(url)
    return data.results;

}
export async function GetTopSeries(){
    const url = new URL("https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200");
    const data = await GetSeries(url)
    return data.results;

}
export async function GetCurrentSeries(){
    const url = new URL("https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1");
    const data = await GetSeries(url)
    return data.results;

}

export async function GetSearchSeries(term:string){
    const url = new URL('https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1');
    url.searchParams.set("query", term)
    
    const data = await GetSeries(url)
    return data.results;

}