'use client'

import { useAppSelector } from '../store/hooks'
import Link from 'next/link'
import Image from 'next/image'

export default function MovieList() {
  const searchResults = useAppSelector((state) => state.movie.searchResults)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {searchResults.map((movie: any) => (
        <div key={movie.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-64">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2 truncate">{movie.title}</h3>
            <p className="text-gray-600 mb-4">{new Date(movie.release_date).getFullYear()}</p>
            <Link href={`/movie/${movie.id}`} passHref>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                See More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}