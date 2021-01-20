import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent.js";
import ProductPage from "./components/ProductPage";
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
      <Route exact path="/" component={ProductPage} />
      </div>
    </Router>
  );
}
export default App;
