import { useEffect } from 'react';

export const useInfinityScroll = (callback: any, isFetching: boolean) => {
    useEffect(() => {
        const onScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight;
            if (scrolledToBottom && !isFetching) {
                callback();
            }
        };
        document.addEventListener('scroll', onScroll);

        return () => {
            document.removeEventListener('scroll', onScroll);
        };
    }, [callback]);
};
