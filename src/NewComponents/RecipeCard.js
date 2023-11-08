import React, { useState } from "react";
import { Card, Typography, Table, TableBody, TableCell, TableRow, IconButton, Tooltip } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { LinearProgress } from '@mui/material';


import { styled } from '@mui/system';
import CookingMode from './CookingMode';

const Root = styled(Card)({
    maxWidth: '100%',
    height: '50%',
    display: 'flex',
    margin:'1rem'
});

const LeftSquare = styled('div')(({ theme }) => ({
    width: '50%',
    padding: theme.spacing(2),
}));

const RightSquare = styled('div')({
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
});

const Difficulty = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

const ButtonBar = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

const RecipeCard = ({ recipe }) => {
    const [showCookingMode, setShowCookingMode] = useState(false);

    return (
        <div id="recCard">
        <Root>
            <LeftSquare >
                <Typography id='recipeName' variant="h5">{recipe.name}</Typography>
                <Typography id='recipeOwnerName' variant="subtitle2">{recipe.recipeOwnerName}</Typography>
                
                <Difficulty>
                    <Tooltip title="Easy">
                        <ChildCareIcon className="difficultyIcon"/>
                    </Tooltip>
                    
                    <LinearProgress 
                        variant="determinate" 
                        value={(recipe.difficulty / 5) * 100} 
                        className="difficultyBar" 
                        style={{ flexGrow: 1, margin: '0 10px' }} // flexGrow ensures it takes up space between the icons
                    />
                    
                    <Tooltip title="Hard">
                        <FitnessCenterIcon className="difficultyIcon"/>
                    </Tooltip>
                </Difficulty>


                <Table >
                    <TableBody id='ingredientsTable'>
                        {recipe.ingredients.map((ingredient, index) => (
                            <TableRow key={index}>
                                <TableCell>{ingredient.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <ButtonBar>
                    <IconButton><FavoriteBorderOutlinedIcon /></IconButton>
                    <IconButton><ChatBubbleOutlineOutlinedIcon /></IconButton>
                    <IconButton><BookmarkBorderOutlinedIcon /></IconButton>
                    <IconButton><ShareOutlinedIcon /></IconButton>
                    <IconButton onClick={() => setShowCookingMode(true)}><KitchenOutlinedIcon /></IconButton>
                </ButtonBar>
            </LeftSquare>
            
            <RightSquare>
                <RestaurantIcon style={{ fontSize: 60 }} />
            </RightSquare>

            {showCookingMode && <CookingMode recipe={recipe} onClose={() => setShowCookingMode(false)} />}
        </Root>
        </div>
    );
};

export default RecipeCard;
