import React from "react";
import { Movie,MDetails } from "../../../typings";
import Image from "next/image";
import styles from './styles.module.scss'
import getImagePath from "@/utils/getImagePath";
import Link from "next/link";

type Props = {
  details?: MDetails;
  movie: Movie ;
}

const MovieCard = ({ movie, details }: Props) => {
  let formattedDate = "";
if (movie && movie.release_date) {
 let dateParts = movie.release_date.split("-");
 if (dateParts.length === 3) { // Check if the date is in the correct format
   let monthNumber = parseInt(dateParts[1]);
   let dateObject = new Date();
   dateObject.setMonth(monthNumber - 1);
   let monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(dateObject);
   formattedDate = `${dateParts[2]} ${monthName} ${dateParts[0]}`;
 } else {
   formattedDate = "Cerca"; // Return a generic date if the format is incorrect
 }
} else {
 formattedDate = "Cerca"; // Return a generic date if release_date doesn't exist
}
  return (
      <Link href={`/movie/${movie.id}`}>
    <div className={styles.movies_card}>
      <Image
        src={getImagePath(movie.background_path || movie.poster_path)}
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
      />
      <h4><b>{movie.title}</b></h4>
      <h4>{formattedDate}</h4>
    </div>
      </Link>
  );
};

export default MovieCard;
