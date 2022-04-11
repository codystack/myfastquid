import React from 'react'

function Password() {
  return (
    <div>
        <section className="p-0 d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    {/* left */}
                    <div className="col-12 col-md-5 col-lg-4 d-md-flex align-items-center vh-sm-100 password-bg">
                    </div>
                    {/* Right */}
                    <div className="col-12 col-md-7 col-xl-8 mx-auto my-5">
                        <div className="row h-100">
                            <div className="col-12 col-md-10 col-lg-6 text-start mx-auto d-flex align-items-center">
                                <div className="w-100">
                                    <h2 className='display-6'>Forgot Password?</h2>
                                    <h5 className="fw-light">Enter your email to reset your password.</h5>
                                    <div className="form mt-4 ">
                                        <div className='mb-3'>
                                            <p className="text-start mb-2">Email address</p>
                                            <span className="form-group"><input type="email" className="form-control" placeholder="E-mail" /></span>
                                        </div>
                                        <div className="row align-items-center g-0 m-0">
                                            <div className="col-6"><button className="btn btn-dark">Recover your Password</button></div>
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

export default Password