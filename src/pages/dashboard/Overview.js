import React from 'react';
import { Link } from 'react-router-dom';
import Loancard from '../../components/Loancard';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';


function Overview() {
    return (
        <div id="db-wrapper">
            <Navbar />
            <div id="page-content">
                <div className="header">
                    <Topbar />
                </div>
                
                <div className="container-fluid p-4">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="border-bottom mb-4 d-lg-flex justify-content-between align-items-center">
                                <div>
                                    <h1 className="mb-3 h1 fw-bold">Hello Damilare,</h1>
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
                            <h4 className="mb-0 card-title">TRANSACTIONS</h4>
                            </div>
                            <div>
                                <Link className="text-decoration-none" to='/transactions'>
                                    VIEW ALL <i className="bi bi-chevron-right" />
                                </Link>
                            </div>
                        </div>
                        {/* Card body */}
                        <div className="card-body">
                            <div className="table-responsive">
                            <table id="datatables-reponsive" className="table" style={{width: '100%'}}>
                                <tbody>
                                <tr>
                                    <td>
                                    <img src="assets/images/svg/loan-repayment.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Loan Repayed
                                    </td>
                                    <td>₦100.00</td>
                                    <td className="text-end">5mins ago</td>
                                </tr>
                                <tr>
                                    <td>
                                    <img src="assets/images/svg/funds-transfer.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Account Credited
                                    </td>
                                    <td>₦100,000.00</td>
                                    <td className="text-end">5hrs ago</td>
                                </tr>
                                <tr>
                                    <td>
                                    <img src="assets/images/svg/wallet-funded.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Wallet Credited
                                    </td>
                                    <td>₦5,000.00</td>
                                    <td className="text-end">24hrs ago</td>
                                </tr>
                                <tr>
                                    <td>
                                    <img src="assets/images/svg/loan-check.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Loan Approved
                                    </td>
                                    <td>₦50,000.00</td>
                                    <td className="text-end">2days ago</td>
                                </tr>
                                <tr>
                                    <td>
                                    <img src="assets/images/svg/loan-not-approved.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Loan Denied
                                    </td>
                                    <td>₦1,000.00</td>
                                    <td className="text-end">10days ago</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-12">
                        {/* Card */}
                        <div className="card mb-4">
                        <a href target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/business-loan.jpg" alt="" srcSet width="100%" style={{borderRadius: '0.5rem'}} />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Overview
