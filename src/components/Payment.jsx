// import React from "react";
// import { processPayment } from "../api";

// const Payment = ({ amount }) => {
//   const handlePayment = async () => {
//     try {
//       const response = await processPayment({ amount, currency: "INR" });
//       const options = {
//         key: "YOUR_RAZORPAY_KEY",
//         amount: response.data.amount,
//         currency: "INR",
//         order_id: response.data.id,
//         handler: (res) => alert("Payment Successful!"),
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error("Payment Error:", error);
//     }
//   };

//   return <button onClick={handlePayment}>Pay ₹{amount}</button>;
// };

// export default Payment;





import React from "react";
import axios from "axios";

const Payment = ({ amount }) => {
  const handlePayment = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/payment/create-order", {
        amount,
        currency: "INR",
      });

      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your actual Razorpay key
        amount: response.data.amount,
        currency: "INR",
        order_id: response.data.id,
        name: "IRCTC Booking",
        description: "Train Ticket Payment",
        handler: (res) => {
          alert("✅ Payment Successful!");
          console.log(res);
        },
        prefill: {
          name: "Neha Sontakke",
          email: "neha@example.com",
          contact: "9876543210",
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
