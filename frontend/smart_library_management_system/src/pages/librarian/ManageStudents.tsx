import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageStudents = () => {
  const navigate = useNavigate();
  const [pendingStudents] = useState([
    { id: 1, name: "Ravi Kumar", email: "ravi@example.com" },
    { id: 2, name: "Priya Sharma", email: "priya@example.com" },
  ]);

  const [activeStudents] = useState([
    { id: 101, name: "Amit Singh", email: "amit@example.com" },
    { id: 102, name: "Neha Patel", email: "neha@example.com" },
    { id: 103, name: "Vikram Reddy", email: "vikram@example.com" },
  ]);

  return (
    <div className="my-books-container">
      <button className="back-button" onClick={() => navigate(-1)}>←</button>
      
      <div className="my-books-header">
        <h1>Manage Students</h1>
      </div>

      {/* Pending Students */}
      <div style={{ marginBottom: "32px" }}>
        <h2 style={{ color: "var(--gold-main)", marginBottom: "16px", textAlign: "left" }}>
          ⏳ Pending Approvals ({pendingStudents.length})
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {pendingStudents.map((student) => (
            <div
              key={student.id}
              style={{
                background: "linear-gradient(135deg, var(--black-card), var(--black-secondary))",
                border: "1px solid var(--border-gold)",
                borderRadius: "8px",
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <h3 style={{ margin: "0 0 4px 0", color: "var(--text-primary)" }}>{student.name}</h3>
                <p style={{ margin: "0", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  {student.email}
                </p>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    border: "none",
                    background: "linear-gradient(135deg, var(--gold-main), var(--gold-soft))",
                    color: "var(--black-main)",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                >
                  ✓ Accept
                </button>
                <button
                  style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    border: "none",
                    background: "#d9534f",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                >
                  ✗ Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Students */}
      <div>
        <h2 style={{ color: "var(--gold-main)", marginBottom: "16px", textAlign: "left" }}>
          ✓ Active Students ({activeStudents.length})
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {activeStudents.map((student) => (
            <div
              key={student.id}
              style={{
                background: "linear-gradient(135deg, var(--black-card), var(--black-secondary))",
                border: "1px solid var(--border-gold)",
                borderRadius: "8px",
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <h3 style={{ margin: "0 0 4px 0", color: "var(--text-primary)" }}>{student.name}</h3>
                <p style={{ margin: "0", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  {student.email}
                </p>
              </div>
              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: "6px",
                  border: "none",
                  background: "#d9534f",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                🗑️ Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;
