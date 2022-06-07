import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OtpInput from 'react-otp-input'

export default class Verify extends Component {

    state = { otp: "" };

    handleChange = otp => this.setState({ otp });

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
                                        <h1 className="mb-1 fw-bold">Verify Account</h1>
                                        <span>Enter six digit verification code sent to your email.</span>
                                    </div>
                                    <form>
                                        <div className="mb-4">
                                            <OtpInput
                                                value={this.state.otp}
                                                onChange={this.handleChange}
                                                numInputs={6}

                                                inputStyle={{
                                                    width: "3rem",
                                                    height: "3rem",
                                                    margin: "0 0.5rem",
                                                    fontSize: "1.5rem",
                                                    fontWeight: "600",
                                                    lineHeight: "1.6",
                                                    transition: "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
                                                    borderRadius: 4,
                                                    border: "1px solid #e8e7ed"
                                                }}
                                            />
                                        </div>
                                        <div>
                                            {/* Button */}
                                            <div className="d-grid">
                                                <button type="submit" className="btn btn-dark-primary">
                                                    Verify Account
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className='text-center mb-3'>
                                <span className='text-white fw-medium'>Didn't get the code?
                                    <a href="/" className="ms-1 text-primary"> Resend Code</a>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
