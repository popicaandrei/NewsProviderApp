import axios from 'axios'
import jwt_decode from 'jwt-decode';

const basePath = "http://localhost:3001/"

export async function Login(email, password) {
    let path = basePath + "api/user/login";
    try {
        let response = await axios.post(path, {
            email: email,
            password: password
        });
        localStorage.setItem("auth-token", response.data);
        return true;
    }
    catch (e) {
        return false;
    };

}

export async function Register(email, password, username) {
    let path = basePath + "api/user/register";
    try {
        let response = await axios.post(path, {
            name: username,
            email: email,
            password: password
        });
        return true;
    }
    catch (e) {
        return false;
    };

}

export function IsUserLoggedIn() {
    let jwt = localStorage.getItem("auth-token");
    if (jwt === null)
        return false;
    return true;
}

export function GetUserName() {
    let jwt = DecodeJwt()
    return jwt.name;
}

export function GetUserId() {
    let jwt = DecodeJwt()
    return jwt._id;
}

export function GetEmail() {
    let jwt = DecodeJwt()
    return jwt.email;
}

export function DecodeJwt() {
    return jwt_decode(localStorage.getItem("auth-token"));
}