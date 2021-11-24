import React,{useState} from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CartState } from "../../../Store/MyContext";

const SCard = (props) => {
  
  const [qty, setqty] = useState("1");
  const {
    state: { cart },
    dispatch,
  } = CartState();
  
  const handleClick = () =>{
    // debugger
    console.log('handleclick');
    dispatch({
      type: "INCREMENT_ITEM",
      payload: props.prod,
    })
  }
  console.log('rendering number',props.prod);
  return (
    <>
      <div className="d-flex">
        {props.prod && <img src={props.prod.image} alt="Shopping Image" />}
        <div className="d-flex flex-column">
          {props.prod && <h2>{props.prod.title}</h2>}
          {props.prod && (
            <p>
              <small>{props.prod.description}</small>
            </p>
          )}
          {props.prod && <p>{props.prod.price}</p>}
        </div>

        {/* <select value={qty} onChange={(e) => {setqty(e.target.value)}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> */}
        <div>
          <AiOutlinePlus 
          onClick={ handleClick}
          
          />
          <span>
             
            <input type="text" placeholder="1" value={props.prod.quantity} />
          </span>
          <AiOutlineMinus 
           onClick={() =>
            dispatch({
              type: "DECREMENT_ITEM",
              payload: props.prod,
            })
          }/>
        </div>
        {/* <div className="qty-wrapper">ubiub</div> */}
      </div>
    </>
  );
};

export default SCard;
