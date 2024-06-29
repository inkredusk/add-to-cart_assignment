import React from 'react'
import '../styles/navbar.css'

function Navbar({size, setShow}) {
    return (
        <nav>
            <div className='nav_box' >
            <div className='cart' onClick={()=>setShow(true)}>
                    <span className="my_shop"><i className='fa fa-home'></i> My Shopping</span>
                </div>
                
                {/* <span className='my_shop' onClick={()=>setShow(true)}>
                    My Shopping
                </span> */}

                <div className='cart' onClick={()=>setShow(false)}>
                    <span>
                        <i className='fas fa-cart-plus'></i>
                    </span>
                    <span>
                        {size}
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar