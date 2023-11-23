import React from "react";
import './landingpage.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    const asguest = () => {
        navigate("/main");
    };



    return (
        <div id="landingPageContainer">
            
            

            

            <div id="welcomeText">

                <h1>Welcome</h1>
                
            </div>
            <div id="landingPageContent">
                <div id="nameInputContainer">
                    <input type="text" id="nameInput" placeholder="Enter Name ..." /> 
                    <div id="nameSubmitBtn"><ArrowForwardIosIcon /></div>  
                </div>
                
                <div id="loginBtn">
                    Login
                </div>
                <div id= "guest" onClick={asguest}>
                    Continue as Guest
                </div>

            </div>

            
        </div>
    );
};

export default LandingPage;