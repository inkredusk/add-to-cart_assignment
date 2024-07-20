// import React, { useState } from 'react';
// import '../styles/login.css'; // Import the CSS file

// const Login = ({ setShowRegistrationForm, setShowMainApp, setShowLogin }) => {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleLogin = (e) => {
//         e.preventDefault();
//         // Add login logic here
//         console.log(formData);
//         // If login is successful:
//         setShowMainApp(true);
//         setShowLogin(false); // Hide the login form after a successful login
//     };

//     return (
//         <form className='login_form' onSubmit={handleLogin}>
//             <h2>Login</h2>
//             <input type='text' name='username' placeholder='Username' value={formData.username} onChange={handleChange} required />
//             <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} required />
//             <button type='submit'>Login</button>
//             <button type='button' onClick={() => {
//                 setShowRegistrationForm(true);
//                 setShowLogin(false);
//             }}>Register</button>
//         </form>
//     );
// };

// export default Login;
// import React, { useState } from 'react';
// import '../styles/login.css'; 

// const Login = ({ setShowRegistrationForm, setShowMainApp, setShowLogin, handleLogin }) => {
//   const [formData2, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await handleLogin(formData2);
//     } catch (error) {
//       console.error('Error logging in', error);
//       setErrorMessage(error.message || 'Login failed. Please try again.');
//       setTimeout(() => {
//         setErrorMessage('');
//       }, 3000);
//     }
//   };

//   return (
//     <form className='login_form' onSubmit={onSubmit}>
//       <h2>Login</h2>
//       {errorMessage && <p className='error_message'>{errorMessage}</p>}
//       <input type='email' name='email' placeholder='Email' value={formData2.email} onChange={handleChange} required />
//       <input type='password' name='password' placeholder='Password' value={formData2.password} onChange={handleChange} required />
//       <button type='submit'>Login</button>
//       <button type='button' onClick={() => {
//         setShowRegistrationForm(true);
//         setShowLogin(false);
//       }}>Register</button>
//     </form>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import '../styles/login.css';

const Login = ({ setShowRegistrationForm, setShowMainApp, setShowLogin, handleLogin }) => {
    const [formData2, setFormData] = useState({
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
            await handleLogin(formData2);
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
            <input type='email' name='email' placeholder='Email' value={formData2.email} onChange={handleChange} required />
            <input type='password' name='password' placeholder='Password' value={formData2.password} onChange={handleChange} required />
            <button type='submit'>Login</button>
            <button type='button' onClick={() => {
                setShowRegistrationForm(true);
                setShowLogin(false);
            }}>Register</button>
        </form>
    );
};

export default Login;

