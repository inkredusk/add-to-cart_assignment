// import React from 'react'
// import '../styles/navbar.css'

// function Navbar({size, setShow}) {
//     return (
//         <nav>
//             <div className='nav_box' >
//             <div className='cart' onClick={()=>setShow(true)}>
//                     <span className="my_shop"><i className='fa fa-home'></i> My Shopping</span>
//                 </div>
                
//                 {/* <span className='my_shop' onClick={()=>setShow(true)}>
//                     My Shopping
//                 </span> */}

//                 <div className='cart' onClick={()=>setShow(false)}>
//                     <span>
//                         <i className='fas fa-cart-plus'></i>
//                     </span>
//                     <span>
//                         {size}
//                     </span>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar
import React from 'react';
import '../styles/navbar.css';
import { logout } from '../api/endpoints'; // Import the logout API call

function Navbar({ size, setShow, setShowLogin }) {
    const handleLogout = async () => {
        try {
            await logout(); // Call the logout API
            localStorage.removeItem('authToken'); // Clear local storage if needed
            setShowLogin(true); // Redirect to login page
        } catch (error) {
            console.error('Logout failed:', error);
            // Handle any error, e.g., display an error message
        }
    };

    return (
        <nav>
            <div className='nav_box'>
                <div className='cart' onClick={() => setShow(true)}>
                    <span className="my_shop"><i className='fa fa-home'></i> My Shopping</span>
                </div>
                <div className='cart' onClick={() => setShow(false)}>
                    <span>
                        <i className='fas fa-cart-plus'></i>
                    </span>
                    <span>
                        {size}
                    </span>
                </div>
                <div className='cart' onClick={handleLogout}>
                    <span className="logout_button"><i className='fa fa-sign-out'></i></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
