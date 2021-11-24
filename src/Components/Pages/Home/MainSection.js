import React from "react";
import styles from '../../../CSSFiles/Home/MainSection.module.css'


const MainSection = () => {
  return (
    <>
      <section className={`${styles.section}`}>
        {/* <div> */}
          <form className="d-flex w-50 py-5 mx-auto ">
            <input 
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        {/* </div> */}
      </section>
    </>
  );
};

export default MainSection;
