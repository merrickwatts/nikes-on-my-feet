import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CheckoutForm} from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51LUhHjBI8BK3kUvgExFVe8XzCnsEdxlrAC4rCjIRym30NqJoVSRgHelZBSJBUUOmmEz4tjeSg93YwXATEPx6gy5w007u5LQju7');

function Cart() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm/>
    </Elements>
  );
};
export default Cart;
