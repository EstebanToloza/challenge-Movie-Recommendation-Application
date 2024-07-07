'use client'

import { useState, useEffect } from 'react'
import { useAppSelector } from '../store/hooks'
import MovieCard from './MovieCard'
import { getPopularMovies } from '@/app/api/tmdb'

export default function MovieList() {
  const searchResults = useAppSelector((state) => state.movie.searchResults)
  const searchMessage = useAppSelector((state) => state.movie.searchMessage)
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
    const fetchInitialMovies = async () => {
      const popularMovies = await getPopularMovies()
      setMovies(popularMovies)
    }

    fetchInitialMovies()
  }, [])

  const moviesToDisplay = searchResults.length > 0 ? searchResults : movies

  console.log(searchResults.length)

  return (
    <>
      {searchMessage && (
        <p className="text-center mb-4">{searchMessage}</p>
      )}
      {!searchResults.length  && (
        <h3 className="text-2xl mb-2 self-start">Películas populares</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {moviesToDisplay.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  )
}