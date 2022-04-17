import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div id="db-wrapper">
                    <Navbar />
                    <div id="page-content">
                        <div className="header">
                            <Topbar />
                        </div>
                    {/* Container fluid */}
                    <div className="container-fluid">
                        <div className="pt-5">
                        <div className="container">
                            <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                {/* Bg */}
                                <div className=" pt-16 rounded-top-md " style={{background: 'url("assets/images/background/profile-bg.jpg") no-repeat', backgroundSize: 'cover'}}>
                                </div>
                                <div className="d-flex align-items-end justify-content-between bg-white px-4  pt-2 pb-4 rounded-bottom-md shadow-sm ">
                                <div className="d-flex align-items-center">
                                    <div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                                    <img src="assets/images/avatar/avatar-1.jpg" className="avatar-xl rounded-circle border border-4 border-white position-relative" alt="" />
                                    <a href="dashboard-instructor.html#" className="position-absolute top-0 end-0" data-bs-toggle="tooltip" data-placement="top" title data-bs-original-title="Verified">
                                        <img src="assets/images/svg/checked-mark.svg" alt="" height={30} width={30} />
                                    </a>
                                    </div>
                                    <div className="lh-1">
                                    <h2 className="mb-0">Damilare Mesimo
                                        <Link to='' className="text-decoration-none" data-bs-toggle="tooltip" data-placement="top" title="Beginner" />
                                    </h2>
                                    <p className=" mb-0 d-block">Account Verified</p>
                                    </div>
                                </div>
                                <div>
                                    <Link to='' className="btn btn-dark btn-sm d-none d-md-block">Change Profile Photo</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="pb-5 py-md-5">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-12">
                                {/* Side Navbar */}
                                <ul className="nav nav-lb-tab mb-4 mt-3" id="tab" role="tablist">
                                <li className="nav-item ms-0" role="presentation">
                                    <a className="nav-link active " id="profile-tab" data-bs-toggle="pill" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Profile</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="security-tab" data-bs-toggle="pill" href="#security" role="tab" aria-controls="security" aria-selected="false">Security</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="payment-tab" data-bs-toggle="pill" href="#payment" role="tab" aria-controls="path" aria-selected="false">
                                    Payment</a>
                                </li>
                                </ul>
                                {/* Tab content */}
                                <div className="tab-content" id="tabContent">
                                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="col-lg-12 col-md-8 col-12">
                                    {/* Card */}
                                    <div className="card">
                                        {/* Card body */}
                                        <div className="card-body">
                                        <div className="pb-5 pt-7 row">
                                            <div className="col-xs-6 col-md-4 col-sm-6">
                                            <div className="mb-6">
                                                <h4 className="ps-6">Full Name</h4>
                                            </div>
                                            <div className="mb-6">
                                                <h4 className="ps-6">Email Address</h4>
                                            </div>
                                            <div className="mb-6">
                                                <h4 className="ps-6">Mobile Number</h4>
                                            </div>
                                            <div className="mb-6">
                                                <h4 className="ps-6">Bank Verification Number(BVN)</h4>
                                            </div>
                                            <div className="mb-6">
                                                <h4 className="ps-6">Residential Address</h4>
                                            </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-4">
                                            <div className="mb-6">
                                                <p className="fw-bold">Damilare Mesimo</p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="fw-bold">testuser@gmail.com</p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="fw-bold">+2348162680095</p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="fw-bold">*******0289</p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="fw-bold">Lekki, Lagos Nigeria.</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="security" role="tabpanel" aria-labelledby="security-tab">
                                    <div className="col-lg-12 col-md-8 col-12">
                                    {/* Card */}
                                    <div className="card">
                                        {/* Card body */}
                                        <div className="card-body">
                                        <div className="pb-5 pt-5 row">
                                            <div className="col-12 col-md-3 col-sm-6 pb-4">
                                            <h4>Change Password</h4>
                                            <p>Change your password to a new one.</p>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-9">
                                            <form>
                                                {/* Current password */}
                                                <div className="form-floating mb-4 col-12 col-md-6">
                                                <input type="password" className="form-control" id="floatingPassword" placeholder="Current Password" />
                                                <label htmlFor="floatingPassword">Current Password</label>
                                                </div>
                                                {/* New password */}
                                                <div className="form-floating mb-4 col-12 col-md-6">
                                                <input type="password" className="form-control" id="floatingPassword" placeholder="New Password" />
                                                <label htmlFor="floatingPassword">New Password</label>
                                                </div>
                                                <div className="col-12">
                                                {/* Button */}
                                                <button className="btn btn-primary" type="submit">
                                                    Change Password
                                                </button>
                                                </div>
                                            </form>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                                    <div className="col-lg-12 col-md-8 col-12">
                                    {/* Card */}
                                    <div className="card">
                                        {/* Card body */}
                                        <div className="card-body">
                                        <div>
                                            <h4 className="mb-0">Bank Details</h4>
                                            <p className="mb-4">
                                            Edit your personal information and address.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
