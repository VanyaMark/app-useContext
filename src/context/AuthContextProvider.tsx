import React from 'react'

import { createContext, useContext, useState } from "react";
//Create Context

type authContextType = {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

type AuthContextProviderProps = {
    children: React.ReactNode;
}

export const AuthContext = createContext<authContextType | null>(null)

export function AuthContextProvider({children} : AuthContextProviderProps) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const authObj = {
      isLoggedIn,
      login,
      logout,
    };
  
    function login() {
      console.log("You are logged in!");
      setIsLoggedIn(true);
    }
  
    function logout() {
      console.log("You are logged out!");
      setIsLoggedIn(false);
    }

  return (
    <AuthContext.Provider value={authObj} >{ children }</AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext);
