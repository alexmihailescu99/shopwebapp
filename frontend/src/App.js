import React from "react";
import {
  BrowserRouter as Router,
  Route
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
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "mata",
      loggedIn: false
    }
    localStorage.setItem("loggedIn", "false");
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState != this.state) {
      localStorage.setItem("state", this.state);
    }
  }

  render() {
    //alert(this.state.username);
  return (
    <Router>
      <div className="container">
      <NavbarComponent userName = {this.state.username} logged={this.state.loggedIn}/>
      <br/>
      <Route
        exact path='/'
        render={(props) => (
        <ProductPage {...props} type="electronic" userName = {this.state.username} logged={this.state.loggedIn}/>
      )}    
      
      />
      <Route exact path="/add" component={AddProductPage} userName = {this.state.username} logged={this.state.loggedIn}/*onEnter={requireAuth}*//>
      <Route
        exact path='/login'
        render={(props) => (
        <LoginPage {...props} userChange={this.handleUserChange}/>
      )} 
      />

    <Route
        exact path='/logout'
        render={(props) => (
        <LogoutService {...props} />
      )} 
      />
      <Route exact path="/register" component ={RegisterPage} userName = {this.state.username} logged={this.state.loggedIn}/>
      <Route exact path="/laptops/edit/:name" component={EditProductPage} userName = {this.state.username} logged={this.state.loggedIn}/>
      <Route exact path="/smartphones/edit/:name" component={EditProductPage} userName = {this.state.username} logged={this.state.loggedIn}/*onEnter={requireAuth}*//>
      <Route exact path="/gamings/edit/:name" component={EditProductPage} userName = {this.state.username} logged={this.state.loggedIn}/*onEnter={requireAuth}*/ />
      <Route exact path="/pcparts/edit/:name" component={EditProductPage} userName = {this.state.username} logged={this.state.loggedIn}/*onEnter={requireAuth}*//>

      <Route
        exact path='/smartphones'
        render={(props) => (
        <ProductPage {...props} type="smartphone" userName = {this.state.username} logged={this.state.loggedIn}/>
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
        <SingleProductPage {...props} type="smartphone" userName = {this.state.username} logged={this.state.loggedIn}/>
      )}
      />
      

      <Route
        exact path='/laptops/:name'
        render={(props) => (
        <SingleProductPage {...props} type="laptop" userName = {this.state.username} logged={this.state.loggedIn}/>
      )}    
      />

       <Route
        exact path='/laptops'
        render={(props) => (
        <ProductPage {...props} type="laptop" userName = {this.state.username} logged={this.state.loggedIn}/>
      )}    
      />

      <Route
        exact path='/gaming/:name'
        render={(props) => (
        <SingleProductPage {...props} type="gaming" userName = {this.state.username} logged={this.state.loggedIn}/>
      )}    
      />

      <Route
        exact path='/pcparts/:name'
        render={(props) => (
        <SingleProductPage {...props} type="pcparts" userName = {this.state.username} logged={this.state.loggedIn}/>
      )}    
      />

      <Route
        exact path='/gaming'
        render={(props) => (
        <ProductPage {...props} type="gaming" userName = {this.state.username} logged={this.state.loggedIn}/>
      )}    
      />
      <FooterComponent/>
      </div>
    </Router>
  );
        }
}
export default App;
