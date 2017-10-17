# The Road to Learn React

https://www.educative.io/collection/5740745361195008/5676830073815040

#  Bootstrap your React App

##  Requirements

    node --version  # *v7.4.0

    npm --version   # *v4.0.5

`npm install --save <package>` to include it in package.json

##  Installation

CDN

    <script src="https://unpkg.com/react@15/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>

or npm w/ **Babel** `npm install --save react react-dom`

`create-react-app` is **preferred way** as zero-config setup

##  Zero-Configuration Setup

    npm install -g create-react-app

    create-react-app --version

- `src/App.js` is main file to implement components
- `src/App.test.js`  for tests
- `src/index.css` & `src/App.css` for styles

- `package.json` & `node_modules/` to manage packages

`npm start` Runs the application in http://localhost:3000

`npm test` Runs the tests

`npm run build` Builds the application for production

### Exercise

:shipit: [$ sudo npm install -g create-react-app](https://github.com/arafatm/edu_road_to_learn_react/commit/a524817)

##  Introduction to JSX

`class App extends Component` instantiates the App component to be used across the app
- `render()` is the element returned

:shipit: [Clean up clutter in App.js](https://github.com/arafatm/edu_road_to_learn_react/commit/6fd7ed5)

:shipit: [My first Var](https://github.com/arafatm/edu_road_to_learn_react/commit/6542862)

:shipit: [Exercise: render a complex user object](https://github.com/arafatm/edu_road_to_learn_react/commit/dcd9c42)

##  ES6 const and let

`const` (immutable) vs `let` (mutable)
- `const hello = "Hello` is immutable
- `const` on an array or object can be modified

:caution: default to using `const` unless you are sure you need `let`

##  ReactDOM

`ReactDOM.render` in [index.js](/hackernews/src/index.js#L7) is main function w/ args:
1. JSX that is rendered
2. HTML element to hook

In default example below `App` is the main App component in `App.js`

```js
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Can also pass JSX directly e.g.

```javascript
ReactDOM.render(
  <h1>Hello React World</h1>,
  document.getElementById('root')
);
```

##  Hot Module Reloading
##  Complex JavaScript in JSX
##  ES6 Arrow Functions
##  ES6 Classes
##  Recap

#  Basics in React
##  Internal Component State
##  ES6 Object Initializer
##  Unidirectional Data Flow
##  Interactions with Forms and Events
##  ES6 Destructuring
##  Controlled Components
##  Split Up Components
##  Composable Components
##  Reusable Components
##  Component Declarations
##  Styling Components
##  Recap

#  Getting Real with an API
##  Lifecycle Methods
##  Fetching Data
##  ES6 Spread Operators
##  Conditional Rendering
##  Client- or Server-side Search
##  Paginated Fetch
##  Client Cache
##  Recap

#  Code Organization and Testing
##  ES6 Modules: Import and Export
##  Code Organization with ES6 Modules
##  Component Interface with PropTypes
##  Snapshot Tests with Jest
##  Unit Tests with Enzyme
##  Recap

#  Advanced React Components
##  Ref a DOM Element
##  Loading …
##  Higher Order Components
##  Advanced Sorting
##  Recap

#  State Management in React and beyond
##  Lifting State
##  Revisited: setState()
##  Taming the State
##  Recap

#  Final Steps to Production
##  Eject
##  Deploy your App
##  End
##  Final Words