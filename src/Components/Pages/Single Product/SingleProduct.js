// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { BsDash, BsPlus } from "react-icons/bs";
// import {CartState} from "../../../Store/MyContext";
// import "../../../CSSFiles/SingleProduct/SingleProduct.css";

// const SingleProduct = () => {
//   const { state, dispatch } = CartState();
//   const data = state.state;
//   const cart = state.cart;
//   const { id } = useParams();

//   const filteredArray = data.filter((c) => c.id == id );
//   return (
//     <div className="Container_details">
//       <div className="row_details">
//         <div className="details_image">
//           <img className="detail_img" src={filteredArray[0].image} alt=" " />
//         </div>
//         <div className="details_name">
//           <div className="prod_name">{filteredArray[0].title}</div>
//           <div className="review_area">
//             <span className="rating_details">{filteredArray[0].ratings}</span>
//             <span className="review">2 reviews </span>
//           </div>
//           <div className="mt">
//             <hr />
//           </div>
//           <div className="details_price">
//             <span className="details_actaul">{filteredArray[0].title}</span>
//           </div>
//           <div className="mt">
//             <hr />
//           </div>
//           <div className="details_text">
//             <span>{filteredArray[0].description}</span>
//           </div>

//           <div className="details_button">
//           {cart.some((p) => p.id === filteredArray[0].id) ? (
//               <button className="btn-default"
//                 variant="danger"
//                 onClick={() =>
//                   dispatch({
//                     type: "REMOVE_FROM_CART",
//                     payload: filteredArray[0],
//                   })
//                 }
//               >
//                 Remove from Cart
//               </button>
//             ) : (
//               <button className="btn-default"
//                 onClick={() =>
//                   dispatch({
//                     type: "ADD_TO_CART",
//                     payload: filteredArray[0],
//                   })
//                 }
//               >
//                 Add to cart
//                 {/* {!prod.inStock ? "Out of Stock" : "Add to Cart"} */}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="row_two">
//         <div className="row_two_left">
//           <h1 className="review_h">Reviews</h1>
//           <div className="person_one">
//             <img src="..." alt="" />
//             <div className="person_one_info">
//               <h2>JOHN DOE</h2>
//               <p>may 3, 2021</p>
//               <span className="review_rating">product.rating</span>
//             </div>
//             <div className="data">
//               <p>
//                 Lorem ipsum is placeholder text commonly used in the graphic,
//                 print, and publishing industries for previewing
//                 <br /> layouts and visual mockups. ipsum is placeholder text
//                 commonly used in the graphic, print, and publishing
//                 <br /> industries for previewing layouts and visual mockups.
//               </p>
//             </div>
//           </div>
//           <div className="person_two">
//             <img src="..." alt="" />
//             <div className="person_two_info">
//               <h2>JOHN DOE</h2>
//               <p>may 3 2021</p>
//               <span className="review_rating">product.rating</span>
//             </div>
//             <div className="data_two">
//               <p>
//                 Lorem ipsum is placeholder text commonly used in the graphic,
//                 print, and publishing industries for previewing
//                 <br /> layouts and visual mockups. ipsum is placeholder text
//                 commonly used in the graphic, print, and publishing
//                 <br /> industries for previewing layouts and visual mockups.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsDash, BsPlus } from "react-icons/bs";
// import { CartState } from "./Store/MyContext";
import { CartState } from "../../../Store/MyContext";
import "../../../CSSFiles/SingleProduct/SingleProduct.css";

const SingleProduct = () => {
  const { state, dispatch } = CartState();
  const data = state.state;
  const cart = state.cart;
  const { id } = useParams();

  const filteredArray = data.filter((c) => c.id == id);
  return (
    <div className="single-wrapper">
      <div className="container pt-5">
        <div className="card card-1">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane add-class active" id="pic-1">
                    <img src={filteredArray[0].image} />
                  </div>
                  {/* <div className="tab-pane" id="pic-2">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div className="tab-pane" id="pic-3">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div className="tab-pane" id="pic-4">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div className="tab-pane" id="pic-5">
                  <img src="http://placekitten.com/400/252" />
                </div>  */}
                </div>
                {/* <ul className="preview-thumbnail nav nav-tabs">
                <li className="active">
                  <a data-target="#pic-1" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-2" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-3" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-4" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-5" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
              </ul> */}
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{filteredArray[0].title}</h3>
                <div className="rating">
                  <div className="stars">{filteredArray[0].ratings}</div>
                  <span className="review-no">2 reviews</span>
                </div>
                <p className="product-description">
                  {filteredArray[0].description}
                </p>
                <h5 className="price">
                  current price: <span>${filteredArray[0].price}</span>
                </h5>
                <p className="vote">
                  <strong>91%</strong> of buyers enjoyed this product!{" "}
                  <strong>(87 votes)</strong>
                </p>

                {/* <h5 className="sizes">
                sizes:
                <span className="size" data-toggle="tooltip" title="small">
                  s
                </span>
                <span className="size" data-toggle="tooltip" title="medium">
                  m
                </span>
                <span className="size" data-toggle="tooltip" title="large">
                  l
                </span>
                <span className="size" data-toggle="tooltip" title="xtra large">
                  xl
                </span>
              </h5> */}

                {/* <h5 className="colors">
                colors:
                <span
                  className="color orange not-available"
                  data-toggle="tooltip"
                  title="Not In store"
                ></span>
                <span className="color green"></span>
                <span className="color blue"></span>
              </h5> */}

                <div className="action">
                  {cart.some((p) => p.id === filteredArray[0].id) ? (
                    <button
                      className="add-to-cart btn btn-default"
                      variant="danger"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: filteredArray[0],
                        })
                      }
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className="add-to-cart btn btn-default"
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: filteredArray[0],
                        })
                      }
                    >
                      Add to cart
                      {/* {!prod.inStock ? "Out of Stock" : "Add to Cart"} */}
                    </button>
                  )}
                  {/* <button className="like btn btn-default" type="button">
                  <span className="fa fa-heart"></span>
                </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center py-4">
              <h1>Reviews</h1>
            </div>
          </div>
          {/* <hr/> */}
          <div className="row">
            <div className="col-md-12 bg-white py-3 px-5 mb-3 rounded-top">
              <h3>Abhishek Singh {filteredArray[0].ratings}</h3>
              <p>
                These are my third shoes from Asian. The best and worth it shoes
                ever you will find These are my third shoes from Asian. The best and worth it shoes ever you will find
              </p>
            </div>

            <div className="col-md-12  bg-white py-3 px-5 mb-3">
              <h3>Abhishek Singh {filteredArray[0].ratings}</h3>
              <p>
                These are my third shoes from Asian. The best and worth it shoes
                ever you will find These are my third shoes from Asian. The best and worth it shoes ever you will find
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
