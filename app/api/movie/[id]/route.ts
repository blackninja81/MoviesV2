import { NextRequest, NextResponse } from 'next/server';
import { getMovieDetails } from '@/utils/getMovie';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const details = await getMovieDetails(params.id);
    return NextResponse.json(details);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}