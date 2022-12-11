import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
type Props = {
    children: React.ReactNode;
    link?: string;
}

export default function BasicButtons({ children, link }: Props) {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" value="text" href={link}>{children}</Button>
        </Stack>
    );
}
