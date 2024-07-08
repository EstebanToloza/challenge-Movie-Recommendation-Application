import Image from 'next/image'
import Link from 'next/link'

import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import { getPopularMovies } from './api/tmdb'

export default async function Home() {
  const popularMovies = await getPopularMovies()
  console.log("popularMovies SSR -->", popularMovies)
  return (
    <main className="flex min-h-screen flex-col items-center py-16 px-8">
      <h1 className="text-4xl font-bold mt-12 mb-8 text-center">Encuentra tus películas favoritas</h1>
      <SearchBar />
      <MovieList initialMovies={popularMovies} />
    </main>
  )
}
