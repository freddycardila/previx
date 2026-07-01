import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // <-- Importante: cambiar BrowserRouter por HashRouter
import App from './App.tsx'
import "./App.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* <-- Envolver la aplicación */}
      <App />
    </HashRouter>
  </React.StrictMode>,
)

