# A simple PaypalButton Component.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Using one tutorial

By using one of the many tutorials available, I have created this simple component that may allow you to use the paypal buttons on your app.

### Cloning or dowloading

Just copy the content of src and public to your local app folder, and make the changes or just use the code.

In order to learn how to use the PayPal api, there is some steps you need to do.

### Setting up the Developer section on [PayPal](https://developer.paypal.com/home/)

Basically they have a nice documentation. The basics are:
- Log in into your paypal account.
- Go to developer section.
- Under 'My apps & credentials', you can create a new app enviroment or just use the default one. I have used the default.
- Click on App name to view the details.
- Note: The account for the sandbox enviroment is the one with the domain as business. The dashboard will create also a business and personal accounts for you as default. I have use both of them.
- Copy the info detailed as id. You need to modify one line of code in the index.HTML in your public folder.
<!-- paypal call -->
    <script src="https://www.paypal.com/sdk/js?client-id="HERE-YOUR-ID-FROM-MYAPPs"&currency=GBP" />
<!-- end paypal call -->

### Sandbox accounts

As you may see, the system creates 2 default accounts for testing.
- The business account. It will be the one you will use as the one who gets the payments. You can also [log in into the sandbox](https://www.sandbox.paypal.com) to test it while you make a purchase.
- The personal account it will be the one you use as if you were a buyer.

### For any other doubt

Take a look on the same tutorial [I have followed in here](https://medium.com/@bolajifemi28/how-to-add-paypal-checkout-to-your-react-app-37d44c58a896)

If you run some issues, feel free to send me a message anytime.

Happy Coding!


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

