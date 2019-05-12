import axios from "axios";

class Tree {
    constructor() {
        this.treeContext = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
          });
        }
    
    getTRee(){
        return this.treeContext.get("/mytree")
        .then(response => response.data)
    }
}

const treeContext = new Tree();

export default treeContext;