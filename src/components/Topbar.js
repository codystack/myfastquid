import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Topbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar-default navbar navbar-expand-lg">
                    <a id="nav-toggle" href="#">
                        <i className="fe fe-menu" />
                    </a>
                    {/*Navbar nav */}
                    <ul className="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap align-items-center">

                        <div className=''>
                            <h5 className='mb-0 pt-0 pb-0'>Damilare Mesimo</h5>
                        </div>
                        
                        <li className="dropdown ms-2">
                            <Link className="rounded-circle" to='' role="button" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="avatar avatar-md">
                                    <img alt="avatar" src="assets/images/avatar/avatar-1.jpg" className="rounded-circle" />
                                </div>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">
                                <div className="" />
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="dropdown-item" href="profile">
                                            <i className="fe fe-settings me-2" /> Profile
                                        </a>
                                    </li>
                                </ul>
                                <div className="dropdown-divider" />
                                <ul className="list-unstyled">
                                    <li>
                                    <a className="dropdown-item" href="/">
                                        <i className="fe fe-power me-2" /> Sign Out
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
