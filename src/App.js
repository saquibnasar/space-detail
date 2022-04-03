import HeaderContent from "./component/HeaderContent";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Destination from "./component/Destination";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HeaderContent />
          </Route>
          <Route exact path="/destination">
            <Destination />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
