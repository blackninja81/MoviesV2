export type Genre = {
    id: number;
    name:string;
}
export type GenreListProps = {
    genre: Genre;
   };
   
export type Genres = {
    genres: Genre[];
}
export type Movie = {
    adult: boolean;
    backgroung_path: string;
    genre_ids: number[];
    original_language:string;
    original_title: string;
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
    results: Movie[];
    total_pages: number;
    total_results: number;
}
