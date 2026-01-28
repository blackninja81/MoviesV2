import { NextApiRequest, NextApiResponse } from 'next';
import { getMovieDetails } from '@/utils/getMovie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    const details = await getMovieDetails(id as string);
    res.status(200).json(details);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}