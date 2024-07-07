'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { setCurrentMovie, setSimilarMovies } from '@/app/store/movieSlice'
import { getMovieDetails, getSimilarMovies } from '@/app/api/tmdb'
import Image from 'next/image'
import Link from 'next/link'
import MovieCard from '@/app/components/MovieCard'


export default function MovieDetails() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const movie = useAppSelector((state) => state.movie.currentMovie)
  const similarMovies = useAppSelector((state) => state.movie.similarMovies)

  useEffect(() => {
    const fetchMovieData = async () => {
      const details = await getMovieDetails(Number(id))
      dispatch(setCurrentMovie(details))

      const similar = await getSimilarMovies(Number(id))
      dispatch(setSimilarMovies(similar))
    }
    fetchMovieData()
  }, [id, dispatch])

  if (!movie) return <div>Cargando...</div>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/3">
          <p className="text-lg mb-4">{movie.overview}</p>
          <p>Fecha de lanzamiento: {movie.release_date}</p>
          <p>Puntuación: {movie.vote_average}</p>
          <p>Géneros: {movie.genres?.map(g => g.name).join(', ')}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Películas Similares</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {similarMovies.map((similar) => (
          <MovieCard key={similar.id} movie={similar} />
        ))}
      </div>
    </div>
  )
}