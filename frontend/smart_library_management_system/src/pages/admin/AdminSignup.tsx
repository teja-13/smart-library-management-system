import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminSignup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      navigate("/admin/login");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Admin Sign Up</h2>

        <form className="auth-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Re-enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        <div className="switch-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/admin/login")}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
