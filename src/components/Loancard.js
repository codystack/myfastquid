import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Loancard() {

    const [showLoanBalance,setLoanShow] = useState(false)
    const [hideLoanBalance] = useState(true)

  return (
    <div className="col-xl-8 col-lg-6 col-md-12 col-12">
        {/* Card */}
        <div className="card mb-4 text-dark" style={{backgroundColor: '#dad3fa'}}>
        {/* Card body */}
        <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3 lh-1">
                <div>
                    <i className="bi bi-cash-coin me-1" />
                    <span className="text-uppercase fw-semi-bold"> Loan Balance</span>
                </div>
                <div>
                {
                    showLoanBalance?<i className="bi bi-eye fs-3 text-dark" onClick={() => setLoanShow(!hideLoanBalance)} />:
                    <i className="bi bi-eye-slash fs-3 text-dark" onClick={() => setLoanShow(!showLoanBalance)} />
                }
                </div>
            </div>
            <div className="drow mobile-text">
                <div className="d-md-flex d-lg-flex justify-content-between">
                    <div className="col-md-9 col-12">
                    {
                    showLoanBalance?<h2 className="fs-2 mb-0 mt-6 fw-bold text-dark">
                        ₦109,800<span className="fs-4 text-mute">.00</span>
                    </h2>:<h2 className="fs-2 mb-0 mt-6 fw-bold text-dark">**********</h2>
                    }
                    </div>
                    <div className="mb-0 mt-6 col-md-3 col-12">
                        <Link to='' className="btn btn-dark-primary"><i className="bi bi-plus-lg" /> Apply for a Loan</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Loancard
