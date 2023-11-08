import React, { useState } from "react";
import './recipecard.css';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const RecipeCard = (props) => {
    const { recipe } = props;
    const { name, image, ingredients, recipeOwnerName, difficulty, likes, comments } = recipe;
    const [expanded, setExpanded] = useState(false);

    const handleLike = () => {
        // Implement your like logic here
    };

    const handleComment = () => {
        // Implement your comment logic here
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='recipeCard'>
            <div className='recipeImage'>
                <img src={image} alt={name} />
            </div>
            <div className="recipeCardBottom">
                <div className='recipeTitle'>{name}</div>
                <div className='recipeOwnerName'>{recipeOwnerName}</div>
                <div className="difficultyLevel">
                    {difficulty && (
                        <div className='difficultyLevel'>{difficulty}</div>
                    )}
                </div>
                <div id="cardBtns">
                <IconButton onClick={handleLike}>
                    <FavoriteIcon style={{ color: 'red' }} />
                    {likes?.length || 0}
                </IconButton>
                <IconButton onClick={handleComment}>
                    <CommentIcon style={{ color: 'gray' }} />
                    {comments?.length || 0}
                </IconButton>
                </div>
            </div>
            {expanded ? (
                <div className='recipeIngredients'>
                    <h3>Ingredients</h3>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.name}</li>
                        ))}
                    </ul>
                </div>
            ) : null}
            <IconButton onClick={toggleExpand}>
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
        </div>
    );
};

export default RecipeCard;
