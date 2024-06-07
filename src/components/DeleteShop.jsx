import React from 'react'
import Navbar from './Navbar'

const DeleteShop = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">PRODUCT ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-danger">DELETE</button>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteShop