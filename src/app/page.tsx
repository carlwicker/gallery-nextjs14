"use client";

import UnsplashImage from "../components/UnsplashImageAPI/UnsplashImage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Load Stripe with the publishable key.
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function Home() {
  return (
    <Elements stripe={stripePromise}>
      <UnsplashImage />
    </Elements>
  );
}
