import Image from 'next/image'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-16 px-8">
      <Image
            src="https://cuevana.biz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcuevana3.01e819b6.png&w=640&q=75"
            alt='logo'
            width={240}
            height={60}
            objectFit="contain"
            /* layout="fill"
            objectFit="cover"
            className="rounded-t-lg" */
          />
      <h1 className="text-4xl font-bold mt-12 mb-8">Encuentra tus películas favoritas</h1>
      <SearchBar />
      <MovieList />
    </main>
  )
}