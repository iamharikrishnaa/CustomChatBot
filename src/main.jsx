import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 

function getUserIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('user_id');
}

// Get the chatbotId from URL parameters or use a default value
const user_id = getUserIdFromURL() || '1234';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App user_id={user_id} />
  </React.StrictMode>
);