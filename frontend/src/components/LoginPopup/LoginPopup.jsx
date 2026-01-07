import React, { useContext } from 'react'
import './LoginPopup.css'
import { useState } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"

const LoginPopup = ({ setShowLogin }) => {

    const { url,setToken } = useContext(StoreContext)
    const [currentState, setCurrentState] = useState("Login");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }


    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if (currentState === "Login") {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data)

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token)
            setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }





    }
    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currentState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder=' Your Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit'>
                    {currentState === "Sign Up" ? "Create Account" : "Login"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By creating an account, I agree to the terms and conditions.</p>
                </div>
                {currentState === "Login" ?
                    <p className='login-popup-switch' onClick={() => setCurrentState("Sign Up")}>New user?<button>Create an account</button></p>
                    :
                    <p className='login-popup-switch' onClick={() => setCurrentState("Login")}>Already have an account? <button>Login</button></p>
                }

            </form>
        </div>
    )
}

export default LoginPopup
