import { createContext, useContext, useState, useEffect} from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({children}){
  const[data, setData] = useState({})
  async function singIn({email, password}) {
    try {
      const response = await api.post("/sessions",{email, password})

      const {user, token} = response.data;

      localStorage.setItem("@rocketmovies:user",JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);


      api.defaults.headers.authorizations = `Bearer ${token}`;

      setData({user, token});

    }catch(error){
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não voi possível fazer login, tente novamente mais tarde!")
      }
    }
  }
  
  function SingOut() {
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");

    setData({});
  }

  async function updateProfile({user}) {
    try{
      await api.put("users", user)

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

      setData({user, token: data.token})

      alert("Perfil atualizado com sucesso!");
      
    } catch(error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar os dados!")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketmovies:user");
    const token = localStorage.getItem("@rocketmovies:token")

    if(user && token){
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  },[])
  return (
    <AuthContext.Provider value={{
      singIn, 
      SingOut,
      user: data.user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export {AuthProvider, useAuth}