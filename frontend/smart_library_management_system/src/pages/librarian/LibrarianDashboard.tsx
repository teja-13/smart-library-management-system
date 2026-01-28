import { useNavigate } from "react-router-dom";

const LibrarianDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to Librarian Panel</h1>
        <p>Manage books and students efficiently</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>📚 Manage Books</h3>
          <p>Add, update, or remove books from the library</p>
          <button onClick={() => navigate("/librarian/books")}>
            Go to Books
          </button>
        </div>

        <div className="dashboard-card">
          <h3>👥 Manage Students</h3>
          <p>Approve pending students and manage active users</p>
          <button onClick={() => navigate("/librarian/students")}>
            Go to Students
          </button>
        </div>
      </div>
    </div>
  );
};

export default LibrarianDashboard;
