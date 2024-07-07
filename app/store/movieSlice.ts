import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MovieState {
  searchResults: any[];
  currentMovie: any | null;
  similarMovies: any[];
  searchMessage: string
}

const initialState: MovieState = {
  searchResults: [],
  currentMovie: null,
  similarMovies: [],
  searchMessage: ''
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<any[]>) => {
      state.searchResults = action.payload;
    },
    setCurrentMovie: (state, action: PayloadAction<any>) => {
      state.currentMovie = action.payload;
    },
    setSimilarMovies: (state, action: PayloadAction<any[]>) => {
      state.similarMovies = action.payload;
    },
    setSearchMessage: (state, action: PayloadAction<string>) => {
      state.searchMessage = action.payload
    }
  },
});

export const { setSearchResults, setCurrentMovie, setSimilarMovies, setSearchMessage } = movieSlice.actions;

export default movieSlice.reducer;