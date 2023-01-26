import { createContext } from "react";
import { useState } from "react";

export const AuthConext = createContext();

export default function AuthConextProvider({ children }) {
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  const login = (data) => {
    setUser(data);
    if (data) {
      setIsAuth(true);
    }
  };

  const logOut = () => {
    setUser({});
    setIsAuth(false);
  };

  const userData = {
    user,
    isAuth,
    login,
    logOut,
  };

  return <AuthConext.Provider value={userData}>{children}</AuthConext.Provider>;
}
