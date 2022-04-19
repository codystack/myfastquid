import React from 'react';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

function Bank() {
  return (
    <div id="db-wrapper">
      <Navbar />
      <div id="page-content">
        <div className="header">
            <Topbar />
        </div>

        <div className='container-fluid'>
          <div className="pb-5 py-md-6 pt-xs-9">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-lg-12 col-md-12 col-12 mx-auto">
                    {/* Card */}
                    <div className="card">
                      {/* Card body */}
                      <div className="card-body">
                        <div className="pb-5 pt-5 row">
                          <div className="col-12 col-md-4 col-sm-6 mb-2">
                            <h1 className='display-6'>Add bank account</h1>
                            <p>Disbursed funds are paid into your bank account.</p>
                          </div>
                          <div className="col-12 col-sm-6 col-md-8">
                            <form>

                                <div className="form-floating mb-4 col-lg-8">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="0004274101" />
                                    <label htmlFor="floatingInput">Recipient Account Number</label>
                                </div>
                              
                              <div className="form-floating mb-4 col-lg-8">
                                <select className="form-select" id="floatingSelect" aria-label="Bank">
                                  <option selected>Select Bank</option>
                                  <option value="Loan">Loan</option>
                                  <option value="Disbursement">Disbursement</option>
                                  <option value="Loan Repayment">Loan Repayment</option>
                                  <option value="Debit">Debit</option>
                                  <option value="Fraud">Fraud</option>
                                  <option value="General Inquiries">General Inquiries</option>
                                  <option value="Funds Transfer">Funds Transfer</option>
                                  <option value="Others">Others</option>
                                </select>
                                <label htmlFor="floatingSelect">Subject</label>
                              </div>

                              <div className="col-12">
                                <button className="btn btn-dark-primary" type="submit">
                                    Add Bank
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

export default Bank