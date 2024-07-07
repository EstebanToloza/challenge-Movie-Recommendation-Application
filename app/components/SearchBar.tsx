'use client'

import { useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { setSearchResults } from '../store/movieSlice'
import { searchMovies } from '../api/tmdb'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const dispatch = useAppDispatch()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    const results = await searchMovies(query)
    dispatch(setSearchResults(results))
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