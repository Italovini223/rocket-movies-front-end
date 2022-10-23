import { createContext, useContext } from "react";

const AuthContext = createContext({});

function AuthProvider({children}){
  <AuthContext.Provider value={{email:"x"}}>
    {children}
  </AuthContext.Provider>
}

function useAuth(){
  const context = useContext(a=AuthContext)

  return context
}

export {AuthProvider, useAuth}