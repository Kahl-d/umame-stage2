/**
 * This file contains the main component of the application.
 * @module App
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BottomsNavigation from './NewComponents/BottomsNavigation';
import Home from './NewComponents/Home';
import Add from './NewComponents/Add';
import Plus from './NewComponents/Plus'; // for adding recipes
import Search from './NewComponents/Search';
import Mixer from './NewComponents/Mixer';
import Login from './NewComponents/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import './app1.css';
import AddRecipe from './NewComponents/AddComponents/AddRecipe';
import QuickRecipe from './NewComponents/AddComponents/QuickRecipe';

/**
 * The main component of the application.
 * @returns {JSX.Element} The JSX element that represents the main component.
 */
const App=()=> {   

    return (
        <div id='appContainer'>
            
            <Router>
                <div id='topContainer'>
                <div className='topSections' id='logo'><RamenDiningIcon/></div>
                <div className='topSections' id='title'>
                    <h1>UMAMe</h1>
                    <span>you might add Me</span>
                </div>
                <div className='topSections' id='login'><AccountCircleIcon/></div>
                </div>
                <div id='NavContainer'>
                    <BottomsNavigation/>
                </div>

                <div id='mainContentContainer'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/addRecipe" element={<AddRecipe />} />
                    <Route path="/quickRecipe" element={<QuickRecipe />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/mixer" element={<Mixer />} />
                    
                </Routes>
                </div>

            </Router>
        </div>

    );
}

export default App;



