import React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Wrapper } from './style';
import { useGetRandomGifQuery } from '../../api/giphyApi';

export const RandomPage = () => {
    const { data: gifs, isLoading, refetch } = useGetRandomGifQuery();

    return (
        <>
            <Stack spacing={2} sx={Wrapper}>
                <Button variant='outlined' onClick={refetch}>
                    Update
                </Button>
                {isLoading && <p>Loading...</p>}
                {gifs && !isLoading && (
                    <img src={gifs.images.downsized.url} alt='picture' />
                )}
            </Stack>
        </>
    );
};
