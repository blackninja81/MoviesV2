import React from 'react'

type props = {
    params: {
      id: number;
    };
    searchParams: {
        genre: string
    }
  };

const GenrePage = ({ params: { id }, searchParams : { genre } }: props) => {
  return (
    <div>GenrePage {id}</div>
  )
}

export default GenrePage