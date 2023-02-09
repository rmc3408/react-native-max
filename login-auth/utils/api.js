import axios from "axios"

const base_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const API_KEY = 'AIzaSyDxj-s6cGwHaLCtCwPAQ5Rol7ni9eb8SLU';
const afterNameFunction = '?key=' + API_KEY;


export async function signUpEndpoint(data) {
  return await axios.post(base_URL + 'signUp' + afterNameFunction, {
    email: data.email,
    password: data.password,
    returnSecureToken: true,
  })
}

export async function signInEndpoint(data) {
  return await axios.post(base_URL + 'signInWithPassword' + afterNameFunction, {
    email: data.email,
    password: data.password,
    returnSecureToken: true,
  })
}