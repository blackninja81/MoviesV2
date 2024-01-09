'use client'

import { MDetails } from "../../../typings";
import { getMovieDetails } from '@/utils/getMovie';
import styles from '../styles.module.scss'
import Details from "@/components/MovieDetails/Details";

type Props = {
  params: {
    id: string;
  };
}
 
import { useParams } from 'next/navigation'
 
export default async function DetailsPage() {
  const params = useParams<{ id: string; item: string }>()
  const details = await getMovieDetails(params.id)
 
  return (
  <div>
    <Details details={details}/>
  </div>
)}

