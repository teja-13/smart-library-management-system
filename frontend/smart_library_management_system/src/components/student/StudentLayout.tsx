import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const StudentLayout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="site-header has-menu">
        {/* Menu toggle (left) */}
        <button
          aria-label="Toggle menu"
          className="menu-toggle"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>

        {/* Logo */}
        <div className="logo-bubble">
          <img src={logo} alt="Library Logo" className="site-logo" />
        </div>

        {/* Title */}
        <div className="title-bubble">
          <h1 className="site-title">STUDENT DASHBOARD</h1>
        </div>

        {/* Logout */}
        <div className="header-actions">
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      {/* ===== BODY ===== */}
      <div className="layout-body">
        {/* Backdrop when open */}
        {open && <div className="backdrop" onClick={() => setOpen(false)} />}

        {/* ===== SIDEBAR ===== */}
        <aside className={`sidebar ${open ? "open" : ""}`}>
          <nav className="sidebar-nav">
            <NavLink to="/student/dashboard" onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>
              Dashboard
            </NavLink>
            <NavLink to="/student/books/search" onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>
              Book a Book
            </NavLink>
            <NavLink to="/student/my-books" onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>
              My Books
            </NavLink>
            <NavLink to="/student/settings" onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>
              Settings
            </NavLink>
          </nav>
        </aside>

        {/* ===== PAGE CONTENT ===== */}
        <main className="content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default StudentLayout;