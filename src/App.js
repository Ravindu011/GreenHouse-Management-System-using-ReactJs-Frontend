import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login_Page/LoginPage';
import Dashboars from './Pages/dashboard/Dashboars';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard" element={<Dashboars/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
