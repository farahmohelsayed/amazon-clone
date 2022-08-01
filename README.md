# Amazon clone

Built an e-commerce amazon clone using React.js, Redux and firebase for sign in/sign up authentication and hosting.\
Hosted on 

## Description
The App is an e-commerce platform that allows you to purchase a variety of products.The products, along with it's description, are displayed on the homepage and hence  add products to the cart.


## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── components # component folder
    │       ├── Header.js # Header Component. It includes; logo, search bar, and cart
    │       ├── Header.module.css # Header Component CSS module
    │       ├── Product.js  # Product Component that emphasises product details. The products are displayed on the homepage.
    │       ├── Product.module.css  # Product Component CSS module
    │       ├── Home.js  # Main homescreen that displays the amazon banner, header and products
    │       ├── Home.module.css  # Home Component CSS module
    │       ├── Checkout.js  # Where products added to the cart are found
    │       ├── Checkout.module.css  # Checkout Component CSS module
    │       ├── CheckoutProduct.js  # Details of products added to the cart
    │       ├── CheckoutProduct.module.css  # CheckoutProduct Component CSS module
    │       ├── Subtotal.js  # The total price and quantity of items added to the cart. The component is found within the checkout component
    │       ├── Subtotal.module.css  # Subtotal Component CSS module
    │       └── Login # A component folder that handles the sign in/sign up screen
    │          ├── Login.js # Login/register Component
    │          └── Login.module.css # Login Component CSS module
    ├── Store # Redux state management
    │   ├── index.js #Contains the main store with the reducers identified (using configureStore from react-toolkit)
    │   ├── cart-slice.js # The cart state is created using the initial values, slice name and reducers identified
    │   └──  user-slice.js # The user state is created using the initial values, slice name and reducers identified
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```



## Starting the App
#### `npm install`
To install all the dependencies and packages found in package.json.
#### `npm start`
To run the app in the development mode.

## Hosting the App

#### `firebase login`
#### `firebase init`
1. Select option Hosting: Configure and deploy Firebase Hosting sites.
2. Select Use an existing project, and in that select Firebase project name.
3. Type in 'build' to be used for public directory.
4. For Configure as a single-page app question enter y for this option.
5. Select N for overwriting index.html and copy paste the main index.html file into the new index.html.

#### `firebase deploy`


## Other Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
