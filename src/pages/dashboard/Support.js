import React from 'react';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

function Support() {
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
                            <h4>FastQuid Support</h4>
                            <p>Talk to us about your complaint</p>
                          </div>
                          <div className="col-12 col-sm-6 col-md-9">
                            <form>
                              
                              <div className="form-floating mb-4 col">
                                <select className="form-select" id="floatingSelect" aria-label="Subject">
                                  <option selected>Select Subject</option>
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
                              
                              <div className="form-floating mb-4 col">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}} defaultValue={""} />
                                <label htmlFor="floatingTextarea2">Tell us about your issue</label>
                              </div>

                              <div className="col-12">
                                <button className="btn btn-dark-primary" type="submit">
                                    Submit complaint
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

export default Support