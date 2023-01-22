import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { base_url } from "../services/backend";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setLoading] = useState(true);

  let loginUser = async (e) => {
    e.preventDefault();

    let response = await fetch(`${base_url}auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    console.log("Data", data);
    console.log("Response", response);
    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwt_decode(data.token));
      localStorage.setItem("authTokens", JSON.stringify(data));
      window.location.replace("/");
    } else {
      alert("Wrong Credentials");
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("authTokens");
    window.location.replace("/");
  };

  /*
  const updateUser = async () => {
    console.log("Update Token Called");
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        refresh: authToken.refresh,
      }),
    });
    let data = await response.json();
    console.log("Data", data);
    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      loginUser();
    }
  };

  
  useEffect(() => {
    let fourMinutes = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authToken) {
        updateUser();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authToken, loading]);
  */

  let contextData = {
    user: user,
    authToken: authToken,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
