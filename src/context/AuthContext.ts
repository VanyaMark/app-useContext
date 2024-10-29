import { createContext } from "react";
//Create Context

type authContextType = {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<authContextType | null>(null)

export default AuthContext