import { useEffect, useState } from "react";

import "./BookingHistory.css";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await fetch(
      `http://localhost:3000/bookings?userId=${user.id}`,
    );

    const data = await response.json();

    setBookings(data);
  };

  return (
    <div className="history-container">
      <h1 className="history-heading">Booking History</h1>

      {bookings.map((eachBooking) => (
        <div key={eachBooking.id} className="booking-card">
          <h2>
            Movie ID:
            {eachBooking.movieId}
          </h2>

          <p>
            Seats:
            {eachBooking.seats}
          </p>

          <p>Total Price: ₹{eachBooking.totalPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default BookingHistory;
