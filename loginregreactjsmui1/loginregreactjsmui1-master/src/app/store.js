import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userauthapi } from '../services/userauthapi'
//import authReducer from '../features/authSlice'
import { useReducer } from 'react'

export const store = configureStore({
  reducer: {
    [userauthapi.reducerPath]: userauthapi.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userauthapi.middleware),
})

setupListeners(store.dispatch)