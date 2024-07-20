// import React, { useState } from 'react';
// import '../styles/registrationForm.css';

// function RegistrationForm({ setShowLogin, handleSubmit, successMessage }) {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         address: '',
//         email: '',
//         mobileNo: '',
//         userName: '',
//         userPassword: ''
//     });

//     const [errorMessage, setErrorMessage] = useState('');
//     const [localSuccessMessage, setLocalSuccessMessage] = useState(successMessage);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await handleSubmit(formData);
//             setLocalSuccessMessage('Registration successful. You can now log in.');
//             setFormData({
//                 firstName: '',
//                 lastName: '',
//                 address: '',
//                 email: '',
//                 mobileNo: '',
//                 userName: '',
//                 userPassword: ''
//             });

//             setTimeout(() => {
//                 setLocalSuccessMessage('');
//             }, 3000); // 3 seconds delay
//         } catch (error) {
//             console.error('Error registering user', error);
//             setErrorMessage(error.message || 'Registration failed. Please try again.');
//         }
//     };

//     return (
//         <form className='registration_form' onSubmit={onSubmit}>
//             <h2>Register</h2>
//             {errorMessage && <p className='error_message'>{errorMessage}</p>}
//             {localSuccessMessage && <p className='success_message'>{localSuccessMessage}</p>}
//             <input type='text' name='firstName' placeholder='First Name' value={formData.firstName} onChange={handleChange} required />
//             <input type='text' name='lastName' placeholder='Last Name' value={formData.lastName} onChange={handleChange} required />
//             <input type='text' name='address' placeholder='Address' value={formData.address} onChange={handleChange} required />
//             <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
//             <input type='text' name='mobileNo' placeholder='Mobile No' value={formData.mobileNo} onChange={handleChange} required />
//             <input type='text' name='userName' placeholder='Username' value={formData.userName} onChange={handleChange} required />
//             <input type='password' name='userPassword' placeholder='Password' value={formData.userPassword} onChange={handleChange} required />
//             <button type='submit'>Register</button>
//             <button type='button' onClick={() => setShowLogin(true)}>Back to Login</button>
//         </form>
//     );
// }

// export default RegistrationForm;

// import React, { useState } from 'react';
// import '../styles/registrationForm.css';

// function RegistrationForm({ setShowLogin, handleSubmit, successMessage }) {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         address: '',
//         country: '',
//         state: '',
//         city: '',
//         pincode: '',
//         mobileNumber: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         gender: '' // Added gender field to formData
//     });

//     const [errorMessage, setErrorMessage] = useState('');
//     const [localSuccessMessage, setLocalSuccessMessage] = useState(successMessage);
//     const [isValidMobile, setIsValidMobile] = useState(true); // State for mobile number validation

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'mobileNumber') {
//             // Validate mobile number: Allow only 10-digit numbers
//             const isValid = /^\d{10}$/.test(value);
//             setIsValidMobile(isValid);
//         }
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const validateForm = () => {
//         if (formData.password !== formData.confirmPassword) {
//             setErrorMessage('Passwords do not match.');
//             setTimeout(() => {
//                 setErrorMessage('');
//             }, 3000); // Clear error message after 3 seconds
//             return false;
//         }

//         if (!isValidMobile) {
//             setErrorMessage('Mobile number should be a 10-digit number.');
//             setTimeout(() => {
//                 setErrorMessage('');
//             }, 3000); // Clear error message after 3 seconds
//             return false;
//         }

//         // Add more validation logic as needed
//         return true;
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) {
//             return;
//         }

//         try {
//             await handleSubmit(formData);
//             setLocalSuccessMessage('Registration successful. You can now log in.');
//             setFormData({
//                 firstName: '',
//                 lastName: '',
//                 address: '',
//                 country: '',
//                 state: '',
//                 city: '',
//                 pincode: '',
//                 mobileNumber: '',
//                 email: '',
//                 password: '',
//                 confirmPassword: '',
//                 gender: '' // Reset gender field after successful submission
//             });

//             setTimeout(() => {
//                 setLocalSuccessMessage('');
//             }, 3000); // Clear success message after 3 seconds
//         } catch (error) {
//             console.error('Error registering user', error);
//             setErrorMessage(error.message || 'Registration failed. Please try again.');
//         }
//     };

//     return (
//         <form className='registration_form' onSubmit={onSubmit}>
//             <h2>Register</h2>
//             {errorMessage && <p className='error_message'>{errorMessage}</p>}
//             {localSuccessMessage && <p className='success_message'>{localSuccessMessage}</p>}
//             <input type='text' name='firstName' placeholder='First Name' value={formData.firstName} onChange={handleChange} required />
//             <input type='text' name='lastName' placeholder='Last Name' value={formData.lastName} onChange={handleChange} required />
//             <input type='text' name='address' placeholder='Flat No, Area Name' value={formData.address} onChange={handleChange} required />
//             <input type='text' name='country' placeholder='Country' value={formData.country} onChange={handleChange} required />
//             <input type='text' name='state' placeholder='State' value={formData.state} onChange={handleChange} required />
//             <input type='text' name='city' placeholder='City' value={formData.city} onChange={handleChange} required />
//             <input type='text' name='pincode' placeholder='Pincode' value={formData.pincode} onChange={handleChange} required />
//             <input type='text' name='mobileNumber' placeholder='Mobile Number' value={formData.mobileNumber} onChange={handleChange} pattern="\d{10}" title="Mobile number should be a 10-digit number." required />
//             <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
//             <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} required />
//             <input type='password' name='confirmPassword' placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} required />
            
//             <div className="gender_radio">
//                 <label><input type='radio' name='gender' value='male' checked={formData.gender === 'male'} onChange={handleChange} required /> Male</label>
//                 <label><input type='radio' name='gender' value='female' checked={formData.gender === 'female'} onChange={handleChange} required /> Female</label>
//                 <label><input type='radio' name='gender' value='other' checked={formData.gender === 'other'} onChange={handleChange} required /> Other</label>
//             </div>

//             <button type='submit'>Register</button>
//             <button type='button' onClick={() => setShowLogin(true)}>Back to Login</button>
//         </form>
//     );
// }

// export default RegistrationForm;


import React, { useState } from 'react';
import '../styles/registrationForm.css';

function RegistrationForm({ setShowLogin, handleSubmit, successMessage }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        mobileNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '' // Added gender field to formData
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [localSuccessMessage, setLocalSuccessMessage] = useState(successMessage);
    const [isValidMobile, setIsValidMobile] = useState(true); // State for mobile number validation
    const [isValidPincode, setIsValidPincode] = useState(true); // State for pincode validation

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'mobileNumber') {
            // Validate mobile number: Allow only 10-digit numbers
            const isValid = /^\d{10}$/.test(value);
            setIsValidMobile(isValid);
        } else if (name === 'pincode') {
            // Validate pincode: Allow only 6-digit numbers
            const isValid = /^\d{6}$/.test(value);
            setIsValidPincode(isValid);
        }
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (formData.password.length < 8) {
                        setErrorMessage('Password should have at least 8 characters.');
                        setTimeout(() => {
                            setErrorMessage('');
                        }, 3000); // Clear error message after 3 seconds
                        return false;
                    }
            
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Passwords do not match.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000); // Clear error message after 3 seconds
            return false;
        }

        if (!isValidMobile) {
            setErrorMessage('Mobile number should be a 10-digit number.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000); // Clear error message after 3 seconds
            return false;
        }

        if (!isValidPincode) {
            setErrorMessage('Pincode should be a 6-digit number.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000); // Clear error message after 3 seconds
            return false;
        }

        // Add more validation logic as needed
        return true;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            await handleSubmit(formData);
            setLocalSuccessMessage('Registration successful. You can now log in.');
            setFormData({
                firstName: '',
                lastName: '',
                address: '',
                country: '',
                state: '',
                city: '',
                pincode: '',
                mobileNumber: '',
                email: '',
                password: '',
                confirmPassword: '',
                gender: '' // Reset gender field after successful submission
            });

            setTimeout(() => {
                setLocalSuccessMessage('');
            }, 3000); // Clear success message after 3 seconds
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
            <input type='text' name='firstName' placeholder='First Name' value={formData.firstName} onChange={handleChange} required />
            <input type='text' name='lastName' placeholder='Last Name' value={formData.lastName} onChange={handleChange} required />
            <input type='text' name='address' placeholder='Flat No, Building No, Area Name' value={formData.address} onChange={handleChange} required />
            <input type='text' name='country' placeholder='Country' value={formData.country} onChange={handleChange} required />
            <input type='text' name='state' placeholder='State' value={formData.state} onChange={handleChange} required />
            <input type='text' name='city' placeholder='City' value={formData.city} onChange={handleChange} required />
            <input type='text' name='pincode' placeholder='Pincode' value={formData.pincode} onChange={handleChange} pattern="\d{6}" title="Pincode should be a 6-digit number." required />
            <input type='text' name='mobileNumber' placeholder='Mobile Number' value={formData.mobileNumber} onChange={handleChange} pattern="\d{10}" title="Mobile number should be a 10-digit number." required />
            <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
            <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} required />
            <input type='password' name='confirmPassword' placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} required />
            
            <div className="gender_radio">
                <label><input type='radio' name='gender' value='male' checked={formData.gender === 'male'} onChange={handleChange} required /> Male</label>
                <label><input type='radio' name='gender' value='female' checked={formData.gender === 'female'} onChange={handleChange} required /> Female</label>
                <label><input type='radio' name='gender' value='other' checked={formData.gender === 'other'} onChange={handleChange} required /> Other</label>
            </div>

            <button type='submit'>Register</button>
            <button type='button' onClick={() => setShowLogin(true)}>Back to Login</button>
        </form>
    );
}

export default RegistrationForm;


// import React, { useState } from 'react';
// import '../styles/registrationForm.css';

// function RegistrationForm({ setShowLogin, handleSubmit, successMessage }) {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         address: '',
//         country: '',
//         state: '',
//         city: '',
//         pincode: '',
//         mobileNumber: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         gender: '' // Added gender field to formData
//     });

//     const [errorMessage, setErrorMessage] = useState('');
//     const [localSuccessMessage, setLocalSuccessMessage] = useState(successMessage);
//     const [isValidMobile, setIsValidMobile] = useState(true); // State for mobile number validation
//     const [isValidPincode, setIsValidPincode] = useState(true); // State for pincode validation

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'mobileNumber') {
//             // Validate mobile number: Allow only 10-digit numbers
//             const isValid = /^\d{10}$/.test(value);
//             setIsValidMobile(isValid);
//         } else if (name === 'pincode') {
//             // Validate pincode: Allow only 6-digit numbers
//             const isValid = /^\d{6}$/.test(value);
//             setIsValidPincode(isValid);
//         }
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const validateForm = () => {
//         if (formData.password.length < 8) {
//             setErrorMessage('Password should have at least 8 characters.');
//             setTimeout(() => {
//                 setErrorMessage('');
//             }, 3000); // Clear error message after 3 seconds
//             return false;
//         }

//         if (formData.password !== formData.confirmPassword) {
//             setErrorMessage('Passwords do not match.');
//             setTimeout(() => {
//                 setErrorMessage('');
//             }, 3000); // Clear error message after 3 seconds
//             return false;
//         }

//         if (!isValidMobile) {
//             setErrorMessage('Mobile number should be a 10-digit number.');
//             setTimeout(() => {
//                 setErrorMessage('');
//             }, 3000); // Clear error message after 3 seconds
//             return false;
//         }

//         if (!isValidPincode) {
//             setErrorMessage('Pincode should be a 6-digit number.');
//             setTimeout(() => {
//                 setErrorMessage('');
//             }, 3000); // Clear error message after 3 seconds
//             return false;
//         }

//         // Add more validation logic as needed

//         return true;
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) {
//             return;
//         }

//         try {
//             await handleSubmit(formData);
//             setLocalSuccessMessage('Registration successful. You can now log in.');
//             setFormData({
//                 firstName: '',
//                 lastName: '',
//                 address: '',
//                 country: '',
//                 state: '',
//                 city: '',
//                 pincode: '',
//                 mobileNumber: '',
//                 email: '',
//                 password: '',
//                 confirmPassword: '',
//                 gender: '' // Reset gender field after successful submission
//             });

//             setTimeout(() => {
//                 setLocalSuccessMessage('');
//             }, 3000); // Clear success message after 3 seconds
//         } catch (error) {
//             console.error('Error registering user', error);
//             if (error.response && error.response.data && error.response.data.errorMessage) {
//                 setErrorMessage(error.response.data.errorMessage);
//             } else {
//                 setErrorMessage(error.message || 'Registration failed. Please try again.');
//             }
//         }
//     };

//     return (
//         <form className='registration_form' onSubmit={onSubmit}>
//             <h2>Register</h2>
//             {errorMessage && <p className='error_message'>{errorMessage}</p>}
//             {localSuccessMessage && <p className='success_message'>{localSuccessMessage}</p>}
//             <input type='text' name='firstName' placeholder='First Name' value={formData.firstName} onChange={handleChange} required />
//             <input type='text' name='lastName' placeholder='Last Name' value={formData.lastName} onChange={handleChange} required />
//             <input type='text' name='address' placeholder='Flat No, Area Name' value={formData.address} onChange={handleChange} required />
//             <input type='text' name='country' placeholder='Country' value={formData.country} onChange={handleChange} required />
//             <input type='text' name='state' placeholder='State' value={formData.state} onChange={handleChange} required />
//             <input type='text' name='city' placeholder='City' value={formData.city} onChange={handleChange} required />
//             <input type='text' name='pincode' placeholder='Pincode' value={formData.pincode} onChange={handleChange} pattern="\d{6}" title="Pincode should be a 6-digit number." required />
//             <input type='text' name='mobileNumber' placeholder='Mobile Number' value={formData.mobileNumber} onChange={handleChange} pattern="\d{10}" title="Mobile number should be a 10-digit number." required />
//             <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
//             <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} required />
//             <input type='password' name='confirmPassword' placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} required />
            
//             <div className="gender_radio">
//                 <label><input type='radio' name='gender' value='male' checked={formData.gender === 'male'} onChange={handleChange} required /> Male</label>
//                 <label><input type='radio' name='gender' value='female' checked={formData.gender === 'female'} onChange={handleChange} required /> Female</label>
//                 <label><input type='radio' name='gender' value='other' checked={formData.gender === 'other'} onChange={handleChange} required /> Other</label>
//             </div>

//             <button type='submit'>Register</button>
//             <button type='button' onClick={() => setShowLogin(true)}>Back to Login</button>
//         </form>
//     );
// }

// export default RegistrationForm;

