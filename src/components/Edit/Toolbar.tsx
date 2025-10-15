'use client';

import { Stack, Button, ButtonGroup } from '@mui/material';
import { CropSquare, InsertPhoto, TextFields } from '@mui/icons-material';

const S = {
    wrapper: {
        width: 'fit-contents',
        backgroundColor: '#fff',
        position: 'fixed',
        top: 0,
        left: '50vw',
        transform: 'translateX(-50%)',
        p: '6px',
        borderRadius: '10px',
    },
    toolBox: {
        '& .MuiButtonGroup-grouped': {
            border: 'none',
        },
    },
    ctaButton: {
        background: '#FFEB56',
        borderRadius: '10px',
        color: 'black',
        '&:hover': {
            opacity: 0.8,
        },
    },
};

export const Toolbar = () => {
    return (
        <Stack direction="row" spacing={1} sx={S.wrapper}>
            <ButtonGroup variant="text" aria-label="Basic button group" color="inherit" sx={S.toolBox}>
                <Button>
                    <CropSquare />
                </Button>
                <Button>
                    <InsertPhoto />
                </Button>
                <Button>
                    <TextFields />
                </Button>
            </ButtonGroup>
            <Button sx={S.ctaButton}>이미지로 가져오기</Button>
        </Stack>
    );
};
