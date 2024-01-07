import React from "react";
import { Movie } from "../../../typings";
import Image from "next/image";
import styles from './styles.module.scss'
import getImagePath from "@/utils/getImagePath";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className={styles.movies_card}>
      <Image
        src={getImagePath(movie.backgroung_path || movie.poster_path)}
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
      />
      <h4>{movie.title}</h4>
    </div>
  );
};

export default MovieCard;
