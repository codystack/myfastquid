import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';

export default class componentName extends Component {

    state = { otp: "" };

    handleChange = otp => this.setState({ otp });

    render() {
        return (
            <div>
                <section className="p-0 d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left */}
                            <div className="col-12 col-md-5 col-lg-4 d-md-flex align-items-center vh-sm-100 verify-bg">
                            </div>
                            {/* Right */}
                            <div className="col-12 col-md-7 col-xl-8 mx-auto my-5">
                                <div className="row h-100">
                                    <div className="col-12 col-md-10 col-lg-6 text-start mx-auto d-flex align-items-center">
                                        <div className="w-100 text-center">
                                            <h2 className='display-6'>Verify Account</h2>
                                            <h5 className="fw-light">Enter six digit verification code sent to your email</h5>
                                            <div className="form mt-4 ">
                                                <div className='mb-3'>
                                                <OtpInput
                                                    value={this.state.otp}
                                                    onChange={this.handleChange}
                                                    numInputs={6}

                                                    inputStyle={{
                                                        width: "3rem",
                                                        height: "3rem",
                                                        margin: "0 0.9rem",
                                                        fontSize: "1.5rem",
                                                        fontWeight: "600",
                                                        lineHeight: "1.6",
                                                        transition: "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
                                                        borderRadius: 4,
                                                        border: "1px solid #e8e7ed"
                                                    }}
                                                />
                                                </div>
                                                <div className="row align-items-center g-0 m-0">
                                                    <div className="col"><Link to='/' className="btn btn-dark ">Verify Account</Link></div>
                                                </div>
                                                <div className="row align-items-center g-0 mt-4">
                                                    <div className="col"><span className="text-dark">Didn't get the code? <Link to=''>Resend Code</Link></span></div>
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
