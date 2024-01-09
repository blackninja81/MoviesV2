import React from "react";
import { Series } from "../../../typings";
import Image from "next/image";
import styles from './styles.module.scss'
import getImagePath from "@/utils/getImagePath";

const SeriesCard = ({ series }: { series: Series }) => {

  let formattedDate = "";
if (series && series.first_air_date) {
 let dateParts = series.first_air_date.split("-");
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
    <div className={styles.movies_card}>
      <Image
        src={getImagePath(series.background_path || series.poster_path)}
        alt={series.original_name}
        width={1920}
        height={1080}
        key={series.id}
      />
      <h4><b>{series.original_name}</b></h4>
      <h4>{formattedDate}</h4>
    </div>
  );
};

export default SeriesCard;
