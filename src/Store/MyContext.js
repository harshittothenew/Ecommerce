import React, { createContext, useContext, useReducer } from "react";
import Data from "../Constant/Data";

export const Cart = createContext();

const MyContext = (props) => {
  const product = Data.products;

  const cartReducer = (state, action) => {
    console.log("my");
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, { ...action.payload }],
        };

      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((c) => c.id !== action.payload.id),
        };

      case "INCREMENT_ITEM":
        console.log('top');
        return {
          ...state,
          cart: state.cart.map((c,index) => {
            // debugger
            console.log("state cart", state.cart);
            console.log('index',index);
            if (c.id === action.payload.id) {
              console.log("c.qty before", c.quantity, action.payload.quantity);
              //  console.log('c.qty',c.quantity);
              c.quantity = action.payload.quantity + 1;
              console.log("c.qty after", c.quantity, action.payload.quantity);
            }
            //  debugger
            return c;
          }),
        };

      case "DECREMENT_ITEM":
        return {
          ...state,
          cart: state.cart.filter((c) =>
            c.id === action.payload.id
              ? (c.quantity = action.payload.quantity - 1)
              : c.quantity
          ),
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(cartReducer, {
    state: product,
    cart: [],
  });

  return (
    <Cart.Provider value={{ state, dispatch }}>{props.children}</Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default MyContext;

// import React, { useState } from "react";

// const AuthContext = React.createContext();

// export const AuthContextProvider = (props) => {

//   const cartReducer = (state, action) => {
//     switch (action.type) {
//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(cartReducer, {
//     state: product,
//     cart: [],
//   });
//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
