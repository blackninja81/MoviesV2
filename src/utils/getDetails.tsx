// import { MDetails } from "../../typings";
// import DetailsPage from "../../app/movie/[id]/page";

// export async function getMovieDetails(id: string) {
//     // try {
//     const url = `https://api.themoviedb.org/3/movie/${id}?language=en`;
//     const options: RequestInit = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
//       },
//       next: {
//         revalidate: 60 * 60 * 24,
//       }
//     };

//     const response = await fetch(url, options)
//     const data = (await response.json()) as MDetails
//      console.log(data)
//     // } catch (error) {
//     //  console.error('Error fetching movie details:', error);
//     //  throw error;
//     // }
//     // return(
//     //     <div>
//     //         <div>
//     //       {data.details.map((detail) => (
//     //         <DetailsPage key={detail.id} detail={detail}/>
//     //         ))}
//     //         </div>
        
//     //     </div>
//     // )
//    }