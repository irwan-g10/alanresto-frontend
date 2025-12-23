import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap-icons/font/bootstrap-icons.css';
import AlanRestoApp from './pages/AlanRestoApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TransactionList from './component/layout/transaction/TransactionList';
import AddFood from './component/layout/food/AddFood';
import './styles/styles.css';
import FoodList from './component/layout/food/FoodList';

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
