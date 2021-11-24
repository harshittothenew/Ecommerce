// import React, { useState } from 'react';
// import styled from 'styled-components';
// const Tab = styled.button`
//   font-size: 20px;
//   padding: 10px 60px;
//   cursor: pointer;
//   opacity: 0.6;
//   background: white;
//   border: 0;
//   outline: 0;
//   ${({ active }) =>
//     active &&
//     `
//     border-bottom: 2px solid black;
//     opacity: 1;
//   `}
// `;
// const ButtonGroup = styled.div`
//   display: flex;
// `;
// const types = ['Cash', 'Credit Card', 'Bitcoin'];
// function TabGroup() {
//   const [active, setActive] = useState(types[0]);
//   return (
//     <>
//       <ButtonGroup>
//         {types.map(type => (
//           <Tab
//             key={type}
//             active={active === type}
//             onClick={() => setActive(type)}
//           >
//             {type}
//           </Tab>
//         ))}
//       </ButtonGroup>
//       <p />
//       <p> Your payment selection: {active} </p>
//     </>
//   );
// }
// // Usage
// export default TabGroup;

import { useState } from "react";
import "./App.css";
import Payment from "./Components/Pages/Shopping/PaymentOptions/Payment";
import Shopping from "./Components/Pages/Shopping/Shopping";
import ShoppingCart from "./Components/Pages/Shopping/ShoppingCart";
import ShoppingDetails from "./Components/Pages/Shopping/ShoppingDetails";
import Random from "./Random";
import Random1 from "./Random1";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // console.log('index',toggleState);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Shopping Cart
          </button>
        </div>



        {toggleState == 1 ? (
          <div className="col-md-4">
          <button
            className={`tabs ${toggleState === 2 ? "active-tabs" : ""}`}
            onClick={() => toggleTab(2)}
            disabled
          >
            Shopping Details
          </button>
          </div>
        ) : (
          <div className="col-md-4">
          <button
            className={`tabs ${toggleState === 2 ? "active-tabs" : ""}`}
            onClick={() => toggleTab(2)}
          >
            Shopping Details
          </button>
          </div>
        )}

        {toggleState === 2 ? (
          <div className="col-md-4">
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
            disabled
          >
            Payment Options
          </button>
          </div>
        ) : (
          <div className="col-md-4">
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
            disabled
          >
            Payment Options
          </button>
          </div>
        )}
      </div>

      <div className="content-tabs">
        {toggleState === 1 && (
          <div>
            <ShoppingCart setToggleState={setToggleState} />
          </div>
        )}
        {toggleState === 2 && (
          <div>
            <ShoppingDetails setToggleState={setToggleState} />
          </div>
        )}

        {toggleState === 3 && (
          <div>
            <Payment />
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
