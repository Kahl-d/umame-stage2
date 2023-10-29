import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import '../app.css'




const LandingPage = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSubmit = async () => {  // add asyc
        // try {
        //     const response = await axios.post("http://3.14.254.41:5000/users/login", {
        //         username,
        //         password
        //     });
            
        //     if (response.data) {
        //         console.log(response)
        //         navigate("/home");
        //     } else {
        //         alert("Invalid username or password!");
        //         setUsername("");
        //         setPassword("");
        //     }
        // } catch (error) {
        //     console.error("There was an error logging in:", error);
        //     alert("Invalid username or password!");
        //         setUsername("");
        //         setPassword("");

        // navigate("/app/home");
        // }
        navigate("/app/home");
        console.log("hello");
        

    }
    

    return (
        
        
        <div id="landingPageContainer"> 

            <div id="landingPageLogin">
            <TextField size="small"  margin="normal" label="Username" value={username} style={{margin: '2rem 0 0 0', width:'80%'}} onChange={e => setUsername(e.target.value)} />
            <TextField size="small"  margin="normal" className="textInputs" label="Password" type="password" style={{width:'80%'}} value={password} onChange={e => setPassword(e.target.value)} />
            <Button size="small" style={{ margin: '1rem' }} variant="contained" onClick={handleSubmit}>Login</Button>
            </div>

            
        
        
        </div>
       

    );

}

export default LandingPage;