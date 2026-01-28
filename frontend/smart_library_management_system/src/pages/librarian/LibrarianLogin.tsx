import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LibrarianLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      navigate("/librarian/dashboard");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Librarian Login</h2>

        <form className="auth-form" onSubmit={handleLogin}>
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

        <div className="switch-text">
          Don't have an account?{" "}
          <span onClick={() => navigate("/librarian/request-signup")}>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default LibrarianLogin;
