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
import "react-bootstrap";
import 'semantic-ui-css/semantic.min.css'
import background from "./background.jpg";
let styles={
  backgroundImage: {background},
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}
function App() {
  return (
    <Router>
      <div className="container">
      <NavbarComponent />
      <br/>

      <Route
        exact path='/'
        render={(props) => (
        <ProductPage {...props} type="electronic" />
      )}    
      />
      <Route exact path="/add" component={AddProductPage}/>
      <Route exact path="/login" component ={LoginPage}/>
      <Route exact path="/register" component ={RegisterPage}/>
      <Route exact path="/laptops/edit/:name" component={EditProductPage}/>
      <Route exact path="/smartphones/edit/:name" component={EditProductPage}/>
      <Route exact path="/gamings/edit/:name" component={EditProductPage}/>
      <Route exact path="/pcparts/edit/:name" component={EditProductPage}/>
      <Route
        exact path='/smartphones'
        render={(props) => (
        <ProductPage {...props} type="smartphone" />
      )}
      />

       <Route
        exact path='/laptops'
        render={(props) => (
        <ProductPage {...props} type="laptop" />
      )}    
      />

<Route
        exact path='/gaming'
        render={(props) => (
        <ProductPage {...props} type="gaming" />
      )}    
      />

      </div>
    </Router>
  );
}
export default App;
