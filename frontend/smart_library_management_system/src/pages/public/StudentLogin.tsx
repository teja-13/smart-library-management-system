import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    navigate("/student/dashboard");
  };

  return (
    <main className="auth-container">
      <div className="auth-card">
        <h2>Student Login</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <p className="switch-text">
          New student?{" "}
          <Link to="/request-signup">
            <span>Request Sign-Up</span>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default StudentLogin;