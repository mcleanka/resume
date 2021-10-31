import React from "react";
import { render } from "react-dom";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/style.css';
import './assets/css/color.css';
import App from './App';

function Main() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

render(<Main />, document.getElementById('root'));
