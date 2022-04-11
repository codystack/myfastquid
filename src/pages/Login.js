import React from 'react'

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
                            <div className="col-12 col-md-10 col-lg-5 text-start mx-auto d-flex align-items-center">
                                <div className="w-100">
                                    <h2 className>Sign into your account!</h2>
                                    <h5 className="fw-light">Nice to see you! Please log in with your account.</h5>
                                    <div className="form mt-4 ">
                                        <div className="mb-4">
                                            <p className="text-start mb-2">Email address</p>
                                            <span className="form-group"><input type="email" className="form-control" placeholder="E-mail" /></span>
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                            <p className="text-start mb-2">Password</p>
                                            <span className="text-muted small mb-2">Lost password? <a href="password-reset" className="text-muted"> Click Here.</a></span>
                                            </div>
                                            <span className="form-group"><input type="password" className="form-control" placeholder="*********" /></span>
                                        </div>
                                        <div className="row align-items-center g-0 m-0">
                                            <div className="col-6 col-md-8"><span className="text-muted">Don't have an account? <a href="sign-up">Signup</a></span></div>
                                            <div className="col-6 col-md-4 text-end"><a href="overview" className="btn btn-dark" type="submit">Let's Rock</a></div>
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