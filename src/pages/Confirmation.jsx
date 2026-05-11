import { Link } from "react-router-dom";
import { FaCheckCircle, FaHome, FaTicketAlt } from "react-icons/fa";

import "./Confirmation.css";

const Confirmation = () => {
  return (
    <div className="confirmation-page">
      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <div className="confirmation-card">
        <div className="success-badge">
          <FaCheckCircle />
        </div>

        <p className="booking-status">PAYMENT SUCCESSFUL</p>

        <h1 className="success-heading">Booking Confirmed </h1>

        <p className="success-text">
          Your movie tickets have been booked successfully.
        </p>

        <div className="ticket-box">
          <div className="ticket-icon">
            <FaTicketAlt />
          </div>

          <div>
            <h3 className="ticket-title">Ready For Your Show</h3>

            <p className="ticket-subtext">
              Enjoy your cinematic experience with friends & family.
            </p>
          </div>
        </div>

        <div className="button-group">
          <Link to="/">
            <button className="home-btn">
              <FaHome className="btn-icon" />
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
