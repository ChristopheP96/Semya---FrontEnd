import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  signup(user) {
    const { 
      email,
      password,
      firstName,
      gender, 
      dateOfBirth, 
      isDead, 
      mother, 
      father } = user;
    return this.auth
      .post("/auth/signup", { 
        email, 
        password, 
        firstName,
        })
      .then(({ data }) => { 
        this.auth.post("/mytree/newIndividual", { 
          firstName,
          gender, 
          dateOfBirth, 
          isDead, 
          mother, 
          father})
      } );
  }

  login(user) {
    const { email, password } = user;
    return this.auth
      .post("/auth/login", { email, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(response => response.data);
  }

  me() {
    return this.auth.get("/auth/me").then(response => response.data);
  }
}

const auth = new Auth();

export default auth;
