import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [active,setActive] = useState(1);

  return (
    <div>
        <div className="d-flex flex-column justify-content-between bg-dark text-white p-3 vh-100">
            <div className='text-center text-md-start'>
                <a href="#" className='p-4 text-decoration-none'>
                <i className="bi bi-code-slash me-2"></i>
                    <span className='d-none d-md-inline'>Admin</span>
                </a>
                <hr className='text-white'/>
                <ul className="nav nav-pills flex-column">
                    <li className={active === 1 ? "nav-item active": "nav-item"} onClick={(e) => setActive(1)}>
                    <Link className="nav-link text-center text-md-start" aria-current="page" to="/" >
                        <i className="bi bi-speedometer2 me-2"></i>
                        <span className='d-none d-md-inline'>Dashboard</span>
                    </Link>
                    </li>

                    <li className={active === 2 ? "nav-item active": "nav-item"} onClick={(e) => setActive(2)}>
                    <Link className="nav-link text-center text-md-start" aria-current="page" to="/users">
                        <i className="bi bi-person me-2"></i>
                        <span className='d-none d-md-inline'>Users</span>
                    </Link>
                    </li>

                    <li className={active === 3 ? "nav-item active": "nav-item"} onClick={(e) => setActive(3)}>
                    <Link className="nav-link text-center text-md-start" aria-current="page" to="/orders">
                       <i className="bi bi-table me-2"></i>
                        <span className='d-none d-md-inline'>Order</span>
                    </Link>
                    </li>
                    
                    <li className={active === 4 ? "nav-item active": "nav-item"} onClick={(e) => setActive(4)}>
                        <Link className="nav-link text-center text-md-start" aria-current="page" to="/">
                        <i className="bi bi-grid me-2"></i>
                            <span className='d-none d-md-inline'>Report</span>
                        </Link>
                    </li>
                    </ul>
            </div>
            <div>
                <hr className='text-white'/>
                <div className="nav-item pb-3 text-center text-md-start">
                    <Link to="#" className='text-decoration-none'>
                    <i className="bi bi-person-circle me-2"></i>
                    <span className='d-none d-md-inline'>Admin</span>
                    </Link>
                </div>
            </div>
        </div>




    </div>
  )
}

export default Sidebar