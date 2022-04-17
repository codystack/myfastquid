import React from 'react';
import { Link } from 'react-router-dom';
import Loancard from '../../components/Loancard';
import Loaninfo from '../../components/Loaninfo';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';


function Loan() {
    return (
        <div id="db-wrapper">
            <Navbar />
            <Loaninfo />
            <div id="page-content">
                <div className="header">
                    <Topbar />
                </div>

                <div className="container-fluid p-4">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="border-bottom mb-4 d-lg-flex justify-content-between align-items-center">
                                <div>
                                    <h1 className="mb-3 h2 fw-bold">Loan</h1>
                                    {/* <h5 className="text-dark mt-0 lead" id="greet" /> */}
                                </div>
                                {/* <div className="d-flex">
                                    <Link to='' className="btn btn-dark"><i className="bi bi-plus-lg" /> Get a Fast Loan</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <Loancard />
                        <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                            {/* Card */}
                            <div className="card mb-4 align-items-center" style={{backgroundImage: 'url("assets/images/tsakeoff.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            {/* Card body */}
                            <div className="card-body">
                                {/* <h2 class="mb-1 fs-4 text-uppercase text-white text-center"><span class="fw-bold">Salary</span> Advance</h2> */}
                                <p className="text-center text-white mt-3">Ran into an urgent need?<br />Request a salary advance.</p>
                                <div className="text-center mb-2 mt-4">
                                    <Link to='/coming-soon' className="btn btn-outline-white btn-sm">Advance me</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-12 col-md-12 col-12">
                            {/* Card */}
                            <div className="card mb-4">
                                {/* Card header */}
                                <div className="card-header align-items-center card-header-height d-flex justify-content-between align-items-center">
                                    <div>
                                        <h4 className="mb-0 card-title">MY LOAN</h4>
                                    </div>
                                    
                                </div>
                                {/* Card body */}
                                <div className="card-body">
                                    <div className="drow mt-4">
                                        <div className="d-md-flex d-lg-flex justify-content-between lh-1">
                                            <div className="col-md-9 col-sm-6 col-12">
                                                <p className="fw-bold text-dark">
                                                    Amount Borrowed
                                                </p>
                                            </div>
                                            <div className="col-md-3 col-sm-3 text-end col-12">
                                                <p className=''>₦100,000</p>
                                            </div>
                                        </div>

                                        <div className="d-md-flex mt-3 d-lg-flex justify-content-between lh-1">
                                            <div className="col-md-9 col-12">
                                                <p className="fw-bold text-dark">
                                                    Interest
                                                </p>
                                            </div>
                                            <div className="col-md-3 text-end col-12">
                                                <p className=''>₦9,800</p>
                                            </div>
                                        </div>

                                        <hr />

                                        <div className="d-md-flex mt-5 d-lg-flex justify-content-between lh-1">
                                            <div className="col-md-9 col-12">
                                                <p className="fw-bold text-dark">
                                                    Total Amount Due
                                                </p>
                                            </div>
                                            <div className="col-md-3 text-end col-12">
                                                <p className=''>₦109,800</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-12 mb-4 mobile-text">
                                <button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#loanDetails" aria-controls="loanDetails">View Loan Details <i className="bi bi-arrow-right" /></button>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 col-12">
                            {/* Card */}
                            <div className="card mb-4" style={{backgroundImage: 'url("assets/images/cashfunding.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                                <div className="card-body mt-2 mb-2">
                                    <h2 class="mb-1 fs-4 text-uppercase text-white text-center fw-bold">Do much more with<br /> FastQuid</h2>
                                    <p className="text-center text-white mt-3">You can now make monthly savings with PiggyVest, and also investments with Wealth.ng, by contributing a certain amount from your salary monthly.</p>
                                    <div className="text-center mb-2 mt-4">
                                        <Link to='/coming-soon' className="btn btn-outline-white btn-sm">Save for me</Link>
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
export default Loan
