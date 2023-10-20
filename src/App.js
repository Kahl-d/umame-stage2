import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './app.css';

import Home from './Components/Home';
import Login from './Components/Login'; 
import Plus from './Components/Plus';  // Assuming you have this component
import Search from './Components/Search';  // Assuming you have this component
import NavigationButtom from './Components/NavigationButtom';
import NavigationTop from './Components/NavigationTop';

const  App=()=> {
    return (
        <Router>
            <div id="appContainer">
                <NavigationTop/>
                <div id='middleMain'>
                <MainContent />
                </div>
                <div id="smallBottom">
                    <NavigationButtom />
                </div>
            </div>
        </Router>
    );
}

function MainContent() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/plus" element={<Plus />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    );
}



export default App;
