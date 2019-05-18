import axios from "axios";

class TreeService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    })
  }

  getIndividuals() {
    return this.axios.get("/mytree")
      .then(response => response)
      .catch(error => console.log(error))
  };
  
};

const treeService = new TreeService();

export default treeService;