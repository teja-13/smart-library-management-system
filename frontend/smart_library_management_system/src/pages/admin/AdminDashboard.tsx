import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to Admin Panel</h1>
        <p>Manage users and books efficiently</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>👥 Manage Users</h3>
          <p>Manage students and librarians</p>
          <button onClick={() => navigate("/admin/users")}>
            Go to Users
          </button>
        </div>

        <div className="dashboard-card">
          <h3>📚 Manage Books</h3>
          <p>Manage book inventory and records</p>
          <button onClick={() => navigate("/admin/books")}>
            Go to Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
