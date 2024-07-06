import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MovieState {
  searchResults: any[];
  currentMovie: any | null;
}

const initialState: MovieState = {
  searchResults: [],
  currentMovie: null,
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
  },
});

export const { setSearchResults, setCurrentMovie } = movieSlice.actions;

export default movieSlice.reducer;