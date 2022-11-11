export interface Gifs {
    id: string;
    images: {
        fixed_height: {
            url: string;
        };
        downsized: {
            url: string;
        }
    };
    title: string;
}
