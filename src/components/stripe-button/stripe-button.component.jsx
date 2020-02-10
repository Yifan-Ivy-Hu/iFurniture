import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_AH5bKCZ3TrR7xBKiilnQA2R600LQrBNRMC';

  const onToken = token => {
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label = 'Pay Now'
      name = 'iFurniture Ltd.'
      billingAddress
      shippingAddress
      description = {`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel = 'PayNow'
      token = {onToken}
      stripeKey = {publishableKey}
    />
  );
};

export default StripeCheckoutButton;
