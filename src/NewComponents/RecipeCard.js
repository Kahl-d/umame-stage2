import React from "react";


const RecipeCard = (props) => {
    return (
        <div id="recipeCard">
            {props.recipe.name}
        </div>
    );
}


export default RecipeCard;