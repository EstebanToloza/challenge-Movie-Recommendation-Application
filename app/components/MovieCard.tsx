import Image from 'next/image'
import Link from 'next/link'

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
  }
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105">
      <Link href={`/movie/${movie.id}`} className="block">
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
          <h3 className="font-bold text-lg mb-2 truncate hover:text-blue-500 card-title">{movie.title}</h3>
          <p className="text-gray-600 mb-4">{new Date(movie.release_date).getFullYear()}</p>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Ver detalles
          </button>
        </div>
      </Link>
    </div>
  )
}