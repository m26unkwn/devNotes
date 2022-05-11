import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, NoteProvider, FilterProvider } from "./context";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <NoteProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </NoteProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
