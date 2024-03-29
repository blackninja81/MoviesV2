export type Genre = {
    id: number;
    name:string;
}
export type GenreListProps = {
    id: string,
    genre: Genre;
   };
   
export type Genres = {
    id: string,
    genres: Genre[];
}
export type Movie = {
    id: string,
    adult: boolean;
    background_path: string;
    genre_ids: number[];
    backdrop_path: string;
    original_language:string;
    original_title: string;
    originalFactory: string;
    overview:string;
    popularity:number;
    genre: string;
    poster_path?:string;
    release_date:string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count: number;
}
export type MDetails = {
    id: string,
    original_title:string,
    backdrop_path: string;
    poster_path?:string;
    background_path: string;
    overview:string;
    release_date:string;
    runtime:string;
    status:string;
    tagline:string;
    genre: string;
    results:string;
    title:string;
    vote_average:string;
}
export type searchResults = {
    page: number;
    id: number,
    results: Movie[];
    total_pages: number;
    total_results: number;
}
export type Series = {
    id: string,
    adult: boolean;
    background_path: string;
    genre_ids: number[];
    backdrop_path: string;
    original_language:string;
    original_title: string;
    originalFactory: string;
    overview:string;
    popularity:number;
    poster_path?:string;
    first_air_date:string;
    original_name:string;
    video:boolean;
    vote_average:number;
    vote_count: number;
}
export type SeriesSearchResults = {
    page: number;
    id: number,
    results: Series[];
    total_pages: number;
    total_results: number;
}
export type DetailsResults = {
    page: number;
    id: number,
    results: MDetails[];
    total_pages: number;
    total_results: number;
}

