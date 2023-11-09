import React, { useState } from 'react';
import { Button, TextField, Slider, Chip, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const FinishRecipe = ({ setDifficulty, setTags, onFinish, recipeData }) => {
    const [currentTag, setCurrentTag] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const handleAddTag = () => {
        if (currentTag) {
            setLocalTags(prevTags => [...prevTags, currentTag]);
            setCurrentTag('');
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setLocalTags((tags) => tags.filter((tag) => tag !== tagToRemove));
    };

    const handleFinish = () => {
        setDifficulty(recipeData.difficulty);
        setTags(localTags);
        onFinish();
    };

    return (
        <div style={{ padding: '20px' }}>
            <Box mb={3}>
                <h4>Set Difficulty</h4>
                <Slider
                    defaultValue={2}
                    step={1}
                    marks
                    min={0}
                    max={5}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setDifficulty(newValue)}
                />
            </Box>

            <Box mb={3}>
                <h4>Tags</h4>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField 
                        value={currentTag} 
                        onChange={e => setCurrentTag(e.target.value)} 
                        placeholder="Add a tag"
                        variant="outlined"
                        size="small"
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleAddTag} 
                        startIcon={<AddIcon />} 
                        style={{ marginLeft: '10px' }}
                    >
                        Add
                    </Button>
                </div>
                <div style={{ marginTop: '10px' }}>
                    {localTags.map(tag => (
                        <Chip
                            key={tag}
                            label={tag}
                            onDelete={() => handleRemoveTag(tag)}
                            style={{ marginRight: '5px', marginBottom: '5px' }}
                        />
                    ))}
                </div>
            </Box>

            <Button variant="contained" color="primary" onClick={handleFinish}>
                Finish
            </Button>
        </div>
    );
};

export default FinishRecipe;
