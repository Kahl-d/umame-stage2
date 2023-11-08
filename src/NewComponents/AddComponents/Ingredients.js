import React, { useState } from 'react';
import { TextField, Button, Table, TableBody, TableRow, TableCell, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const Ingredients = ({ setIngredients, setActiveStep }) => {
    const [ingredientName, setIngredientName] = useState('');
    const [amount, setAmount] = useState('');
    const [unit, setUnit] = useState('');
    const [localIngredients, setLocalIngredients] = useState([]);

    const handleAddIngredient = () => {
        if (ingredientName && amount && unit) {
            const newIngredient = {
                name: ingredientName,
                amount: parseFloat(amount),
                unit: unit
            };
            setLocalIngredients(prevIngredients => [...prevIngredients, newIngredient]);
            setIngredientName('');
            setAmount('');
            setUnit('');
        } else {
            alert("Please fill all the ingredient fields!");
        }
    };

    const handleRemoveIngredient = (index) => {
        const updatedIngredients = [...localIngredients];
        updatedIngredients.splice(index, 1);
        setLocalIngredients(updatedIngredients);
    };

    const handleNext = () => {
        if (localIngredients.length === 0) {
            alert("Please add at least one ingredient!");
            return;
        }
        setIngredients(localIngredients);
        setActiveStep(prev => prev + 1);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <TextField value={ingredientName} onChange={e => setIngredientName(e.target.value)} placeholder="Ingredient Name" />
                <TextField value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" style={{ marginLeft: '10px' }} />
                <TextField value={unit} onChange={e => setUnit(e.target.value)} placeholder="Unit" style={{ marginLeft: '10px' }} />
                <IconButton onClick={handleAddIngredient}>
                    <AddIcon />
                </IconButton>
            </div>

            <Table>
                <TableBody>
                    {localIngredients.map((ingredient, index) => (
                        <TableRow key={index}>
                            <TableCell>{ingredient.name}</TableCell>
                            <TableCell>{ingredient.amount}</TableCell>
                            <TableCell>{ingredient.unit}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => handleRemoveIngredient(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Button variant="contained" color="primary" onClick={handleNext} style={{ marginTop: '20px' }}>
                Next
            </Button>
        </div>
    );
};

export default Ingredients;
