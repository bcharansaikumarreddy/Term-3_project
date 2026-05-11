import { Navigate, Link } from "react-router-dom";

import { useState } from "react";

import {
  FaEnvelope,
  FaBirthdayCake,
  FaUser,
  FaSignOutAlt,
  FaMapMarkerAlt,
  FaCamera,
} from "react-icons/fa";

import "./Profile.css";

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(storedUser);

  const [logout, setLogout] = useState(false);

  const [profileImage, setProfileImage] = useState(
    user.profileImage ||
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAP1BMVEX6+vqPj4////+MjIzX19eJiYmFhYXx8fHPz8/AwMDt7e2xsbG6urqhoaGTk5PKysqqqqre3t5/f3/n5+ebm5uM+kD6AAADUklEQVR4nO2b23KjMAxAsXwDczX4/791DUlbdkuIlWBEZnWeOunLGRnZRhJFwTAMwzAMwzAMwzAMcxxwh9rjIdHNqr5qmqr39pKiULiy1aPRMqLNqAflimt5Avi6M1KskKZr/JXCCS7IvwxvaNHaq1iCbcyG4i2c1TU0YQp6W3GJZusuYAlqa6VXwRSe3BLKR0v9bakVsSWonaX+spS0sUxxnFd8orS04sla39CB0BGGlEDOlg1ZKGNipznGFadLnjZZUg9EinH3SXUUwhBlOKQrxvUOJJLgEYGMoXQkknXyE7mEkiTBbcBJtgSO4DuMoxDdRCBZJm7k36Gk2CorpKTuCSRrrGRzviPiuLlL1gSSuOSOzyTFyfgRkujlppAcPuGZbLDZXZ2/BUGPlSwJJNOv5XcobpRTQCnKYM93xKa3HCiuasiHkqiOYVE3c02hiHjrXhyJ3rzBpUvKjiRtZtL3c11RORYu9Q2CaP9ZAJWYO1SlgZtlnWRpCI7tNSkZTnL/WQG2fWppqIpVK8u93sPNkS5pfth9bZQU18gNoJcPNbUguEVuAm7Y7pNIU1+jIbYAfhD/RjOGd6DvM62Bwjdi/ImnNGNXTRfrJS8t+akfQrcQht5dqY28YplrsM7Z4tITDgxDBLzBWYbOq5eZJ4byK9oqLLM/r6JDn32PVx3qbXvzQA95T0uoNLZMtaUpc16NoB/fV5wZ89VcYDpGMdLlmxbCtm4ek6+pMx3wPH7RZeosoyYFnmEyPZVw3GrnK/MDtnOzK1mzJEu+L4lt1O1KZipPA7ZRt4fJNEcA/Sfsk7hppX10rtmW5BL5czIW0Y/LnHzFX+gPk8x37QV3lKPI2Hs6bKfM2sTD9Tx3JPMpzvv5IZa5dvI7yHnEbWSbtx8B/v2jMf9s/AFno8nfkADsSOKvQJ4yovheLE+I40xc8ZezR57k+Oxbpj3O/M4JbP1K4Urq5tzOjg9YTanD2Z/lAJTD477nb7QcFEFvBwpVm7QUkkbXnqiHFyPTt3EZ97+2i/9uy4KyQwbgyqbttNkylfHnbqjUGbX8p57W+b5phRnH0dyZ/xRtU3p3AcMvlhaNtZP3qlTK+8nef6MW2+DsnhLDMAzDMAzDMAzDMP8HfwCAsyXGSQihOwAAAABJRU5ErkJggg==",
  );

  const logoutUser = () => {
    localStorage.removeItem("user");

    setLogout(true);
  };

  const uploadPhoto = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setProfileImage(imageUrl);

    const updatedUser = {
      ...user,
      profileImage: imageUrl,
    };

    const response = await fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(updatedUser),
    });

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setUser(updatedUser);
    }
  };

  if (logout) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        {/* LEFT PROFILE CARD */}

        <div className="profile-card">
          <div className="card-header">
            <h2 className="card-title">My Profile</h2>
          </div>

          {/* PROFILE IMAGE */}

          <div className="profile-image-wrapper">
            <img src={profileImage} alt="profile" className="profile-image" />

            <label className="upload-btn">
              <FaCamera />

              <input
                type="file"
                accept="image/*"
                onChange={uploadPhoto}
                hidden
              />
            </label>
          </div>

          {/* PROFILE DETAILS */}

          <div className="profile-info">
            <div className="info-group">
              <label>
                <FaUser />
                Full Name
              </label>

              <p>{user.name}</p>
            </div>

            <div className="info-group">
              <label>
                <FaEnvelope />
                Email Address
              </label>

              <p>{user.email}</p>
            </div>

            <div className="info-group">
              <label>
                <FaBirthdayCake />
                Age
              </label>

              <p>{user.age}</p>
            </div>

            <div className="info-group">
              <label>
                <FaBirthdayCake />
                Date Of Birth
              </label>

              <p>{user.dob}</p>
            </div>

            <div className="info-group">
              <label>
                <FaMapMarkerAlt />
                Location
              </label>

              <p>{user.location || "----"}</p>
            </div>
          </div>

          <button className="logout-btn" onClick={logoutUser}>
            <FaSignOutAlt />
            Logout
          </button>
        </div>

        {/* RIGHT SIDE */}

        <div className="right-section">
          {/* APP DETAILS */}

          <div className="details-card">
            <div className="card-header">
              <h2 className="card-title">MovieApp Details</h2>
            </div>

            <div className="details-grid">
              <div className="details-item">
                <label>Favorite Genre</label>

                <p>Action & Thriller</p>
              </div>

              <div className="details-item">
                <label>Membership</label>

                <p>Premium User</p>
              </div>

              <div className="details-item">
                <label>Preferred Language</label>

                <p>English</p>
              </div>

              <div className="details-item">
                <label>Favorite Theater</label>

                <p>PVR Cinemas</p>
              </div>

              <div className="details-item">
                <label>Account Status</label>

                <p>Active ✅</p>
              </div>

              <div className="details-item">
                <label>User ID</label>

                <p>{user.id}</p>
              </div>
            </div>
          </div>

          {/* ACTIVITY CARD */}

          <div className="details-card career-box">
            <h2 className="career-title">Movie Activity</h2>

            <p className="career-text">
              Track your bookings, wishlist, and watch history here 🎬
            </p>

            <Link to="/history">
              <button className="add-btn">View My Bookings</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
