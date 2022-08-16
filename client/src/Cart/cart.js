import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CheckoutForm} from './CheckoutForm';
// import {addItem} mutation
// import {removeItem} mutation
// import (useMutation, useQuery) hook
// might need to add/query all items

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51LUhHjBI8BK3kUvgExFVe8XzCnsEdxlrAC4rCjIRym30NqJoVSRgHelZBSJBUUOmmEz4tjeSg93YwXATEPx6gy5w007u5LQju7');

// Create increment function based on item ID that would add to cart depend
// Create remove from cart option
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
