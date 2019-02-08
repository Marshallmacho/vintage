import request from '../request';

export default {
    send(params) {
        let data = {
            name: params.name,
            phone: params.phone,
            email: params.email,
            police: params.police
        };
        return request.post('http://httpbin.org/post', data)
    }
}
