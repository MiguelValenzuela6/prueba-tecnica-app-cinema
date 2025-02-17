import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface FiltersState {
  genre: number | null
  year: number | null
  rating: number | null
}

const initialState: FiltersState = {
  genre: null,
  year: null,
  rating: null,
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGenreFilter: (state, action: PayloadAction<number | null>) => {
      state.genre = action.payload
    },
    setYearFilter: (state, action: PayloadAction<number | null>) => {
      state.year = action.payload
    },
    setRatingFilter: (state, action: PayloadAction<number | null>) => {
      state.rating = action.payload
    },
    clearFilters: (state) => {
      state.genre = null
      state.year = null
      state.rating = null
    },
  },
})

export const { setGenreFilter, setYearFilter, setRatingFilter, clearFilters } = filtersSlice.actions
export const filtersReducer =  filtersSlice.reducer

