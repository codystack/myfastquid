import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

export default class Transactions extends Component {
    render() {
        return (
            <div>
                <div id="db-wrapper">
                    <Navbar />
                    <div id="page-content">
                        <div className="header">
                           <Topbar />
                        </div>
                        {/* Container fluid */}
                        <div className="container-fluid p-4">
                            <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                {/* Page header */}
                                <div className="border-bottom pb-4 mb-4">
                                <div>
                                    <h1 className="mb-1 h2 fw-bold">Transactions</h1>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                {/* Card */}
                                <div className="card rounded-3">
                                {/* Card Header */}
                                <div className="card-header border-bottom-0 p-0">
                                    <ul className="nav nav-lb-tab" id="tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="all-transaction-tab" data-bs-toggle="pill" href="#all-transaction" role="tab" aria-controls="all-transaction" aria-selected="true">All</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="loan-tab" data-bs-toggle="pill" href="#loan" role="tab" aria-controls="loan" aria-selected="false">Loan</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="account-tab" data-bs-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="false">Account</a>
                                    </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content" id="tabContent">
                                    {/* Tab */}
                                    <div className="tab-pane fade show active" id="all-transaction" role="tabpanel" aria-labelledby="all-transaction-tab">
                                        <div className="table-responsive border-0">
                                        <table id="allTransactions" className="table table-borderless mb-0 text-nowrap" style={{width: '100%'}}>
                                            <thead className="table-light">
                                            <tr>
                                                <th className="pb-5" />
                                                <th className="pb-5">Amount</th>
                                                <th className="pb-5">Date</th>
                                                <th className="pb-5">Reference</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                <img src="assets/images/svg/loan-repayment.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Loan Repayed
                                                </td>
                                                <td>₦100.00</td>
                                                <td>5mins ago</td>
                                                <td>W173021551</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <img src="assets/images/svg/funds-transfer.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Account Credited
                                                </td>
                                                <td>₦100,000.00</td>
                                                <td>5hrs ago</td>
                                                <td>ncyo578zqijezyu</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <img src="assets/images/svg/loan-check.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Loan Approved
                                                </td>
                                                <td>₦150,000.00</td>
                                                <td>1day ago</td>
                                                <td>847j57745zvftp3</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <img src="assets/images/svg/loan-check.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Loan Approved
                                                </td>
                                                <td>₦50,000.00</td>
                                                <td>2days ago</td>
                                                <td>74qj57745zvftp3</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <img src="assets/images/svg/loan-not-approved.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Loan Denied
                                                </td>
                                                <td>₦1,000.00</td>
                                                <td>10days ago</td>
                                                <td>f9lrxz0vhla837k</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    {/* Tab */}
                                    <div className="tab-pane fade" id="loan" role="tabpanel" aria-labelledby="loan-tab">
                                        <div className="table-responsive border-0">
                                        <table id="loanDataTable" className="table table-borderless mb-0 text-nowrap" style={{width: '100%'}}>
                                            <thead className="table-light">
                                            <tr>
                                                <th className="pb-5" />
                                                <th className="pb-5">Amount</th>
                                                <th className="pb-5">Date</th>
                                                <th className="pb-5">Reference</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                <img src="assets/images/svg/loan-repayment.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Loan Repayed
                                                </td>
                                                <td>₦100.00</td>
                                                <td>5mins ago</td>
                                                <td>W173021551</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <img src="assets/images/svg/loan-check.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Loan Approved
                                                </td>
                                                <td>₦150,000.00</td>
                                                <td>1day ago</td>
                                                <td>847j57745zvftp3</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <img src="assets/images/svg/loan-check.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Loan Approved
                                                </td>
                                                <td>₦50,000.00</td>
                                                <td>2days ago</td>
                                                <td>74qj57745zvftp3</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <img src="assets/images/svg/loan-not-approved.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Loan Denied
                                                </td>
                                                <td>₦1,000.00</td>
                                                <td>10days ago</td>
                                                <td>f9lrxz0vhla837k</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    {/* Tab */}
                                    <div className="tab-pane fade" id="account" role="tabpanel" aria-labelledby="account-tab">
                                        <div className="table-responsive border-0">
                                        <table id="accountDataTable" className="table table-borderless mb-0 text-nowrap" style={{width: '100%'}}>
                                            <thead className="table-light">
                                            <tr>
                                                <th className="pb-5" />
                                                <th className="pb-5">Amount</th>
                                                <th className="pb-5">Date</th>
                                                <th className="pb-5">Reference</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                <img src="assets/images/svg/funds-transfer.svg" width={35} height={35} className="rounded-circle me-2" alt="Avatar" /> Account Credited
                                                </td>
                                                <td>₦100,000.00</td>
                                                <td>5hrs ago</td>
                                                <td>ncyo578zqijezyu</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    </div>
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
}
