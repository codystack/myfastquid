import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

export default class Profile extends Component {
    render() {
        return (
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
                                <div className=" pt-16 rounded-top-md " style={{background: 'url("assets/images/background/bankbg.jpeg") no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
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
                                                <div className="card-body">
                                                    <div className="pb-5 pt-5 row">
                                                        <div className="col-12 col-md-3 col-sm-6 mb-2">
                                                            <h4>Personal Information</h4>
                                                            <p>Change your FastQuid information using the form.</p>
                                                        </div>
                                                        <div className="col-12 col-sm-6 col-md-9">
                                                            <form>
                                                            
                                                            <div className="row g-2">
                                                                <div className="col-md-6 mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control disableClick" id="floatingInputGrid" placeholder="John" defaultValue="John" readOnly/>
                                                                        <label htmlFor="floatingInputGrid">First Name</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control disableClick" id="floatingInputGrid" placeholder="Jackson" defaultValue="Jackson" readOnly/>
                                                                        <label htmlFor="floatingInputGrid">Middle Name</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control disableClick" id="floatingInputGrid" placeholder="Doe" defaultValue="Doe" readOnly/>
                                                                        <label htmlFor="floatingInputGrid">Last Name</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control disableClick" id="floatingInputGrid" placeholder="11/04/2022" defaultValue="11/04/2022" readOnly/>
                                                                        <label htmlFor="floatingInputGrid">Date of Birth</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="email" className="form-control disableClick" id="floatingInputGrid" placeholder="name@example.com" defaultValue="johndoe@gmail.com" readOnly/>
                                                                        <label htmlFor="floatingInputGrid">Personal Email</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com" defaultValue="jondoe@fastquid.ng" />
                                                                        <label htmlFor="floatingInputGrid">Work Email</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="+2348162680095" defaultValue="+2348162680095" />
                                                                        <label htmlFor="floatingInputGrid">Mobile Number</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control disableClick" id="floatingInputGrid" placeholder="40162650095" defaultValue="240310****"  readOnly/>
                                                                        <label htmlFor="floatingInputGrid">Bank Verification Number(BVN)</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="Lekki-Epe" defaultValue="G122-Lekki Gardens Estate Phase II" />
                                                                        <label htmlFor="floatingInputGrid">Residential Address</label>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                                <div className="col-12">
                                                                    <button className="btn btn-dark-primary" type="submit">
                                                                        Save changes
                                                                    </button>
                                                                </div>
                                                            </form>
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
                                                                    <button className="btn btn-dark-primary" type="submit">
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
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="pb-5 pt-5 row">
                                                        <div className="col-12 col-md-4 col-sm-6 mb-2">
                                                            <h4>Bank Details</h4>
                                                            <p>This is a list of all your bank account you can use to receive funds into.</p>
                                                        </div>
                                                        <div className="col-12 col-sm-6 col-md-4 ms-auto text-center">
                                                            <Link to='/add-account'>
                                                                <div class="bankcard">
                                                                    <div className='bankcardtext'>
                                                                        <i className="nav-cion bi bi-plus-lg text-dark-primary" />
                                                                        <p className='text-dark-primary'>Add Bank Account</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div className="col-12 col-sm-6 col-md-4">
                                                            <div class="addedbankcard">
                                                                <div className="d-flex align-items-center justify-content-between mb-3 lh-1">
                                                                    <div>
                                                                    </div>
                                                                    <div className='bg-white bankcarddelete'>
                                                                        <Link to=''>
                                                                            <i className="bi bi-trash fs-3" style={{color: '#5538be'}} />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="drow mobile-text addedbankcardtext">
                                                                    <div className='text-center'>
                                                                        <h2 className='text-white fw-bold'>Damilare Doe Mesimo</h2>
                                                                    </div>
                                                                    <div className="d-md-flex d-lg-flex justify-content-between mt-3">
                                                                        <div className="col-md-7 col-12">
                                                                            <p className="text-white">
                                                                                Stanbic IBTC Bank
                                                                            </p>
                                                                        </div>
                                                                        <div className="col-md-5 col-12 text-end">
                                                                            <p className='text-white fw-bold'>0004274101</p>
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
                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}
