import React from "react";
import styles from "../styles.module.scss";
// import { notFound } from 'next/navigation'
import NotFound from "../../not-found";
import { GetPopularMovies, GetSearchMovies } from "@/utils/getMovie";
import Movie from "@/components/MovieCarousel/Movie";

type props = {
  params: {
    slug: string;
  };
};

async function Searchpage ({ params: { slug } }: props) {
  const newSlug = decodeURI(slug);

  //Get searched Movies
  const movies = await GetSearchMovies(newSlug);
  const popularMovies = await GetPopularMovies();

  return (
    <div  className={styles.main_search}>
      {slug ? (
        <div>
          <div className={styles.movie_search}>
          <Movie title={`Results for ${newSlug}`} movies={movies} isVertical />
          </div>
          <div className={styles.movie_search}>
          <Movie title={"Recommendations"} movies={popularMovies} isVertical />
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Searchpage;
