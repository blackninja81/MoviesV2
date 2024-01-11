'use client'
import DetailsPage from './[id]/page'

type Props = {
  params: string;
}
 
import { useParams } from 'next/navigation'
 
export default function DetailsId() {
  const params = useParams<{ id: string; item: string }>()
  console.log(params.id)
 
  return (
  <div>
    <DetailsPage params={params}/>
  </div>
)}