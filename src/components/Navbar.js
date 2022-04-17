import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <nav className="navbar-vertical navbar">
                <div className="nav-scroller">
                    {/* Brand logo */}
                    <a className="navbar-brand" href="/">
                        <img src="assets/images/logo.svg" alt="logo" width="40px" className="mx-1 pb-1" /><span style={{fontFamily: 'Recoleta', fontSize: '2rem', fontWeight: 600}}>FastQuid</span>
                    </a>
                    {/* Navbar nav */}
                    <div className="position-relative top-30">
                        <ul className="navbar-nav flex-column" id="sideNavbar">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/overview'>
                                    <i className="nav-icon bi bi-columns-gap me-2" /> Overview
                                </NavLink>
                            </li>
                            <li className="nav-item mt-3">
                                <NavLink className="nav-link" to='/loan'>
                                    <i className="nav-cion bi bi-cash-coin me-2" /> Loan
                                </NavLink>
                            </li>
                            <li className="nav-item mt-3">
                                <NavLink className="nav-link" to='/transactions'>
                                    <i className="nav-icon bi bi-arrow-down-up me-2" /> Transactions
                                </NavLink>
                            </li>
                            <li className="nav-item mt-3">
                                <NavLink className="nav-link" to='/profile'>
                                    <i className="nav-icon bi bi-person me-2" /> Profile
                                </NavLink>
                            </li>
                            <li className="nav-item mt-3">
                                <NavLink className="nav-link" to='/support'>
                                    <i className="nav-icon bi bi-chat-right-dots me-2" /> Support
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <div className="nav-divider" />
                            </li> */}
                        </ul>
                        <div className="mt-p text-center">
                            <NavLink to='/' className="btn btn-white mt-2">
                                <i className="nav-icon bi bi-box-arrow-left me-2" /> Log Out
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
