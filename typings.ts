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
    poster_path?:string;
    release_date:string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count: number;
}
export type searchResults = {
    page: number;
    id: number,
    results: Movie[];
    total_pages: number;
    total_results: number;
}
