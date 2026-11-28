
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [logindata, setlogindata] = useState({
    username: "",
    password: ""
  });

  function handlechange(e) {
    setlogindata({
      ...logindata,
      [e.target.name]: e.target.value
    });
  }

  function handlesubmit(e) {
    e.preventDefault();

    // Get registration details
    const registerdata = JSON.parse(
      localStorage.getItem("registerdata")
    );

    console.log("Login page", logindata);
    console.log("Register", registerdata);

    if (!registerdata) {
      alert("Please register first!");
      return;
    }

    // Check username and password
    if (
      logindata.username === registerdata.name &&
      logindata.password === registerdata.password
    ) {
      alert("Successfully Login!");

      navigate("/dashboard");
    }
    else {
      alert("Invalid Username or Password");
    }
  }

  return (
    <div className="login-container">

      <style>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          font-family: Arial, sans-serif;
        }

        .login-box {
          width: 380px;
          padding: 35px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        }

        .login-box h1 {
          text-align: center;
          color: #333;
          margin-bottom: 10px;
        }

        .login-box p {
          text-align: center;
          color: #777;
          margin-bottom: 25px;
        }

        .login-box input {
          width: 100%;
          padding: 12px;
          margin-bottom: 18px;
          border: 1px solid #ccc;
          border-radius: 6px;
          box-sizing: border-box;
        }

        .login-box button {
          width: 100%;
          padding: 12px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
        }

        .login-box button:hover {
          background: #5145cd;
        }

        .register-link {
          display: block;
          text-align: center;
          margin-top: 20px;
          color: #667eea;
          text-decoration: none;
        }
      `}</style>

      <div className="login-box">

        <h1>Welcome Back!</h1>

        <p>Login to your Dashboard</p>

        <form onSubmit={handlesubmit}>

          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={logindata.username}
            onChange={handlechange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={logindata.password}
            onChange={handlechange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <Link to="/register" className="register-link">
          Don't have an account? Register
        </Link>

      </div>

    </div>
  );
}

export default Login;
