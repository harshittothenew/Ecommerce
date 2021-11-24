import React,{useState} from "react";
import ListingProduct from "./ListingProduct";
import MainSection from "./MainSection";
import styles from '../../../CSSFiles/Home/MainSection.module.css'
import { debounce } from "lodash";
import Card from "../../Shared Resources/Card";
import { CartState } from "../../../Store/MyContext";
import "../../../CSSFiles/Home/Home.css";


const getfiltereditems=(query,state) =>{
  if(!query) {
    return state;
  }
  return state.filter(e => e.title.includes(query))
}

const Home = () => {
  const {
    state: { state },
  } = CartState();
  const [query, setquery] = useState("");
  const filteredItems=getfiltereditems(query,state);
  const updateQuery = (e) => setquery(e?.target?.value);
  const debouncedOnChange = debounce(updateQuery, 1000);

  return (
    <div className="main-wrapper">
      <section className={`${styles.section}`}>
        {/* <div> */}
          <form className="d-flex w-50 py-5 mx-auto ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={debouncedOnChange}
            />
          </form>
        {/* </div> */}
      </section>

      <section className="container">
        <div className="wrapper py-4 d-flex flex-column align-items-center">
          <h1>Product Listing</h1>
          <p>lorem edq fe wref wr f rwf rwe f wef ew rfgt g tefd g5eyrtg</p>
        </div>
        <div>
          <div className="row">
            {filteredItems.map((prod) => {
              return (
                <div className="col-md-4 col-xs-12">
                  <Card
                  {...prod} key={prod.id} />
                </div>
              );
            })}
          </div>

        </div>
      </section>
      {/* <ListingProduct /> */}
      {/* <div>Hello,</div> */}
    </div>
  );
};

export default Home;
