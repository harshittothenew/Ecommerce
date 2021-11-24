import React, { useState,useContext } from "react";
import Card from "../../Shared Resources/Card";
import Data from "../../../Constant/Data";
import { CartState } from "../../../Store/MyContext";
// import { debounce } from "lodash";


// const getfiltereditems=(query,state) =>{
//   if(!query) {
//     return state;
//   }
//   return state.filter(e => e.title.includes(query))
// }

const ListingProduct = (props) => {
  // console.log(props);
  // const [query, setquery] = useState("");
  const {
    state: { state },
  } = CartState();
  // const filteredItems=getfiltereditems(query,state);
  // const updateQuery = (e) => setquery(e?.target?.value);
  // const debouncedOnChange = debounce(updateQuery, 200);
  return (
    <>
      <section className="container">
        <div className="wrapper py-4 d-flex flex-column align-items-center">
          <h1>Product Listing</h1>
          <p>lorem edq fe wref wr f rwf rwe f wef ew rfgt g tefd g5eyrtg</p>
        </div>
        <div>
          <div className="row">
            {state.map((prod) => {
              return (
                <div className="col-md-4 col-xs-12">
                  <Card {...prod} key={prod.id} />
                </div>
              );
            })}
          </div>

          {/* <div className="row">
            <div className="col-md-4 ">
              <Card />
            </div>
            <div className="col-md-4 ">
              <Card />
            </div>
            <div className="col-md-4 col-xs-12">
              <Card />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ListingProduct;
