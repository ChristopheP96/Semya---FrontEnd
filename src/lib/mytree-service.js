import axios from "axios";

class Mytree {
    constructor() {
        this.mytree = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        })
    }

    me() {
        return this.mytree.get("/mytree").then(response => response.data)
    }
}

const mytree = new Mytree();

export default mytree;