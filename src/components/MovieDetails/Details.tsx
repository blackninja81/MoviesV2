import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { MDetails } from "../../../typings";
import getImagePath from "@/utils/getImagePath";
import Movie from "@/components/MovieCarousel/Movie";
import { getSimilarMovies, getRecommendationsMovies } from "@/utils/getMovie";
import { Movie as MovieType } from "../../../typings";

type Props = {
  details: MDetails;
};

function Details({ details }: Props) {
  const [similarMovies, setSimilarMovies] = useState<MovieType[]>([]);
  const [recommendations, setRecommendations] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const [similarData, recommendationsData] = await Promise.all([
        getSimilarMovies(details.id),
        getRecommendationsMovies(details.id)
      ]);
      setSimilarMovies(similarData || []); // Add fallback to empty array
      setRecommendations(recommendationsData || []); // Add fallback to empty array
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      // Set empty arrays on error
      setSimilarMovies([]);
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  };

  if (details?.id) {
    fetchRecommendations();
  }
}, [details.id]);

  let formattedDate = "";
  if (details?.release_date) {
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
          <h4>
            <i>{details.tagline}</i>
          </h4>
          <h4>{formattedDate}</h4>
          <h4>{details.overview}</h4>
          <h4>{details.runtime} Minutes</h4>
          <h4>{details.vote_average}</h4>
        </div>
      </div>
      
    </div>
  );
}

export default Details;
