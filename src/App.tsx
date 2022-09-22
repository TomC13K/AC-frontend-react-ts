import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CalendarDayComponent from './components/calendar/CalendarDayComponent';
import DashboardPage from './pages/DashboardPage';
import BookingPage from './pages/BookingPage';
import AirconPage from './pages/AirconPage';
import AutomaticGearboxPage from './pages/AutomaticGearboxPage';
import PneuPage from './pages/PneuPage';
import RecordsPage from './pages/RecordsPage';
import StkPage from './pages/StkPage';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <CalendarDayComponent/>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='objednavky' element={<BookingPage />} />
        <Route path='aircon' element={<AirconPage />} />
        <Route path='automatickePrevodovky' element={<AutomaticGearboxPage />} />
        <Route path='pneu' element={<PneuPage />} />
        <Route path='zaznamy' element={<RecordsPage />} />
        <Route path='stk' element={<StkPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
