'use client';

import { Paper } from '@mui/material';

const S = {
    background: {
        width: 1000,
        height: 700,
        margin: '0 auto',
        p: 2,
        backgroundColor: '#fff',
        mt: 2,
        marginTop: '100px',
        marginLeft: '380px',
    },
};

export const Background = () => {
    return <Paper elevation={3} sx={S.background} />;
};
