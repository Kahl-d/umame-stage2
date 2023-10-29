import {React, useState, useEffect} from "react";
import TextField from '@mui/material/TextField';
import { FormControl } from "@mui/material";
import { Button } from '@mui/material';
import axios from "axios";

const Mixer = () => {

    const [currentIngredient, setCurrentIngredient] = useState('');
    const [mixers, setMixers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const onTermChange = (event) => {

        // console.log(event.target.value);
        setCurrentIngredient(event.target.value);
    }

    const handleAdd = (e) => {
        e.preventDefault(); 
        let newMixers = mixers;
        newMixers.push(currentIngredient);
        setMixers(newMixers);
        // setMixers([...mixers, currentIngredient]);
        setCurrentIngredient('');
        console.log(mixers);
    }


    const onSearchClick = async () => {
        
        try {
            const response = await axios.post("http://3.14.254.41:5000/search/mixer", { 
                "ingredients": mixers,
            });
            
             console.log(response);
            
            // if (response.data && response.data.recipes && response.data.recipes.length > 0) {
            //     // setSearchResults(response.data.recipes);
            //     console.log(response.data);
            // } else {
            //     alert("Nothing Found!");
            //     setSearchResults([]);
            // }
        } catch (error) {
            console.error("There was an error during the search:", error);
            alert("Error during the search!");
            setSearchResults([]);
        }

    }




    return (
        <div id="mixer">
            <div id="mixerSearchBar">
            <form id="searchBarForm" onSubmit={handleAdd}>
            <TextField id="searchBarTextField"
                    onChange={onTermChange}
                    value={currentIngredient}
                    placeholder="Search for a recipe..." />
            <Button id="addButton" type="submit">
                Add
            </Button>
            </form>
            <Button id="searchButton" onClick={onSearchClick}>Seacrh</Button>
                
            </div>
            <div id="mixerList"></div>
            <div id="mixerResults"></div>
        </div>
    );
}

export default Mixer;