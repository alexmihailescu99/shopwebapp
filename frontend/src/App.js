import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import ProductPage from "./components/ProductPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import EditProductPage from "./components/EditProductPage";
import AddProductPage from "./components/AddProductPage";
import SingleProductPage from "./components/SingleProductPage";
import FooterComponent from "./components/FooterComponent.js"
import "react-bootstrap";
import 'semantic-ui-css/semantic.min.css'
import "./App.css";
import LogoutService from "./components/LogoutService";
import UserPage from "./components/UserPage";
import 'mdbreact/dist/css/mdb.css'
import axios from "axios";
import NotAuthenticatedPage from "./components/NotAuthenticatedPage";
import NotAuthorizedPage from "./components/NotAuthorizedPage";
import ShoppingCartPage from "./components/ShoppingCartPage";
class App extends React.Component {
  constructor() {
    super();

  }
  
  // Check if session has expired
  componentDidMount() {
    //localStorage.setItem("role", "USER");
    document.title = "Shop Web App";
    axios.get("http://localhost:8080/user/checkExpired")
    .then(res => {
      // it means user is logged in
      //alert(localStorage.getItem("logged"));
      localStorage.setItem("logged", "true");
      localStorage.setItem("user", res.data.username);
      localStorage.setItem("role", res.data.authorities[0].authority.replace("ROLE_", ""))
    }
      )
    .catch(err => {
     // alert(localStorage.getItem("logged"));
      if (err.response.status === 401) {
        localStorage.setItem("user", "null");
        localStorage.setItem("logged", "false");
        localStorage.setItem("role", "ANON");
      }
    }
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState != this.state) {
      localStorage.setItem("state", this.state);
    }
  }

  //
  render() {
    //alert(this.state.username);
  return (
    <Router>
      <NavbarComponent/>
      <Switch>
      <div className="container">
      <br/>
      <Route
        exact path='/'
        render={(props) => (
        <ProductPage {...props} type="electronic"/>
      )}    
      
      />
      <Route exact path="/add" component={AddProductPage} />
      <Route
        exact path='/login'
        render={(props) => (
        <LoginPage {...props} />
      )} 
      />

    <Route
        exact path='/logout'
        render={(props) => (
        <LogoutService {...props} />
      )} 
      />
      <Route exact path="/register" component = {RegisterPage} />
      <Route exact path="/notAuthenticated" component={NotAuthenticatedPage} />
      <Route exact path="/notAuthorized" component={NotAuthorizedPage}/>
      <Route exact path="/laptops/edit/:name" component={EditProductPage} />
      <Route exact path="/smartphones/edit/:name" component={EditProductPage} />
      <Route exact path="/gamings/edit/:name" component={EditProductPage} />
      <Route exact path="/pcparts/edit/:name" component={EditProductPage} />
      <Route exact path="/user/:name/shoppingCart" component = {ShoppingCartPage} />

      <Route
        exact path='/smartphones'
        render={(props) => (
        <ProductPage {...props} type="smartphone" />
      )}
      />

      <Route
        exact path='/user'
        render={(props) => (
        <UserPage {...props} />
      )}
      />

      <Route
        exact path='/smartphones/:name'
        render={(props) => (
        <SingleProductPage {...props} type="smartphone" />
      )}
      />
      

      <Route
        exact path='/laptops/:name'
        render={(props) => (
        <SingleProductPage {...props} type="laptop" />
      )}    
      />

       <Route
        exact path='/laptops'
        render={(props) => (
        <ProductPage {...props} type="laptop" />
      )}    
      />

      <Route
        exact path='/gaming/:name'
        render={(props) => (
        <SingleProductPage {...props} type="gaming" />
      )}    
      />

      <Route
        exact path='/pcparts/:name'
        render={(props) => (
        <SingleProductPage {...props} type="pcparts" />
      )}    
      />

      <Route
        exact path='/gaming'
        render={(props) => (
        <ProductPage {...props} type="gaming" />
      )}    
      />
      </div>
      </Switch>
      <FooterComponent/>
    </Router>
  );
        }
}
export default App;
