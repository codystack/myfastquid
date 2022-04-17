import React from 'react'
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

function Cominsoon() {
  return (
    <div id="db-wrapper">
        <Navbar />
        <div id="page-content">
            <div className="header">
                <Topbar />
            </div>
            <div className='container-fluid p-4 mt-5'>
                <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
                    <div className="py-6">
                        <img src="../assets/images/svg/3d-girl-seeting.svg" alt="" style={{width: '500px'}} className="img-fluid ms-18" />
                        <div className='mt-4'>
                            <h2 className="display-4 fw-bold">Coming Soon</h2>
                            <p>We're working on something nice and you will be the first to know.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cominsoon