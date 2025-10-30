"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get logged-in user from localStorage
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if(!loggedUser){
        window.location.href = "/login";
        return;
    }
    setUser(loggedUser);

  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p> <br/>

      <button
        style={buttonStyle}
        onClick={() => {
          localStorage.removeItem("user");

          window.location.href = "/login";
        }}>LogOUT</button>
        <br/><br/>

      {user.email === "bijay@example.com" && (
      <button style={buttonStyle}
        onClick={() => {
          window.location.href = "/users";
        }} 
        >AllUser</button>
      )}
    </div>
  );
}


const buttonStyle = {
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "10px 16px",
  cursor: "pointer",
  
}