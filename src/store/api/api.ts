// src/store/api/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Produto } from '../../types'


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/' }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports',
    }),
  }),
})

export const { useGetProdutosQuery } = api
