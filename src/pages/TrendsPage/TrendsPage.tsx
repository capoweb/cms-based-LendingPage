import React, { useState } from 'react';

import { GifsGrid } from '../../components/GifsGrid/GifsGrid';
import { useInfinityScroll } from '../../hooks';
import { useGetTrendingGifsQuery } from '../../api/giphyApi';

export const TrendsPage = () => {
    const [offset, setOffset] = useState(1);
    const { data: gifs, isLoading } = useGetTrendingGifsQuery(offset, {
        refetchOnMountOrArgChange: true,
    });

    const handleIncrementOffset = () => {
        setOffset((prev) => prev + 1);
    };
    const isFetching = isLoading;
    useInfinityScroll(handleIncrementOffset, isFetching);

    return (
        <>
            <div>{gifs ? <GifsGrid gifs={gifs} /> : 'loading'}</div>
            {isFetching && <div>Загрузка дополнительных данных...</div>}
        </>
    );
};
