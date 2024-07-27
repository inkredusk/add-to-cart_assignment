import React, { useState, useEffect } from 'react';
import '../styles/registrationForm.css';

function RegistrationForm({ setShowLogin, handleSubmit, successMessage }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        pincode: '',
        mobileNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [localSuccessMessage, setLocalSuccessMessage] = useState(successMessage);
    const [isValidMobile, setIsValidMobile] = useState(true);
    const [isValidPincode, setIsValidPincode] = useState(true);

    useEffect(() => {
        setLocalSuccessMessage(successMessage);
        if (successMessage) {
            const timer = setTimeout(() => {
                setLocalSuccessMessage('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'mobileNumber') {
            const isValid = /^\d{10}$/.test(value);
            setIsValidMobile(isValid);
        } else if (name === 'pincode') {
            const isValid = /^\d{6}$/.test(value);
            setIsValidPincode(isValid);
        }
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}:"<>?[\];',./`~\\|-]).{8,}$/;

        if (!passwordRegex.test(formData.password)) {
            setErrorMessage('Password must be at least 8 characters long, contain at least one uppercase letter, and one symbol.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return false;
        }

        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Passwords do not match.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return false;
        }

        if (!isValidMobile) {
            setErrorMessage('Mobile number should be a 10-digit number.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return false;
        }

        if (!isValidPincode) {
            setErrorMessage('Pincode should be a 6-digit number.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return false;
        }

        return true;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            await handleSubmit(formData);
            setFormData({
                firstName: '',
                lastName: '',
                address: '',
                city: '',
                pincode: '',
                mobileNumber: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.error('Error registering user', error);
            setErrorMessage(error.message || 'Registration failed. Please try again.');
        }
    };

    return (
        <form className='registration_form' onSubmit={onSubmit}>
            <h2>Register</h2>
            {errorMessage && <p className='error_message'>{errorMessage}</p>}
            {localSuccessMessage && <p className='success_message'>{localSuccessMessage}</p>}

            <label>
                <span className="label-text">First Name<span className="asterisk">*</span></span>
                <input type='text' name='firstName' placeholder='First Name' value={formData.firstName} onChange={handleChange} required />
            </label>

            <label>
                <span className="label-text">Last Name<span className="asterisk">*</span></span>
                <input type='text' name='lastName' placeholder='Last Name' value={formData.lastName} onChange={handleChange} required />
            </label>

            <label>
                <span className="label-text">Address<span className="asterisk">*</span></span>
                <input type='text' name='address' placeholder='Flat No, Building No, Area Name' value={formData.address} onChange={handleChange} required />
            </label>

            <label>
                <span className="label-text">City<span className="asterisk">*</span></span>
                <input type='text' name='city' placeholder='City' value={formData.city} onChange={handleChange} required />
            </label>

            <label>
                <span className="label-text">Pincode<span className="asterisk">*</span></span>
                <input type='text' name='pincode' placeholder='Pincode' value={formData.pincode} onChange={handleChange} pattern="\d{6}" title="Pincode should be a 6-digit number." required />
            </label>

            <label>
                <span className="label-text">Mobile Number<span className="asterisk">*</span></span>
                <input type='text' name='mobileNumber' placeholder='Mobile Number' value={formData.mobileNumber} onChange={handleChange} pattern="\d{10}" title="Mobile number should be a 10-digit number." required />
            </label>

            <label>
                <span className="label-text">Email<span className="asterisk">*</span></span>
                <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
            </label>

            <label>
                <span className="label-text">Password<span className="asterisk">*</span></span>
                <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} required />
            </label>

            <label>
                <span className="label-text">Confirm Password<span className="asterisk">*</span></span>
                <input type='password' name='confirmPassword' placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} required />
            </label>

            <button type='submit'>Register</button>
            <button type='button' onClick={() => setShowLogin(true)}>Back to Login</button>
        </form>
    );
}

export default RegistrationForm;




