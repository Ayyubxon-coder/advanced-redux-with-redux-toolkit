import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (build) => ({
    getItems: build.query<{ items: Item[] }, void>({
      query: () => 'items',
    }),
  }),
});

export const { useGetItemsQuery } = itemApi;
