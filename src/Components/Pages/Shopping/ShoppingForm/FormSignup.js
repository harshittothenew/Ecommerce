import React from "react";
import validate from './validateInfo';
import useForm from './useForm';
 
const FormSignup = ({ submitForm}) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );
    console.log(errors);
  
  return (
    <div className="ps-5">
      <h1>Shipping Details</h1>
      <hr />
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label for="firstname" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control" id="firstname" name='username' value={values.username} onChange={handleChange}/>
          {errors.username && <p>{errors.username}</p>}
           </div>
        <div className="col-md-6">
          <label for="lastname" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="lastname" name='username1' value={values.username1} onChange={handleChange} />
          {errors.username1 && <p>{errors.username1}</p>}
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name='username2' value={values.username2} onChange={handleChange}
          />
           {errors.username2 && <p>{errors.username2}</p>}
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            name='username3' value={values.username3} onChange={handleChange}
          />
           {errors.username3 && <p>{errors.username3}</p>}
        </div>
        <div className="col-md-6">
          <label for="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
          <option selected active>Uttar Pradesh</option>
          <option selected>Haryana</option>
          <option selected>Punjab</option>
          <option selected>Delhi</option>
          </select>
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity"  name='username4' value={values.username4} onChange={handleChange} />
          {errors.username4 && <p>{errors.username4}</p>}
        </div>
        <div className="col-md-6">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip"  name='number1' value={values.number1} onChange={handleChange}/>
          {errors.number1 && <p>{errors.number1}</p>}
        </div>
        <div className="col-md-6">
          <label for="mobile" className="form-label">
            Mobile Number
          </label>
          <input type="number" className="form-control" id="mobile" name='number2' value={values.number2} onChange={handleChange} />
          {errors.number2 && <p>{errors.number2}</p>}
        </div>
        <hr />
        <div className="col-md-5 border border-dark">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              <h5>Free Shipping</h5>
              <p>Between 2-5 Working Days</p>
            </label>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-5 border border-dark">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              <h5>Next day Delievery</h5>
              <p>24 hours from checkout</p>
            </label>
          </div>
        </div>
 
 
        <div className="col-12">
          <button type="submit" className="btn btn-primary" 
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
 
export default FormSignup;
 
 
