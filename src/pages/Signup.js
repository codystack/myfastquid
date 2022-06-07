import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Signup extends Component {
    render() {
        return (
            <div className='bg-dark'>
                <div className="container d-flex flex-column">
                    <div className="row align-items-center justify-content-center g-0 min-vh-100">
                        <div className="col-lg-7 col-md-8 py-8 py-xl-0">
                            <div className="mb-3 text-center mt-5">
                                <a href="https://fastquid.ng">
                                    <img src="assets/images/logo.svg" alt="logo" width="50px" className="mx-1 pb-1" />
                                    <span style={{fontFamily: 'Recoleta', fontSize: '2rem', fontWeight: 600, color: "white"}}>FastQuid</span>
                                </a>
                            </div>
                            <div className="card shadow mb-4">
                                <div className="card-body p-6">
                                    <div className="mb-4 text-center">
                                        <h1 className="mb-1 fw-bold">Let’s get you started!</h1>
                                        <span>Hey there, let’s set up your FastQuid account.</span>
                                    </div>
                                    <form>
                                        <div className='row'>
                                            <div className="form-floating mb-4 col-lg-6 col">
                                                <input type="text" id="firstName" className="form-control" name="firstName" placeholder="First Name" required />
                                                <label for="firstName">First Name</label>
                                            </div>

                                            <div className="form-floating mb-4 col-lg-6 col">
                                                <input type="text" id="middleName" className="form-control" name="middleName" placeholder="Middle Name" required />
                                                <label for="middleName">Middle Name</label>
                                            </div>

                                            <div className="form-floating mb-4 col-lg-6 col">
                                                <input type="text" id="lastName" className="form-control" name="lastName" placeholder="Last Name" required />
                                                <label for="lastName">Last Name</label>
                                            </div>

                                            <div className="form-floating mb-4 col-lg-6 col">
                                                <input type="date" id="dateOfBirth" className="form-control" name="dateOfBirth" placeholder="Date of Birth" required />
                                                <label for="dateOfBirth">Date of Birth</label>
                                            </div>

                                            <div className="form-floating mb-4 col-lg-6 col">
                                                <input type="email" id="email" className="form-control" name="email" placeholder="Email Address" required />
                                                <label for="email">Email</label>
                                            </div>

                                            <div className="form-floating mb-4 col-lg-6 col">
                                                <input type="text" id="phoneNumber" className="form-control" name="phoneNumber" placeholder="Phone Number" required />
                                                <label for="phoneNumber">Phone Number</label>
                                            </div>
                                        </div>
                                        
                                        <div className="form-floating mb-4 col">
                                            <input type="text" id="residentialAddress" className="form-control" name="residentialAddress" placeholder="Residential Address" required />
                                            <label for="residentialAddress">Residential Address</label>
                                        </div>
                                        
                                        <div className='row'>
                                            <div className="form-floating mb-4 col-lg-6 col">
                                                <input type="password" id="password" className="form-control" name="password" placeholder="**************" required />
                                                <label for="password">Password</label>
                                            </div>

                                            <div className="form-floating mb-4 col-lg-6 col">
                                                <input type="confirmPassword" id="confirmPassword" className="form-control" name="confirmPassword" placeholder="**************" required />
                                                <label for="confirmPassword">Confirm Password</label>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-grid">
                                                <button type="submit" className="btn btn-dark-primary">
                                                    Create Free Account
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className='text-center mb-6'>
                                <span className='text-white fw-medium'>
                                    <a href="/" className="ms-1 text-white">Already have an account? Log In</a>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
