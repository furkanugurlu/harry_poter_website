import axios from "axios";

export function api() {
    return axios.create({
        baseURL: "https://hp-api.herokuapp.com/api/",
    })
}