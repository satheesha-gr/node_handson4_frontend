import React, { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

export const Register = (props) => {
    const nav = useNavigate()
    const API_BASE_URL = 'https://nodehandson4backend.onrender.com'

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhone] = useState('');
  
    const handleRegister = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(`${API_BASE_URL}/register`, {
          name,
          phoneNumber,
          email,
          password
        });
  
        if (response.status === 201) {
          alert('Registration successful!');
          setName('');
          setEmail('');
          setPassword('');
          setPhone('');
          nav('/')
        }
      } catch (error) {
        console.error(error);
        alert('Registration failed.');
      }
    };  

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleRegister}>
            <label htmlFor="name">Name</label>
            <input
                placeholder="Enter Your Fullname"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label htmlFor="name">Phone Number</label>
            <input
                placeholder="Enter Phone No"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
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
            <button type="submit">Register</button>
        </form>
        <Link to={'/'}><button className="link-btn">Already have an account? Login here.</button></Link>
    </div>
    )
}

export default Register
