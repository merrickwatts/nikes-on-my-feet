import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Stripe import
import {Elements} from '@stripe/react-stripe.js';
import {loadStripe} from '@stripe/stripe.js';

const stripePromise = loadStripe('pk_test_51LUhHjBI8BK3kUvgExFVe8XzCnsEdxlrAC4rCjIRym30NqJoVSRgHelZBSJBUUOmmEz4tjeSg93YwXATEPx6gy5w007u5LQju7');

function App() {
  const options = {
    //passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
  
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

