import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LibrarianSignupRequest = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      navigate("/librarian/login");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Librarian Sign Up Request</h2>

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
            type="text"
            placeholder="Photo URL (optional)"
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
          <button type="submit">Submit Request</button>
        </form>

        <div className="switch-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/librarian/login")}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default LibrarianSignupRequest;
