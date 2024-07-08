import Image from 'next/image'
import Link from 'next/link'

import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import { getPopularMovies } from './api/tmdb'

export default async function Home() {
  const popularMovies = await getPopularMovies()

  return (
    <main className="flex min-h-screen flex-col items-center py-16 px-8">
      <Link href="/">
        <Image
          src="https://cuevana.biz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcuevana3.01e819b6.png&w=640&q=75"
          alt='logo'
          width={240}
          height={60}
          objectFit="contain"
        
        />
        </Link>
      <h1 className="text-4xl font-bold mt-12 mb-8 text-center">Encuentra tus películas favoritas</h1>
      <SearchBar />
      <MovieList initialMovies={popularMovies} />
    </main>
  )
}
