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
let user = {
  username: "mata",
  loggedIn: false
}
const handleUserChange = (usrname, logged) => {
  user.username = usrname;
  user.loggedIn = logged;
}
function App() {
  return (
    <Router>
      <div className="container">
      <NavbarComponent user={user}/>
      <br/>

      <Route
        exact path='/'
        render={(props) => (
        <ProductPage {...props} type="electronic" user = {user}/>
      )}    
      
      />
      <Route exact path="/add" component={AddProductPage} user={user}/*onEnter={requireAuth}*//>
      <Route exact path="/login" component ={LoginPage} user={user}/>
      <Route exact path="/register" component ={RegisterPage} user={user}/>
      <Route exact path="/laptops/:name" component={SingleProductPage} user={user}/>
      <Route exact path="/smartphones/:name" component={SingleProductPage} user={user}/>
      <Route exact path="/gamings/:name" component={SingleProductPage} user={user}/>
      <Route exact path="/pcparts/:name" component={SingleProductPage} user={user}/>
      <Route exact path="/laptops/edit/:name" component={EditProductPage} user={user}/>
      <Route exact path="/smartphones/edit/:name" component={EditProductPage} user={user}/*onEnter={requireAuth}*//>
      <Route exact path="/gamings/edit/:name" component={EditProductPage} user={user}/*onEnter={requireAuth}*/ />
      <Route exact path="/pcparts/edit/:name" component={EditProductPage} user={user}/*onEnter={requireAuth}*//>
      <Route
        exact path='/smartphones'
        render={(props) => (
        <ProductPage {...props} type="smartphone" user={user}/>
      )}
      />

       <Route
        exact path='/laptops'
        render={(props) => (
        <ProductPage {...props} type="laptop" user={user}/>
      )}    
      />

      <Route
        exact path='/gaming'
        render={(props) => (
        <ProductPage {...props} type="gaming" user={user}/>
      )}    
      />
      <FooterComponent/>
      </div>
    </Router>
  );
}
export default App;
