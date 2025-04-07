import React from "react";
import { processPayment } from "../api";

const Payment = ({ amount }) => {
  const handlePayment = async () => {
    try {
      const response = await processPayment({ amount, currency: "INR" });
      const options = {
        key: "YOUR_RAZORPAY_KEY",
        amount: response.data.amount,
        currency: "INR",
        order_id: response.data.id,
        handler: (res) => alert("Payment Successful!"),
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return <button onClick={handlePayment}>Pay ₹{amount}</button>;
};

export default Payment;
