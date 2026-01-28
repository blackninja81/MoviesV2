import React from "react";
import SeriesCard from "./SeriesCard";
import { SeriesProps } from "../../../typings";
import styles from "./styles.module.scss";

const Series = ({ series }: SeriesProps) => {
  return (
    <div className={styles.movie_container}>
      <h2>
        <b>{series[0]?.original_title}</b>
      </h2>
      <div className={styles.movies}>
        {series?.map((series) => (
          <SeriesCard key={series.id} series={series} />
        ))}
      </div>
    </div>
  );
};

export default Series;
