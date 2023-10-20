import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const NavihationButtom = ()=> {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(`/${newValue}`);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} showLabels>
            <BottomNavigationAction label="Home" value="" icon={<HomeIcon />} />
            <BottomNavigationAction label="Add" value="plus" icon={<AddIcon />} />
            <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
        </BottomNavigation>
    );
}


export default NavihationButtom;
