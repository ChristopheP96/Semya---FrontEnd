import axios from "axios";

class Mytree {
    constructor() {
        this.mytree = axios.create({
            baseURL: "http://localhost:5000",
            withCredentials: true
        })
    }

    me() {
        return this.mytree.get("/mytree").then(response => response.data)
    }
}

const mytree = new Mytree();

export default mytree;