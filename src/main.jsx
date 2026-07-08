import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='1042835844806-r47k3emlf43mv3mv3vg21b17kfu4bucd.apps.googleusercontent.com'>

  <StrictMode>
    <App />
  </StrictMode>
  </GoogleOAuthProvider>,
)
