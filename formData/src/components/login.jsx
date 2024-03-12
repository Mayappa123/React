import React, { useState } from "react";
import "../assets/css/login.css";

export default function Login() {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type":"application/json"
      }
    });
    const data = await response.JSON();
    console.log(data);
    setForm({});
  };

  return (
    <div className="formData">
      <form method="get" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={form.username || ""}
          onChange={handleForm}
        />{" "}
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={form.password || ""}
          onChange={handleForm}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
