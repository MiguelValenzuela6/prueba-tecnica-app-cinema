import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { movieApi } from "./services/movieApi"
import { filtersReducer } from "./slices/filtersSlice"
import { paginationReducer } from "./slices/paginationSlice"

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    filters: filtersReducer,
    pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

