import React, { useState } from 'react';
import { TextField, Button, Table, TableBody, TableRow, TableCell, Stepper, Step, StepLabel } from '@mui/material';
import RecipeNameImage from './RecipeNameImage';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

import FinishRecipe from './FinishRecipe';


const steps = ['Recipe Name & Image', 'Ingredients', 'Instructions', 'Finalize'];

const AddRecipe = () => {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (activeStep < steps.length) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };
    
    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };
    
    const onFinish = () => {
        alert("Recipe added!");
    }


    const [recipeName, setRecipeName] = useState('');
    const [recipeImage, setRecipeImage] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [difficulty, setDifficulty] = useState(0);

    const handleRecipeNameImage = (name, image) => {
        setRecipeName(name);
        setRecipeImage(image);
    };
    
    const handleIngredients = (ingredientsList) => {
        setIngredients(ingredientsList);
    };
    
    const handleInstructions = (instructionsList) => {
        setInstructions(instructionsList);
    };
    
    const handleDifficulty = (value) => {
        setDifficulty(value);
    };



    return (
        <div id='add'>
            

            {activeStep === 0 && <RecipeNameImage 
                    setRecipeName={setRecipeName} 
                    setRecipeImage={setRecipeImage} 
                    setActiveStep={setActiveStep} />}

            {activeStep === 1 && <Ingredients 
            setIngredients={setIngredients}
            setActiveStep={setActiveStep} />
            }
            {activeStep === 2 && <Instructions 
            setInstructions={setInstructions}
            setActiveStep={setActiveStep} />}
            {activeStep === 3 && <FinishRecipe 
            setDifficulty={setDifficulty}
            onFinish={onFinish}
             />}


            <Stepper id='stepper' activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>


        
        </div>
    );
};

export default AddRecipe;
