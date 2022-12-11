import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type Props = {
    children: React.ReactNode;
    onChange: (value: string) => void;
    value: string;
}

export default function BasicTextFields({ children, value, onChange }: Props) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField label={children} onChange={event => onChange(event.target.value)} value={value} />
        </Box>
    );
}
