import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
    const nav = useNavigate()
    const handleLogout = () => {
      return nav('/') 
    }
  
    return (
      <div>
        <h1>Welcome to the Home Page!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
}
