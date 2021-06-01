import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import { AccountBox } from './Unauthenticated/index';
import { IsUserLoggedIn } from './services/AuthService'
import { HomePage } from "./pages/home";

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact
            render={() => (
              IsUserLoggedIn()
                ? <Redirect to='/home'></Redirect>
                : <div>
                  <AccountBox></AccountBox>
                </div>
            )}
          />
          <Route path="/home" exact
            render={() => (
              IsUserLoggedIn()
                ?  <HomePage></HomePage>
                : <Redirect to='/login'></Redirect>
            )}
          />
          <Route path="/" exact
            render={() => (
              IsUserLoggedIn()
                ? <Redirect to='/home'></Redirect>
                : <Redirect to='/login'></Redirect>
            )} />
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
