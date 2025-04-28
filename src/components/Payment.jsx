import React from "react";
import axios from "axios";

const Payment = ({ amount }) => {
  const handlePayment = async () => {
    try {
      const response = await axios.post("https://projectnewbackend1-1.onrender.com/api/payment/createOrder", {
        amount, 
        currency: "INR",
      });
  
      console.log(response); // Log the response
  
      const options = {
        key: process.env.RAZORPAY_KEY_ID, // Use environment variable for Razorpay key
        amount: response.data.amount * 100, // Convert amount to paise
        currency: "INR",
        order_id: response.data.id,
        name: "Booking",
        description: "Train Ticket Payment",
        handler: (res) => {
          alert("✅ Payment Successful!");
          console.log(res);
        },
        prefill: {
          name: "Neha Sontakke",
          email: "neha@example.com",
          contact: "9359481880",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("❌ Payment Error:", error);
      alert("Payment Failed! Try Again.");
    }
  };
  
  return (
    <button
      onClick={handlePayment}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md mt-4 transition duration-200"
    >
      Pay ₹{amount}
    </button>
  );
};

export default Payment;
