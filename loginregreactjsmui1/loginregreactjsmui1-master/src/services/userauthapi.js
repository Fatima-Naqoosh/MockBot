// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userauthapi = createApi({
  reducerPath: 'userauthapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
        query:(user) => {
            return{
                url:'register/',
                method:'POST',
                body:user,
                headers:{
                    'content-type':'application/json',
                }
            }
        }
    }),
    loginUser: builder.mutation({
        query:(user) => {
            return{
                url:'login/',
                method:'POST',
                body:user,
                headers:{
                    'content-type':'application/json',
                }
            }
        }
    }),


  }),
})


export const { useRegisterUserMutation, useLoginUserMutation } = userauthapi