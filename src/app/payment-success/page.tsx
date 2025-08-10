"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { useAuth } from "../../context/useAuth"; // adjust path if needed

const PaymentSuccess = () => {
  const router = useRouter();
  const { user, isAuthenticated, loading } = useAuth();
  const [status, setStatus] = useState("Verifying payment...");

  useEffect(() => {
    const verifyPayment = async () => {
      if (loading) return; // wait for auth to load

      if (!isAuthenticated || !user) {
        setStatus("User session not found. Please login again.");
        return;
      }

      const merchantTransactionId = localStorage.getItem("merchantOrderId");
      const orderId = localStorage.getItem("merchantOrderId");

      if (!merchantTransactionId || !orderId) {
        setStatus("No transaction found.");
        return;
      }

      try {
        const res = await fetch("/api/payments/order/validate", {
          method: "POST",
          body: JSON.stringify({
            merchantOrderId: merchantTransactionId,
            orderId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        

        const json = await res.json();

        console.log("Response from the validator:",json)
        console.log("Response payment id:",json.paymentDetails)
        console.log("Response order id:",json.orderId)
        if (!res.ok ) {
          setStatus("Payment verification failed. Please contact support.");
          return;
        }
        if (json?.state=="PENDING" || json?.state=="FAILED") {
          setStatus(`Payment Verification failed due to status: ${json?.state}`);
          return;
        }

        const { error } = await supabase
          .from("registrations")
          .update({
            registration_status: "submitted",
            payment_id: json.paymentDetails,
            order_id: json.orderId,
          })
          .eq("user_id", user.id);

        if (error) {
          console.error("Supabase update error:", error);
          setStatus(
            "Payment verified, but failed to update registration. Please contact support."
          );
        } else {
          setStatus("Payment successful! Registration submitted.");
        }
      } catch (error) {
        console.error("Verification error:", error);
        setStatus("Unexpected error during payment verification.");
      }
    };

    verifyPayment();
  }, [loading, isAuthenticated, user]);

  return (
    <div className="p-8 text-center">
      <h1 className="text-xl font-bold">{status}</h1>
    </div>
  );
};

export default PaymentSuccess;
