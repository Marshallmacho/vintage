import sendFormApi from './modules/sendFormApi';


class Api {
    constructor(modules) {
        for (let name in modules) {
            let module = modules[name];
            this[name] = module;
        }
    }
}

let api = new Api({
    sendFormApi: sendFormApi,
});

export default api;



