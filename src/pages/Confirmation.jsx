import {Link} from "react-router-dom"

import "./Confirmation.css"

const Confirmation = () => {
  return (
    <div className="confirmation-page">

      <div className="confirmation-card">

        <div className="success-icon">
          ✅
        </div>

        <h1 className="success-heading">
          Booking Successful
        </h1>

        <p className="success-text">
          Your movie tickets have been
          booked successfully.
        </p>

        <p className="success-subtext">
          Enjoy your movie experience 🎬
        </p>

        <Link to="/">
          <button className="home-btn">
            Go To Home
          </button>
        </Link>

      </div>

    </div>
  )
}

export default Confirmation