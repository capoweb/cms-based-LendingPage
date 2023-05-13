import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Gifs } from '../../types/gifs';
import { Wrapper, Card } from './style';

interface GisfProps {
    gifs: Gifs[];
}

export const GifsGrid: React.FC<GisfProps> = ({ gifs }) => {
    return (
        <>
            <Box sx={Wrapper}>
                {gifs.map((gif) => (
                    <Box key={gif.id} sx={Card}>
                        <img src={gif.images.fixed_height.url} alt={gif.id} />
                    </Box>
                ))}
            </Box>
        </>
    );
};
