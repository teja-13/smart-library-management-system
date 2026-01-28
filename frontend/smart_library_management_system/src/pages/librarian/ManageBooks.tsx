import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageBooks = () => {
  const navigate = useNavigate();
  const [books] = useState([
    { id: 1, title: "Data Structures", author: "Mark Allen Weiss", copies: 5 },
    { id: 2, title: "Algorithms", author: "CLRS", copies: 3 },
    { id: 3, title: "DBMS", author: "Silberschatz", copies: 4 },
    { id: 4, title: "Operating Systems", author: "Tanenbaum", copies: 2 },
  ]);

  return (
    <div className="book-search-container">
      <button className="back-button" onClick={() => navigate(-1)}>←</button>
      
      <div className="search-header">
        <h1>Manage Books</h1>
      </div>

      <div style={{ display: "flex", gap: "12px", marginBottom: "24px", justifyContent: "center" }}>
        <button className="btn-primary" style={{ padding: "10px 20px" }}>
          ➕ Add Book
        </button>
        <button className="btn-primary" style={{ padding: "10px 20px" }}>
          ✏️ Update Book
        </button>
        <button className="btn-primary" style={{ padding: "10px 20px", background: "linear-gradient(135deg, #d9534f, #c9302c)" }}>
          🗑️ Remove Book
        </button>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", color: "var(--text-primary)" }}>
          <thead>
            <tr style={{ backgroundColor: "var(--black-secondary)", borderBottom: "1px solid var(--border-gold)" }}>
              <th style={{ padding: "12px", textAlign: "left", color: "var(--gold-main)" }}>Title</th>
              <th style={{ padding: "12px", textAlign: "left", color: "var(--gold-main)" }}>Author</th>
              <th style={{ padding: "12px", textAlign: "left", color: "var(--gold-main)" }}>Copies</th>
              <th style={{ padding: "12px", textAlign: "left", color: "var(--gold-main)" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} style={{ borderBottom: "1px solid var(--border-gold)" }}>
                <td style={{ padding: "12px" }}>{book.title}</td>
                <td style={{ padding: "12px" }}>{book.author}</td>
                <td style={{ padding: "12px" }}>{book.copies}</td>
                <td style={{ padding: "12px", display: "flex", gap: "8px" }}>
                  <button style={{ padding: "6px 12px", borderRadius: "4px", border: "none", backgroundColor: "var(--gold-main)", color: "var(--black-main)", cursor: "pointer", fontSize: "0.85rem" }}>
                    Edit
                  </button>
                  <button style={{ padding: "6px 12px", borderRadius: "4px", border: "none", backgroundColor: "#d9534f", color: "white", cursor: "pointer", fontSize: "0.85rem" }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;
