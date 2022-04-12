import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
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
                                    <a className="nav-link" href="overview">
                                    <i className="nav-icon bi bi-columns-gap me-2" /> Overview
                                    </a>
                                </li>
                                <li className="nav-item mt-3">
                                    <a className="nav-link" href="wallet">
                                    <i className="nav-icon bi bi-wallet2 me-2" /> Wallet
                                    </a>
                                </li>
                                <li className="nav-item mt-3">
                                    <a className="nav-link" href="loan">
                                    <i className="nav-cion bi bi-cash-coin me-2" /> Loan
                                    </a>
                                </li>
                                <li className="nav-item mt-3">
                                    <a className="nav-link" href="transactions">
                                    <i className="nav-icon bi bi-arrow-down-up me-2" /> Transactions
                                    </a>
                                </li>
                                <li className="nav-item mt-3">
                                    <a className="nav-link" href="profile">
                                    <i className="nav-icon bi bi-gear me-2" /> Profile
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-divider" />
                                </li>
                            </ul>
                            <div className="mt-4 text-center">
                                <a href="./" className="btn btn-white btn-lg mt-2">
                                <i className="nav-icon bi bi-box-arrow-left me-2" /> Log Out</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
