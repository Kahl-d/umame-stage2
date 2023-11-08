import {React, useState, useEffect} from "react";
import TextField from '@mui/material/TextField';
import { FormControl, Card } from "@mui/material";
import { Button } from '@mui/material';
import axios from "axios";
import RecipeCard from "./RecipeCard";
// import RecipeCard from "./RecipeCard";


const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const onTermChage = (event) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    }

    const handleSubmit = async () => {
        console.log(searchTerm);
        if (!searchTerm || searchTerm.trim().length === 0) {
            alert("Please enter a valid search term!");
            return;
        }

        try {
            const response = await axios.post("http://3.14.254.41:5000/search", { 
                "searchTerm": searchTerm,
                "searchType": "name"
                // name, tag, user, ingridient
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

    return (
        <div id="search">
        <div id="searchBar">
        <FormControl id="searchBarForm" 
        onSubmit={handleSubmit}
        >
        <TextField id="searchBarTextField"
                    onChange={onTermChage}
                    value={searchTerm}
                    placeholder="Search for a recipe..."
                />

        </FormControl>
        <Button id="srcBtn" 
        onClick={handleSubmit}
        >Search</Button>
        </div>
        <div id="searchResults">
        {searchResults.map(recipe => (
             <RecipeCard key={recipe.id} recipe={recipe} />       
                ))}
        </div>
        
        </div>
    );
    }

export default Search;