"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
    if(loggedUser.email ==="bijay@example.com")
    {
        fetch("http://127.0.0.1:5000/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error(err));
    }
    console.log(loggedUser);

  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>

      <h2 style={{ marginTop: "30px" }}>All Users</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
        <thead>
          <tr>
            <th style={styles.thStyle}>Name</th>
            <th style={styles.thStyle}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td style={styles.tdStyle}>{u.name}</td>
              <td style={styles.tdStyle}>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button style={styles.buttonStyle}
        onClick={() => {
          window.location.href = "/dashboard";
        }} 
        >Dashboard</button>
    </div>
  );
}


const styles = {
    thStyle :{
        border: "1px solid #ccc",
        padding: "10px",
        textAlign: "left",
        backgroundColor: "#f0f0f0",
    },
    tdStyle :{
        border: "1px solid #ccc",
        padding: "10px",
    },
    buttonStyle : {
        backgroundColor: "#0070f3",
        color: "white",
        border: "none",
        borderRadius: "8px",
        padding: "10px 16px",
        cursor: "pointer",
    },
}


