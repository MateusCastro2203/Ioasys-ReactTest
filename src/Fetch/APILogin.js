import React from 'react'
import axios from 'axios';
import valueCache from '../cache/valueCache'
import { Link } from 'react-router-dom';


const  APILogin = async(email,password)  => {
  
    try{
        await axios.post("https://empresas.ioasys.com.br/api/v1/users/auth/sign_in", {
            email,
            password
        }).then(response => {
            valueCache(response.headers);
            return <Link to="/home"/>
        })
    }
    catch(e){
        console.log(e)
    }
}

export default APILogin
