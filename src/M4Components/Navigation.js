import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import './nav.css'; 


const Navigation = ()=> {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(`/${newValue}`);
        
    };

    return (
        <BottomNavigation id='navBar' value={value} onChange={handleChange}>
            <BottomNavigationAction
                className='navbuttons'
                label="Home"
                value=""
                icon={<DinnerDiningIcon fontSize="inherit" />}
            />
            <BottomNavigationAction className='navbuttons' label="Search" value="search" icon={<SearchIcon fontSize="inherit"/>} />
            <BottomNavigationAction className='navbuttons' label="Mixer" value="mixer" icon={<LocalDiningIcon fontSize="inherit"/>} />
            <BottomNavigationAction id='addBtn' className='navbuttons' label="Add" value="add" icon={<AddIcon fontSize="inherit"/>} />
            
        </BottomNavigation>
    );
}


export default Navigation;
