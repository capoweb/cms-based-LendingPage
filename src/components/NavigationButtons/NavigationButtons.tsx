import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

export function NavigationButtons() {
    return (
        <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent='center'
            gap='18px'
        >
            <Link to='/Gifs-search' >
                <Button variant='outlined' style={{ color: 'white', borderColor: 'white' }}>Trends</Button>
            </Link>
            <Link to='/search'>
                <Button variant='outlined' style={{ color: 'white', borderColor: 'white' }}>Search</Button>
            </Link>
            <Link to='/random'>
                <Button variant='outlined' style={{ color: 'white', borderColor: 'white' }}>Random</Button>
            </Link>
            <Link to='/settings'>
                <Button variant='outlined' style={{ color: 'white', borderColor: 'white' }}>Settings</Button>
            </Link>
        </Stack>
    );
}
