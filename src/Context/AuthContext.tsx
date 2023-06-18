import React, { createContext, useState } from "react";

interface AuthContextProps {
    username?: string,
    email?: string,
    token?: string,
    dateReg?: string,
    rank?: string,
    about?: string,
    isAuthenticated: boolean,
    login: ()=>void,
    logout: ()=>void
}

type Props = {
    children: React.ReactNode
  }

const AuthContext = React.createContext<AuthContextProps | undefined> (undefined)

export const AuthProvider = ( { children}:Props ) => {
    const [username, setUsername] = useState<string|undefined>('Forgefill');
    const [email, setEmail] = useState<string|undefined>('example@gmail.com');
    const [token, setToken] = useState<string| undefined>('token');
    const [dateReg, setDateRegister] = useState<string|undefined>('21 April 2023, 04:55')
    const [rank, setRank] = useState<string|undefined>('Reader');
    const [about, setAbout] = useState<string|undefined>('i am just a reader');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setUsername('Forgefill');
        setEmail('example@gmail.com');
        setToken('token');
        setDateRegister('21 April 2023, 04:55');
        setRank('Reader');
        setAbout('i am just a reader');
        setIsAuthenticated(true);
    };
  
    const logout = () => {
      setUsername(undefined);
      setEmail(undefined);
      setToken(undefined);
      setDateRegister(undefined);
      setRank(undefined);
      setAbout(undefined);
      setIsAuthenticated(false);
    };

  
    return (
      <AuthContext.Provider value={{ isAuthenticated,username, email, token, dateReg, rank, about,  login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthContext;