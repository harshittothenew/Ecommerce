import React from "react";
import { CartState } from "../../Store/MyContext";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
const Card = (props) => {
  const history = useHistory();
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <Link to={"/product/" + props.id}>
            <div className="col-md-4" >
              <img
                src={props.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </Link>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small>{props.ratings}</small>
              </p>
              <p className="card-text">
                <small>{props.price}</small>
              </p>
            </div>

            {cart.some((p) => p.id === props.id) ? (
              <button
                variant="danger"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: props,
                  })
                }
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: props,
                  })
                }
              >
                Add to cart
                {/* {!prod.inStock ? "Out of Stock" : "Add to Cart"} */}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
