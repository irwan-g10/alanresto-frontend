import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AlanRestoApp from './pages/AlanRestoApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlanRestoApp />
  </StrictMode>,
)
