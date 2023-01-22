import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { base_url } from "../services/backend";
//import jwt_decode from "jwt-decode";



const Login = () => {
    //const [user, setUser] = useState(() => localStorage.getItem("AuthTokens") 
    //? jwt_decode(localStorage.getItem("AuthTokens")) : null);
    //const [authToken, setAuthToken] = useState(() => localStorage.getItem("AuthTokens") ? JSON.parse(localStorage.getItem("AuthTokens")) : null);

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const navigate = useNavigate();


    const handleLogin = async(e) => {
        e.preventDefault();

        const newUser = {
            "username": username,
            "password": password
        }

        let response = await fetch(`${base_url}auth/login/`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })

        let data = await response.json()
        console.log("Data: ", data)
        console.log("Response: ", response)

        if (response.status === 200 || response.status === 201) {
            //setAuthToken(data);
            //setUser(jwt_decode(data.token))
            let token = data.token 
            console.log("Token: ", token)
            navigate("/")
        } else {
            alert("Invalid Username or Password!!")
        }

        console.log(newUser);

    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center mt-2">
              <input type="submit" className="btn btn-success" />
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Login