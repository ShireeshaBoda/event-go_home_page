//import Herocarousal from "./components/HeroCarousal";

import Home from "./Pages/Home_Page";

//import Navbar from "./components/Navbar";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { Routes } from "react-router-dom";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Login from "./components/loginpage";
import Signup from "./components/signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/signup'>
          <Signup/>
        </Route>
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
