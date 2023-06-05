import React from 'react'

const Orderhistory = () => {
    return (
        <>
            <main>
                <div className="container first-container col-sm-12 pull-left bg-light p-3 mt-5">
                    <h2 className="order_title">Your Order</h2>
                    <table className="table table-condensed">
                        <thead>
                            <tr>
                                <th>Tracking_id</th>
                                <th>Order Date</th>
                                <th>Form</th>
                                <th>To</th>
                                <th>Sender name</th>
                                <th>Receiver name</th>
                                <th>Size</th>
                                <th>Weight</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="sub-container">

                                <td>1083</td>
                                <td>2023-04-13</td>
                                <td>BLR</td>
                                <td>KOL</td>
                                <td>Peter Paw</td>
                                <td>Susima</td>
                                <td>56</td>
                                <td>89</td>
                                <td><button type="button" className="btn btn-success exploder">
                                    <span className=""><i className="fas fa-chevron-down"></i></span>
                                </button></td>
                            </tr>
                            <tr className="explode hide">
                                <td colspan="10" style={{ background: "#e9e7e7", display: "none" }}>
                                    <div className="container ordertract">
                                        <div className="row">
                                            <div className="col-12 col-md-10  hh-grayBox">
                                                <div className="row justify-content-between">
                                                    <div className="order-tracking completed">
                                                        <span className="is-complete"></span>
                                                        <p>Ordered<br /><span>Mon, June 24</span></p>
                                                    </div>
                                                    <div className="order-tracking ">
                                                        <span className="is-complete"></span>
                                                        <p>Shipped<br /><span>Tue, June 25</span></p>
                                                    </div>
                                                    <div className="order-tracking">
                                                        <span className="is-complete"></span>
                                                        <p>Delivered<br /><span>Fri, June 28</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>


            </main>
        </>
    )
}

export default Orderhistory