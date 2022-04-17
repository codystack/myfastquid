import React from 'react'

function Loaninfo() {
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="loanDetails" aria-labelledby="loanDetailsLabel">
        <div className="offcanvas-header" style={{background: '#e3dcff'}}>
            <h4 id="loanDetailsLabel" className='fw-bold text-dark'>Loan Details</h4>
            <button type="button" className="btn-close text-reset fw-bold" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
            <div className="mb-3 mb-lg-0">

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

                <div className="drow mt-7">
                    <h3 className='fw-bold mb-4' style={{color: '#593cc1'}}>Loan Repayment Date</h3>

                    <div className="d-md-flex d-lg-flex justify-content-between lh-1">
                        <div className="col-md-9 col-sm-6 col-12">
                            <p className="text-dark">
                                Date
                            </p>
                        </div>
                        <div className="col-md-3 col-sm-3 text-end col-12">
                            <p className='text-dark'>Amount</p>
                        </div>
                    </div>

                    <div className="d-md-flex mt-3 d-lg-flex justify-content-between lh-1">
                        <div className="col-md-9 col-12">
                            <p className="fw-bold text-dark">
                                Oct 15, 2022
                            </p>
                        </div>
                        <div className="col-md-3 text-end col-12">
                            <p className='fw-bold text-dark'>₦109,800</p>
                        </div>
                    </div>

                </div>

                <hr />

                <div className="drow mt-5">
                    <div className="d-md-flex d-lg-flex justify-content-between lh-1">
                        <div className="col-md-9 col-sm-6 col-12">
                            <p className="text-dark fw-bold">
                                Loan Repayment Status
                            </p>
                        </div>
                        <div className="col-md-3 col-sm-3 text-end col-12">
                        <span className="me-2"><span className="badge badge-dot bg-danger me-1" /><span className="text-danger">Pending</span></span>
                        </div>
                    </div>

                    <div className='text-center mt-4'>
                        <button className='btn btn-dark btn-lg'>Repay Loan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loaninfo