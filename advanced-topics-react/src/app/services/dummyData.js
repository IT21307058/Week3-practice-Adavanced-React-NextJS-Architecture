import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dummyDataApi = createApi({
    reducerPath: 'products',
    // base URL
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({

        // get all produts => reading data
        getProducts: builder.query({
            query: () => `/products`,
        }),
        getProductById : builder.query({
            query : (id) => `/products/${id}`,
        }),
        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/products/add',   
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: newProduct,
            }),
        }),
    }),
})

export const { useGetProductsQuery, useGetProductByIdQuery, useAddNewProductMutation } = dummyDataApi;