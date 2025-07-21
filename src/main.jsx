import { createRoot } from 'react-dom/client' 
import App from './App.jsx'
import React from 'react'
import './index.css'
import './translations/i18next.jsx'

createRoot(document.getElementById('root')).render(<App />)
