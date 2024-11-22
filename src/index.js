import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { assets } from './assets/assets';
import Footer from './components/Footer/Footer';
import Navbar1 from './components/Navbar1/Navbar1';

// Mount the Navbar
const navbarRoot = document.getElementById('navbar');
if (navbarRoot) {
  ReactDOM.createRoot(navbarRoot).render(
    <React.StrictMode>
      <Router>
        <Navbar1 logo={assets.logo} instaIcon={assets.instaIcon} />
      </Router>
    </React.StrictMode>
  );
}

// Mount the Footer in the #footer div
document.addEventListener("DOMContentLoaded", function() {
  const footerRoot = document.getElementById('footer');
  if (footerRoot) {
    console.log("React is mounting the footer");  // Add this log to debug
    ReactDOM.createRoot(footerRoot).render(
      <React.StrictMode>
        <Router>
          <Footer />
        </Router>
      </React.StrictMode>
    );
  }
});



// Render the rest of your app into the #root div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Performance tracking
reportWebVitals();
