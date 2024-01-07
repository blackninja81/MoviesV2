import React from "react";
import styles from "../styles.module.scss";
// import { notFound } from 'next/navigation'
import NotFound from "../../not-found";

type props = {
  params: {
    slug: string;
  };
};

const Searchpage = ({ params: { slug } }: props) => {
  const newSlug = decodeURI(slug);

  //Get searched Movies
  
  return (
    <>
      {slug ? (
        <div className={styles.main}>Search for {newSlug}</div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Searchpage;
