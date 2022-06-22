import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <AuthProvider>
      <App tab="home" />
    </AuthProvider>
  </Router>
);

// ReactDOM.render(
//   <Router>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </Router>,
//   document.getElementById("root")
// );
