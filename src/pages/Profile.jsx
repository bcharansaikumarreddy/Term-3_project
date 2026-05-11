// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";

// import { AuthContext } from "../context/AuthContext";
// import "./Profile.css";

// const Profile = () => {
//   const navigate = useNavigate();

//   const { user, logoutUser } = useContext(AuthContext);

//   const onLogout = () => {
//     logoutUser();

//     navigate("/login");
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <h1 className="profile-title">User Profile</h1>

//         <p className="profile-text">Name: {user.name}</p>

//         <p className="profile-text">Age: {user.age}</p>

//         <p className="profile-text">DOB: {user.dob}</p>

//         <p className="profile-text">Email: {user.email}</p>

//         <button className="logout-btn" onClick={onLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import { Navigate } from "react-router-dom";

import { useState } from "react";

import "./Profile.css";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [logout, setLogout] = useState(false);

  const logoutUser = () => {
    localStorage.removeItem("user");

    setLogout(true);
  };

  if (logout) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">User Profile</h1>

        <p className="profile-text">Name: {user.name}</p>

        <p className="profile-text">Age: {user.age}</p>

        <p className="profile-text">DOB: {user.dob}</p>

        <p className="profile-text">Email: {user.email}</p>

        <button className="logout-btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
