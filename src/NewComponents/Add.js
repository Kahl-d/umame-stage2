import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate();

    const handleAddRecipe = () => {
        navigate('/addRecipe');
    };

    const handleQuickPost = () => {
        navigate('/quickRecipe');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button className='addButtons' variant="contained" onClick={handleQuickPost}>Quick Post</Button>
            <Button className='addButtons' variant="contained" onClick={handleAddRecipe}>Add Recipe</Button>
        </div>
    );
};

export default Add;
