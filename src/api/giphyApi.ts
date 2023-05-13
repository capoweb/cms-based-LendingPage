import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'iM0oY7EzFiiU8zAGyEUEvrJGcxFY7TzB';

import { Gifs } from '../types/gifs';

const giphyApi = createApi({
    reducerPath: 'gifApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.giphy.com/v1/gifs',
    }),
    endpoints: (builder) => ({
        getTrendingGifs: builder.query<Gifs[], number>({
            query: (offset) => {
                return `/trending?api_key=${API_KEY}&limit=14&offset=${
                    offset * 7
                }&rating=g&bundle=messaging_non_clips`;
            },
            transformResponse: (response: { data: any }) => response.data,
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            merge: (currentCacheData, responseData) => {
                currentCacheData.push(...responseData);
            },
        }),
        getSearchGifs: builder.query<Gifs[], { value: string; offset: number }>(
            {
                query: ({ value, offset }) => {
                    return `/search?api_key=${API_KEY}&q=${value}&limit=9&offset=${offset}`;
                },
                transformResponse: (response: { data: any }) => response.data,
                merge: (currentCacheData, responseData) => {
                    currentCacheData.push(...responseData);
                },
                serializeQueryArgs: ({ queryArgs }) => {
                    return queryArgs.value;
                },
            }
        ),
        getRandomGif: builder.query<Gifs, void>({
            query: () => {
                return `/random?api_key=${API_KEY}`;
            },
            transformResponse: (response: { data: any }) => response.data,
        }),
    }),
});

export const { useGetTrendingGifsQuery, useGetSearchGifsQuery, useGetRandomGifQuery } = giphyApi;

export default giphyApi;
