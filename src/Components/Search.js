import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import {FormControl, InputLabel,Select, MenuItem } from "@mui/material";
import '../app.css'


const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [type, setType] = useState("name");


    const handleSubmit = async () => {
        console.log(searchTerm);
        if (!searchTerm || searchTerm.trim().length === 0) {
            alert("Please enter a valid search term!");
            return;
        }

        try {
            const response = await axios.post("http://3.14.254.41:5000/search", { 
                "searchTerm": searchTerm,
                "searchType": type,
             });
            
            if (response.data && response.data.recipes && response.data.recipes.length > 0) {
                setSearchResults(response.data.recipes);
                console.log(response.data);
            } else {
                alert("Nothing Found!");
                setSearchResults([]);
            }
        } catch (error) {
            console.error("There was an error during the search:", error);
            alert("Error during the search!");
            setSearchResults([]);
        }
    }
    

    const onTermChage = (event) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    }
    



    return (
        <div id='homeContainer'>
            <div id="srchBar"> 
                <TextField id="searchBarTextField"
                    onChange={onTermChage}
                    value={searchTerm}
                    placeholder="Search for a recipe..."
                    style={{ flexGrow: '1', margin: '0 1rem'}}
                />
                <FormControl fullWidth id='typeForm'>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Age"
                    onChange={(e) => setType(e.target.value)}
                >
                    <MenuItem value="name">Recipe Name</MenuItem>
                    <MenuItem value="user">User Name</MenuItem>
                    <MenuItem value="ingredient">Ingredient</MenuItem>
                    <MenuItem value="tag">Tags</MenuItem>
                </Select>
                </FormControl>
                <Button id="srcBtn" onClick={handleSubmit}>Search</Button>
            </div>
            <div id="recipeContainer">
                {searchResults.map(recipe => (
                    <Card key={recipe.id} style={{ margin: '1rem 0', padding: '0.5rem' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {recipe.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                By: {recipe.recipeOwner}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Ingredients:</strong>
                            </Typography>
                            <List>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={ingredient.name} />
                                    </ListItem>
                                ))}
                            </List>
                            <Typography variant="body1">
                                <strong>Instructions:</strong>
                            </Typography>
                            <List>
                                {recipe.instructions.map((instruction, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={`${index + 1}. ${instruction}`} />
                                    </ListItem>
                                ))}
                            </List>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Nutritional Info:</strong> {recipe.nutritionalInfo}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Hearts:</strong> {recipe.hearts}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Search;







