import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

// --- CONNECTING TO YOUR LIVE BACKEND ---
// We replace 'http://localhost:5000' with your Render URL:
axios.defaults.baseURL = 'https://interior-designer-zyas.onrender.com';

// Optional: Ensure credentials (cookies/tokens) are sent if needed
axios.defaults.withCredentials = true; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)