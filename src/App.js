import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import './app.css';

import Home from './Components/Home';
import Login from './Components/Login'; 
import Plus from './Components/Plus';  
import Search from './Components/Search';  
import LandingPage from './Components/LandingPage';
import NavigationButtom from './Components/NavigationButtom';
import NavigationTop from './Components/NavigationTop';
import UHome from './Components/UHome';

const  App=()=> {
    return (
        
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/app/*" element={<MainContent />} />
                
                
                {/* Add other routes if needed */}
            
            </Routes>
        </Router>
        
    );
}

function MainContent() {
    return (
        <div id="appContainer">
                <NavigationTop/>
                <div id='middleMain'>
                <Routes>
                
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/plus" element={<Plus />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/infinity" element={<UHome />} />
                    
                </Routes>
                </div>
                <div id="smallBottom">
                    <NavigationButtom />
                </div>
        </div>
            
        
    );
}



export default App;
