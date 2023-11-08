import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const RecipeNameImage = ({ setRecipeName, setRecipeImage, setActiveStep }) => {
    const [localRecipeName, setLocalRecipeName] = useState('');
    const [localRecipeImage, setLocalRecipeImage] = useState(null);

    const handleNameChange = (e) => {
        setLocalRecipeName(e.target.value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLocalRecipeImage(file);
        }
    };

    const handleNext = () => {
        if (!localRecipeName || !localRecipeImage) {
            alert("Please provide both recipe name and image!");
            return;
        }
        setRecipeName(localRecipeName); // Update parent state
        setRecipeImage(localRecipeImage); // Update parent state
        setActiveStep(prev => prev + 1); // Move to the next step
    };

    return (
        <div style={{ padding: '20px' }}>
            <TextField 
                fullWidth 
                value={localRecipeName} 
                onChange={handleNameChange} 
                placeholder="Recipe Name" 
                InputProps={{ style: { fontSize: 24, color: 'black' } }}
            />
            <div style={{ margin: '20px 0' }}>
                <input type="file" onChange={handleImageUpload} />
            </div>
            <Button variant="contained" color="primary" onClick={handleNext}>
                Next
            </Button>
        </div>
    );
};

export default RecipeNameImage;
