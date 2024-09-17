//app.js

//imports
import {createLoginForm} from '../components/login.js';

// Initialize the application
function initApp() {
  const appDiv = document.getElementById('app');
  const loginForm = createLoginForm();
  appDiv.appendChild(loginForm);
}

// Call the function to initialize the app
window.onload = initApp;