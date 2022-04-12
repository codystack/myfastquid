import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Signup extends Component {
    render() {
        return (
            <div>
                <section className="p-0 d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left */}
                            <div className="col-12 col-md-5 col-lg-4 d-md-flex align-items-center vh-sm-100 signup-bg">
                            </div>
                            {/* Right */}
                            <div className="col-12 col-md-7 col-xl-8 mx-auto my-5">
                                <div className="row h-100">
                                    <div className="col-12 col-md-10 col-lg-6 text-start mx-auto d-flex align-items-center">
                                        <div className="w-100">
                                            <h2 className='display-6'>Let’s get you started!</h2>
                                            <h5 className="fw-light">Hey there, let’s set up your FastQuid account.</h5>
                                            <div className="row mt-4 ">
                                                <div className='col-md-6 mb-3'>
                                                    <p className="text-start mb-2">First Name</p>
                                                    <span className="form-group"><input type="text" className="form-control" placeholder="First Name" /></span>
                                                </div>

                                                <div className='col-md-6 mb-3'>
                                                    <p className="text-start mb-2">Middle Name</p>
                                                    <span className="form-group"><input type="text" className="form-control" placeholder="Middle Name" /></span>
                                                </div>

                                                <div className='col-md-6 mb-3'>
                                                    <p className="text-start mb-2">Last Name</p>
                                                    <span className="form-group"><input type="text" className="form-control" placeholder="Last Name" /></span>
                                                </div>

                                                <div className='col-md-6 mb-3'>
                                                    <p className="text-start mb-2">Date of Birth</p>
                                                    <span className="form-group"><input type="date" className="form-control" /></span>
                                                </div>

                                                <div className='col-md-6 mb-3'>
                                                    <p className="text-start mb-2">Email Address</p>
                                                    <span className="form-group"><input type="email" className="form-control" placeholder="E-mail" /></span>
                                                </div>

                                                <div className='col-md-6 mb-3'>
                                                    <p className="text-start mb-2">Phone Number</p>
                                                    <span className="form-group"><input type="tel" className="form-control" placeholder="Phone Number" /></span>
                                                </div>

                                                <div className='col-md-12 mb-3'>
                                                    <p className="text-start mb-2">Residential Address</p>
                                                    <span className="form-group"><input type="text" className="form-control" placeholder="Residential Address" /></span>
                                                </div>

                                                <div className='col-md-6 mb-3'>
                                                    <div className="align-items-center">
                                                        <p className="text-start mb-2">Password</p>
                                                    </div>
                                                    <span className="form-group"><input type="password" className="form-control" placeholder="*********" /></span>
                                                </div>
                                                <div className='col-md-6 mb-3'>
                                                    <div className="align-items-center">
                                                        <p className="text-start mb-2">Confirm Password</p>
                                                    </div>
                                                    <span className="form-group"><input type="password" className="form-control" placeholder="*********" /></span>
                                                </div>
                                                <div className="custom-control custom-checkbox me-sm-2 mb-4 d-flex">
                                                    <input type="checkbox" className="form-check-input mb-0" id="exampleCheck1" />
                                                    <label className="form-check-label ms-2" htmlFor="exampleCheck1">By signing up, you agree to the <Link to="/terms">terms of service</Link></label>
                                                </div>
                                                <div className="row align-items-center g-0 m-0">
                                                    <div className="col-6"><span className="text-dark">Got an account? <Link to='/' className='fw-semi-bold'>Sign in</Link></span></div>
                                                    <div className="col-6 text-end"><Link to='/verify-account' className="btn btn-dark ">Create Free Account</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
