import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TokenStorage } from '../../storage/tokenStorage'
import { baseUrl } from './http'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['product'],
  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: () => `products`
    }),

    getProducts: builder.query({
      query: ({ category = '', label = 'all' }) => (
        `products?category=${category}&label=${label}`
      ),
      providesTags: () => ['product'],
      keepUnusedDataFor: 60 * 60
    }),

    createProduct: builder.mutation({
      query: ({ category, formData }) => ({
        url: `products?category=${category}`,
        method: 'POST',
        body: formData,
        headers: {
          authorization: `Bearer ${TokenStorage.get()}`
        }
      }),
      invalidatesTags: ['product']
    }),

    updateProduct: builder.mutation({
      query: ({ category, formData }) => ({
        url: `products?category=${category}`,
        method: 'PUT',
        body: formData,
        headers: {
          authorization: `Bearer ${TokenStorage.get()}`
        }
      }),
      invalidatesTags: ['product']
    }),

    deleteProduct: builder.mutation({
      query: ({ category, id }) => ({
        url: `products/${id}?category=${category}`,
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${TokenStorage.get()}`
        }
      }),
      invalidatesTags: ['product']
    }),
  })
})

export const {
  useGetAllProductsQuery,
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation
} = productApi
