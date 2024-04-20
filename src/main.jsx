import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const urlParams = new URLSearchParams(window.location.search);
const user_id = urlParams.get('user_id');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App user_id={user_id}/>
  </React.StrictMode>,
)