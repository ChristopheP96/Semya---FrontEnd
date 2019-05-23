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

  createIndividual(individual){
    const {
      firstName,
      gender,
    } = individual;
      return this.axios.post(
        process.env.REACT_APP_API_URL + '/mytree/newIndividual', 
        { 
          firstName,
          gender,
        })
        .then(
          this.getIndividuals()
      )
      .catch(error => console.log(error))
  }

  getOneIndividual(individual){
    return this.axios.get("/mytree/:id")
    .then(response => response)
    .catch(error => console.log(error))
  }

  updateIndividual(individual){

  }
  
  deleteIndividual(individual){

  }
};

const treeService = new TreeService();

export default treeService;