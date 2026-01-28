import { useState } from "react";

const StudentSignupRequest = () => {
  const [status, setStatus] = useState<"idle" | "pending">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("pending");
  };

  return (
    <main className="auth-container">
      <div className="auth-card">
        <h2>Student Sign-Up Request</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="file" />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Re-enter Password" required />

          <button type="submit">Submit Request</button>
        </form>

        {status === "pending" && (
          <p className="switch-text">
            Status: <span>Pending Approval</span>
          </p>
        )}
      </div>
    </main>
  );
};

export default StudentSignupRequest;