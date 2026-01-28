'use client'
import React, { useState, useEffect } from 'react';
import Details from '@/components/MovieDetails/Details';
import { useParams } from 'next/navigation';

export default function DetailsPage() {
  const params = useParams<{ id: string }>();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/movie/${params.id}`)
      .then(response => response.json())
      .then(data => {
        setDetails(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
      
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!details) {
    return <div>Error loading movie details</div>;
  }

  return (
    <div>
      <Details details={details} />
    </div>
  );
}
