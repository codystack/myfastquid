import React from 'react';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

function RequestLoan() {
  return (
    <div id="db-wrapper">
        <Navbar />
        <div id="page-content">
            <div className="header">
                <Topbar />
            </div>

            <div className='container-fluid'>
                <div className="pb-5 py-md-12 pt-xs-9">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-lg-9 col-md-9 col-12 mx-auto">
                                    {/* Card */}
                                    <div className="card">
                                    {/* Card body */}
                                    <div className="card-body">
                                        <div className="pb-5 pt-5 row">
                                        <div className="col-12 col-md-3 col-sm-6 mb-2">
                                            <h4>Loan Request</h4>
                                            <p>Provide the amount you want and reason for this loan.</p>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-9">
                                            <form>
                                                <div className="form-floating mb-4 col">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="500000" />
                                                    <label htmlFor="floatingInput">Loan Amount</label>
                                                </div>

                                                <div className="form-floating mb-4 col">
                                                    <select className="form-select" id="floatingSelect" aria-label="LoanType">
                                                    <option selected>Select Loan Type</option>
                                                    <option value="Loan">Personal Loan</option>
                                                    <option value="Disbursement">Pay Day loan</option>
                                                    </select>
                                                    <label htmlFor="floatingSelect">Loan Type</label>
                                                </div>

                                                <div className="form-floating mb-4 col">
                                                    <select className="form-select" id="floatingSelect" aria-label="LoanType">
                                                    <option selected>Select Loan Duration</option>
                                                    <option value="Loan">Personal Loan</option>
                                                    <option value="Disbursement">Pay Day loan</option>
                                                    </select>
                                                    <label htmlFor="floatingSelect">Loan Duration</label>
                                                </div>

                                                <div className="col-12">
                                                    <button className="btn btn-dark-primary" type="submit">
                                                        Next Step
                                                    </button>

                                                    <button className="btn btn-outline-dark-primary ms-3" type="reset">
                                                        Reset
                                                    </button>
                                                </div>
                                            </form>
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
    </div>
  )
}

export default RequestLoan