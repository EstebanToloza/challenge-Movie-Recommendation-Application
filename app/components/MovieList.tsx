'use client'

import { useAppSelector } from '../store/hooks'
import MovieCard from './MovieCard'


export default function MovieList() {
  const searchResults = useAppSelector((state) => state.movie.searchResults)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {searchResults.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}