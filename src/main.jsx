import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from './Pages/ErrorBoundary.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>

        <App />

      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
