import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Topbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar-default navbar navbar-expand-lg">
                    <a id="nav-toggle" href="admin-dashboard.html#">
                        <i className="fe fe-menu" />
                    </a>
                    {/*Navbar nav */}
                    <ul className="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap">
                        <li className="dropdown stopevent">
                            <a className="btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted" href="admin-dashboard.html#" role="button" id="dropdownNotification" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fe fe-bell" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg" aria-labelledby="dropdownNotification">
                            <div className=" ">
                                <div className="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center">
                                <span className="h4 mb-0">Notifications</span>
                                <a href="admin-dashboard.html#" className="text-muted">
                                    <span className="align-middle">
                                    <i className="fe fe-settings me-1" />
                                    </span>
                                </a>
                                </div>
                                {/* List group */}
                                <ul className="list-group list-group-flush notification-list-scroll">
                                <li className="list-group-item bg-light">
                                    <div className="row">
                                    <div className="col">
                                        <Link className="text-body" to=''>
                                            <div className="d-flex">
                                                <img src="assets/images/avatar/avatar-1.jpg" alt="" className="avatar-md rounded-circle" />
                                                <div className="ms-3">
                                                <h5 className="fw-bold mb-1">Damilare Mesimo</h5>
                                                <p className="mb-3">
                                                    Welcome to the future.
                                                </p>
                                                <span className="fs-6 text-muted">
                                                    <span><span className="fe fe-thumbs-up text-success me-1" />2 hours ago,</span>
                                                    <span className="ms-1">2:19 PM</span>
                                                </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-auto text-center me-2">
                                        <a href className="badge-dot bg-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as read">
                                        </a>
                                        <div>
                                        <a href className="bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove">
                                            <i className="fe fe-x text-muted" />
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                                <div className="border-top px-3 pt-3 pb-0">
                                <Link to='' className="text-link fw-semi-bold">
                                    See all Notifications
                                </Link>
                                </div>
                            </div>
                            </div>
                        </li>
                        {/* List */}
                        <li className="dropdown ms-2">
                            <Link className="rounded-circle" to='' role="button" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="avatar avatar-md">
                                <img alt="avatar" src="assets/images/avatar/avatar-1.jpg" className="rounded-circle" />
                            </div>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">
                                <div className="dropdown-item">
                                    <div className="d-flex">
                                        <div className="avatar avatar-md avatar-indicators avatar-online">
                                            <img alt="avatar" src="assets/images/avatar/avatar-1.jpg" className="rounded-circle" />
                                        </div>
                                        <div className="ms-3 lh-1">
                                            <h5 className="mb-1">Damilare Mesimo</h5>
                                            <p className="mb-0 text-muted">test@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3" />
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
