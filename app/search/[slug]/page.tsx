import React from "react";
import styles from "../styles.module.scss";
// import { notFound } from 'next/navigation'
import NotFound from "../../not-found";
import { GetPopularMovies, GetSearchMovies } from "@/utils/getMovie";
import Movie from "@/components/MovieCarousel/Movie";
import Series from "@/components/SeriesCarousel/Series";
import { GetSearchSeries } from "@/utils/getSeries";

type props = {
  params: {
    slug: string;
  };
};

async function Searchpage ({ params: { slug } }: props) {
  const newSlug = decodeURI(slug);

  //Get searched Movies
  const movies = await GetSearchMovies(newSlug);
  const series = await GetSearchSeries(newSlug);
  const popularMovies = await GetPopularMovies();

  return (
    <div  className={styles.main_search}>
      {slug ? (
        <div>
          <div className={styles.movie_search}>
          <Movie title={`Movie Results for ${newSlug}`} movies={movies} isVertical />
          </div>
          <div className={styles.movie_search}>
          <Series title={`Series Results for ${newSlug}`} series={series} isVertical />
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
