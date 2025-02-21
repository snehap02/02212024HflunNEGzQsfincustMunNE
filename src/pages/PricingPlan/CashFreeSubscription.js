import { useState } from "react";
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";

function CashFreeSubscription() {
  let cashfree;

  // Initialize Cashfree SDK
  const initializeSDK = async () => {
    try {
      cashfree = await load({
        mode: "sandbox", // Change to "production" when moving to production
      });
      console.log("Cashfree SDK initialized");
    } catch (error) {
      console.error("Error initializing Cashfree SDK:", error);
    }
  };

  initializeSDK();

  const [orderId, setOrderId] = useState("");

  // Get Payment Session ID from the backend
  const getSessionId = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/cashfree/payment"); // Ensure your backend server is running
      if (res.data && res.data.payment_session_id) {
        console.log("Payment Session Response:", res.data);
        setOrderId(res.data.order_id);
        return res.data.payment_session_id;
      }
    } catch (error) {
      console.error("Error fetching session ID:", error);
    }
  };

  // Verify Payment on the backend
  const verifyPayment = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/cashfree/verify",
        {
          orderId: orderId,
        }
      );
      if (res && res.data) {
        alert("Payment Verified!");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
    }
  };

  // Handle Payment Button Click
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const sessionId = await getSessionId();
      if (!sessionId) {
        alert("Failed to get session ID. Please try again.");
        return;
      }

      const checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal", // Options: "_self", "_blank", "_modal"
      };

      cashfree
        .checkout(checkoutOptions)
        .then(() => {
          console.log("Payment initialized");
          verifyPayment();
        })
        .catch((error) => {
          console.error("Error during payment initialization:", error);
        });
    } catch (error) {
      console.error("Error handling payment:", error);
    }
  };

  return (
    <>
      <div className="card">
        <button className="" onClick={handleClick}>
          Subscribe
        </button>
      </div>
    </>
  );
}

export default CashFreeSubscription;
