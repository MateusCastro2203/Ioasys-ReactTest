import React from 'react'
import { useForm } from 'react-hook-form'
import './FormLogin.css'
import APILogin from '../../Fetch/APILogin'
const FormLogin = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        APILogin(data.Email,data.Password)
        console.log(data)
    }
    return (
        <form  className="Form" onSubmit={handleSubmit(onSubmit)} >
            <label>Email</label>
            <input 
                name="Email" 
                ref={register} 
                type="text" 
                label="E-mail" 
                placeholder="Digite seu e-mail" 
                Required={true} 
                className="icon Email" 
            />
            <label>Senha</label>
            <input 
                name="Password" 
                ref={register} 
                type="password" 
                label="Senha" 
                placeholder={null} 
                Required={true} 
                className="icon Password" 
            />
            <button type='submit' className="btn">entrar</button>
        </form>
    )
}

export default FormLogin
