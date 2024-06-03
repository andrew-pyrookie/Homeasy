import React, { useState, useEffect } from 'react';
import './authforms.css';
import { MdOutlineMail, MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import apiClient from '../apiClient';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        document.body.classList.add('register-login');

        return () => {
            document.body.classList.remove('register-login');
        };
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await apiClient.post('/users/login/', { username, password });
            localStorage.setItem('token', response.data.access);
            // Redirect or update the UI after successful login
            console.log('Login successful');
        } catch (error) {
            setError('Invalid username or password');
            console.error('Error logging in:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="register-login-container">
            <div className="register-login-contents">
                <div className="register-login-centered-text">
                    <h1>Homeasy</h1>
                    <h3>Login</h3>
                </div>
                <div className="register-login-vertical-buttons">
                    <button className="register-login-google-button"><FcGoogle />  Sign in with Google</button>
                    <button className="register-login-facebook-button"><FaFacebook />  Sign in with Facebook</button>
                </div>
                <div className="register-login-centered-text">
                    <h5><span className="left"></span>Or Sign in with Email<span className="right"></span></h5>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className='register-login-input-container'>
                        <input
                            type="text"
                            value={username}
                            placeholder='Username'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <MdOutlineMail className="icon" />
                    </div>
                    <div className='register-login-input-container'>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {showPassword ? (
                            <MdOutlineVisibilityOff className="icon" onClick={togglePasswordVisibility} />
                        ) : (
                            <MdOutlineVisibility className="icon" onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    <div className="register-login-centered-text">
                        <a href='/forgot-password'>Forgot Password?</a>
                    </div>
                    <div className="register-login-centered-text">
                        <button type="submit" className="register-login-login-button">Login</button>
                    </div>
                    <div className="register-login-centered-text">
                        <p>Don't have an account? <a href='/signup'>Sign up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
