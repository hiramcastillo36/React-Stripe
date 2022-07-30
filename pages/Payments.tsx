import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {PaymentElement} from '@stripe/react-stripe-js';


const CheckoutForm = () => {
    return (
        <form>
          <PaymentElement />
          <button>Submit</button>
        </form>
      );
  };

export default CheckoutForm;