const React = require('react');
const ReactDom = require('react-dom');
const App = require('./components/app');

const app = document.querySelector('#app');
ReactDom.render(<App />, app);