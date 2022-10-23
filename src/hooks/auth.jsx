import { createContext } from "react";

const AuthContext = createContext({});

function AuthProvider({children}){
  <AuthContext.Provider value={{email:"x"}}>
    {children}
  </AuthContext.Provider>
}

export {AuthProvider}