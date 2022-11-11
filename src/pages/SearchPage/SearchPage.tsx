import React, { ChangeEvent, useState, useEffect } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';

import { useGetSearchGifsQuery } from '../../api/giphyApi';
import { useDebounce, useInfinityScroll } from '../../hooks';

import TextField from '@mui/material/TextField';
import { GifsGrid } from '../../components';
import { Wrapper } from './style';

export const SearchPage = () => {
    const [search, setSearch] = useState('');
    const [offset, setOffset] = useState(5);

    const debouncedSearch = useDebounce(search);

    const { data: gifs, isFetching } = useGetSearchGifsQuery(
        !debouncedSearch
            ? skipToken
            : {
                value: debouncedSearch,
                offset: offset,
            },
        {
            refetchOnMountOrArgChange: true,
        }
    );
    useEffect(() => {
        if (!debouncedSearch) {
            setOffset(0);
        }
    }, [debouncedSearch]);

    const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
    };

    const handleIncrementOffset = () => {
        setOffset((prev) => prev + 5);
    };

    useInfinityScroll(handleIncrementOffset, isFetching);

    return (
        <>
            <Wrapper>
                <TextField
                    onChange={handleQueryChange}
                    placeholder='Type'
                    id='outlined-basic'
                    label='Search'
                    variant='outlined'
                />
            </Wrapper>
            {gifs ? <GifsGrid gifs={gifs} /> : 'loading'}
        </>
    );
};
