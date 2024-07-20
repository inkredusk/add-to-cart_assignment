// import React, { useState, useEffect } from 'react';
// import Amazon from './components/Amazon';
// import Cart from './components/Cart';
// import Navbar from './components/Navbar';
// import './App.css';
// import RegistrationForm from './components/RegistrationForm'; // Import RegistrationForm
// import Login from './components/Login'; // Import Login
// import { addToCart, getAllCartItems, getTotalPrice, getTotalQuantity, updateCartQuantity, removeFromCart, signUp } from './api/endpoints';

// function App() {
//   const [show, setShow] = useState(true);
//   const [cart, setCart] = useState([]);
//   const [totalQuantity, setTotalQuantity] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');
//   const [showRegistrationForm, setShowRegistrationForm] = useState(false); // State to show/hide registration form
//   const [showLogin, setShowLogin] = useState(true); // State to show/hide login
//   const [showMainApp, setShowMainApp] = useState(false); // State to show/hide main app
//   const [successMessage, setSuccessMessage] = useState(''); // State to handle success message

//   useEffect(() => {
//     const fetchCartData = async () => {
//       try {
//         const cartItems = await getAllCartItems();
//         setCart(cartItems);
//         setTotalQuantity(await getTotalQuantity());
//         setTotalPrice(await getTotalPrice());
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartData();
//   }, []);

//   const handleClick = async (item) => {
//     try {
//       await addToCart(item.id);
//       const cartItems = await getAllCartItems();
//       setCart(cartItems);
//       setTotalQuantity(await getTotalQuantity());
//       setTotalPrice(await getTotalPrice());
//     } catch (error) {
//       console.error('Error adding item to cart:', error);
//       setModalMessage('Error adding item to cart');
//       setShowModal(true);
//     }
//   };

//   const handleChange = async (item, delta) => {
//     try {
//       await updateCartQuantity(item.id, delta);
//       const cartItems = await getAllCartItems();
//       setCart(cartItems);
//       setTotalQuantity(await getTotalQuantity());
//       setTotalPrice(await getTotalPrice());
//     } catch (error) {
//       console.error('Error updating cart quantity:', error);
//     }
//   };

//   const handleRemove = async (id) => {
//     try {
//       await removeFromCart(id);
//       const cartItems = await getAllCartItems();
//       setCart(cartItems);
//       setTotalQuantity(await getTotalQuantity());
//       setTotalPrice(await getTotalPrice());
//     } catch (error) {
//       console.error('Error removing item from cart:', error);
//     }
//   };

//   const handleSubmit = async (formData) => {
//     try {
//         const response = await signUp(formData);
//         console.log('Registration successful', response);
//         setSuccessMessage('Registration successful. You can now log in.');
//     } catch (error) {
//         console.error('Error registering user', error);
//         setModalMessage(error.message || 'Registration failed. Please try again.');
//         setShowModal(true);
//     }
//   };

//   return (
//     <React.Fragment>
//       {showLogin ? (
//         <Login
//           setShowRegistrationForm={setShowRegistrationForm}
//           setShowMainApp={setShowMainApp}
//           setShowLogin={setShowLogin}
//         />
//       ) : showRegistrationForm ? (
//         <RegistrationForm setShowLogin={setShowLogin} handleSubmit={handleSubmit} successMessage={successMessage} />
//       ) : showMainApp ? (
//         <>
//           <Navbar size={totalQuantity} setShow={setShow} setShowRegistrationForm={setShowRegistrationForm} />
//           {show ? (
//             <Amazon handleClick={handleClick} />
//           ) : (
//             <Cart
//               cart={cart}
//               setCart={setCart}
//               handleChange={handleChange}
//               handleRemove={handleRemove}
//               totalPrice={totalPrice}
//               showModal={showModal}
//               setShowModal={setShowModal}
//               modalMessage={modalMessage}
//               setModalMessage={setModalMessage}
//             />
//           )}
//         </>
//       ) : null}
//       {showModal && (
//         <div className='modal'>
//           <div className='modal_content'>
//             <p>{modalMessage}</p>
//             <button onClick={() => setShowModal(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </React.Fragment>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import Amazon from './components/Amazon';
// import Cart from './components/Cart';
// import Navbar from './components/Navbar';
// import './App.css';
// import RegistrationForm from './components/RegistrationForm';
// import Login from './components/Login';
// import { addToCart, getAllCartItems, getTotalPrice, getTotalQuantity, updateCartQuantity, removeFromCart, signUp, signIn } from './api/endpoints';

// function App() {
//   const [show, setShow] = useState(true);
//   const [cart, setCart] = useState([]);
//   const [totalQuantity, setTotalQuantity] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');
//   const [showRegistrationForm, setShowRegistrationForm] = useState(false);
//   const [showLogin, setShowLogin] = useState(true);
//   const [showMainApp, setShowMainApp] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');

//   useEffect(() => {
//     const fetchCartData = async () => {
//       try {
//         const cartItems = await getAllCartItems();
//         setCart(cartItems);
//         setTotalQuantity(await getTotalQuantity());
//         setTotalPrice(await getTotalPrice());
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartData();
//   }, []);

//   const handleClick = async (item) => {
//     try {
//       await addToCart(item.id);
//       const cartItems = await getAllCartItems();
//       setCart(cartItems);
//       setTotalQuantity(await getTotalQuantity());
//       setTotalPrice(await getTotalPrice());
//     } catch (error) {
//       console.error('Error adding item to cart:', error);
//       setModalMessage('Error adding item to cart');
//       setShowModal(true);
//     }
//   };

//   const handleChange = async (item, delta) => {
//     try {
//       await updateCartQuantity(item.id, delta);
//       const cartItems = await getAllCartItems();
//       setCart(cartItems);
//       setTotalQuantity(await getTotalQuantity());
//       setTotalPrice(await getTotalPrice());
//     } catch (error) {
//       console.error('Error updating cart quantity:', error);
//     }
//   };

//   const handleRemove = async (id) => {
//     try {
//       await removeFromCart(id);
//       const cartItems = await getAllCartItems();
//       setCart(cartItems);
//       setTotalQuantity(await getTotalQuantity());
//       setTotalPrice(await getTotalPrice());
//     } catch (error) {
//       console.error('Error removing item from cart:', error);
//     }
//   };

//   const handleSubmit = async (formData) => {
//     try {
//       const response = await signUp(formData);
//       console.log('Registration successful', response);
//       setSuccessMessage('Registration successful. You can now log in.');
//     } catch (error) {
//       console.error('Error registering user', error);
//       setModalMessage(error.message || 'Registration failed. Please try again.');
//       setShowModal(true);
//     }
//   };

//   // const handleLogin = async (formData) => {
//   //   try {
//   //     const response = await signIn(formData);
//   //     console.log('Login successful', response);
//   //     setShowMainApp(true);
//   //     setShowLogin(false);
//   //   } catch (error) {
//   //     console.error('Error logging in', error);
//   //     throw new Error(error.message || 'Login failed. Please try again.');
//   //   }
//   // };

//   const handleLogin = async (formData) => {
//     try {
//       const response = await signIn(formData);
//       if (response.message) {
//         throw new Error(response.message);
//       }
//       console.log('Login successful', response);
//       setShowMainApp(true);
//       setShowLogin(false);
//     } catch (error) {
//       console.error('Error logging in', error);
//       throw new Error(error.message || 'Login failed. Please try again.');
//     }
//   };


//   return (
//     <React.Fragment>
//       {showLogin ? (
//         <Login
//           setShowRegistrationForm={setShowRegistrationForm}
//           setShowMainApp={setShowMainApp}
//           setShowLogin={setShowLogin}
//           handleLogin={handleLogin}
//         />
//       ) : showRegistrationForm ? (
//         <RegistrationForm setShowLogin={setShowLogin} handleSubmit={handleSubmit} successMessage={successMessage} />
//       ) : showMainApp ? (
//         <>
//           <Navbar size={totalQuantity} setShow={setShow} setShowRegistrationForm={setShowRegistrationForm} />
//           {show ? (
//             <Amazon handleClick={handleClick} />
//           ) : (
//             <Cart
//               cart={cart}
//               setCart={setCart}
//               handleChange={handleChange}
//               handleRemove={handleRemove}
//               totalPrice={totalPrice}
//               showModal={showModal}
//               setShowModal={setShowModal}
//               modalMessage={modalMessage}
//               setModalMessage={setModalMessage}
//             />
//           )}
//         </>
//       ) : null}
//       {showModal && (
//         <div className='modal'>
//           <div className='modal_content'>
//             <p>{modalMessage}</p>
//             <button onClick={() => setShowModal(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </React.Fragment>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import { addToCart, getAllCartItems, getTotalPrice, getTotalQuantity, updateCartQuantity, removeFromCart, signUp, signIn } from './api/endpoints';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showMainApp, setShowMainApp] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const cartItems = await getAllCartItems();
        setCart(cartItems);
        setTotalQuantity(await getTotalQuantity());
        setTotalPrice(await getTotalPrice());
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartData();
  }, []);

  const handleClick = async (item) => {
    try {
      await addToCart(item.id);
      const cartItems = await getAllCartItems();
      setCart(cartItems);
      setTotalQuantity(await getTotalQuantity());
      setTotalPrice(await getTotalPrice());
    } catch (error) {
      console.error('Error adding item to cart:', error);
      setModalMessage('Error adding item to cart');
      setShowModal(true);
    }
  };

  const handleChange = async (item, delta) => {
    try {
      await updateCartQuantity(item.id, delta);
      const cartItems = await getAllCartItems();
      setCart(cartItems);
      setTotalQuantity(await getTotalQuantity());
      setTotalPrice(await getTotalPrice());
    } catch (error) {
      console.error('Error updating cart quantity:', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await removeFromCart(id);
      const cartItems = await getAllCartItems();
      setCart(cartItems);
      setTotalQuantity(await getTotalQuantity());
      setTotalPrice(await getTotalPrice());
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      const response = await signUp(formData);
      console.log('Registration successful', response);
      setSuccessMessage('Registration successful. You can now log in.');
      setShowRegistrationForm(false);
      setShowLogin(true);
    } catch (error) {
      console.error('Error registering user', error);
      setModalMessage(error.message || 'Registration failed. Please try again.');
      setShowModal(true);
    }
  };

  const handleLogin = async (formData) => {
    try {
      const response = await signIn(formData);
      if (response.message==="Invalid username/password") {
         throw new Error(response.message);
        setShowLogin(false);
      }
      setShowMainApp(true);
      console.log('Login successful', response);


    } catch (error) {
      console.error('Error logging in', error);
      throw new Error(error.message || 'Login failed. Please try again.');
    }
  };

  return (
    <React.Fragment>
      {showLogin ? (
        <Login
          setShowRegistrationForm={setShowRegistrationForm}
          setShowMainApp={setShowMainApp}
          setShowLogin={setShowLogin}
          handleLogin={handleLogin}
        />
      ) : showRegistrationForm ? (
        <RegistrationForm setShowLogin={setShowLogin} handleSubmit={handleSubmit} successMessage={successMessage} />
      ) : showMainApp ? (
        <>
          <Navbar size={totalQuantity} setShow={setShow} setShowLogin={setShowLogin} />
          {show ? (
            <Amazon handleClick={handleClick} />
          ) : (
            <Cart
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
              handleRemove={handleRemove}
              totalPrice={totalPrice}
              showModal={showModal}
              setShowModal={setShowModal}
              modalMessage={modalMessage}
              setModalMessage={setModalMessage}
            />
          )}
        </>
      ) : null}
      {showModal && (
        <div className='modal'>
          <div className='modal_content'>
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import Amazon from './components/Amazon';
// import Cart from './components/Cart';
// import Navbar from './components/Navbar';
// import './App.css';
// import RegistrationForm from './components/RegistrationForm';
// import Login from './components/Login';
// import { addToCart, getAllCartItems, getTotalPrice, getTotalQuantity, updateCartQuantity, removeFromCart, signUp, signIn } from './api/endpoints';

// function App() {
//   const [show, setShow] = useState(true);
//   const [showLogin, setShowLogin] = useState(true);
//   const [showRegistrationForm, setShowRegistrationForm] = useState(false);
//   const [showMainApp, setShowMainApp] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [cart, setCart] = useState([]);
//   const [totalQuantity, setTotalQuantity] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');

//   useEffect(() => {
//     const fetchCartData = async () => {
//       try {
//         const cartItems = await getAllCartItems();
//         setCart(cartItems);
//         setTotalQuantity(await getTotalQuantity());
//         setTotalPrice(await getTotalPrice());
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartData();
//   }, []);

//   const handleClick = async (item) => {
//     try {
//       await addToCart(item.id);
//       const cartItems = await getAllCartItems();
//       setCart(cartItems);
//       setTotalQuantity(await getTotalQuantity());
//       setTotalPrice(await getTotalPrice());
//     } catch (error) {
//       console.error('Error adding item to cart:', error);
//       setModalMessage('Error adding item to cart');
//       setShowModal(true);
//     }
//   };

//   const handleChange = async (item, delta) => {
//     try {
//       await updateCartQuantity(item.id, delta);
//       const cartItems = await getAllCartItems();
//       setCart(cartItems);
//       setTotalQuantity(await getTotalQuantity());
//       setTotalPrice(await getTotalPrice());
//     } catch (error) {
//       console.error('Error updating cart quantity:', error);
//     }
//   };

//   const handleRemove = async (id) => {
//     try {
//       await removeFromCart(id);
//       const cartItems = await getAllCartItems();
//       setCart(cartItems);
//       setTotalQuantity(await getTotalQuantity());
//       setTotalPrice(await getTotalPrice());
//     } catch (error) {
//       console.error('Error removing item from cart:', error);
//     }
//   };

//   // const handleSubmit = async (formData) => {
//   //   try {
//   //     await signUp(formData);
//   //     setSuccessMessage('Registration successful. You can now log in.');
//   //     setShowLogin(true);
//   //     setShowRegistrationForm(false);
//   //   } catch (error) {
//   //     console.error('Error registering user', error);
//   //     setModalMessage(error.message || 'Registration failed. Please try again.');
//   //     setShowModal(true);
//   //   }
//   // };

//   const handleSubmit = async (formData) => {
//     try {
//       await signUp(formData);
//       setSuccessMessage('Registration successful. You can now log in.');
//       setShowLogin(true);
//       setShowRegistrationForm(false);
//     } catch (error) {
//       console.error('Error registering user', error);
  
//       if (error.response && error.response.data && error.response.data.errorMessage) {
//         // Handle specific error messages from the backend
//         setModalMessage(error.response.data.errorMessage);
//       } else if (error.message.includes('Password should have at least 8 characters')) {
//         // Handle password length validation error
//         setModalMessage('Password should have at least 8 characters.');
//       } else if (error.response && error.response.data && error.response.data.message === 'This email is already registered...!.') {
//         // Handle duplicate email error
//         setShowLogin(false);
//         setModalMessage('This email is already registered.');
//       } else {
//         // Handle generic registration error
//         setModalMessage(error.message || 'Registration failed. Please try again.');
//       }
  
//       setShowModal(true);
//     }
//   };
  
//    const handleLogin = async (formData) => {
//     try {
//       const response = await signIn(formData);
//       if (response.message==="Invalid username/password") {
//          throw new Error(response.message);
//         setShowLogin(false);
//       }
//       setShowMainApp(true);
//       console.log('Login successful', response);


//     } catch (error) {
//       console.error('Error logging in', error);
//       throw new Error(error.message || 'Login failed. Please try again.');
//     }
//   };

//   return (
//     <React.Fragment>
//       {showLogin ? (
//         <Login
//           setShowRegistrationForm={setShowRegistrationForm}
//           setShowMainApp={setShowMainApp}
//           setShowLogin={setShowLogin}
//           handleLogin={handleLogin}
//         />
//       ) : showRegistrationForm ? (
//         <RegistrationForm setShowLogin={setShowLogin} handleSubmit={handleSubmit} successMessage={successMessage} />
//       ) : showMainApp ? (
//         <>
//           <Navbar size={totalQuantity} setShow={setShow} setShowLogin={setShowLogin} />
//           {show ? (
//             <Amazon handleClick={handleClick} />
//           ) : (
//             <Cart
//               cart={cart}
//               setCart={setCart}
//               handleChange={handleChange}
//               handleRemove={handleRemove}
//               totalPrice={totalPrice}
//               showModal={showModal}
//               setShowModal={setShowModal}
//               modalMessage={modalMessage}
//               setModalMessage={setModalMessage}
//             />
//           )}
//         </>
//       ) : null}
//       {showModal && (
//         <div className='modal'>
//           <div className='modal_content'>
//             <p>{modalMessage}</p>
//             <button onClick={() => setShowModal(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </React.Fragment>
//   );
// }

// export default App;



