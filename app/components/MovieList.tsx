'use client'

import { useState, useEffect } from 'react'
import { useAppSelector } from '../store/hooks'
import MovieCard from './MovieCard'
import { getPopularMovies } from '@/app/api/tmdb'

interface MovieListProps {
  initialMovies: {
    id: number
    title: string
    poster_path: string
    release_date: string
  }
  
}

export default function MovieList({ initialMovies }: MovieListProps){
  
  const searchResults = useAppSelector((state) => state.movie.searchResults)
  const searchMessage = useAppSelector((state) => state.movie.searchMessage)
  const [movies, setMovies] = useState(initialMovies || [])

  const moviesToDisplay = searchResults.length > 0 ? searchResults : movies

  return (
    <div className='max-w-1100'>
      {searchMessage && (
        <p className="text-center mb-4">{searchMessage}</p>
      )}
      {!searchResults.length  && (
        <h3 className="text-2xl mb-2 text-left max-md:text-center">Películas destacadas</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 movies-grid">
        {moviesToDisplay.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
