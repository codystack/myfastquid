import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
        <section className="p-0 d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    {/* left */}
                    <div className="col-12 col-md-5 col-lg-4 d-md-flex align-items-center vh-sm-100 login-bg">
                    </div>
                    {/* Right */}
                    <div className="col-12 col-md-7 col-xl-8 mx-auto my-5">
                        <div className="row h-100">
                            <div className="col-12 col-md-10 col-lg-6 text-start mx-auto d-flex align-items-center">
                                <div className="w-100">
                                    <h2 className='display-6'>Sign into your account!</h2>
                                    <h5 className="fw-light">Securely login to your FastQuid.</h5>
                                    <div className="form mt-4 ">
                                        <div className="mb-3">
                                            <p className="text-start mb-2">Email address</p>
                                            <span className="form-group"><input type="email" className="form-control" placeholder="E-mail" /></span>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                            <p className="text-start mb-2">Password</p>
                                            <Link to="/forgot-password" className="text-muted">Forgot password?</Link>
                                            </div>
                                            <span className="form-group"><input type="password" className="form-control" placeholder="*********" /></span>
                                        </div>
                                        <div className="row align-items-center g-0 m-0">
                                            <div className="col-6 col-md-8"><span className="text-muted">Don't have an account? <Link to='sign-up'>Signup</Link></span></div>
                                            <div className="col-6 col-md-4 text-end"><a href="overview" className="btn btn-dark" type="submit">Sign In</a></div>
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
export default Login