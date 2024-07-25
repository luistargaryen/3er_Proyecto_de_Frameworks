import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

export const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (currentState === "Sign Up") {
        localStorage.setItem("user", JSON.stringify({ email, name, password }));
      } else {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
          setShowLogin(false);
          navigate("/");
        } else {
          setError("Invalid email or password.");
          return;
        }
      }
      setShowLogin(false);
      navigate("/");
    }
  };

  const validateForm = () => {
    if (!email || !password || (currentState === "Sign Up" && !name)) {
      setError("Please fill in all fields.");
      return false;
    }
    setError("");
    return true;
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleLogin}>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
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
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};
