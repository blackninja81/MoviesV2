import React from "react";
import styles from "./styles.module.scss";
import { MDetails } from "../../../typings";
import getImagePath from "@/utils/getImagePath";
import { GetPopularMovies, GetSearchMovies } from "@/utils/getMovie";
import Movie from "@/components/MovieCarousel/Movie";
import Image from "next/image";

type Props = {
  details: MDetails;
};

async function Details ({ details }: Props) {
  let formattedDate = "";
  if (details && details.release_date) {
    let dateParts = details.release_date.split("-");
    if (dateParts.length === 3) {
      // Check if the date is in the correct format
      let monthNumber = parseInt(dateParts[1]);
      let dateObject = new Date();
      dateObject.setMonth(monthNumber - 1);
      let monthName = new Intl.DateTimeFormat("en-US", {
        month: "short",
      }).format(dateObject);
      formattedDate = `${dateParts[2]} ${monthName} ${dateParts[0]}`;
    } else {
      formattedDate = "Cerca"; // Return a generic date if the format is incorrect
    }
  } else {
    formattedDate = "Cerca"; // Return a generic date if release_date doesn't exist
  }
  const popularMovies = await GetPopularMovies();
  return (
    <div className={styles.details_page}>
      <Image
        className={styles.backdrop}
        src={getImagePath(
          details.backdrop_path ||
            details.poster_path ||
            details.background_path,
          true
        )}
        alt={details.title}
        width={1920}
        height={1080}
        key={details.id}
      />
      <div className={styles.details_card}>
        <Image
          className={styles.poster}
          src={getImagePath(
            details.poster_path ||
              details.backdrop_path ||
              details.background_path
          )}
          alt={details.title}
          width={1920}
          height={1080}
          key={details.id}
        />
        <div className={styles.details_text}>
          <h4>{details.status}</h4>
          <h1>{details.title}</h1>
          <h4><i>{details.tagline}</i></h4>
          <h4>{formattedDate}</h4>
          <h4>{details.overview}</h4>
          <h4>{details.runtime} Minutes</h4>
          <h4>{details.vote_average}</h4>
        </div>
      </div>
      <div className={styles.movie_search}>
          <Movie title={"Recommendations"} movies={popularMovies} isVertical />
          </div>
    </div>
  );
};

export default Details;
