// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// import axios from "axios";
// import { loadScript } from "./utils/loadScript";

// const socket = io("http://localhost:5000");

// const RepairBooking = () => {
//   const [formData, setFormData] = useState({
//     customerName: "",
//     phone: "",
//     email: "",
//     address: "",
//     jewelleryType: "",
//   });
//   const [tracking, setTracking] = useState(null);
//   const [otp, setOtp] = useState("");
//   const [repairId, setRepairId] = useState(null);
//   const [location, setLocation] = useState({ lat: 0, lng: 0 });

//   useEffect(() => {
//     socket.on("vanLocation", (data) => {
//       setLocation(data);
//     });
//     return () => socket.disconnect();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const bookRepair = async () => {
//     const res = await axios.post("http://localhost:5000/api/repair/book", formData);
//     setRepairId(res.data.repairId);
//     alert("Repair booked! OTP sent to your phone and email.");
//   };

//   const verifyOtp = async () => {
//     const res = await axios.post("http://localhost:5000/api/repair/verify-otp", { repairId, otp });
//     alert(res.data.message);
//   };

//   const trackRepair = async () => {
//     const res = await axios.get(`http://localhost:5000/api/repair/track/${repairId}`);
//     setTracking(res.data.status);
//   };

//   const handlePayment = async () => {
//     await loadScript("https://checkout.razorpay.com/v1/checkout.js");
//     const { data } = await axios.post("http://localhost:5000/api/repair/payment", { amount: 500, currency: "INR" });
//     const options = {
//       key: "RAZORPAY_KEY", 
//       amount: data.amount,
//       currency: data.currency,
//       order_id: data.id,
//       handler: (response) => {
//         alert("Payment Successful!");
//       },
//     };
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div>
//       <h2>Jewellery Repair Booking</h2>
//       <input type="text" name="customerName" placeholder="Name" onChange={handleChange} />
//       <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
//       <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//       <input type="text" name="address" placeholder="Address" onChange={handleChange} />
//       <input type="text" name="jewelleryType" placeholder="Jewellery Type" onChange={handleChange} />
//       <button onClick={bookRepair}>Book Repair</button>
      
//       <h3>Verify OTP</h3>
//       <input type="text" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
//       <button onClick={verifyOtp}>Verify</button>
      
//       <h3>Track Repair</h3>
//       <button onClick={trackRepair}>Track Status</button>
//       {tracking && <p>Status: {tracking}</p>}
      
//       <h3>Make Payment</h3>
//       <button onClick={handlePayment}>Pay Now</button>
      
//       <h3>Van Location</h3>
//       <p>Latitude: {location.lat}, Longitude: {location.lng}</p>
//     </div>
//   );
// };

// export default RepairBooking;




import React, { useState } from "react";
import { bookRepair } from "../components/api";
import "../assets/css/RepairBooking.css"; // Import the CSS

const RepairBooking = () => {
    const [formData, setFormData] = useState({
        customerName: "",
        phone: "",
        email: "",
        address: "",
        jewelleryType: "",
        otp: Math.floor(100000 + Math.random() * 900000), // ✅ Generate a 6-digit OTP
      });
      
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [repairId, setRepairId] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7001/api/repair/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json(); // ✅ JSON response convert karne important
      console.log("API Response:", data); // Debugging
  
      if (!response.ok) {
        throw new Error(data.message || "Booking failed!");
      }
  
      alert("Repair Booking Successful!");
    } catch (error) {
      console.error("Invalid API Response:", error);
      alert(error.message);
    }
  };
  
  

  return (
    <div className="repair-booking-container">
      <div className="repair-form">
        <h2>Book Jewellery Repair</h2>
        {!bookingSuccess ? (
          <form onSubmit={handleSubmit}>
            <input type="text" name="customerName" placeholder="Name" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <input type="text" name="jewelleryType" placeholder="Jewellery Type" onChange={handleChange} required />
            <button type="submit">Book Repair</button>
          </form>
        ) : (
          <p className="success-message">Booking Successful! Repair ID: {repairId}</p>
        )}
      </div>
    </div>
  );
};

export default RepairBooking;
