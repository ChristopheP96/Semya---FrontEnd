import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import WelcomePage from "./pages/welcomePage";
import Profile from "./pages/Profile";
import FindMatches from "./pages/FindMatches";
import FindOtherUsers from "./pages/FindOtherUsers";
import MyTree from "./pages/MyTree";


import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="App-container">
          <Navbar />
          <Switch>
            <AnonRoute exact path="/" component={WelcomePage} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute path="/home/myprofile" component={Profile} />
            <PrivateRoute path="/home/findMatches" component={FindMatches} />
            <PrivateRoute path="/home/otherUsers" component={FindOtherUsers} />
            <PrivateRoute path="/mytree" component={MyTree} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
