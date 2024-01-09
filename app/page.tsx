import Image from "next/image";
import styles from "./styles.module.scss";
import GetGenre from "@/utils/getGenre";
import Banner from "@/components/Banner/Banner";
import Movie from "@/components/MovieCarousel/Movie";
import Series from "@/components/SeriesCarousel/Series";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GetCurrentMovies,
  GetPopularMovies,
  GetTopRatedMovies,
  GetUpcomingMovies,
} from "@/utils/getMovie";
import { GetCurrentSeries, GetPopularSeries, GetTopSeries } from "@/utils/getSeries";

export default async function Home() {
  const UpcomingMovies = await GetUpcomingMovies();
  const PopularMovies = await GetPopularMovies();
  const TopRatedMovies = await GetTopRatedMovies();
  const CurrentMovies = await GetCurrentMovies();
  const PopularSeries = await GetPopularSeries();
  const TopSeries = await GetTopSeries();
  const CurrentSeries = await GetCurrentSeries();

  return (
    <main className={styles.landing}>
      <Banner movies={CurrentMovies} />
      <Accordion className={styles.category_accord}type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger><h1>Search By Category</h1></AccordionTrigger>
          <AccordionContent>
            <GetGenre />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Movie movies={UpcomingMovies} title="Upcoming" isVertical/>
      <Movie movies={PopularMovies} title="Popular" isVertical/>
      <Movie movies={TopRatedMovies} title="Cinema Classics" isVertical/>
      <Series series={CurrentSeries} title="Currently Playing" isVertical/>
      <Series series={PopularSeries} title="Popular Series" isVertical/>
      <Series series={TopSeries} title="Top Rated Series" isVertical/>
    </main>
  );
}
