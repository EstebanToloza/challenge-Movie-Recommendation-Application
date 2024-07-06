import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Buscador de Películas</h1>
      <SearchBar />
      <MovieList />
    </main>
  )
}