import React, {  useState } from "react";
import { User, users } from "../httpRequests/testData";

interface AuthContextProps {
    username?: string,
    email?: string,
    token?: string,
    dateReg?: string,
    rank?: string,
    about?: string,
    isAuthenticated: boolean,
    isAdmin?: boolean,
    login: (email: string, password:string )=>void,
    logout: ()=>void
}

type Props = {
    children: React.ReactNode
  }

const AuthContext = React.createContext<AuthContextProps | undefined> (undefined)

export const AuthProvider = ( { children}:Props ) => {
    const [username, setUsername] = useState<string|undefined>();
    const [email, setEmail] = useState<string|undefined>();
    const [token, setToken] = useState<string| undefined>();
    const [dateReg, setDateRegister] = useState<string|undefined>()
    const [rank, setRank] = useState<string|undefined>();
    const [about, setAbout] = useState<string|undefined>();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState<boolean|undefined>();

    const login = (email: string, password:string ) => {
      let userId:number = users.findIndex(x=>x.email == email && x.password == password);

      if(userId == -1){
        return;
      }
      else{
        let user:User = users[userId];
      setUsername(user.username);
      setEmail(user.email);
      setToken('token');
      setDateRegister(user.registered);
      setAbout(user.about);
      setIsAuthenticated(true);
      if(user.role == 'admin'){
        setIsAdmin(true);
      }
      setRank(user.role);
      }
    };
  
    const logout = () => {
      setUsername(undefined);
      setEmail(undefined);
      setToken(undefined);
      setDateRegister(undefined);
      setRank(undefined);
      setAbout(undefined);
      setIsAuthenticated(false);
      setIsAdmin(undefined);
    };

  
    return (
      <AuthContext.Provider value={{ isAuthenticated,username, email, token, dateReg, rank, about, isAdmin,  login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthContext;