import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard, Stock, Store, Login, User, Log } from "./pages/index";
import Transaction from './pages/Transaction'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { keepLoginAction, logoutAction } from './store/action/Login-action'
// import {Container} from 'react-bootstrap'

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
        <div className="side-bar">
          <Navbar />
        </div>
        {/* <Container> */}
        <div className="r-side">
          <div className="r-side-header">
            <div className='info-header'>Admin Dashboard</div>
            <div className='login-btn-wrp'>
              {
                auth.loginStatus ?
                  <Link to="/login">
                    <div className="logout-btn">
                      <button className='delete-btn' onClick={onLogoutClick}>Logout</button>
                    </div>
                  </Link>
                  :
                  <Link to="/login">
                    <div className="logout-btn">
                      <button className='add-btn'>Login</button>
                    </div>
                  </Link>
              }
            </div>

          </div>
          <div className="content" >
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
        {/* </Container> */}
      </div>
    </Router>
  );
}

export default App;
