import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // App component now handles all routing logic internally

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
      <App /> 
    
    {/* App contains the RouterProvider and routing logic */}
  </React.StrictMode>
);
