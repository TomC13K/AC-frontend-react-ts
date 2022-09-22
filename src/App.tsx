import React from 'react';
import DashboardPage from './pages/DashboardPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <DashboardPage />
    </BrowserRouter>
  );
}

export default App;
