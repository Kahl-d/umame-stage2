import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import NavigationBottom from './NavigationButtom';


const NavigationTop = ()=> {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd' }}>
            <Typography variant="h6" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                App Logo
            </Typography>

            {/* Bottom buttons for larger screens */}
            <div id='bigTop'>
            <NavigationBottom/>
            </div>

            <IconButton color="default" style={{ color: 'black' }} onClick={() => navigate('/login')}>
                <AccountCircleIcon />
            </IconButton>
        </div>
    );
}

export default NavigationTop;
