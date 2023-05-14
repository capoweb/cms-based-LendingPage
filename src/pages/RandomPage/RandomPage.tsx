import React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Wrapper } from './style';
import { useGetRandomGifQuery } from '../../api/giphyApi';

export const RandomPage = () => {
    const { data: gifs, isLoading, refetch } = useGetRandomGifQuery();

    return (
        <>
        <br></br>
            <Button variant='outlined' onClick={refetch} style={{ color: 'white', borderColor: 'white' }}>
                    Update
                </Button>
                <br></br>
                {isLoading && <p>Loading...</p>}
                {gifs && !isLoading && (
                    <img src={gifs.images.downsized.url} alt='picture' />
                )}
        </>
    );
};
