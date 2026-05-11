// import { useState, useContext } from "react";

// import { useNavigate, Link } from "react-router-dom";

// import { AuthContext } from "../context/AuthContext";

// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const { loginUser } = useContext(AuthContext);

//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   const [msg, setMsg] = useState("");

//   const submitLogin = async (event) => {
//     event.preventDefault();

//     const response = await fetch(
//       `http://localhost:3000/users?email=${email}&password=${password}`,
//     );

//     const data = await response.json();

//     if (data.length > 0) {
//       loginUser(data[0]);

//       navigate("/");
//     } else {
//       setMsg("Invalid Credentials");
//     }
//   };

//   return (
//     <div className="login-bg">
//       <div className="login-overlay">
//         <div className="login-card">
//           <h1 className="login-title">Login</h1>

//           <form onSubmit={submitLogin}>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               className="login-input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="login-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <button type="submit" className="login-submit-btn">
//               Login
//             </button>
//           </form>

//           <p className="login-error">{msg}</p>

//           <p style={{ marginTop: "15px" }}>
//             Don't have an account?
//             <Link to="/signup">Signup</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";

import { Navigate, Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [msg, setMsg] = useState("");

  const [redirect, setRedirect] = useState(false);

  const submitLogin = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `http://localhost:3000/users?email=${email}&password=${password}`,
    );

    const data = await response.json();

    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]));

      setRedirect(true);
    } else {
      setMsg("Invalid Credentials");
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-bg">
      <div className="login-overlay">
        <div className="login-card">
          <h1 className="login-title">Login</h1>

          <form onSubmit={submitLogin}>
            <input
              type="email"
              placeholder="Enter Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="login-submit-btn">
              Login
            </button>
          </form>

          <p className="login-error">{msg}</p>

          <p style={{ marginTop: "15px" }}>
            Don't have an account?
            <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
