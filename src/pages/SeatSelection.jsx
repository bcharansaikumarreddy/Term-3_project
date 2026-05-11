import { useState } from "react";
import "./SeatSelection.css";
import { useNavigate, useParams } from "react-router-dom";

const SeatSelection = () => {
  const [seats, setSeats] = useState(1);

  const navigate = useNavigate();

  const { id } = useParams();

  const ticketPrice = 200;

  const increaseSeat = () => {
    setSeats(seats + 1);
  };

  const decreaseSeat = () => {
    if (seats > 1) {
      setSeats(seats - 1);
    }
  };

  const totalPrice = seats * ticketPrice;

  const confirmBooking = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/login");
      return;
    }

    const bookingData = {
      userId: user.id,
      userName: user.name,
      movieId: id,
      seats,
      totalPrice,
    };

    const response = await fetch("http://localhost:3000/bookings", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(bookingData),
    });

    if (response.ok) {
      navigate("/confirmation");
    }
  };

  return (
    <div className="seat-container">
      <div className="seat-card">
        <h1>Select Seats</h1>

        <h2>Ticket Price: ₹200</h2>

        <div className="seat-buttons">
          <button className="seat-btn" onClick={decreaseSeat}>
            -
          </button>

          <h2>{seats}</h2>

          <button className="seat-btn" onClick={increaseSeat}>
            +
          </button>
        </div>

        <h2>Total Price: ₹{totalPrice}</h2>

        <button className="confirm-btn" onClick={confirmBooking}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default SeatSelection;

