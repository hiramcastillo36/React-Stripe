import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './components/CheckoutForm';

const stripePromise = loadStripe('{{PK-Stripe}}');

function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{clientSecret}}',
  };
  return (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
  );
}

export default App;
