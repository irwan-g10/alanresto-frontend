import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AlanRestoApp from './pages/AlanRestoApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FoodList from './component/food/FoodList';
import TransactionList from './component/transaction/TransactionList';
import AddFood from './component/food/AddFood';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AlanRestoApp />}>
        <Route index element={<FoodList />} />
        <Route path="transactions" element={<TransactionList />} />
        <Route path="add-food" element={<AddFood />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
