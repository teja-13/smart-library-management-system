import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("students");

  const [students] = useState([
    { id: 1, name: "Ravi Kumar", email: "ravi@example.com", status: "active" },
    { id: 2, name: "Priya Sharma", email: "priya@example.com", status: "active" },
    { id: 3, name: "Amit Singh", email: "amit@example.com", status: "inactive" },
  ]);

  const [librarians] = useState([
    { id: 101, name: "John Doe", email: "john@example.com", status: "active" },
    { id: 102, name: "Sarah Johnson", email: "sarah@example.com", status: "active" },
  ]);

  return (
    <div className="my-books-container">
      <button className="back-button" onClick={() => navigate(-1)}>←</button>

      <div className="my-books-header">
        <h1>Manage Users</h1>
      </div>

      <div style={{ display: "flex", gap: "12px", marginBottom: "24px", justifyContent: "center" }}>
        <button
          className={`btn-primary ${activeTab === "students" ? "" : "inactive"}`}
          onClick={() => setActiveTab("students")}
          style={{
            padding: "10px 20px",
            background: activeTab === "students" ? "linear-gradient(135deg, var(--gold-main), var(--gold-soft))" : "var(--black-secondary)",
            color: activeTab === "students" ? "var(--black-main)" : "var(--text-primary)",
            border: activeTab === "students" ? "none" : "1px solid var(--border-gold)",
          }}
        >
          Students
        </button>
        <button
          className={`btn-primary ${activeTab === "librarians" ? "" : "inactive"}`}
          onClick={() => setActiveTab("librarians")}
          style={{
            padding: "10px 20px",
            background: activeTab === "librarians" ? "linear-gradient(135deg, var(--gold-main), var(--gold-soft))" : "var(--black-secondary)",
            color: activeTab === "librarians" ? "var(--black-main)" : "var(--text-primary)",
            border: activeTab === "librarians" ? "none" : "1px solid var(--border-gold)",
          }}
        >
          Librarians
        </button>
      </div>

      <div>
        {activeTab === "students" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {students.map((student) => (
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
                  <p style={{ margin: "4px 0 0 0", color: "var(--gold-main)", fontSize: "0.85rem" }}>
                    {student.status}
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
                    Accept
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
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "librarians" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {librarians.map((librarian) => (
              <div
                key={librarian.id}
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
                  <h3 style={{ margin: "0 0 4px 0", color: "var(--text-primary)" }}>{librarian.name}</h3>
                  <p style={{ margin: "0", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                    {librarian.email}
                  </p>
                  <p style={{ margin: "4px 0 0 0", color: "var(--gold-main)", fontSize: "0.85rem" }}>
                    {librarian.status}
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
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
