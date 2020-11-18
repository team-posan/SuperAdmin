import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard, Stock, Store, Login, User, Log } from "./pages/index";
import Transaction from './pages/Transaction'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { keepLoginAction, logoutAction } from './store/action/Login-action'

function App() {

  const dispatch = useDispatch()

  const auth = useSelector(state => state.loginReducer)

  useEffect(() => {
    const access_token = localStorage.getItem('access_token')
    if (access_token) {
      dispatch(keepLoginAction())
    }
  }, [])

  const onLogoutClick = () => {
    dispatch(logoutAction())
  }

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="r-side">
          <div className="r-side-header">
            {
              auth.loginStatus ?
                <Link to="/login">
                  <div className="logout-btn">
                    <button className='btn btn-info' onClick={onLogoutClick}>Logout</button>
                  </div>
                </Link>
                :
                <Link to="/login">
                  <div className="logout-btn">
                    <button className='btn btn-info'>Login</button>
                  </div>
                </Link>
            }
          </div>
          <div className="content mt-5" >
            <Switch>
              <Route path="/:StoreId/transaction" component={Transaction} />
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/stock" component={Stock} />
              <Route exact path="/store" component={Store} />
              <Route exact path="/login" exact component={Login} />
              <Route exact path="/user" component={User} />
              <Route exact path="/log" component={Log} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
