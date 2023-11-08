
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import AddRecipe from './NewComponents/AddComponents/AddRecipe';
import QuickRecipe from './NewComponents/AddComponents/QuickRecipe';
import './application.css';
import Navigation from './M4Components/Navigation';
import Home from './M4Components/Home';
import Add from './M4Components/Add';
import Search from './M4Components/Search';
import Mixer from './M4Components/Mixer';
import Login from './M4Components/Login';



const App=()=> {   

    return (
        <div id='appContainer'>
            
            <Router>
                <div id='topAppContainer'>
                    <div className='topSections' id='logo'><RamenDiningIcon fontSize='inherit'/></div>
                    <div className='topSections' id='login'><AccountCircleIcon fontSize='inherit'/></div>
                </div>

                <div id='navContainer'>
                    <Navigation/>
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



