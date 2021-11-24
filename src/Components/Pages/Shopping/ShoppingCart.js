import React from "react";
import { CartState } from "../../../Store/MyContext";
import SCard from "./SCard";

const ShoppingCart = (props) => {
  console.log(props);
  const {
    state: { cart },
  } = CartState();

  const itemsprice = cart.reduce((a, c) => {
    return a + c.price * c.quantity;
  }, 0);
  const taxprice = 0.18 * itemsprice;

  const totalprice = itemsprice + taxprice;

  // console.log(itemsprice);

  return (
    <div className="container-fluid">
      <div className="row ms-5">
        <div className="col-9">
          <h1>Shopping Cart</h1>
          {cart.map((prod) => {
            return <SCard prod={prod} key={prod.id} />;
          })} 
          <div className="btn btn-success" onClick={()=>{props.setToggleState(2)}}>Next</div>
        </div>
        <div className="col-3">
          <h3>Summary</h3>
          {/* <div ></div> */}
          <hr />
          <div className="Coupon-code">Coupon Code</div>
          <hr />
          <div className="total-amount">
            <div className="d-flex justify-content-between">
              <p>SUBTOTAL</p>
              <p>{itemsprice}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>SHIPPING</p>
              <p>FREE</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>TAX</p>
              <p>{parseInt(taxprice)}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Total</p>
              <p>{parseInt(totalprice)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
