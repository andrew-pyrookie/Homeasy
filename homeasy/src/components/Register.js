import React, { useState, useEffect } from 'react';
import './authforms.css';
import apiClient from '../apiClient';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineMail, MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";

function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        document.body.classList.add('register-login');

        return () => {
            document.body.classList.remove('register-login');
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!document.getElementById("agreeTerms").checked) {
            setError('Please agree to the Terms and Conditions.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await apiClient.post('/users/register/', {
                username: fullName,
                email,
                password,
            });

            localStorage.setItem('token', response.data.access);
            console.log('Signup successful');
            // Redirect or update the UI
        } catch (error) {
            console.error('Error registering:', error);
            setError('Failed to register. Please try again.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='register-login-container'>
            <div className='register-login-contents'>
                <div className="register-login-centered-text">
                    <h1>Homeasy </h1>
                    <h3>Signup</h3>
                </div>
                <div className="register-login-vertical-buttons">
                    <button className="register-login-google-button"><FcGoogle /> Sign in with Google</button>
                    <button className="register-login-facebook-button"><FaFacebook /> Sign in with Facebook</button>
                </div>
                <div className="register-login-centered-text">
                    <h5><span className="left"></span>Or<span className="right"></span></h5>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='register-login-input-container'>
                        <input
                            type="text"
                            value={fullName}
                            placeholder='Full Name'
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='register-login-input-container'>
                        <input
                            type="email"
                            value={email}
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
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
                    <div className='register-login-input-container'>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={confirmPassword}
                            placeholder='Confirm Password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        {showPassword ? (
                            <MdOutlineVisibilityOff className="icon" onClick={togglePasswordVisibility} />
                        ) : (
                            <MdOutlineVisibility className="icon" onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    <label htmlFor="agreeTerms" className="register-login-agreeTerms">
                        <input type="checkbox" id="agreeTerms" required /> I agree to the Terms and Conditions
                    </label>
                    <br></br>
                    <button type="submit" className="register-login-login-button">Signup</button>
                    <div className="register-login-centered-text">
                        <p>Already have an account? <a href='/login'>Log In</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
