import React from 'react';
import ReactDOM from 'react-dom';


import App from "./components/app.jsx";
import style from '../assets/stylesheets/application.scss';
// const root = document.getElementById('root');
// style.use();
// ReactDOM.render(<App />, root);
ReactDOM.render(<App />, document.getElementById("root"));

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;