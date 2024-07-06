'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getMovieDetails } from '../../api/tmdb'

export default function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState<any>(null)

  useEffect(() => {
    const fetchMovie = async () => {
      const details = await getMovieDetails(Number(id))
      setMovie(details)
    }
    fetchMovie()
  }, [id])

  if (!movie) return <div>Cargando...</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Fecha de lanzamiento: {movie.release_date}</p>
      <p>Puntuación: {movie.vote_average}</p>
    </div>
  )
}