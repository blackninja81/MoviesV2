import React from "react";
import SeriesCard from "./SeriesCard";
import { Series } from "../../../typings";
import styles from "./styles.module.scss";

type Props = {
  title?: string;
  series: Series[];
  isVertical: boolean;
};
const Series = ({ series, title, isVertical }: Props) => {
  return (
    <div className={styles.movie_container}>
      <h2>
        <b>{title}</b>
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
