import { createContext, useState, useLayoutEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthCtx = createContext({
  isRegistered: false,
  token: undefined,
  login: () => {},
  saveToken: (token) => {},
  logout: () => {},
})

export function AuthCtxProvider({ children }) {
  const [ isRegistered, setIsRegistered ] = useState(false);
  const [token, setToken] = useState(undefined)
  
  function login() {
    setIsRegistered(true);
  }

  function saveToken(value) {
    setToken(value);
    AsyncStorage.setItem('token', value);
  }

  function logout() {
    setIsRegistered(false);
    setToken(null);
    AsyncStorage.removeItem('token');
  }

  const valueCtx = {
    token: token,
    isRegistered: isRegistered,
    login: login,
    saveToken: saveToken,
    logout: logout,
  }

  return <AuthCtx.Provider value={valueCtx}>{children}</AuthCtx.Provider>
}