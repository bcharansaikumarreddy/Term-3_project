import { useState } from "react";

import { Link, Navigate } from "react-router-dom";

import "./Signup.css";

const Signup = () => {
  const [redirect, setRedirect] = useState(false);

  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const [dob, setDob] = useState("");

  const [email, setEmail] = useState("");

  const [location, setLocation] = useState("");

  const [password, setPassword] = useState("");

  const [chekPassword, setChekPassword] = useState("");

  const [msg, setMsg] = useState("");

  const Passuptodate = (event) => {
    setPassword(event.target.value);
  };

  const length = password.length >= 8;

  const spesial = /[!@#$%^&*?~]/.test(password);

  const number = /[0-9]/.test(password);

  const captial = /[A-Z]/.test(password);

  const chek = (event) => {
    setChekPassword(event.target.value);
  };

  const allCorect = length && spesial && number && captial;

  const passwordTick = allCorect;

  const checkTick = password === chekPassword && chekPassword !== "";

  let passwordMsg = "";

  if (password !== "") {
    if (!length) {
      passwordMsg = "Password must be 8 characters";
    } else if (!spesial) {
      passwordMsg = "Add special character";
    } else if (!number) {
      passwordMsg = "Add one number";
    } else if (!captial) {
      passwordMsg = "Add one capital letter";
    }
  }

  let checkMsg = "";

  if (chekPassword !== "" && password !== chekPassword) {
    checkMsg = "Passwords do not match";
  }

  const submitSignup = async (event) => {
    event.preventDefault();

    if (!allCorect) {
      setMsg("Please enter valid password");

      return;
    }

    if (password !== chekPassword) {
      setMsg("Passwords mismatch");

      return;
    }

    const userData = {
      name,
      age,
      dob,
      email,
      location,
      password,
    };

    const response = await fetch("http://localhost:3000/users", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userData),
    });

    if (response.ok) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="signup-bg">
      <div className="overlay">
        <div className="left-section">
          <a
            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQ-umjdV-0lZ8mZ7lyXMYli3Nj-sVwnCoeA&s"
            className="logo-link"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQ-umjdV-0lZ8mZ7lyXMYli3Nj-sVwnCoeA&s"
              alt="logo"
              className="logo"
            />
          </a>

          <h1>
            Welcome <br />
            Back
          </h1>

          <p>
            Book your favourite movies easily with our professional movie
            booking platform.
          </p>

          <div className="social-icons">
            <a href="https://github.com/bcharansaikumarreddy" target="_blank">
              G
            </a>

            <a href="https://www.linkedin.com" target="_blank">
              L
            </a>

            <a href="https://www.instagram.com" target="_blank">
              I
            </a>

            <a href="https://www.youtube.com" target="_blank">
              Y
            </a>
          </div>
        </div>

        <div className="right-section">
          <h2>Sign Up</h2>

          <form onSubmit={submitSignup}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />

            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                onChange={Passuptodate}
                required
              />

              {passwordTick && <span className="tick">✔</span>}
            </div>

            <p className="error">{passwordMsg}</p>

            <div className="input-box">
              <input
                type="password"
                placeholder="Check Password Again"
                onChange={chek}
                required
              />

              {checkTick && <span className="tick">✔</span>}
            </div>

            <p className="error">{checkMsg}</p>

            <button type="submit">Sign Up Now</button>

            <p className="signup-msg">{msg}</p>
          </form>

          <p className="login-link">
            Already have an account?
            <Link to="/login">Sign In</Link>
          </p>

          <p className="terms">
            By clicking on "Sign Up now" you agree to
            <br />
            <a href="https://termsandpolicys.niat.tech/" target="/blank">
              Terms of Service
            </a>
            {" | "}
            <a href="https://termsandpolicys.niat.tech/" target="/blank">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
