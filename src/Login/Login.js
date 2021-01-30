import React from 'react'
import './Login.css'
import FormLogin from '../Components/Forms/FormLogin'
import  logo   from '../assest/logo/logo-home.png'
import  logo2  from '../assest/logo/logo-home@2x.png'
import  logo3  from '../assest/logo/logo-home@3x.png'

const Login = () => {
    return (
        <div className="Login" >
                <img src={logo3}
                    alt="Logo Ioasys"
                    className="logo_home "
                />
                <h1 className="Login_Title">BEM-VINDO AO EMPRESAS</h1>
                <p className="Login_Text">Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</p>
                <FormLogin/>
        </div>
    )
}

export default Login
