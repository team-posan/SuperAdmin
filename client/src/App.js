import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard, Stock, Store, Login } from "./pages/index";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="r-side">
          <div className="r-side-header">
            Header
            <Link to="/login">
              <div className="logout-btn">
                <button>Logout</button>
              </div>
            </Link>
          </div>
          <div className="content">
            <Switch>
              <Route path="/Dashboard" component={Dashboard} />
              <Route path="/stock" component={Stock} />
              <Route path="/store" component={Store} />
              <Route path="/login" exact component={Login} />
              <Route path="/log" component={Store} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
