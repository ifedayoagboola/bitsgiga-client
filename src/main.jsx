import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { store } from './store'
import { Toaster } from 'react-hot-toast';
import App from "./App.jsx";
import "./index.css";
import 'react-range-slider-input/dist/style.css';
import { registerSW } from "virtual:pwa-register";
if (import.meta.env.MODE === "production") {
  registerSW();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            style: {
              background: '#10B981',
            },
          },
          error: {
            duration: 4000,
            style: {
              background: '#EF4444',
            },
          },
        }}
      />
    </Provider>
  </React.StrictMode>
);

AOS.init();
