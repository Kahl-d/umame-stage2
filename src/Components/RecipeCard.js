import React, { useState } from 'react';
import './recipecard.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import Avatar from '@mui/material/Avatar';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PhotoIcon from '@mui/icons-material/Photo';



const RecipeCard = ({ recipe, profile }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const {
        name,
        recipeOwnerName,
        image,
        ingredients,
        instructions,
        difficulty,
        hearts,
        comment,
        additionalComment,
    } = recipe;


    const flip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div id="recipeCardContainer">
            <div id="recipeCardLeft" style={{ display: profile === 'no' ? 'none' : 'block' }}>
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 50, height: 50, backgroundColor: '#1C2833' }}
                >
                {recipeOwnerName.charAt(0)}
            </Avatar>
            </div>
            <div id="recipeCardRight">
                <div
                    id="flipBox"
                    className={`flipBox ${isFlipped ? 'flipped' : ''}`}
                >
                    <div className="front" style={{ backgroundImage: `url(${image})` }}>
                        <div id="recipeTitleContainr">
                            <div id='recipeName'>{name}</div>
                            <div id='recipeOwnerName'>@{recipeOwnerName}</div>
                        </div>
                        <div id="difficultyContainer">
                            {difficulty}
                        </div>
                        <div onClick={flip} className="flipButton">
                            {!isFlipped ? <LocalDiningIcon/> : <PhotoIcon/>}
                        </div>


                        
                    </div>
                    <div className="back">
                        <div onClick={flip} className="flipButton">
                        {!isFlipped ? <LocalDiningIcon/> : <PhotoIcon/>}
                    </div>
                    </div>
                </div>
                
                <div id="postBar">
                    <div id='heartsContainer'>
                        <FavoriteIcon />
                        <div>{hearts}</div>


                    
                    </div>

                    <div id='commentsContainer'>
                        <CommentIcon />
                        <div>{comment ? comment.length : 'No comments'}</div>

                    
                    
                    </div>
                    
                    
                </div>
                <div id="postContent">{additionalComment}</div>
            </div>
        </div>
    );
};

export default RecipeCard;
