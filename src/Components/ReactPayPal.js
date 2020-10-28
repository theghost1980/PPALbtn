import React from "react";
import './reactPayPal.css';

const _files = './file-downloadble/Files-Bought.zip';

export default function ReactPayPal(props) {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const paypalRef = React.useRef();
  const orderDone = {
      name: '',
      lastName: '',
      itemDesc: 'Amazing CD ALBUM',
      totalPrice: 100.0,
      currency_code: 'GBP'
  };

  // To show PayPal buttons once the component loads
  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: orderDone.description,
                amount: {
                  currency_code: orderDone.currency_code,
                  value: orderDone.totalPrice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
        //   setError(err),
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  // If the payment has been made
  if (paid) {
    return (<div>
                <h1>Payment successful!</h1>
                <h3>Item Bought: {orderDone.itemDesc}</h3>
                <h3>Item Cost: {orderDone.totalPrice} {orderDone.currency_code}</h3>
                <p>All details of your shop are recorder in your paypal account. Have a great day!</p>
                <a href={_files} target="_blank" rel="noopener noreferrer">
                  <button>Download File</button> 
                </a>
           </div>);
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment! Please try again.</div>;
  }

  // Default Render
  return (
    <div>
        <h2>Description: {orderDone.itemDesc}</h2>
        <h4>Total Amount in {orderDone.currency_code}.: {orderDone.totalPrice}</h4>
        <div ref={paypalRef} />
    </div>
  );
}