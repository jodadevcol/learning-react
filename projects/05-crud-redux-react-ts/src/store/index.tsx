import userReducer from '@/users/slice/index'
import { configureStore } from '@reduxjs/toolkit'

const persistanceStateLocalStorageMiddleware = (state) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux__state__', JSON.stringify(state.getState()))
}

export const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceStateLocalStorageMiddleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
