import React from 'react'
import ShoppingForm from './ShoppingForm'
import Form from './ShoppingForm/Form'


const ShoppingDetails = () => {
    return (
        <div class="details-wrapper container-fluid mt-5">
            <div className="row">
                <div className="col-8">
                    <Form />
                </div>
                {/* <div className="col-1"></div> */}
                <div className="col-4">
                    Total Amount
                </div>
            </div>
        </div>
    )
}

export default ShoppingDetails
