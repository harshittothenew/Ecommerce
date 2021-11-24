// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { BsDash, BsPlus } from "react-icons/bs";
// import { CartState } from "./Store/MyContext";
// import "./Random.css";

// const Random = () => {
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
//           {cart.some((p) => p.id === filteredArray.id) ? (
//               <button className="btn-default"
//                 variant="danger"
//                 onClick={() =>
//                   dispatch({
//                     type: "REMOVE_FROM_CART",
//                     payload: filteredArray,
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
//                     payload: filteredArray,
//                   })
//                 }
//               >
//                 Add to cart
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

// export default Random;

import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const Random = () => {
  const [details, setDetails] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputFocus = (e) => {
    setDetails({ focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({ [name]: value });
  };
  return (
    <>
      <div id="PaymentForm">
        <Cards
          cvc={details.cvc}
          expiry={details.expiry}
          focused={details.focus}
          name={details.name}
          number={details.number}
        />
        <form>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="number"
            placeholder="Date"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          ...
        </form>
      </div>
    </>
  );
};

export default Random;
// export default class PaymentForm extends React.Component {
//   state = {
//     cvc: "",
//     expiry: "",
//     focus: "",
//     name: "",
//     number: "",
//   };

//   handleInputFocus = (e) => {
//     this.setState({ focus: e.target.name });
//   };

//   handleInputChange = (e) => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div id="PaymentForm">
//         <Cards
//           cvc={this.state.cvc}
//           expiry={this.state.expiry}
//           focused={this.state.focus}
//           name={this.state.name}
//           number={this.state.number}
//         />
//         <form>
//           <input
//             type="tel"
//             name="number"
//             placeholder="Card Number"
//             onChange={this.handleInputChange}
//             onFocus={this.handleInputFocus}
//           />
//           ...
//         </form>
//       </div>
//     );
//   }
// }
