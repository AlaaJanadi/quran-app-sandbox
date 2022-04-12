import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function MainArea() {
    return (
        <div style={{ width: '30%', margin: '15px auto' }}>
            <ButtonGroup dir='rtl' variant="contained" aria-label="outlined primary button group">
                <Button>النص العربي</Button>
                <Button>Translation</Button>
            </ButtonGroup>
        </div>

    );
}