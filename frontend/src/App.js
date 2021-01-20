import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent.js";
import ProductPage from "./components/ProductPage";
import "react-bootstrap";
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
