import React from 'react'
import { useState } from 'react'
import {GoogleButton} from 'react-google-button'
import { UserAuth } from '../../context/AuthContext'
const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // google signin handling
    const {googleSignIn} = UserAuth(); 

    const handleGoogleSignIn = async () =>{
        try {
            await googleSignIn()

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        this is signin page
      
        <GoogleButton onClick={handleGoogleSignIn}/>

      
     
    </div>
  )
}

export default Signin