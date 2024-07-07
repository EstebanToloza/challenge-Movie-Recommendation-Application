'use client'

import { useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { searchMovies } from '../api/tmdb'
import { setSearchResults, setSearchMessage } from '../store/movieSlice'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const dispatch = useAppDispatch()

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim()) {
      const results = await searchMovies(query)
      dispatch(setSearchResults(results))
      if (results.length === 0) {
        dispatch(setSearchMessage("No se han encontrado coincidencias. Puedes explorar las películas destacadas de esta semana."))
      } else {
        dispatch(setSearchMessage(""))
      }
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex mb-5">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar películas..."
        className="px-4 py-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Buscar
      </button>
    </form>
  )
}