import BmiCalc from "./components/BmiCalc";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BmiInfo from "./components/BmiInfo";



function App() {
  return (
    <Router>
    <Navbar />
      <Switch>
        <Route path="/info">
          <BmiInfo />
        </Route>
          <BmiCalc />
      </Switch>
    </Router>
  );
}

export default App;
