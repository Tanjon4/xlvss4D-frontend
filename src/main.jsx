import { createRoot } from 'react-dom/client' 
import App from './App.jsx'
import './index.css'
import './translations/i18next.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'

createRoot(document.getElementById('root')).render(<App />)
