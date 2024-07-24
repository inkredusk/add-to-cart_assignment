import React, { useState } from 'react';
import '../styles/login.css';

const Login = ({ setShowRegistrationForm, setShowMainApp, setShowLogin, handleLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleLogin(formData);
            setShowMainApp(true);
            setShowLogin(false);
        } catch (error) {
            console.error('Error logging in', error);
            setErrorMessage(error.message || 'Login failed. Please try again.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    return (
        <form className='login_form' onSubmit={onSubmit}>
            <h2>Login</h2>
            {errorMessage && <p className='error_message'>{errorMessage}</p>}
            <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
            <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} required />
            <button type='submit'>Login</button>
            <button type='button' onClick={() => {
                setShowRegistrationForm(true);
                setShowLogin(false);
            }}>Register</button>
        </form>
    );
};

export default Login;


