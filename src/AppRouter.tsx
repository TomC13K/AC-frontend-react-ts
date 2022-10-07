import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import AirconPage from './pages/AirconPage';
import AutomaticGearboxPage from './pages/AutomaticGearboxPage';
import PneuPage from './pages/PneuPage';
import RecordsPage from './pages/RecordsPage';
import StkPage from './pages/StkPage';
import CalendarDayComponent from './components/calendar/CalendarDayComponent';
import DashboardComponent from './components/dashboard/DashboardComponent';

function AppRouter() {
  return (
    <Routes>
      {/* <Route path="/" element={<CalendarDayComponent />} /> */}
      <Route path="/" element={<DashboardComponent />} />
      <Route path="objednavky" element={<BookingPage />} />
      <Route path="aircon" element={<AirconPage />} />
      <Route path="automatickePrevodovky" element={<AutomaticGearboxPage />} />
      <Route path="pneu" element={<PneuPage />} />
      <Route path="zaznamy" element={<RecordsPage />} />
      <Route path="stk" element={<StkPage />} />
    </Routes>
  );
}

export default AppRouter;
