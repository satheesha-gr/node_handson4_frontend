import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  
  const navigate = useNavigate()
  const API_BASE_URL = 'https://nodehandson4backend.onrender.com/login'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json(); 
  
      if (response.ok) {
        setLoggedIn(true);
        navigate('/home');
        setAlertMsg(data.message);
      } else {
        setLoggedIn(false);
        setAlertMsg(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoggedIn(false);
      setAlertMsg('An error occurred during login.');
    }
  };

    return (
      <div>
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
              {alertMsg && <p>{alertMsg}</p>}
                <label htmlFor="email">Email</label>
                <input
                    placeholder="Enter Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    placeholder="Enter Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button onClick={handleLogin}>Login</button>
            </form>
            <Link to={'/register'}><button className="link-btn">Don't have an account? Register here.</button></Link>
        </div>
      </div>
    )
}

export default Login