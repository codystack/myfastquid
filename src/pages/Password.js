import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Password extends Component {
    render() {
        return (
            <div className='bg-dark'>
                <div className="container d-flex flex-column">
                    <div className="row align-items-center justify-content-center g-0 min-vh-100">
                        <div className="col-lg-5 col-md-8 py-8 py-xl-0">
                            <div className="mb-4 text-center mt-6">
                                <a href="https://fastquid.ng">
                                    <img src="assets/images/logo.svg" alt="logo" width="50px" className="mx-1 pb-1" />
                                    <span style={{fontFamily: 'Recoleta', fontSize: '2rem', fontWeight: 600, color: "white"}}>FastQuid</span>
                                </a>
                            </div>
                            <div className="card shadow mb-4">
                                <div className="card-body p-6">
                                    <div className="mb-4 text-center">
                                        <h1 className="mb-1 fw-bold">Forgot Password</h1>
                                        <span>Enter your email to reset your password.</span>
                                    </div>
                                    <form>
                                        <div className="form-floating mb-4">
                                            <input type="email" id="email" className="form-control" name="email" placeholder="Email Address" required />
                                            <label for="email">Email</label>
                                        </div>
                                        <div>
                                            {/* Button */}
                                            <div className="d-grid">
                                                <button type="submit" className="btn btn-dark-primary">
                                                    Reset Password
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className='text-center mb-3'>
                                <span className='text-white fw-medium'>
                                    <a href="/" className="ms-1 text-white">Back to login</a>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
