import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';


const BottomsNavigation = ()=> {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(`/${newValue}`);
        
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} id='Nav'>
            <BottomNavigationAction className='navbuttons'  label="Home" value="" icon={<DinnerDiningIcon className='navbuttons' />} />
            <BottomNavigationAction className='navbuttons' label="Add" value="add" icon={<AddIcon className='navbuttons'/>} />
            <BottomNavigationAction className='navbuttons' label="Mixer" value="mixer" icon={<LocalDiningIcon className='navbuttons'/>} />
            <BottomNavigationAction label="Search" value="search" icon={<SearchIcon className='navbuttons'/>} />
        </BottomNavigation>
    );
}


export default BottomsNavigation;
