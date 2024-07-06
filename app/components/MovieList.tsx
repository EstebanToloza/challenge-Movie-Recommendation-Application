'use client'

import { useAppSelector } from '../store/hooks'
import Link from 'next/link'

export default function MovieList() {
  const searchResults = useAppSelector((state) => state.movie.searchResults)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {searchResults.map((movie: any) => (
        <Link href={`/movie/${movie.id}`} key={movie.id}>
          <div className="border p-4 rounded hover:bg-gray-100">
            <h3 className="font-bold">{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}