import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

type LoginForm = {
  email: string;
  password: string;
};

type RegisterForm = {
  name: string;
  rollNo: string;
  branch: string;
  email: string;
  password: string;
};

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState<RegisterForm>({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", loginData);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", registerData);
  };

  return (
    <>
      {/* ===== WEBSITE HEADER ===== */}
      <header className="site-header">
  {/* Logo Bubble - left side */}
  <div className="logo-bubble">
    <img src={logo} alt="Library Logo" className="site-logo" />
  </div>

  {/* Title bubble - centered */}
  <div className="title-bubble">
    <h1 className="site-title">SMART LIBRARY MANAGEMENT SYSTEM</h1>
  </div>
</header>



      {/* ===== AUTH SECTION ===== */}
      <main className="auth-container">
        <div className="auth-card">
          <h2>{isLogin ? "Student Login" : "Student Registration"}</h2>

          {isLogin ? (
            <form onSubmit={handleLoginSubmit} className="auth-form">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
              <button type="submit">Login</button>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="auth-form">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={registerData.name}
                onChange={handleRegisterChange}
                required
              />
              <input
                type="text"
                name="rollNo"
                placeholder="Roll Number"
                value={registerData.rollNo}
                onChange={handleRegisterChange}
                required
              />
              <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={registerData.branch}
                onChange={handleRegisterChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
              />
              <button type="submit">Register</button>
            </form>
          )}

          <p className="switch-text">
            {isLogin ? "New student?" : "Already registered?"}{" "}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Register here" : "Login here"}
            </span>
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
