import axios from "axios";

class request {

    static post(route, data) {
        return new Promise(function (resolve, reject) {
            return axios.post(route, data).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    }
}

export default request;

