import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import DashboardPage from './pages/DashboardPage';


function App() {
  return (
    <>
      <DashboardPage/>
      <AppRouter/>
    </>
  );
}

export default App;
