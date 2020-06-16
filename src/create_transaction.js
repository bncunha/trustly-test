export const establishPayWithMyBank = () => {
  window.PayWithMyBank.establish({
    accessId: 'D61EC9BAF0BB369B9438',
    merchantId: 1004314986,
    metadata: {demo: 'enabled'},
    currency: 'USD',
    paymentType: 'Deferred',
    amount: '100.00',
    description: 'bruno.silva.cunha@hotmail.com',
    merchantReference: '9392487232758750',
    returnUrl: '#success',
    cancelUrl: '#cancel',
  });
};

