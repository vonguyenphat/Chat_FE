import axios  from "../config/AxiosConfig";

export const registerNewUser = (name,username,password) => {
    return axios.post('/auth/register', {
        name,
        username,
        password
    });
}
export const loginUser = (data) => {
    return axios.post('/auth/login',data);
}

