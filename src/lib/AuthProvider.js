import React, { Component } from "react";
import auth from "./auth-service";
const { Consumer, Provider } = React.createContext();

export { Consumer };

export const withAuth = Comp => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer>
          {authStore => {
            return (
              <Comp
                login={authStore.login}
                signup={authStore.signup}
                user={authStore.user}
                logout={authStore.logout}
                isLoggedin={authStore.isLoggedin}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

class AuthProvider extends Component {
  state = {
    isLoggedin: false,
    user: null,
    isLoading: true
  };

  componentDidMount() {
    auth
      .me()
      .then(user => {
        this.setState({
          isLoggedin: true,
          user,
          isLoading: false
        });
      })
      .catch(() => {
        this.setState({
          isLoggedin: false,
          user: null,
          isLoading: false
        });
      });
  }

  signup = user => {
    const { 
      email, 
      password, 
      firstName, 
      gender, 
      dateOfBirth, 
      isDead } = user;
    auth
      .signup({ 
        email, 
        password,
        firstName, 
        gender, 
        dateOfBirth, 
        isDead })
      .then(user => {
        this.setState({
          isLoggedin: true,
          user
        });
      })
      .catch(({  
        email: error
        }) => {
        this.setState({
          message: error.statusMessage
        });
      });
  };

  login = user => {
    const { email, password } = user;
    auth
      .login({ email, password })
      .then(user => {
        this.setState({
          isLoggedin: true,
          user
        });
      })
      .catch(() => {});
  };

  logout = () => {
    auth
      .logout()
      .then(() => {
        this.setState({
          isLoggedin: false,
          user: null
        });
      })
      .catch(() => {});
  };
  render() {
    const { isLoading, isLoggedin, user } = this.state;
    return isLoading ? (
      <div>Loading</div>
    ) : (
      <Provider
        value={{
          isLoggedin,
          user,
          login: this.login,
          logout: this.logout,
          signup: this.signup
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default AuthProvider;
