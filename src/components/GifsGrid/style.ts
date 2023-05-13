import { SxProps } from '@mui/material';

export const Wrapper: SxProps = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '40px',
};

export const Card: SxProps = {
    height: '250px',
    width: '150px',
    marginLeft: '25px',
    marginBottom: '100px',
    img: {
        borderRadius: '8px',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        objectFit: 'cover',
    },
};

