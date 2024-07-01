import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './slices/movieSlice'
import tvReducer from './slices/tvSlice'
import personReducer from './slices/personSlice'

export const store = configureStore({
  reducer: {
     movie : movieReducer,
     tv : tvReducer,
     person : personReducer
  },
})
