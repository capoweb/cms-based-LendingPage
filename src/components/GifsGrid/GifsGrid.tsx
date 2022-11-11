import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Gifs } from '../../types/gifs';
import { BoxWrapper } from './style';

interface GisfProps {
    gifs: Gifs[];
}

export const GifsGrid: React.FC<GisfProps> = ({ gifs }) => {
    return (
        <>
            <Box sx={BoxWrapper}>
                <Grid container spacing={1}>
                    {gifs.map((gif) => (
                        <Grid item xs={4} key={gif.id}>
                            <img
                                src={gif.images.fixed_height.url}
                                alt={gif.id}
                                style={{ width: '300px', height: '250px' }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};
