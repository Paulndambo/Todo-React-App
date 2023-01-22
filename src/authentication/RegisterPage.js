import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { base_url } from '../services/backend';


const RegisterPage = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);

    const navigate = useNavigate()

    const handleRegister = async(e) => {
        e.preventDefault();

        const newUser = {
            "password": password,
            "username": username,
            "email": email
        }
        console.log(newUser)

        let response = await fetch(`${base_url}auth/register/`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        
        let data = await response.json()
        console.log("Data: ",response)
        console.log(data)
        if(response.status === 201 || response.status === 200) {
            navigate("/register")
        } else {
            alert("Username with username already exists!!")
        }
    }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form onSubmit={handleRegister}>
            <h2 className="text-center">Register on TODO</h2>
            <hr />
            <div className='mb-3'>
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default RegisterPage