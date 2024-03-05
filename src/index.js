import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//creating root from element with id called root (in index.html)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //what do you want react to render into your document
  <React.StrictMode>
    <App /> {/*react component --> They are reusable*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
cd;
