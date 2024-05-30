import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import TokenAuthentication from './Contexts/TokenAuthentication.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
 <GoogleOAuthProvider clientId = "75037750498-vldb23aqps645gvf4378tshpm9h9f488.apps.googleusercontent.com">
    <React.StrictMode>
    <TokenAuthentication>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </TokenAuthentication>
    </React.StrictMode>
 </GoogleOAuthProvider>
)
