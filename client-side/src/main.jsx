import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import EntityProvider from './context/EntityProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EntityProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EntityProvider>
  </React.StrictMode>,
)
