import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Shopping from "./Components/Pages/Shopping/Shopping";
import Header from "./Components/Shared Resources/Header";
import SingleProduct from "./Components/Pages/Single Product/SingleProduct";
import Random2 from "./Random2";
import MyContext from "./Store/MyContext";
import Random from "./Random";
import Payment from "./Payment/Payment";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import HelpUs from "./Components/Pages/HelpUs/HelpUs";
import Random1 from "./Random1";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/cart" exact component={Random2} />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/helpus" exact component={HelpUs} />
          <Route path={"/product/:id"} exact component={SingleProduct} />
          {/* <Payment /> */}
        </Switch>
        <Random1 />
      </BrowserRouter>

      {/* <Switch>
          <Route path="/cart" component={Shopping} />
          <Route path="/" exact component={Home} />
        </Switch> */}
    </div>
  );
}

export default App;
