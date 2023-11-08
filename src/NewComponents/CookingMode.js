import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material'; 

const CookingMode = ({ recipe, onClose }) => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'white', zIndex: 1000 }}>
            <IconButton onClick={onClose} style={{ position: 'absolute', right: 10, top: 10 }}>
                <CloseIcon />
            </IconButton>
            <Typography variant="h4">{recipe.name}</Typography>
            // ... Additional content for the cooking mode goes here
        </div>
    );
};

export default CookingMode;
