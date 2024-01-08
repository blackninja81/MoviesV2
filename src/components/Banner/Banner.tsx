"use client";
import React from "react";
import Image from "next/image";
import { Movie } from "../../../typings";
import styles from "./styles.module.scss";
import Autoplay from "embla-carousel-autoplay";
import getImagePath from "@/utils/getImagePath";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "../ui/button";
import { PlayIcon, ReaderIcon } from "@radix-ui/react-icons"

type props = {
  movies: Movie[];
};

Autoplay.globalOptions = {
  delay: 8000,
};

function Banner({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay()
  ]);
  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {movies && Array.isArray(movies) ? (
          movies.map((movie) => {
            let date = new Date(movie.release_date);
            let options = { day: "numeric", month: "short", year: "numeric" };
            let formattedDate = date.toLocaleDateString("en-US", options);
            return (
              <div key={movie.id} className={styles.embla__slide}>
                <Image
                  src={getImagePath(movie.backdrop_path, true)}
                  alt={movie.title}
                  width={1920}
                  height={1080}
                  key={movie.id}
                />
                <div className={styles.text_overview}>
                  <h1>{movie.title}</h1>
                  <h1>{formattedDate}</h1>
                  <h1>{movie.overview}</h1>
                  <div className={styles.text_buttons}>
                    <Button className={styles.read_button}>Read More<ReaderIcon/></Button>
                    <Button className={styles.trailer_button}>Watch Trailer<PlayIcon/></Button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No movies available</div>
        )}
      </div>
    </div>
  );
}

export default Banner;
